'use client'

import { useState } from 'react'
import { Typography, Form, Input, Button, Row, Col } from 'antd'
import { CustomerServiceOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function CustomerSupportPage() {
  const router = useRouter()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()
  const [form] = Form.useForm()

  const { mutateAsync: createCustomerSupport } =
    Api.customerSupport.create.useMutation()

  const handleSubmit = async (values: { issueDescription: string }) => {
    try {
      await createCustomerSupport({
        data: {
          issueDescription: values.issueDescription,
          status: 'Pending',
          userId: user?.id,
        },
      })
      enqueueSnackbar('Your issue has been submitted successfully!', {
        variant: 'success',
      })
      form.resetFields()
    } catch (error) {
      enqueueSnackbar('Failed to submit your issue. Please try again.', {
        variant: 'error',
      })
    }
  }

  return (
    <PageLayout layout="narrow">
      <Row
        justify="center"
        style={{ textAlign: 'center', marginBottom: '20px' }}
      >
        <Col>
          <CustomerServiceOutlined
            style={{ fontSize: '48px', color: '#1890ff' }}
          />
          <Title level={2}>Contact Customer Support</Title>
          <Text>
            If you have any payment issues, please describe them below and our
            support team will get back to you.
          </Text>
        </Col>
      </Row>
      <Row justify="center">
        <Col xs={24} sm={18} md={12} lg={10}>
          <Form form={form} layout="vertical" onFinish={handleSubmit}>
            <Form.Item
              name="issueDescription"
              label="Issue Description"
              rules={[
                { required: true, message: 'Please describe your issue' },
              ]}
            >
              <Input.TextArea
                rows={4}
                placeholder="Describe your payment issue here"
              />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" block>
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </PageLayout>
  )
}
