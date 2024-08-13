'use client'

import { Typography, Row, Col, Card } from 'antd'
import { PlayCircleOutlined } from '@ant-design/icons'
import { useEffect, useState } from 'react'
const { Title, Text, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function HomePage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const [userData, setUserData] = useState(null)

  const { data, isLoading, refetch } = Api.user.findUnique.useQuery({
    where: { id: user?.id },
    include: {
      payments: {
        include: {
          paymentDetails: true,
          paymentHistorys: true,
          receipts: true,
        },
      },
      paymentHistorys: { include: { payment: true } },
      paymentMethods: true,
      customerSupports: true,
    },
  })

  useEffect(() => {
    if (data) {
      setUserData(data)
    }
  }, [data])

  if (isLoading) {
    return <PageLayout layout="narrow">Loading...</PageLayout>
  }

  return (
    <PageLayout layout="narrow">
      <Row justify="center" align="middle" style={{ minHeight: '100vh' }}>
        <Col span={24}>
          <Title level={2}>Welcome to the Payment App</Title>
          <Paragraph>
            Get an overview of your payment activities and watch a quick
            tutorial to get started.
          </Paragraph>
        </Col>
        <Col span={24}>
          <Card
            hoverable
            style={{ width: '100%', textAlign: 'center' }}
            cover={
              <div
                style={{
                  position: 'relative',
                  paddingBottom: '56.25%',
                  height: 0,
                }}
              >
                <iframe
                  title="Intro Video"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                  }}
                />
              </div>
            }
          >
            <Card.Meta
              title="Getting Started"
              description="Watch this quick video to learn how to use our app."
            />
          </Card>
        </Col>
      </Row>
    </PageLayout>
  )
}
