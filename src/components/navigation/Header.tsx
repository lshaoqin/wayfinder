"use client";
import { useContext } from "react";
import { CurrentResourceContext } from "@/components/CurrentResourceProvider";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { ViewType } from "@/types/views";
import { Button } from "../ui/button";
import { Filter } from "lucide-react";

export default function Header({ viewType, setViewType }: { viewType: ViewType; setViewType: (viewType: ViewType) => void }) {
  const ctx = useContext(CurrentResourceContext);
  const reset = ctx?.reset;

  const handleResetClick = () => {
    reset?.();
    setViewType(ViewType.Landing);
  };

  const handleFilterClick = () => {
    if (viewType === ViewType.Filters) {
      // If no filters are selected, return to landing view instead of resource list
      if (!ctx?.currentFilters || ctx.currentFilters.length === 0) {
        setViewType(ViewType.Landing);
      } else {
        setViewType(ViewType.ResourceList);
      }
    } else {
      setViewType(ViewType.Filters);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white flex justify-between items-center py-2 px-4 border-b shadow-sm">
      <div onClick={handleResetClick} className="flex items-center gap-2 cursor-pointer">
        <Avatar
          className="w-8 h-8 flex items-center justify-center rounded-full text-lg bg-primary text-primary-foreground font-bold"
        >
          <AvatarImage src="/photo_5989065684065302872_x.jpg" alt={`Wayfinder`} />
          <AvatarFallback>W</AvatarFallback>
        </Avatar>
        <h1 className="text-lg font-bold text-gray-700">Wayfinder</h1>
      </div>
      <Button
        onClick={handleFilterClick}
        className="text-gray-700 hover:text-gray-800 text-lg font-bold"
        aria-label="Filters"
        variant={viewType === ViewType.Filters ? "default" : "outline"}
      >
        <Filter className="w-5 h-5" />
      </Button>
    </header>
  );
}
