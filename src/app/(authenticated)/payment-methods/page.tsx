'use client'

import { useState } from 'react'
import {
  Typography,
  Form,
  Input,
  Button,
  Select,
  Card,
  Row,
  Col,
  Spin,
} from 'antd'
import { CreditCardOutlined, BankOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
const { Option } = Select
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function PaymentMethodsPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const {
    data: paymentMethods,
    isLoading: isLoadingPaymentMethods,
    refetch: refetchPaymentMethods,
  } = Api.paymentMethod.findMany.useQuery({ where: { userId: user?.id } })
  const {
    data: userData,
    isLoading: isLoadingUserData,
    refetch: refetchUserData,
  } = Api.user.findUnique.useQuery({ where: { id: user?.id } })

  const { mutateAsync: updatePaymentMethod } =
    Api.paymentMethod.update.useMutation()
  const { mutateAsync: updateUser } = Api.user.update.useMutation()

  const [selectedCurrency, setSelectedCurrency] = useState(
    userData?.currency || '',
  )

  const handleUpdatePaymentMethod = async (values: any) => {
    try {
      await updatePaymentMethod({ where: { id: values.id }, data: values })
      enqueueSnackbar('Payment method updated successfully', {
        variant: 'success',
      })
      refetchPaymentMethods()
    } catch (error) {
      enqueueSnackbar('Failed to update payment method', { variant: 'error' })
    }
  }

  const handleUpdateCurrency = async () => {
    try {
      await updateUser({
        where: { id: user?.id },
        data: { currency: selectedCurrency },
      })
      enqueueSnackbar('Default currency updated successfully', {
        variant: 'success',
      })
      refetchUserData()
    } catch (error) {
      enqueueSnackbar('Failed to update default currency', { variant: 'error' })
    }
  }

  if (isLoadingPaymentMethods || isLoadingUserData) {
    return <Spin />
  }

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Manage Payment Methods</Title>
      <Text>
        Update your payment methods and set a default currency for your
        payments.
      </Text>
      <Row gutter={[16, 16]} style={{ marginTop: '20px' }}>
        {paymentMethods?.map(method => (
          <Col span={24} key={method.id}>
            <Card
              title={
                method.methodType === 'card' ? (
                  <CreditCardOutlined />
                ) : (
                  <BankOutlined />
                )
              }
              bordered={false}
            >
              <Form initialValues={method} onFinish={handleUpdatePaymentMethod}>
                <Form.Item name="id" hidden>
                  <Input />
                </Form.Item>
                <Form.Item name="details" label="Details">
                  <Input />
                </Form.Item>
                <Form.Item name="defaultCurrency" label="Default Currency">
                  <Select>
                    <Option value="USD">USD</Option>
                    <Option value="EUR">EUR</Option>
                    <Option value="GBP">GBP</Option>
                  </Select>
                </Form.Item>
                <Form.Item>
                  <Button type="primary" htmlType="submit">
                    Update
                  </Button>
                </Form.Item>
              </Form>
            </Card>
          </Col>
        ))}
      </Row>
      <Card
        title="Default Currency"
        bordered={false}
        style={{ marginTop: '20px' }}
      >
        <Form onFinish={handleUpdateCurrency}>
          <Form.Item label="Select Default Currency">
            <Select
              value={selectedCurrency}
              onChange={value => setSelectedCurrency(value)}
            >
              <Option value="USD">USD</Option>
              <Option value="EUR">EUR</Option>
              <Option value="GBP">GBP</Option>
            </Select>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Update Currency
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </PageLayout>
  )
}
