'use client'

import { Prisma } from '@prisma/client'
import { Typography, Row, Col, Card, Spin } from 'antd'
import { DollarCircleOutlined } from '@ant-design/icons'
const { Title, Text, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function ExchangeRatesPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const {
    data: exchangeRates,
    isLoading,
    refetch,
  } = Api.exchangeRate.findMany.useQuery({})

  if (isLoading) {
    return (
      <PageLayout layout="narrow">
        <div style={{ textAlign: 'center', padding: '50px' }}>
          <Spin size="large" />
        </div>
      </PageLayout>
    )
  }

  return (
    <PageLayout layout="narrow">
      <Title level={2} style={{ textAlign: 'center' }}>
        Exchange Rates
      </Title>
      <Paragraph style={{ textAlign: 'center' }}>
        View the latest exchange rates for different currencies to understand
        the conversion rates.
      </Paragraph>
      <Row gutter={[16, 16]} justify="center">
        {exchangeRates?.map((rate: Prisma.ExchangeRateGetPayload<{}>) => (
          <Col xs={24} sm={12} md={8} lg={6} key={rate.id}>
            <Card
              title={`${rate.fromCurrency} to ${rate.toCurrency}`}
              bordered={false}
              hoverable
            >
              <div style={{ textAlign: 'center' }}>
                <DollarCircleOutlined
                  style={{ fontSize: '24px', color: '#1890ff' }}
                />
                <Text style={{ display: 'block', marginTop: '10px' }}>
                  {rate.rate.toString()}
                </Text>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </PageLayout>
  )
}
