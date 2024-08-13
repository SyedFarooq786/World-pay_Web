'use client'
import { LandingCTA } from '@/designSystem/landing/LandingCTA'
import { LandingContainer } from '@/designSystem/landing/LandingContainer'
import LandingFAQ from '@/designSystem/landing/LandingFAQ'
import { LandingFeatures } from '@/designSystem/landing/LandingFeatures'
import { LandingHero } from '@/designSystem/landing/LandingHero'
import { LandingHowItWorks } from '@/designSystem/landing/LandingHowItWorks'
import { LandingPainPoints } from '@/designSystem/landing/LandingPainPoints'
import { LandingPricing } from '@/designSystem/landing/LandingPricing'
import { LandingSocialProof } from '@/designSystem/landing/LandingSocialProof'
import { LandingSocialRating } from '@/designSystem/landing/LandingSocialRating'
import { LandingTestimonials } from '@/designSystem/landing/LandingTestimonials'
import {
  DollarOutlined,
  GlobalOutlined,
  SafetyOutlined,
  ThunderboltOutlined,
  WalletOutlined,
  RocketOutlined,
} from '@ant-design/icons'

export default function LandingPage() {
  const features = [
    {
      heading: 'Global Transactions Made Easy',
      description:
        'Seamlessly handle payments in any currency, anywhere in the world.',
      icon: <GlobalOutlined />,
    },
    {
      heading: 'Lightning-Fast Processing',
      description: 'Experience quick transactions without the usual delays.',
      icon: <ThunderboltOutlined />,
    },
    {
      heading: 'Cost-Effective Solutions',
      description:
        'Save on high fees associated with currency conversion and international transfers.',
      icon: <DollarOutlined />,
    },
    {
      heading: 'Robust Security',
      description:
        'Manage your payments with confidence thanks to our top-notch security features.',
      icon: <SafetyOutlined />,
    },
    {
      heading: 'User-Friendly Interface',
      description: 'Navigate with ease using our intuitive and simple design.',
      icon: <WalletOutlined />,
    },
    {
      heading: 'All-in-One Payment Solution',
      description:
        'Integrate various payment methods for a comprehensive financial tool.',
      icon: <RocketOutlined />,
    },
  ]

  const testimonials = [
    {
      name: 'John Doe',
      designation: 'Freelancer',
      content:
        'This app has revolutionized the way I handle international payments. It’s quick, easy, and saves me a ton on fees!',
      avatar: 'https://randomuser.me/api/portraits/men/5.jpg',
    },
    {
      name: 'Jane Smith',
      designation: 'Business Owner',
      content:
        'Managing cross-border transactions has never been this simple. Highly recommend it for any business dealing internationally.',
      avatar: 'https://randomuser.me/api/portraits/women/6.jpg',
    },
    {
      name: 'Carlos Rodriguez',
      designation: 'Expatriate',
      content:
        'As an expat, this app is a lifesaver. I can send money home without worrying about high fees or long wait times.',
      avatar: 'https://randomuser.me/api/portraits/men/7.jpg',
    },
    {
      name: 'Emily Johnson',
      designation: 'Traveler',
      content:
        'Traveling frequently, I needed a reliable way to handle different currencies. This app does it all!',
      avatar: 'https://randomuser.me/api/portraits/men/12.jpg',
    },
    {
      name: 'Michael Brown',
      designation: 'Freelancer',
      content:
        'The speed and efficiency of this app are unmatched. It’s a must-have for anyone dealing with international clients.',
      avatar: 'https://randomuser.me/api/portraits/men/17.jpg',
    },
    {
      name: 'Sophia Lee',
      designation: 'Business Owner',
      content:
        'A game-changer for my business. I can now manage payments from clients all over the world effortlessly.',
      avatar: 'https://randomuser.me/api/portraits/women/27.jpg',
    },
  ]

  const navItems = [
    {
      title: 'Features',
      link: '#features',
    },
    {
      title: 'Pricing',
      link: '#pricing',
    },
    {
      title: 'Testimonials',
      link: '#testimonials',
    },
  ]

  const packages = [
    {
      title: 'Basic',
      description: 'For individuals and small businesses',
      monthly: 9,
      yearly: 69,
      features: ['Global Transactions', 'Fast Processing', 'Basic Support'],
    },
    {
      title: 'Pro',
      description: 'For growing businesses and frequent users',
      monthly: 19,
      yearly: 149,
      features: ['All Basic Features', 'Lower Fees', 'Priority Support'],
      highlight: true,
    },
    {
      title: 'Enterprise',
      description: 'For large businesses and enterprises',
      monthly: 49,
      yearly: 499,
      features: [
        'All Pro Features',
        'Custom Solutions',
        'Dedicated Account Manager',
      ],
    },
  ]

  const questionAnswers = [
    {
      question: 'How does the app handle currency conversion?',
      answer:
        'Our app uses real-time exchange rates to ensure you get the best conversion rates available.',
    },
    {
      question: 'Is my financial information secure?',
      answer:
        'Absolutely. We use advanced encryption and security protocols to protect your data.',
    },
    {
      question: 'Can I use the app for domestic payments?',
      answer:
        'Yes, our app supports both international and domestic transactions.',
    },
    {
      question: 'What payment methods are supported?',
      answer:
        'We support various payment methods including credit/debit cards, bank transfers, and more.',
    },
  ]

  const logos = [
    { url: 'https://i.imgur.com/afwBIFK.png' },
    { url: 'https://i.imgur.com/LlloOPa.png' },
    { url: 'https://i.imgur.com/j8jPb4H.png' },
    { url: 'https://i.imgur.com/mJ1sZFv.png' },
  ]

  const steps = [
    {
      heading: 'Sign Up',
      description: 'Create an account in just a few minutes.',
    },
    {
      heading: 'Add Payment Methods',
      description: 'Link your preferred payment methods securely.',
    },
    {
      heading: 'Make Transactions',
      description: 'Start making payments in any currency, anywhere.',
    },
    {
      heading: 'Track and Manage',
      description:
        'Monitor your transactions and manage your finances with ease.',
    },
  ]

  const painPoints = [
    {
      emoji: '💸',
      title: 'High Fees',
    },
    {
      emoji: '⏳',
      title: 'Slow Processing',
    },
    {
      emoji: '🌐',
      title: 'Currency Conversion Hassles',
    },
  ]

  const avatarItems = [
    {
      src: 'https://randomuser.me/api/portraits/men/51.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/women/9.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/women/52.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/men/5.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/men/4.jpg',
    },
  ]

  return (
    <LandingContainer navItems={navItems}>
      <LandingHero
        title="Simplify Your Global Payments"
        subtitle="Effortlessly manage international and domestic transactions with our all-in-one payment app."
        buttonText="Get Started"
        buttonLink="/register"
        pictureUrl="https://marblism-dashboard-api--production-public.s3.us-west-1.amazonaws.com/T75O0f-worldpay-iXds"
        socialProof={
          <LandingSocialRating
            avatarItems={avatarItems}
            numberOfUsers={1000}
            suffixText="from happy users"
          />
        }
      />
      <LandingSocialProof logos={logos} title="Featured on" />
      <LandingPainPoints
        title="The Challenges of Global Payments"
        painPoints={painPoints}
      />
      <LandingHowItWorks title="How It Works" steps={steps} />
      <LandingFeatures
        id="features"
        title="Achieve Seamless Transactions"
        subtitle="Our app provides the tools you need to handle payments effortlessly."
        features={features}
      />
      <LandingTestimonials
        title="Success Stories"
        subtitle="See how our app has transformed the payment process for others."
        testimonials={testimonials}
      />
      <LandingPricing
        id="pricing"
        title="Choose Your Plan"
        subtitle="Affordable plans tailored to your needs."
        packages={packages}
      />
      <LandingFAQ
        id="faq"
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about our app."
        questionAnswers={questionAnswers}
      />
      <LandingCTA
        title="Ready to Simplify Your Payments?"
        subtitle="Join thousands of satisfied users today."
        buttonText="Get Started"
        buttonLink="/register"
      />
    </LandingContainer>
  )
}
