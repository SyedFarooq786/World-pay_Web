'use client'

import { Typography, Spin, Row, Col } from 'antd'
import { FileTextOutlined } from '@ant-design/icons'
const { Title, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function TermsandConditionsPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const {
    data: termsAndConditions,
    isLoading,
    refetch,
  } = Api.termsAndConditions.findFirst.useQuery({})

  if (isLoading) {
    return (
      <PageLayout layout="narrow">
        <Spin size="large" />
      </PageLayout>
    )
  }

  if (!termsAndConditions) {
    enqueueSnackbar('Failed to load terms and conditions', { variant: 'error' })
    return null
  }

  return (
    <PageLayout layout="narrow">
      <Row justify="center" align="middle" style={{ minHeight: '100vh' }}>
        <Col span={24}>
          <Title level={2} style={{ textAlign: 'center' }}>
            <FileTextOutlined /> Terms and Conditions
          </Title>
          <Paragraph style={{ textAlign: 'center' }}>
            Please read the following terms and conditions carefully to
            understand our policies and regulations regarding payments.
          </Paragraph>
          <Paragraph>{termsAndConditions.content}</Paragraph>
        </Col>
      </Row>
    </PageLayout>
  )
}
