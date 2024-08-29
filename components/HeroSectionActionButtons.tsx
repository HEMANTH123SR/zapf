"use client";
import {
  Zap,
  File,
  ChevronsLeftRightEllipsis,
  PanelsTopLeft,
} from "lucide-react";
import { GetStartedBtn } from "@/components/GetStartedBtn";
export const HeroSectionActionButtons = () => {
  return (
    <div className=" flex justify-center space-x-12 items-center">
      <GetStartedBtn
        title="create your portfolio"
       Icon={ChevronsLeftRightEllipsis}
      />
      <GetStartedBtn title="create your resume" Icon={File} />
    </div>
  );
};
