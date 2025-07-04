"use client";
import { Filter } from "@/types/filters";

type FilterButtonProps = {
  filter: Filter;
  isActive: boolean;
  onClick: () => void;
};

export default function FilterButton({ filter, isActive, onClick }: FilterButtonProps) {
  return (
    <button 
      onClick={onClick}
      className={`px-3 py-1 text-sm rounded-full mr-2 mb-2 transition-all ${isActive 
        ? 'bg-primary text-primary-foreground font-medium' 
        : 'bg-gray-100 text-gray-700 border border-gray-200 hover:bg-gray-200'}`}
    >
      {filter.name}
    </button>
  );
}