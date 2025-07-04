"use client";
import { useContext } from "react";
import { CurrentResourceContext } from "../CurrentResourceProvider";
import { Tag, FeelingFilterKey } from "@/types/filters";
import { feelingFilters } from "../filters/FilterConfig";
import { ViewType } from "@/types/views";

export interface SupportOption {
  emoji: string;
  label: string;
  tag: Tag;
  color: string;
  filterKey: FeelingFilterKey; // Key to identify the corresponding filter
}

export default function SupportOptionButton({ supportOption, setViewType }: { supportOption: SupportOption, setViewType: (viewType: ViewType) => void }) {
  const ctx = useContext(CurrentResourceContext);
  const addFilter = ctx?.addFilter;

  const handleOptionClick = (option: SupportOption) => {
    const filter = feelingFilters[option.filterKey];
    if (addFilter && filter) {
      addFilter(filter);
    }
    setViewType(ViewType.ResourceList);
  };


  return (
    <div
      onClick={() => handleOptionClick(supportOption)}
      className="bg-white border rounded-xl shadow-sm p-4 flex flex-col items-center justify-center hover:shadow-md transition cursor-pointer"
    >
      <div className={`w-14 h-14 flex items-center justify-center rounded-full text-3xl ${supportOption.color}`}>{supportOption.emoji}</div>
      <p className="mt-2 font-medium text-center">{supportOption.label}</p>
    </div>
  );
}