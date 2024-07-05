import React from 'react'
import { LampDemo } from "../components/ui/lamp"
import { NavbarDemo } from "../components/ui/navbar-menu"
import { BackgroundBoxesDemo } from '@/components/ui/background-boxes'
import { BentoGridDemo } from '@/components/ui/bento-grid'
import { InfiniteMovingCardsDemo } from '@/components/ui/infinite-moving-cards'
import Pricing from '@/components/Pricing'

const page = () => {
  return (
    <main className="flex items-center bg-slate-950  justify-center flex-col">

      <LampDemo  />
      <NavbarDemo />
      < BackgroundBoxesDemo />
      < BentoGridDemo />
      <InfiniteMovingCardsDemo />
      <Pricing />
    </main>
  )
}

export default page