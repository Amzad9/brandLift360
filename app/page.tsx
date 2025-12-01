'use client'

import { useEffect } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Products from '@/components/Products'
import Services from '@/components/Services'
import Features from '@/components/Features'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import SmoothScroll from '@/components/SmoothScroll'

export default function Home() {
  useEffect(() => {
    // Analytics initialization
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('config', 'G-XXXXXXXXXX', {
        page_path: window.location.pathname,
      })
    }
  }, [])

  return (
    <SmoothScroll>
      <Header />
      <Hero />
      <About />
      <Products />
      <Services />
      <Features />
      <Testimonials />
      <Contact />
      <Footer />
    </SmoothScroll>
  )
}

