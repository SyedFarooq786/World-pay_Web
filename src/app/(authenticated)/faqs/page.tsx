'use client'

import { Typography, Spin, Row, Col, Collapse } from 'antd'
import { QuestionCircleOutlined } from '@ant-design/icons'
const { Title, Text, Paragraph } = Typography
const { Panel } = Collapse
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function FAQsPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const { data: faqs, isLoading, refetch } = Api.faq.findMany.useQuery({})

  return (
    <PageLayout layout="narrow">
      <Title level={2} style={{ textAlign: 'center' }}>
        Payment FAQs
      </Title>
      <Paragraph style={{ textAlign: 'center' }}>
        Find answers to common questions related to payments.
      </Paragraph>
      {isLoading ? (
        <Spin size="large" style={{ display: 'block', margin: 'auto' }} />
      ) : (
        <Row justify="center">
          <Col xs={24} sm={20} md={16} lg={12}>
            <Collapse accordion>
              {faqs?.map(faq => (
                <Panel
                  header={
                    <Text>
                      <QuestionCircleOutlined style={{ marginRight: '8px' }} />
                      {faq.question}
                    </Text>
                  }
                  key={faq.id}
                >
                  <Paragraph>{faq.answer}</Paragraph>
                </Panel>
              ))}
            </Collapse>
          </Col>
        </Row>
      )}
    </PageLayout>
  )
}
