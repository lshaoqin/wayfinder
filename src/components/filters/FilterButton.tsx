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
      className={`px-4 py-2 rounded-md border transition-all ${isActive 
        ? 'bg-primary text-primary-foreground font-medium' 
        : 'bg-gray-200 text-gray-700 border-transparent hover:bg-gray-300'}`}
    >
      {filter.name}
    </button>
  );
}