// app/page.tsx
'use client'

import { useState, useEffect } from 'react'
import { ArrowRight, Menu, X, MapPin, Phone, ChevronRight, RefreshCw, Wrench, Shield, Headphones, Watch, Smartphone, Laptop, Tablet, Gift, CreditCard, Truck } from 'lucide-react'
import Image from 'next/image'
import Logo from '@/public/iclik LogoNoBg.png'
import LogoBlack from '@/public/iclik LogoNoBgBlack.png'
import cosmicOrange from '@/public/cosmicOrange.png'
import deepBlue from '@/public/deepBlue.png'
import silver from '@/public/silver.png'
import ipadAir from '@/public/ipad-air.webp'
import macbook from '@/public/macbook.webp'
import macbook2 from '@/public/macbook2.webp'
import appleAccessories from '@/public/Apple-Accessories.webp'

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [selectedColor, setSelectedColor] = useState('silver')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  const colors = {
    silver: {
      name: 'Silver',
      bg: 'from-gray-100/50 to-gray-50/50',
      productBg: 'bg-gradient-to-br from-gray-100 to-gray-100',
      hue: 'rgba(229, 231, 235, 0.1)',
      text: 'text-gray-900',
      border: 'border-gray-300',
      displayName: 'Silver',
      imagePath: silver
    },
    orange: {
      name: 'Cosmic Orange',
      bg: 'from-orange-100/30 to-amber-50/30',
      productBg: 'bg-gradient-to-br from-orange-200 to-amber-100',
      hue: 'rgba(251, 146, 60, 0.1)',
      text: 'text-orange-900',
      border: 'border-orange-300',
      displayName: 'Cosmic Orange',
      imagePath: cosmicOrange
    },
    blue: {
      name: 'Deep Blue',
      bg: 'from-blue-100/30 to-indigo-50/30',
      productBg: 'bg-gradient-to-br from-blue-200 to-indigo-100',
      hue: 'rgba(37, 99, 235, 0.1)',
      text: 'text-blue-900',
      border: 'border-blue-300',
      displayName: 'Deep Blue',
      imagePath: deepBlue
    }
  }

  const currentColor = colors[selectedColor as keyof typeof colors]

  return (
    <main className="min-h-screen bg-white">
      {/* Navigation - Changes based on scroll and width */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${isScrolled ? 'bg-black/95 backdrop-blur-md border-b border-gray-800 py-4' : 'bg-transparent py-6'
        }`}>
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo - switches based on scroll state */}
          <div className="transition-all duration-700">
            {isScrolled ? (
              <Image
                src={Logo}
                alt='iClik Logo'
                height={48}
                className="h-12 w-auto opacity-100"
              />
            ) : (
              <Image
                src={LogoBlack}
                alt='iClik Logo'
                height={48}
                className="h-12 w-auto opacity-100"
              />
            )}
          </div>

          {/* Desktop Navigation - Hidden on mobile */}
          <div className="hidden lg:flex items-center space-x-8">
            {['iPhone', 'Mac', 'iPad', 'Watch', 'Audio', 'Support'].map((item) => (
              <a
                key={item}
                href="#"
                className={`text-sm font-light transition-colors ${isScrolled ? 'text-white hover:text-gray-300' : 'text-black hover:text-gray-600'
                  }`}
              >
                {item}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button - Always visible when menu is open */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden transition-all duration-300 z-[60] ${isMenuOpen
              ? 'text-white fixed top-6 right-6'
              : isScrolled
                ? 'text-white'
                : 'text-black'
              }`}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay - Always covers full screen */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-xl z-40 flex items-center justify-center lg:hidden">
          <div className="max-w-[1400px] mx-auto px-12 w-full">
            <div className="grid grid-cols-1 gap-8">
              {['iPhone', 'Mac', 'iPad', 'Watch', 'Audio', 'Vision', 'Support'].map((item) => (
                <div
                  key={item}
                  className="text-4xl font-light text-white hover:text-gray-300 cursor-pointer transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Hero Product - iPhone 17 Pro with color switching */}
      <section
        className="h-screen relative overflow-hidden transition-colors duration-1000"
        style={{ backgroundColor: currentColor.hue }}
      >
        {/* Liquid glass effect overlay */}
        <div className={`absolute inset-0 bg-gradient-to-br ${currentColor.bg} opacity-50`} />

        {/* Animated liquid glass shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className={`absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br ${currentColor.bg} rounded-full blur-3xl animate-pulse`} />
          <div className={`absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr ${currentColor.bg} rounded-full blur-3xl animate-pulse delay-1000`} />
        </div>

        <div className="relative h-full max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col lg:flex-row lg:items-center z-10">
          {/* Left side - Text content */}
          <div className="lg:w-1/2 pt-32 lg:pt-0">
            <div className="mb-8">
              <span className="text-xs md:text-sm tracking-[0.2em] text-gray-500 font-medium">
                NEW ARRIVAL
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[8rem] font-light tracking-[-0.03em] leading-[0.85] text-black max-w-2xl">
              iPhone
              <span
                className="block lg:inline transition-colors duration-700"
                style={{
                  color: selectedColor === 'silver' ? '#6B7280' :
                    selectedColor === 'orange' ? '#F97316' :
                      '#3B82F6'
                }}
              >
                {' '}17 Pro Max
              </span>
            </h1>

            <p className="text-lg md:text-xl lg:text-2xl text-gray-600 max-w-lg mt-6 lg:mt-8 font-light">
              <span
                className="font-medium transition-colors duration-700"
                style={{
                  color: selectedColor === 'silver' ? '#6B7280' :
                    selectedColor === 'orange' ? '#F97316' :
                      '#3B82F6'
                }}
              >
                {currentColor.displayName}.
              </span>{' '}
              A19 Pro chip. 39 hour battery.
            </p>

            {/* Color selector */}
            <div className="mt-10 lg:mt-12">
              <p className="text-sm text-gray-500 mb-4">Available in:</p>
              <div className="flex gap-4">
                {Object.entries(colors).map(([key, color]) => (
                  <button
                    key={key}
                    onClick={() => setSelectedColor(key)}
                    className="group relative cursor-pointer"
                  >
                    <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br ${color.productBg} border-2 transition-all ${selectedColor === key ? 'border-black scale-110' : 'border-transparent hover:scale-105'
                      }`} />
                    <span className="text-black absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                      {color.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* CTA Links */}
            <div className="flex gap-6 lg:gap-8 mt-6 lg:mt-16">
              <button className="text-sm md:text-base text-black hover:text-gray-600 flex items-center gap-2 group">
                Learn more
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="text-sm md:text-base text-black hover:text-gray-600 flex items-center gap-2 group">
                Buy
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Desktop - Hero visual */}
          <div className="hidden lg:block lg:w-1/2">
            <div className="relative flex items-center justify-center">
              <div className="w-[500px] xl:w-[600px] h-[500px] xl:h-[600px] relative transition-all duration-700">
                <Image
                  src={currentColor.imagePath}
                  alt={`iPhone 17 Pro Max in ${currentColor.name}`}
                  fill
                  className="object-contain drop-shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile - Image below text */}
        <div className="lg:hidden absolute bottom-0 left-0 right-0 flex justify-center items-end h-1/2">
          <div className="w-[280px] h-[320px] sm:w-[350px] sm:h-[400px] relative">
            <Image
              src={currentColor.imagePath}
              alt={`iPhone 17 Pro Max in ${currentColor.name}`}
              fill
              className="object-contain drop-shadow-2xl"
              priority
            />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="hidden lg:block absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <div className="w-[2px] h-12 lg:h-16 bg-gradient-to-b from-black to-transparent" />
        </div>
      </section>

      {/* Product Grid - iPad, MacBook, Accessories */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 py-16 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
          {/* iPad Pro - Large card */}
          <div className="lg:col-span-2 bg-gray-50 rounded-2xl sm:rounded-3xl p-8 sm:p-12 md:p-20 relative overflow-hidden group cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-100/50 to-white/50" />
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-gradient-to-br from-gray-200/30 to-transparent rounded-full blur-3xl" />

            <div className="relative flex flex-col lg:flex-row lg:items-center justify-between gap-8 lg:gap-12">
              <div className="lg:w-1/2">
                <span className="text-xs tracking-[0.2em] text-gray-500 font-medium">iPad Air</span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-black mt-4 mb-4">Supercharged by M3</h2>
                <p className="text-gray-600 text-sm sm:text-base max-w-md mb-6 sm:mb-8">The ultimate iPad experience with the M3 chip.</p>
                <div className="flex gap-4 sm:gap-6">
                  <button className="text-xs sm:text-sm text-black hover:text-gray-600 flex items-center gap-1 sm:gap-2 group">
                    Learn more
                    <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="text-xs sm:text-sm text-black hover:text-gray-600 flex items-center gap-1 sm:gap-2 group">
                    Buy
                    <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

              {/* Product image for iPad */}
              <div className="lg:w-1/2 h-40 sm:h-48 lg:h-64 relative">
                <Image
                  src={ipadAir}
                  alt='iPad Air'
                  className='object-contain w-full h-full'
                  priority
                />
              </div>
            </div>
          </div>

          {/* MacBook Pro - Fixed Layout */}
          <div className="bg-gray-50 rounded-2xl sm:rounded-3xl p-8 sm:p-12 relative overflow-hidden group cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-tr from-gray-100/50 to-white/50" />
            <div className="absolute -right-10 -top-10 w-48 h-48 bg-gradient-to-br from-gray-200/30 to-transparent rounded-full blur-3xl" />

            <div className="relative flex flex-col h-full">
              <div className="mb-6 sm:mb-8">
                <span className="text-xs tracking-[0.2em] text-gray-500 font-medium">MacBook Pro</span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-black mt-4 mb-3">Mind-blowing.</h2>
                <p className="text-gray-600 text-sm sm:text-base mb-4">With the M5 Max chip.</p>
                <button className="text-xs sm:text-sm text-black hover:text-gray-600 flex items-center gap-1 sm:gap-2 group">
                  Learn more
                  <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Product images - Improved layout */}
              <div className="mt-auto grid grid-cols-2 gap-3 sm:gap-4">
                <div className="aspect-square bg-gradient-to-br from-gray-200 to-gray-100 rounded-xl sm:rounded-2xl p-4 flex items-center justify-center">
                  <Image
                    src={macbook}
                    alt='MacBook Pro'
                    className='w-full h-full object-contain'
                  />
                </div>
                <div className="aspect-square bg-gradient-to-br from-gray-200 to-gray-100 rounded-xl sm:rounded-2xl p-4 flex items-center justify-center">
                  <Image
                    src={macbook2}
                    alt='MacBook Pro'
                    className='w-full h-full object-contain'
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Accessories Card */}
          <div className="bg-gray-50 rounded-2xl sm:rounded-3xl p-8 sm:p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-bl from-gray-100/50 to-white/50" />

            <div className="relative flex flex-col h-full">
              <div className="mb-6">
                <span className="text-xs tracking-[0.2em] text-gray-500 font-medium">ACCESSORIES</span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-black mt-4 mb-4">Complete your setup</h2>
              </div>

              <div className="flex-1">
                <Image
                  src={appleAccessories}
                  alt='Apple Accessories'
                  className='w-full h-auto rounded-2xl sm:rounded-3xl'
                />
              </div>

              <button className="text-xs sm:text-sm text-black hover:text-gray-600 flex items-center gap-1 sm:gap-2 group mt-6">
                View all accessories
                <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 py-12 md:py-16 bg-gray-50 rounded-2xl sm:rounded-3xl my-8 sm:my-12">
        <div className="mb-8 sm:mb-10 md:mb-12">
          <span className="text-xs tracking-[0.2em] text-gray-500 font-medium">— SERVICES</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-black mt-4 sm:mt-6">Beyond the product</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
          {/* Trade-in Card */}
          <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 rounded-full flex items-center justify-center mb-4 sm:mb-6">
              <RefreshCw className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
            </div>
            <h3 className="text-xl sm:text-2xl font-light text-black mb-2 sm:mb-3">Trade In</h3>
            <p className="text-gray-600 text-xs sm:text-sm mb-4 sm:mb-6">Get credit toward a new purchase. Just answer a few questions about your device.</p>
            <button className="text-xs sm:text-sm text-black hover:text-gray-600 flex items-center gap-1 sm:gap-2 group">
              Get a quote
              <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Repairs Card */}
          <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 rounded-full flex items-center justify-center mb-4 sm:mb-6">
              <Wrench className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
            </div>
            <h3 className="text-xl sm:text-2xl font-light text-black mb-2 sm:mb-3">Repairs</h3>
            <p className="text-gray-600 text-xs sm:text-sm mb-4 sm:mb-6">Expert repairs for all Apple devices. Fast turnaround with genuine parts.</p>
            <button className="text-xs sm:text-sm text-black hover:text-gray-600 flex items-center gap-1 sm:gap-2 group">
              Book a repair
              <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Business Solutions Card */}
          <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 rounded-full flex items-center justify-center mb-4 sm:mb-6">
              <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
            </div>
            <h3 className="text-xl sm:text-2xl font-light text-black mb-2 sm:mb-3">Business</h3>
            <p className="text-gray-600 text-xs sm:text-sm mb-4 sm:mb-6">Volume pricing, dedicated support, and device management for your team.</p>
            <button className="text-xs sm:text-sm text-black hover:text-gray-600 flex items-center gap-1 sm:gap-2 group">
              Contact sales
              <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* AppleCare+ Card */}
          <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 rounded-full flex items-center justify-center mb-4 sm:mb-6">
              <Headphones className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
            </div>
            <h3 className="text-xl sm:text-2xl font-light text-black mb-2 sm:mb-3">AppleCare+</h3>
            <p className="text-gray-600 text-xs sm:text-sm mb-4 sm:mb-6">Extended coverage with 24/7 priority access to Apple experts.</p>
            <button className="text-xs sm:text-sm text-black hover:text-gray-600 flex items-center gap-1 sm:gap-2 group">
              Learn more
              <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer - Keep existing footer */}
      <footer className="bg-[#1a1a1a]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-20 md:py-32">
          {/* Footer content */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
            <div>
              <p className="text-xs tracking-[0.2em] text-gray-400 font-medium mb-8">SHOP</p>
              <ul className="space-y-4">
                {['iPhone', 'Mac', 'iPad', 'Watch', 'Audio', 'Vision'].map((item) => (
                  <li key={item} className="text-sm md:text-base text-gray-300 hover:text-white cursor-pointer transition-colors">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs tracking-[0.2em] text-gray-400 font-medium mb-8">SERVICES</p>
              <ul className="space-y-4">
                {['Trade In', 'Repairs', 'Business', 'AppleCare+', 'Financing'].map((item) => (
                  <li key={item} className="text-sm md:text-base text-gray-300 hover:text-white cursor-pointer transition-colors">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs tracking-[0.2em] text-gray-400 font-medium mb-8">CONTACT</p>
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                      Shop 14<br />
                      Sam Levy's Village<br />
                      Borrowdale Road<br />
                      Harare
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  <p className="text-sm md:text-base text-gray-300 hover:text-white cursor-pointer transition-colors">
                    0771 234 567
                  </p>
                </div>
                <p className="text-xs text-gray-500 mt-4">
                  Mon - Sat: 10am - 7pm<br />
                  Sun: Closed
                </p>
              </div>
            </div>
            <div>
              <p className="text-xs tracking-[0.2em] text-gray-400 font-medium mb-8">LEGAL</p>
              <ul className="space-y-4">
                {['Privacy Policy', 'Terms of Service', 'Accessibility', 'Warranty'].map((item) => (
                  <li key={item} className="text-sm md:text-base text-gray-300 hover:text-white cursor-pointer transition-colors">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-20 md:mt-32 pt-8 border-t border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <p className="text-xs text-gray-500">© 2026 iClik. All rights reserved.</p>
              <p className="text-xs text-gray-500">Apple and the Apple logo are trademarks of Apple Inc.</p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}