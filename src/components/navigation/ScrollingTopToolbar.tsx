import { ChevronLeft, ChevronRight } from "lucide-react";
import { useContext } from "react";
import { CurrentResourceContext } from "../CurrentResourceProvider";

type ScrollingTopToolbarProps = {
  resourceId: number;
  numResources: number;
  paginate: (direction: number) => void;
};

export default function ScrollingTopToolbar({ resourceId, numResources, paginate }: ScrollingTopToolbarProps) {
    const { currentFilters, getCurrentResource } = useContext(CurrentResourceContext);
    const currentResource = getCurrentResource();
    
    // Get filter match information
    const getFilterMatchInfo = () => {
        if (!currentResource || !currentFilters || currentFilters.length === 0) {
            return null;
        }
        
        // Count how many filters are matched by the current resource
        const matchedFilters = currentFilters.filter(filter => {
            // Skip default filters
            if (filter.isDefault) return false;
            return filter.predicate(currentResource);
        });
        
        // Get non-default filters
        const nonDefaultFilters = currentFilters.filter(filter => !filter.isDefault);
        const matchedCount = matchedFilters.length;
        const totalCount = nonDefaultFilters.length;
        
        if (totalCount === 0) {
            return null;
        } else if (totalCount === 1 && matchedCount === 1) {
            // If only one filter and it matched, display the filter name
            return `Matched: ${matchedFilters[0].name}`;
        } else if (matchedCount === totalCount && totalCount > 1) {
            // If all filters matched and there are multiple filters
            return "Supermatch - all filters matched!";
        } else {
            // Otherwise show the ratio
            return `${matchedCount}/${totalCount} filters matched`;
        }
    };
    
    const filterMatchInfo = getFilterMatchInfo();
    
    return (
        <div
            className="fixed top-12 left-0 w-full flex items-center justify-between px-4 py-2 bg-white z-20 select-none"
            style={{ touchAction: "none", userSelect: "none" }}
        >
        <button
          onClick={() => paginate(-1)}
          disabled={resourceId === 0}
          className={`p-2 rounded-full transition-colors ${
            resourceId === 0 ? "text-gray-300" : "text-gray-700 hover:bg-gray-200"
          }`}
          aria-label="Previous"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        
        {/* Filter match information */}
        {filterMatchInfo && (
          <div className="text-sm font-medium px-2 py-1 rounded-full">
            {filterMatchInfo.includes("Supermatch") ? (
              <span className="text-green-600 font-bold">{filterMatchInfo}</span>
            ) : filterMatchInfo.includes("Matched:") ? (
              <span className="text-blue-600">{filterMatchInfo}</span>
            ) : (
              <span className="text-gray-600">{filterMatchInfo}</span>
            )}
          </div>
        )}
        
        <button
          onClick={() => paginate(1)}
          disabled={resourceId === numResources - 1}
          className={`p-2 rounded-full transition-colors ${
            resourceId === numResources - 1
              ? "text-gray-300"
              : "text-gray-700 hover:bg-gray-200"
          }`}
          aria-label="Next"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    );
}