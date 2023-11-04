import { cn } from "@/lib/utils";
import React, { HTMLAttributes } from "react";

interface TailwindcompoProps extends HTMLAttributes<HTMLDivElement> {}

const Tailwindcompo = ({ className, ...props }: TailwindcompoProps) => {
  return (
    <div {...props} className={cn("", className)}>
      <h1>gggg</h1>
    </div>
  );
};

export default Tailwindcompo;
