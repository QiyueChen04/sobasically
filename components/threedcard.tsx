"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
// import Link from "next/link";

function ThreeDCard() {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-fit h-fit rounded-xl px-6 justify-center">
        <CardItem translateZ="100" className="w-fit mt-4">
          <Image
            src={'/thequantitytheoryofmoney.jpeg'}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
      </CardBody>
      <CardBody className="bg-gray-50 group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-fit h-fit rounded-xl px-6 justify-end">
        <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white"
          >
            The Quantity Theory of Money
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
            Examining the money supply and inflation
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-1 dark:text-neutral-300"
          >
            Sep 2, 2023
          </CardItem>
      </CardBody>
    </CardContainer>
  );
}

export default ThreeDCard