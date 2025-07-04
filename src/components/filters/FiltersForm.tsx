"use client";
import { useContext } from "react";
import FilterQuestion from "./FilterQuestion";
import { CurrentResourceContext } from "../CurrentResourceProvider";
import { filterQuestions } from "@/components/filters/FilterConfig";
import { ViewType } from "@/types/views";

export default function FiltersView({ setViewType }: { setViewType: (viewType: ViewType) => void }) {
    const ctx = useContext(CurrentResourceContext);
    const { reset, currentFilters } = ctx;
    
    // Count active non-default filters
    const activeFilterCount = currentFilters?.filter(filter => !filter.isDefault).length || 0;
    
    return (
        <div className="p-4">
            <h2 className="text-xl font-bold mb-4">Filters</h2>
            
            {filterQuestions.map((group) => (
                <FilterQuestion key={group.question} group={group} />
            ))}
            
            <div className="mt-6 flex space-x-4">
                <button 
                    onClick={() => setViewType(ViewType.ResourceList)} 
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                    Done
                </button>
                <button 
                    onClick={reset} 
                    className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100"
                    disabled={!activeFilterCount}
                >
                    Clear Filters
                </button>
            </div>
        </div>
    );
}