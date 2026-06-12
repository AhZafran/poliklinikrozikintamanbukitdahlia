"use client";

import { Icon, addIcon, type IconProps } from "@iconify/react";
import iconSet from "@/lib/medical-icons.json";

export type MedicalIconName = keyof typeof iconSet.icons;

let registered = false;
if (!registered) {
  for (const [name, data] of Object.entries(iconSet.icons)) {
    addIcon(`medical-icon:${name}`, {
      body: data.body,
      width: data.width ?? iconSet.width,
      height: data.height ?? iconSet.height,
    });
  }
  registered = true;
}

export function MedicalIcon({
  name,
  className,
  ...rest
}: {
  name: MedicalIconName;
  className?: string;
} & Omit<IconProps, "icon" | "className">) {
  return <Icon icon={`medical-icon:${name}`} className={className} {...rest} />;
}
