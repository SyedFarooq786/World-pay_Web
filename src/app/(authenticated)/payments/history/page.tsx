'use client'

import { useState, useEffect } from 'react'
import { Typography, Table, DatePicker, Select, Row, Col, Spin } from 'antd'
import { FilterOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
const { RangePicker } = DatePicker
const { Option } = Select
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function PaymentHistoryPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const [dateRange, setDateRange] = useState<[dayjs.Dayjs, dayjs.Dayjs] | null>(
    null,
  )
  const [currency, setCurrency] = useState<string | null>(null)

  const {
    data: payments,
    isLoading,
    refetch,
  } = Api.paymentHistory.findMany.useQuery({
    where: {
      userId: user?.id,
      ...(dateRange && {
        date: {
          gte: dateRange[0].toISOString(),
          lte: dateRange[1].toISOString(),
        },
      }),
      ...(currency && { currency }),
    },
    include: { payment: true },
  })

  const handleDateChange = (dates: [dayjs.Dayjs, dayjs.Dayjs] | null) => {
    setDateRange(dates)
  }

  const handleCurrencyChange = (value: string) => {
    setCurrency(value)
  }

  useEffect(() => {
    refetch()
  }, [dateRange, currency])

  const columns = [
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
      render: (text: string) => dayjs(text).format('YYYY-MM-DD'),
    },
    {
      title: 'Amount',
      dataIndex: ['payment', 'amount'],
      key: 'amount',
      render: (amount: number) => amount.toString(),
    },
    {
      title: 'Currency',
      dataIndex: 'currency',
      key: 'currency',
    },
    {
      title: 'Status',
      dataIndex: ['payment', 'status'],
      key: 'status',
    },
  ]

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Payment History</Title>
      <Text>View and filter your payment history by date and currency.</Text>
      <Row gutter={[16, 16]} style={{ marginTop: '20px' }}>
        <Col span={24}>
          <RangePicker onChange={handleDateChange} style={{ width: '100%' }} />
        </Col>
        <Col span={24}>
          <Select
            placeholder="Select Currency"
            onChange={handleCurrencyChange}
            style={{ width: '100%' }}
            allowClear
          >
            <Option value="USD">USD</Option>
            <Option value="EUR">EUR</Option>
            <Option value="GBP">GBP</Option>
            {/* Add more currencies as needed */}
          </Select>
        </Col>
      </Row>
      {isLoading ? (
        <Spin size="large" style={{ display: 'block', margin: '20px auto' }} />
      ) : (
        <Table
          columns={columns}
          dataSource={payments}
          rowKey="id"
          style={{ marginTop: '20px' }}
        />
      )}
    </PageLayout>
  )
}
