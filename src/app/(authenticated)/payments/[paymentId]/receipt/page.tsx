'use client'

import { Prisma } from '@prisma/client'
import { Typography, Button, Spin, Row, Col } from 'antd'
import { DownloadOutlined } from '@ant-design/icons'
const { Title, Text, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function ReceiptDownloadPage() {
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
    include: { receipts: true, user: true },
  })

  const handleDownload = (url: string) => {
    window.open(url, '_blank')
  }

  if (isLoading) {
    return (
      <PageLayout layout="narrow">
        <Spin size="large" />
      </PageLayout>
    )
  }

  if (!payment) {
    return (
      <PageLayout layout="narrow">
        <Title level={2}>Receipt Download</Title>
        <Paragraph>No payment found for the given ID.</Paragraph>
      </PageLayout>
    )
  }

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Receipt Download</Title>
      <Paragraph>Below is the receipt for your payment.</Paragraph>
      <Row gutter={[16, 16]} justify="center">
        <Col span={24}>
          <Title level={4}>Transaction Details</Title>
          <Text strong>Amount:</Text>{' '}
          <Text>
            {payment.amount.toString()} {payment.currency}
          </Text>
          <br />
          <Text strong>Status:</Text> <Text>{payment.status}</Text>
          <br />
          <Text strong>Initiated At:</Text>{' '}
          <Text>
            {dayjs(payment.initiatedAt).format('YYYY-MM-DD HH:mm:ss')}
          </Text>
          <br />
          {payment.completedAt && (
            <>
              <Text strong>Completed At:</Text>{' '}
              <Text>
                {dayjs(payment.completedAt).format('YYYY-MM-DD HH:mm:ss')}
              </Text>
              <br />
            </>
          )}
        </Col>
        <Col span={24}>
          <Title level={4}>Receipts</Title>
          {payment.receipts?.length > 0 ? (
            payment.receipts.map(receipt => (
              <Button
                key={receipt.id}
                type="primary"
                icon={<DownloadOutlined />}
                onClick={() => handleDownload(receipt.receiptUrl)}
              >
                Download Receipt
              </Button>
            ))
          ) : (
            <Paragraph>No receipts available for this payment.</Paragraph>
          )}
        </Col>
      </Row>
    </PageLayout>
  )
}
