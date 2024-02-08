"use client";

import React from "react";
import { useParams } from "next/navigation";

interface Props {
  children: React.ReactNode;
}

export default function TsWrapper({ children }: Props) {
  const { locale } = useParams();

  return <div dir={locale === "ar" ? "rtl" : "ltr"}>{children}</div>;
}
