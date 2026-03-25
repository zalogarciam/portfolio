"use client";

import dynamic from "next/dynamic";

const FloatingWhatsApp = dynamic(
  () => import("react-floating-whatsapp").then((mod) => mod.FloatingWhatsApp),
  { ssr: false }
);

export default function ClientFloatingWhatsApp(props) {
  return <FloatingWhatsApp {...props} />;
}
