import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { Membership } from '@/components/membership'
import { WhatWeOffer } from '@/components/what-we-offer'
import { WhyChooseUs } from '@/components/why-choose-us'
import { PremiumQuestions } from '@/components/premium-questions'
import { Mentors } from '@/components/mentors'
import { Testimonials } from '@/components/testimonials'
import { Faq } from '@/components/faq'
import { Footer } from '@/components/footer'
import { SaleExperience } from '@/components/sale/sale-experience'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Membership />
        <WhatWeOffer />
        <WhyChooseUs />
        <PremiumQuestions />
        <Mentors />
        <Testimonials />
        <Faq />
      </main>
      <Footer />
      <SaleExperience />
    </>
  )
}
