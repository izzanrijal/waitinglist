"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { trackCTAClick } from "@/lib/actions"
import { useEffect, useState } from "react"

interface TrackingButtonProps extends React.ComponentProps<typeof Button> {
  buttonName: string
  href?: string
}

export function TrackingButton({ buttonName, href, children, onClick, ...props }: TrackingButtonProps) {
  const [isClicked, setIsClicked] = useState(false)

  // Update the handleClick function to make tracking asynchronous
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) {
      onClick(e)
    }

    if (!isClicked) {
      setIsClicked(true)
      // Make tracking asynchronous - don't await the result
      trackCTAClick(buttonName).catch((error) => {
        console.error("Error tracking CTA click:", error)
      })
    }

    if (href) {
      window.location.href = href
    }
  }

  // Reset click state after 5 seconds to allow tracking again
  useEffect(() => {
    if (isClicked) {
      const timer = setTimeout(() => {
        setIsClicked(false)
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [isClicked])

  return (
    <Button onClick={handleClick} {...props}>
      {children}
    </Button>
  )
}
