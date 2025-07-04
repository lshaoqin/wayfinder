"use client";
import { Filter, FilterQuestionGroup } from "@/types/filters";
import { useState, useContext } from "react";
import { CurrentResourceContext } from "../CurrentResourceProvider";
import FilterButton from "./FilterButton";

export default function FilterQuestion({ group }: { group: FilterQuestionGroup }) {
  const [activeFilter, setActiveFilter] = useState<Filter | null>(null);
  const ctx = useContext(CurrentResourceContext);
  const { addFilter, removeFilter } = ctx;

  const handleClick = (filter: Filter) => {
    if (activeFilter?.key === filter.key) {
      removeFilter(filter);
      setActiveFilter(null);
    } else {
      removeFilter(filter); // Only one filter in a group can be active at a time
      addFilter(filter);
      setActiveFilter(filter);
    }
  };

  return (
    <div className="flex flex-col">
      <h3 className="text-lg font-semibold mb-2">{group.question}</h3>
      {group.filters.map((filter) => (
        <FilterButton filter={filter} key={filter.key} isActive={activeFilter?.key === filter.key} onClick={() => handleClick(filter)} />
      ))}
    </div>
  );
}
    