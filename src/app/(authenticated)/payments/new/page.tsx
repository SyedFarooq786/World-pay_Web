'use client'

import { useState, useEffect } from 'react'
import {
  Typography,
  Form,
  InputNumber,
  Select,
  Button,
  Row,
  Col,
  Spin,
} from 'antd'
import { DollarOutlined } from '@ant-design/icons'
const { Title, Text, Paragraph } = Typography
const { Option } = Select
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function PaymentInitiationPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const [amount, setAmount] = useState<number>(0)
  const [currency, setCurrency] = useState<string>('USD')
  const [exchangeRate, setExchangeRate] = useState<number>(1)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const { data: exchangeRates, isLoading: isRatesLoading } =
    Api.exchangeRate.findMany.useQuery({})

  const { mutateAsync: createPayment } = Api.payment.create.useMutation()

  useEffect(() => {
    if (user?.countryCode !== 'US' && exchangeRates) {
      const userCurrencyRate = exchangeRates.find(
        rate =>
          rate.fromCurrency === 'USD' && rate.toCurrency === user.currency,
      )
      if (userCurrencyRate) {
        setExchangeRate(userCurrencyRate.rate)
      }
    }
  }, [user, exchangeRates])

  const handlePaymentInitiation = async () => {
    setIsLoading(true)
    try {
      const payment = await createPayment({
        data: {
          amount,
          currency,
          status: 'initiated',
          initiatedAt: dayjs().toISOString(),
          userId: user.id,
        },
      })
      enqueueSnackbar('Payment initiated successfully', { variant: 'success' })
      router.push(`/payments/${payment.id}`)
    } catch (error) {
      enqueueSnackbar('Failed to initiate payment', { variant: 'error' })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <PageLayout layout="narrow">
      <Row justify="center" align="middle" style={{ minHeight: '100vh' }}>
        <Col span={24}>
          <Title level={2} style={{ textAlign: 'center' }}>
            Initiate Payment
          </Title>
          <Paragraph style={{ textAlign: 'center' }}>
            As a user, you can initiate a payment and select your preferred
            currency.
          </Paragraph>
          <Form layout="vertical" onFinish={handlePaymentInitiation}>
            <Form.Item label="Amount" required>
              <InputNumber
                min={0}
                value={amount}
                onChange={value => setAmount(value)}
                style={{ width: '100%' }}
                prefix={<DollarOutlined />}
              />
            </Form.Item>
            <Form.Item label="Currency" required>
              <Select
                value={currency}
                onChange={value => setCurrency(value)}
                style={{ width: '100%' }}
              >
                <Option value="USD">USD</Option>
                <Option value="EUR">EUR</Option>
                <Option value="GBP">GBP</Option>
                {/* Add more currencies as needed */}
              </Select>
            </Form.Item>
            {user?.countryCode !== 'US' && (
              <Paragraph>
                Real-time conversion: {amount} USD ={' '}
                {(amount * exchangeRate).toFixed(2)} {user.currency}
              </Paragraph>
            )}
            <Form.Item>
              <Button type="primary" htmlType="submit" loading={isLoading}>
                Initiate Payment
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </PageLayout>
  )
}
