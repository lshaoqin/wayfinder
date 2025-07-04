import { Resource } from "@/types/resources";
import opening_hours from "opening_hours";
import { Card } from "../ui/card";

export default function ResourceDetailsSection({ resource }: { resource: Resource}) {
  const hours = new opening_hours(resource.opening_hours);

const DAY_MAP: Record<string, string> = {
  mo: "Monday",
  tu: "Tuesday",
  we: "Wednesday",
  th: "Thursday",
  fr: "Friday",
  sa: "Saturday",
  su: "Sunday",
};

function prettifyOpeningHours(str: string) {
  // Replace day abbreviations with full names, case-insensitive
  return str.replace(/\b(mo|tu|we|th|fr|sa|su)\b/gi, (match) => {
    const lower = match.toLowerCase();
    return DAY_MAP[lower] || match;
  });
}

const googleMapsUrl = resource.location
    ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(resource.location)}`
    : "#";
  return (
    <Card className="w-full max-w-md p-4">
      <div className="flex flex-col">
        <h2 className="text-lg font-semibold">Opening Hours</h2>
          <div className="flex items-baseline gap-2">
            <p className="text-gray-700">{prettifyOpeningHours(resource.opening_hours)}</p>
            {hours.getState() && 
              <p className="text-green-600">(Open!)</p>
            }
          </div>
      </div>
      {resource.location && (
      <div className="flex flex-col">
        <h2 className="text-lg font-semibold mt-4">Address</h2>
        <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-500 underline hover:text-amber-700"
          >
            {resource.location}
          </a>
      </div>
        )}
    {resource.short_programme_description && (
      <div className="mt-4">
        <p className="text-gray-700">{resource.short_programme_description}</p>
      </div>
    )}
    </Card>
  );
}