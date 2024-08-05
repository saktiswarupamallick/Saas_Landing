import React from 'react'
import { LampDemo } from "../components/ui/lamp"
import { NavbarDemo } from "../components/ui/navbar-menu"
import { BackgroundBoxesDemo } from '@/components/ui/background-boxes'
import { BentoGridDemo } from '@/components/ui/bento-grid'
import { InfiniteMovingCardsDemo } from '@/components/ui/infinite-moving-cards'
import Pricing from '@/components/Pricing'
import Footer from '@/components/Footer'

const page = () => {
  return (<div className="bg-slate-950"><main className="flex items-center bg-slate-950  justify-center flex-col">

      <LampDemo  />
      <NavbarDemo />
      < BackgroundBoxesDemo />
      < BentoGridDemo />
      <InfiniteMovingCardsDemo />
      <Pricing />
      
    </main>
    <main className=' bg-slate-950' ><Footer/></main>
   
    </div>
    
  )
}

export default page