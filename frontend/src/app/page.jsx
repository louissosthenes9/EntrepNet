import Button from "@/components/Button";
import ImageGrid from "@/components/ImageGrid";
import MaxWidthWrapper from "@/components/MaxwidthWrapper";
import React from "react";
import { images } from "../libs/constants";
import Image from "next/image";
import Hero from "@/components/Hero";

export default function () {
  return (
    <>
      <MaxWidthWrapper>
        <div className="flex gap-x-24">
          <Hero />
          <ImageGrid />
        </div>
      </MaxWidthWrapper>
    </>
  );
}
