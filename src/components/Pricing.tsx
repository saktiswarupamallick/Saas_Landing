"use client";

import React from 'react'
import { CardBody, CardContainer, CardItem } from './ui/3d-card'
import { CheckIcon } from 'lucide-react'



const Pricing = () => {
    return (
        <section id="pricing" className='mt-[30px]'>
            <h2 className='text-6xl text-center mt-[40px] text-white font-bold'>
                <span className='text-cyan-500'>Pricing</span> Plans
            </h2>
            <div className='flex flex-wrap items-center justify-center flex-col md:flex-row gap-2 mt-[100px]'>
                <CardContainer className="inter-var ">
                    <CardBody className=" relative group/card  hover:shadow-neutral-500/[0.1] bg-black  w-full md:!w-[350px] h-auto rounded-xl p-6 ">
                        <CardItem translateZ='50' className='text-xl font-bold text-cyan-500 '>Basic
                            <h2 className='text-6xl'>$0</h2>
                        </CardItem>
                        <CardItem
                            translateZ="60"
                            className="text-white text-sm max-w-sm mt-2 dark:text-neutral-300"
                        >
                            Get a glimpse of what our software is capable of. Just a heads
                            up {"you'll"} never leave us after this!
                            <ul className="my-4 flex flex-col gap-2">
                                <li className="flex items-center gap-2">
                                    <CheckIcon />3 Free automations
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckIcon />
                                    100 tasks per month
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckIcon />
                                    Two-step Actions
                                </li>
                            </ul>
                        </CardItem>
                        <div className="flex justify-between items-center mt-8">
                            <CardItem
                                translateZ={20}
                                as="button"
                                className="px-4 py-2 rounded-xl text-xs font-normal text-cyan-500"
                            >
                                Try now →
                            </CardItem>
                            <CardItem
                                translateZ={20}
                                as="button"
                                className="px-4 py-2 rounded-xl bg-white text-black text-xs font-bold"
                            >
                                Get Started Now
                            </CardItem>
                        </div>

                    </CardBody>
                </CardContainer>
                <CardContainer className="inter-var ">
                    <CardBody className=" relative group/card  dark:hover:shadow-2xl hover:shadow-neutral-500/[0.1] bg-black border-white/[0.5]  w-full md:!w-[350px] h-[440px] rounded-xl p-6 border">
                        <CardItem
                            translateZ="50"
                            className="text-xl font-bold text-cyan-500 dark:text-white "
                        >
                            Pro
                            <h2 className="text-6xl ">$55</h2>
                        </CardItem>
                        <CardItem
                            translateZ="60"
                            className="text-white text-sm max-w-sm mt-2 dark:text-neutral-300"
                        >
                            Get a glimpse of what our software is capable of. Just a heads
                            up {"you'll"} never leave us after this!
                            <ul className="my-4 flex flex-col gap-2">
                                <li className="flex items-center gap-2">
                                    <CheckIcon />3 Free automations
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckIcon />
                                    100 tasks per month
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckIcon />
                                    Two-step Actions
                                </li>
                            </ul>
                        </CardItem>
                        <div className="flex justify-between items-center mt-8">
                            <CardItem
                                translateZ={20}
                                as="button"
                                className="px-4 py-2 rounded-xl text-xs font-normal text-cyan-500"
                            >
                                Try now →
                            </CardItem>
                            <CardItem
                                translateZ={20}
                                as="button"
                                className="px-4 py-2 rounded-xl bg-white text-black text-xs font-bold"
                            >
                                Get Started Now
                            </CardItem>
                        </div>
                    </CardBody>
                </CardContainer>
                <CardContainer className="inter-var ">
                    <CardBody className=" relative group/card  dark:hover:shadow-2xl hover:shadow-neutral-500/[0.1] bg-black  w-full md:!w-[350px] h-auto rounded-xl p-6 ">
                        <CardItem
                            translateZ="50"
                            className="text-xl font-bold text-cyan-500 dark:text-white "
                        >
                            Enterprise
                            <h2 className="text-6xl ">$99</h2>
                        </CardItem>
                        <CardItem
                            translateZ="60"
                            className="text-white text-sm max-w-sm mt-2 dark:text-neutral-300"
                        >
                            Get a glimpse of what our software is capable of. Just a heads
                            up {"you'll"} never leave us after this!
                            <ul className="my-4 flex flex-col gap-2">
                                <li className="flex items-center gap-2">
                                    <CheckIcon />3 Free automations
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckIcon />
                                    100 tasks per month
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckIcon />
                                    Two-step Actions
                                </li>
                            </ul>
                        </CardItem>
                        <div className="flex justify-between items-center mt-8">
                            <CardItem
                                translateZ={20}
                                as="button"
                                className="px-4 py-2 rounded-xl text-xs font-normal text-cyan-500"
                            >
                                Try now →
                            </CardItem>
                            <CardItem
                                translateZ={20}
                                as="button"
                                className="px-4 py-2 rounded-xl bg-white text-black text-xs font-bold"
                            >
                                Get Started Now
                            </CardItem>
                        </div>
                    </CardBody>
                </CardContainer>
            </div>

        </section>
    )
}

export default Pricing