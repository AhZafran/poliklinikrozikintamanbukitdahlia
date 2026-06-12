import Image from "next/image";
import { cn } from "@/lib/utils";

export function Logo({
  className,
  variant = "default",
}: {
  className?: string;
  variant?: "default" | "light";
}) {
  return (
    <div className={cn("flex items-center", className)}>
      <Image
        src="/images/logo.png"
        alt="Poliklinik Rozikin"
        width={1088}
        height={349}
        priority
        className={cn(
          "h-10 w-auto sm:h-11 lg:h-12",
          variant === "light" && "brightness-0 invert"
        )}
      />
    </div>
  );
}
