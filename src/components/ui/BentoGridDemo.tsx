import { cn } from "@/lib/utils";
import React, { useEffect, useRef } from "react";
import { BentoGrid, BentoGridItem } from "./bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { useAnimation, useInView } from "framer-motion";

export function BentoGridDemo() {
  let refContent = useRef<HTMLDivElement>(null);
  const isInViewContent = useInView(refContent, { once: true });

  const ContentControl = useAnimation();

  useEffect(() => {
    if (isInViewContent) {
      ContentControl.start({
        opacity: 1, y: 0
      })
    }
  }, [isInViewContent])
  return (
    <BentoGrid ref={refContent as React.RefObject<HTMLDivElement>} className="lg:w-full lg:ml-5 xl:w-[90%] xl:mx-auto h-full z-10">
      {items.map((item, i) => (
        <BentoGridItem
          control={ContentControl}
          key={i}
          index={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}

        />
      ))}
    </BentoGrid>
  );
}

const items = [
  {
    title: "Refrigerator Repair",
    description: "Refrigerator repair ensures efficient cooling and functionality, preserving your food and extending appliance life.",
    header: "/Refrigerator.jpeg",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Stove and Range Repair",
    description: "Stove and range repair involves diagnosing and fixing issues with cooking appliances, ensuring they operate safely and efficiently.",
    header: "/Electric-Range.jpg",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Oven Repair",
    description: "Oven repair entails diagnosing and fixing problems with baking appliances to restore their functionality and ensure even cooking.",
    header: "/oven.webp",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Dishwasher Repair",
    description:
      "Dishwasher repair involves troubleshooting and fixing issues to restore proper cleaning and drainage functions in dishwashing appliances.",
    header: "/Dishwasher.jpg",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Washer Repair",
    description: "Washer repair includes diagnosing and fixing issues to restore efficient washing and spinning functions in laundry machines.",
    header: "/Washer.jpeg",
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Dryer Repair",
    description: "Dryer repair involves diagnosing and fixing issues to ensure efficient drying and proper functioning of clothes drying appliances.",
    header: "/Dryer.jpg",
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Microwave Repair",
    description: "Microwave repair entails diagnosing and fixing problems to restore proper heating and cooking functions in microwave appliances.",
    header: "/Microwave.avif",
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Freezer Repair",
    description: "Freezer repair involves diagnosing and fixing issues to ensure optimal cooling and preservation of frozen foods in freezing appliances.",
    header: "/Freezer.webp",
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Air Conditioner Repair",
    description: "Air conditioner repair includes diagnosing and fixing issues to restore effective cooling and climate control in air conditioning units.",
    header: "/appliance3.jpg",
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
];
