"use client";
import { useContext } from "react";
import { CurrentResourceContext } from "@/components/CurrentResourceProvider";
import { Button } from "@/components/ui/button";
import { Home, Search } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export default function Header() {
  const ctx = useContext(CurrentResourceContext);
  const reset = ctx?.reset;

  const handleResetClick = () => {
    reset?.();
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white flex justify-between items-center py-2 px-4 border-b shadow-sm">
      <div onClick={handleResetClick} className="flex items-center gap-2 cursor-pointer">
        <Avatar
          className="w-8 h-8 flex items-center justify-center rounded-full text-lg bg-primary text-primary-foreground font-bold"
        >
          <AvatarImage src={`https://cdn.rafled.com/anime-icons/images/9ab25c9084ff6f2c9be46f81e74df025f047aaf06d237b9f0c652af1cc5abc43.jpg`} alt={`Wayfinder`} />
          <AvatarFallback>W</AvatarFallback>
        </Avatar>
        <h1 className="text-lg font-bold text-gray-700">Wayfinder</h1>
      </div>
      <div className="flex gap-2">
        <Button 
          onClick={handleResetClick} 
          variant="ghost" 
          size="icon" 
          className="h-8 w-8"
        >
          <Home className="h-4 w-4" />
        </Button>
        <Button 
          variant="ghost" 
          size="icon"
          className="h-8 w-8"
        >
          <Search className="h-4 w-4" />
        </Button>
      </div>
    </header>
  );
}
