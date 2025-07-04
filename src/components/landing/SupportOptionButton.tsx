"use client";
import { useContext } from "react";
import { CurrentResourceContext } from "../CurrentResourceProvider";
import { Tag } from "@/types/filters";
import { Resource } from "@/types/resources";

export interface SupportOption {
  emoji: string;
  label: string;
  tag: Tag;
  color: string;
}

export default function SupportOptionButton({ supportOption }: { supportOption: SupportOption }) {
  const ctx = useContext(CurrentResourceContext);
  const addFilter = ctx?.addFilter;

  const handleOptionClick = (option: SupportOption) => {
    addFilter?.({ key: `${option.label}`, name: `${option.emoji} ${option.label}`, predicate: (r: Resource) => r.tags.includes(option.tag), isDefault: false });
  };


  return (
    <div
      onClick={() => handleOptionClick(supportOption)}
      className="bg-white border rounded-xl shadow-sm p-4 flex flex-col items-center justify-center hover:shadow-md transition cursor-pointer"
    >
      <div className={`w-14 h-14 flex items-center justify-center rounded-full text-3xl ${supportOption.color}`}>{supportOption.emoji}</div>
      <p className="mt-2 font-medium text-center">{supportOption.label}</p>
    </div>
  );
}