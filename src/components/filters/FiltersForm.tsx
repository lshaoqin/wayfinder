"use client";
import { useContext } from "react";
import FilterQuestion from "./FilterQuestion";
import { CurrentResourceContext } from "../CurrentResourceProvider";
import { filterQuestions } from "@/components/filters/FilterConfig";
import { ViewType } from "@/types/views";
import { Compass } from "lucide-react";

export default function FiltersView({ setViewType }: { setViewType: (viewType: ViewType) => void }) {
    const ctx = useContext(CurrentResourceContext);
    const { reset, currentFilters } = ctx;
    
    // Count active non-default filters
    const activeFilterCount = currentFilters?.filter(filter => !filter.isDefault).length || 0;
    
    return (
        <div className="flex flex-col h-full">
            <div className="flex-1 overflow-auto p-4 pb-24">
                <h2 className="text-xl font-bold mb-4">Let&apos;s find resources to help</h2>
                
                {filterQuestions.map((group) => (
                    <FilterQuestion key={group.question} group={group} />
                ))}
            </div>
            
            <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200 shadow-md">
                <div className="grid grid-cols-2 gap-4 w-full max-w-screen-md mx-auto">
                    <button 
                        onClick={() => setViewType(ViewType.ResourceList)} 
                        className="flex-1 px-4 py-3 bg-blue-400 text-white rounded-md hover:bg-blue-700 w-full"
                    >
                        <div className="flex items-center justify-center">
                            <Compass className="mr-2" />
                            Discover
                        </div>
                    </button>
                    <button 
                        onClick={reset} 
                        className="flex-1 px-4 py-3 border border-gray-300 rounded-md hover:bg-gray-100 w-full"
                        disabled={!activeFilterCount}
                    >
                        Clear Filters
                    </button>
                </div>
            </div>
        </div>
    );
}