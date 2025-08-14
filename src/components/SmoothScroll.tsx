'use client'

import { useEffect } from 'react'

export default function SmoothScroll() {
  useEffect(() => {
    let isScrolling = false
    
    const handleScroll = (e: WheelEvent) => {
      // Prevent default only for section scrolling
      if (isScrolling) return
      
      const sections = document.querySelectorAll('section[id]')
      const scrollTop = window.pageYOffset
      const windowHeight = window.innerHeight
      
      // Find current section based on scroll position
      let currentSectionIndex = 0
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect()
        const sectionTop = rect.top + scrollTop
        if (scrollTop >= sectionTop - windowHeight / 2) {
          currentSectionIndex = index
        }
      })
      
      let targetIndex = currentSectionIndex
      
      if (e.deltaY > 0 && currentSectionIndex < sections.length - 1) {
        // Scroll down
        targetIndex = currentSectionIndex + 1
        e.preventDefault()
      } else if (e.deltaY < 0 && currentSectionIndex > 0) {
        // Scroll up
        targetIndex = currentSectionIndex - 1
        e.preventDefault()
      }
      
      if (targetIndex !== currentSectionIndex) {
        isScrolling = true
        sections[targetIndex].scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
        
        // Reset scrolling flag after animation
        setTimeout(() => {
          isScrolling = false
        }, 1000)
      }
    }

    // Add event listener to the entire document
    document.addEventListener('wheel', handleScroll, { passive: false })
    
    return () => {
      document.removeEventListener('wheel', handleScroll)
    }
  }, [])

  return null
}