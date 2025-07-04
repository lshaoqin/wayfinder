"use client";
import { Filter, FilterQuestionGroup } from "@/types/filters";
import { useContext } from "react";
import { CurrentResourceContext } from "../CurrentResourceProvider";
import FilterButton from "./FilterButton";

export default function FilterQuestion({ group }: { group: FilterQuestionGroup }) {
  const ctx = useContext(CurrentResourceContext);
  const { addFilter, removeFilter, currentFilters } = ctx;
  
  // Find the default filter in this group
  const defaultFilter = group.filters.find(filter => filter.isDefault) || null;
  
  // Find the active filter in this group (if any)
  const activeFilter = currentFilters?.find(filter => 
    group.filters.some(groupFilter => groupFilter.key === filter.key)
  ) || defaultFilter;

  const handleClick = (filter: Filter) => {
    // If the filter is already active, do nothing
    if (activeFilter?.key === filter.key) return;
  
    // If there's an active filter in this group, remove it first
    if (activeFilter) {
      const currentActiveFilter = group.filters.find(f => f.key === activeFilter.key);
      if (currentActiveFilter) {
        removeFilter(currentActiveFilter);
      }
    }
    // Add the new filter
    addFilter(filter);
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
    