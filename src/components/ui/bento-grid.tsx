import React from "react";
import { cn } from "@/utils/cn";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import Image from "next/image";

export function BentoGridDemo() {
  return (
    <div id="blogs" className="w-full px-4">
      <div className="mb-6">
        <h2 className="text-6xl text-center text-white font-bold">
          <span className="text-cyan-500">Latest</span> Blogs
        </h2>
        <p className="text-2xl text-white text-center">
          Explore our <span className="text-cyan-500">latest</span> blog posts and discover new insights.
        </p>
      </div>


      <BentoGrid>
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            imageUrl={item.imageUrl}
            icon={item.icon}
            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>
    </div>
  );
}

const items = [
  {
    title: "The Dawn of Innovation",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    imageUrl: "/pic1.png",
    icon: <IconClipboardCopy className="h-4 w-4 text-white" />,
  },
  {
    title: "The Digital Revolution",
    description: "Dive into the transformative power of technology.",
    imageUrl: "/pic3.png",
    icon: <IconFileBroken className="h-4 w-4 text-white" />,
  },
  {
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    imageUrl: "/pic5.png",
    icon: <IconSignature className="h-4 w-4 text-white" />,
  },
  {
    title: "The Power of Communication",
    description: "Understand the impact of effective communication in our lives.",
    imageUrl: "/pic2.png",
    icon: <IconTableColumn className="h-4 w-4 text-white" />,
  },
  {
    title: "The Pursuit of Knowledge",
    description: "Join the quest for understanding and enlightenment.",
    imageUrl: "/pic4.png",
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-white" />,
  },
];

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  imageUrl,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  imageUrl: string;
  icon?: React.ReactNode;
}) => {
  const defaultImageUrl = "/path-to-default-image.png";
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-black border border-transparent justify-between flex flex-col space-y-4",
        className
      )}
    >
      <div className="relative w-full h-80 rounded-xl overflow-hidden">
        <div
          className="absolute inset-0 rounded-xl"
          style={{
            boxShadow: "inset 0 0 0 1px #00C9FF"
          }}
        ></div>
        <Image
          src={imageUrl || defaultImageUrl}
          alt={typeof title === "string" ? title : "Image"}
          layout="fill"
          objectFit="cover"
          className="rounded-xl p-2"
        />
      </div>
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        {icon}
        <div className="font-sans text-2xl font-bold text-white dark:text-neutral-200 mb-2 mt-2">
          <span
            style={{
              background: "linear-gradient(135deg, #00C9FF 0%, #92FE9D 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}

          >
            {title}
          </span>
        </div>
        <div className="font-sans font-xl text-white text-md dark:text-neutral-300">
          {description}
        </div>
      </div>
    </div>
  );
};
