import { useUserContext } from '@/core/context'
import { UserOutlined } from '@ant-design/icons'
import { Col, Layout, Row } from 'antd'
import { useRouter } from 'next/navigation'
import { ReactNode } from 'react'
import { useDesignSystem } from '../../provider'
import { Leftbar } from './components/Leftbar'
import { Logo } from './components/Logo'
import { Topbar } from './components/Topbar/index.layout'

interface Props {
  children: ReactNode
}

export const NavigationLayout: React.FC<Props> = ({ children }) => {
  const router = useRouter()

  const { user, authenticationStatus: isLoggedIn } = useUserContext()

  const { isMobile } = useDesignSystem()

  const goTo = (url: string) => {
    router.push(url)
  }

  let itemsLeftbar = []

  let itemsTopbar = [
    {
      key: '/home',
      label: 'Home',
      onClick: () => goTo('/home'),
    },

    {
      key: '/payments/new',
      label: 'Payment Initiation',
      onClick: () => goTo('/payments/new'),
    },

    {
      key: '/payments/history',
      label: 'Payment History',
      onClick: () => goTo('/payments/history'),
    },

    {
      key: '/exchange-rates',
      label: 'Exchange Rates',
      onClick: () => goTo('/exchange-rates'),
    },

    {
      key: '/payment-methods',
      label: 'Payment Methods',
      onClick: () => goTo('/payment-methods'),
    },

    {
      key: '/terms-and-conditions',
      label: 'Terms and Conditions',
      onClick: () => goTo('/terms-and-conditions'),
    },

    {
      key: '/support',
      label: 'Customer Support',
      onClick: () => goTo('/support'),
    },

    {
      key: '/faqs',
      label: 'FAQs',
      onClick: () => goTo('/faqs'),
    },
  ]

  let itemsMobile = [
    {
      key: 'profile',
      label: 'Profile',
      onClick: () => goTo('/profile'),
    },
    ...itemsTopbar,
    ...itemsLeftbar,
  ]

  let itemsLeftBarBottom = [
    {
      key: 'profile',
      icon: <UserOutlined />,
      label: 'Profile',
      onClick: () => goTo('/profile'),
    },
  ]

  let itemsProfile = [
    {
      key: 'profile',
      icon: <UserOutlined />,
      label: 'Profile',
      onClick: () => goTo('/profile'),
    },
  ]

  const isLeftbar = itemsLeftbar.length > 0 && !isMobile

  return (
    <>
      <Layout>
        <Row
          style={{
            height: '100vh',
            width: '100vw',
          }}
        >
          {isLeftbar && (
            <Col>
              <Leftbar
                items={itemsLeftbar}
                itemsBottom={itemsLeftBarBottom}
                logo={<Logo height={40} />}
              />
            </Col>
          )}

          <Col
            style={{
              flex: 1,
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
            }}
          >
            <Topbar
              isMobile={isMobile}
              itemsMobile={itemsMobile}
              isLoggedIn={isLoggedIn === 'authenticated'}
              items={itemsTopbar}
              itemsProfile={itemsProfile}
              logo={!isLeftbar && <Logo height={40} />}
            />

            <Col
              style={{
                flex: 1,
                overflowY: 'auto',
                overflowX: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              {children}
            </Col>
          </Col>
        </Row>
      </Layout>
    </>
  )
}
