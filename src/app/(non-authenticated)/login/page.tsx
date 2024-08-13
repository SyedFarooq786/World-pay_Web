'use client'

import { Configuration } from '@/core/configuration'
import { AppHeader } from '@/designSystem/ui/AppHeader'
import { Button, Flex, Form, Input, Typography } from 'antd'
import { signIn } from 'next-auth/react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useSnackbar } from 'notistack'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function LoginPage() {
  const router = useRouter()
  const { enqueueSnackbar } = useSnackbar()
  const searchParams = useSearchParams()

  const [isLoading, setLoading] = useState(false)
  const [form] = Form.useForm()
  const [countryCode, setCountryCode] = useState('')

  const errorKey = searchParams.get('error')

  const errorMessage = {
    Signin: 'Try signing in with a different account.',
    OAuthSignin: 'Try signing in with a different account.',
    OAuthCallback: 'Try signing in with a different account.',
    OAuthCreateAccount: 'Try signing in with a different account.',
    EmailCreateAccount: 'Try signing in with a different account.',
    Callback: 'Try signing in with a different account.',
    OAuthAccountNotLinked:
      'To confirm your identity, sign in with the same account you used originally.',
    EmailSignin: 'Check your email address.',
    CredentialsSignin:
      'Sign in failed. Check the details you provided are correct.',
    default: 'Unable to sign in.',
  }[errorKey ?? 'default']

  useEffect(() => {
    const fetchCountryCode = async () => {
      try {
        const response = await axios.get('https://ipapi.co/json/')
        setCountryCode(response.data.country_calling_code)
      } catch (error) {
        console.error('Error fetching country code:', error)
      }
    }

    fetchCountryCode()
  }, [])

  const handleSubmit = async (values: any) => {
    setLoading(true)

    try {
      if (values.otp === '1234') {
        // Implement the login logic here
        // Example: await signInWithOtp(values.phoneNumber, values.otp)
        enqueueSnackbar('Login successful', { variant: 'success' })
        router.push('/dashboard') // Redirect to the dashboard or any other page
      } else {
        throw new Error('Invalid OTP')
      }
    } catch (error) {
      enqueueSnackbar(`Could not login: ${error.message}`, { variant: 'error' })
      setLoading(false)
    }
  }

  return (
    <Flex align="center" justify="center" vertical flex={1}>
      <Flex
        vertical
        style={{
          width: '340px',
          paddingBottom: '100px',
          paddingTop: '100px',
        }}
        gap="middle"
      >
        <AppHeader description="Welcome!" />

        {errorKey && (
          <Typography.Text type="danger">{errorMessage}</Typography.Text>
        )}

        <Form
          form={form}
          onFinish={handleSubmit}
          layout="vertical"
          requiredMark={false}
        >
          <Form.Item
            label="Phone Number"
            name="phoneNumber"
            rules={[{ required: true, message: 'Phone number is required' }]}
          >
            <Input
              addonBefore={countryCode}
              placeholder="Your phone number"
              autoComplete="tel"
            />
          </Form.Item>

          <Form.Item
            label="OTP"
            name="otp"
            rules={[{ required: true, message: 'OTP is required' }]}
          >
            <Input placeholder="Enter OTP" autoComplete="one-time-code" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block loading={isLoading}>
              Sign in
            </Button>
          </Form.Item>
        </Form>

        <Button
          ghost
          style={{ border: 'none' }}
          onClick={() => router.push('/register')}
        >
          <Flex gap={'small'} justify="center">
            <Typography.Text type="secondary">No account?</Typography.Text>{' '}
            <Typography.Text>Sign up</Typography.Text>
          </Flex>
        </Button>
      </Flex>
    </Flex>
  )
}
