import { ChevronLeft, ChevronRight } from "lucide-react";

type ScrollingTopToolbarProps = {
  resourceId: number;
  numResources: number;
  paginate: (direction: number) => void;
};

export default function ScrollingTopToolbar({ resourceId, numResources, paginate }: ScrollingTopToolbarProps) {
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