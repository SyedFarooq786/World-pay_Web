'use client'

import { useEffect, useState } from 'react'
import { Prisma } from '@prisma/client'
import { Typography, Spin, Row, Col, Input, Button, Form, Space } from 'antd'
import { CheckCircleOutlined, LoadingOutlined } from '@ant-design/icons'
const { Title, Text, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function PaymentDetailsPage() {
  const router = useRouter()
  const params = useParams<{ paymentId: string }>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const {
    data: payment,
    isLoading,
    refetch,
  } = Api.payment.findUnique.useQuery({
    where: { id: params.paymentId },
    include: { paymentDetails: true, user: true },
  })

  const [authCode, setAuthCode] = useState<string>('')

  const handleAuthCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAuthCode(e.target.value)
  }

  const handleConfirmPayment = async () => {
    if (authCode.length !== 4) {
      enqueueSnackbar('Auth code must be 4 digits', { variant: 'error' })
      return
    }

    try {
      await Api.payment.update.useMutation()({
        where: { id: params.paymentId },
        data: { status: 'confirmed', paymentDetails: { update: { authCode } } },
      })
      enqueueSnackbar('Payment confirmed successfully', { variant: 'success' })
      router.push('/payments/history')
    } catch (error) {
      enqueueSnackbar('Failed to confirm payment', { variant: 'error' })
    }
  }

  if (isLoading) {
    return (
      <PageLayout layout="narrow">
        <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} />
      </PageLayout>
    )
  }

  if (!payment) {
    return (
      <PageLayout layout="narrow">
        <Title level={2}>Payment Details</Title>
        <Text>No payment details found.</Text>
      </PageLayout>
    )
  }

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Payment Details</Title>
      <Paragraph>
        Review the details of your payment below and confirm the transaction.
      </Paragraph>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Text strong>Amount:</Text>{' '}
          <Text>
            {payment.amount.toString()} {payment.currency}
          </Text>
        </Col>
        <Col span={24}>
          <Text strong>Status:</Text> <Text>{payment.status}</Text>
        </Col>
        <Col span={24}>
          <Text strong>Initiated At:</Text>{' '}
          <Text>{dayjs(payment.initiatedAt).format('YYYY-MM-DD HH:mm')}</Text>
        </Col>
        <Col span={24}>
          <Text strong>UPI ID:</Text>{' '}
          <Text>{payment.paymentDetails?.upiId}</Text>
        </Col>
        <Col span={24}>
          <Form layout="vertical">
            <Form.Item label="Auth Code" required>
              <Input.Password
                value={authCode}
                onChange={handleAuthCodeChange}
                maxLength={4}
                placeholder="Enter 4-digit auth code"
              />
            </Form.Item>
            <Form.Item>
              <Space>
                <Button
                  type="primary"
                  onClick={handleConfirmPayment}
                  icon={<CheckCircleOutlined />}
                >
                  Confirm Payment
                </Button>
                <Button onClick={() => router.push('/payments/history')}>
                  Cancel
                </Button>
              </Space>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </PageLayout>
  )
}
