"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import Image from "next/image";




export function BackgroundBoxesDemo() {
    return (
      <div className=" mt-[-150px] relative  pt-36 pb-36 border border-cyan-500 shadow-lg shadow-cyan-500   w-3/4 mb-36  overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-3xl">
        <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
   
        <Boxes />
        <h1 className={cn("md:text-4xl lg:text-5xl font-bold text-4xl text-white relative z-20")}>
        The Future of SaaS Solutions
        </h1>
        <p className="text-center mt-2 text-neutral-300 text-2xl relative z-20">
        Empower your business with cutting-edge technology and seamless integrations.
        </p>
        <div className="relative z-20 mt-8 flex flex-wrap justify-center gap-4">
        {features.map((feature) => (
          <FeatureBox key={feature.title} title={feature.title} icon={feature.icon} />
        ))}
      </div>

      </div>
    );
  }

export const BoxesCore = ({ className, ...rest }: { className?: string }) => {
  const rows = new Array(150).fill(1);
  const cols = new Array(100).fill(1);
  let colors = [
    "#E0F7FA", // Cyan 100
    "#B2EBF2", // Cyan 200
    "#80DEEA", // Cyan 300
    "#4DD0E1", // Cyan 400
    "#26C6DA", // Cyan 500
    "#00BCD4", // Cyan 600
    "#00ACC1", // Cyan 700
    "#0097A7", // Cyan 800
    "#00838F", // Cyan 900

  ];
  const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <div
      style={{
        transform: `translate(-40%,-60%) skewX(-48deg) skewY(14deg) scale(0.675) rotate(0deg) translateZ(0)`,
      }}
      className={cn(
        "absolute left-1/4 p-4 -top-1/4 flex  -translate-x-1/2 -translate-y-1/2 w-full h-full z-0 ",
        className
      )}
      {...rest}
    >
      {rows.map((_, i) => (
        <motion.div
          key={`row` + i}
          className="w-16 h-8  border-l  border-slate-700 relative"
        >
          {cols.map((_, j) => (
            <motion.div
              whileHover={{
                backgroundColor: `var(${getRandomColor()})`,
                transition: { duration: 0 },
              }}
              animate={{
                transition: { duration: 2 },
              }}
              key={`col` + j}
              className="w-16 h-8  border-r border-t border-slate-700 relative"
            >
              {j % 2 === 0 && i % 2 === 0 ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="absolute h-6 w-10 -top-[14px] -left-[22px] text-slate-700 stroke-[1px] pointer-events-none"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v12m6-6H6"
                  />
                </svg>
              ) : null}
            </motion.div>
          ))}
        </motion.div>
      ))}
    </div>
  );
};

export const Boxes = React.memo(BoxesCore);


const features = [
  {title :"Full Service Payroll" , icon :"/1stpic.png"},
  {title :"Full Service Payroll" , icon :"/1stpic.png"},
  {title :"Full Service Payroll" , icon :"/1stpic.png"},
  {title :"Full Service Payroll" , icon :"/1stpic.png"}
]

const FeatureBox = ({title ,icon} :{title: string ;icon:string}) =>{
  return(
    <div className=" flex flex-col  items-center justify-center p-2 sm:p-4 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:h-48 lg:w-48 rounded-lg border border-cyan-500 shadow-lg shadow-cyan-500">
      <Image src={icon} width={40} height={40} alt={title} className="sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 mb-2"/>
      <h4 className=" text-white text-xs sm:text-sm md:text-base lg:text-lg text-center">{title}</h4>
    </div>
  )
}