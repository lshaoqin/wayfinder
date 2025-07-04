"use client";
import { CurrentResourceProvider } from "@/components/CurrentResourceProvider";
import Header from "@/components/navigation/Header";
import { ViewType } from "@/types/views";
import LandingView from "@/components/landing/LandingView";
import { useState } from "react";
import FiltersView from "@/components/filters/FiltersForm";
import ResourcesView from "@/components/resourcePage/ResourcesView";


export default function Home() {
  const [viewType, setViewType] = useState<ViewType>(ViewType.Landing);
  return (
    <CurrentResourceProvider>
      <Header viewType={viewType} setViewType={setViewType}/>
      <div className="mt-24">
        {viewType === ViewType.Landing && <LandingView />}
        {viewType === ViewType.Filters && <FiltersView setViewType={setViewType} />}
        {viewType === ViewType.ResourceList && <ResourcesView />}
      </div>
    </CurrentResourceProvider>
  );
}
