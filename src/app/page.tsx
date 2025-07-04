"use client";
import { CurrentResourceProvider } from "@/components/CurrentResourceProvider";
import SupportGrid from "@/components/landing/SupportGrid";
import Header from "@/components/navigation/Header";
import PageSwiper from "@/components/navigation/PageSwiper";
import { useContext } from "react";
import { CurrentResourceContext } from "@/components/CurrentResourceProvider";
import SOSbutton from "@/components/landing/SOSbutton";

function ResourceSection() {
  const ctx = useContext(CurrentResourceContext);

  if (!ctx) return null;

  const isFiltered = ctx.filtered.length !== ctx.resources.length;
  return isFiltered ? (
    <PageSwiper />
  ) : (
    <div>
      <div className="text-center m-10">
        <h2 className="text-xl font-semibold text-gray-800">What&apos;s hardest right now?</h2>
        <p className="text-sm text-gray-500 mt-1">Let&apos;s find resources that might help</p>
      </div>
      <SupportGrid />
      <SOSbutton />
    </div>
  );
}

export default function Home() {
  return (
    <CurrentResourceProvider>
      <Header />
      <div className="mt-24">
        <ResourceSection />
      </div>
    </CurrentResourceProvider>
  );
}
