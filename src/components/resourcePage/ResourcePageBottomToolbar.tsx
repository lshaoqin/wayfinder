import { Button } from "@/components/ui/button";
import { Resource } from '@/types/resources';
import CommentLikes from '../comments/CommentLikes';
import GetStartedGuide from "./GetStartedGuide";
import { useState } from "react";

export default function ResourcePageBottomToolbar({
  resource
}: {
  resource: Resource | null;
}) {

  const [open, setOpen] = useState(false);
  if (!resource) return null;
  const content = resource.steps
  ? resource.steps
  : `
1. Go to the [website](${resource.get_started_website || "#"})
2. Click on **'Sign Up'**
3. Fill out your details and submit the form
`;

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 flex space-x-4 justify-between items-center px-4 py-3 bg-white/80 backdrop-blur-sm border-t shadow-lg w-full z-50">
        <div className="flex-1">
          {resource.get_started_website && (
            
              <Button
                className="w-full bg-blue-400 text-white hover:bg-blue-700"
                size="lg"
                onClick={() => setOpen(true)}
              >
                Get Started!
              </Button>
            
          )}
        </div>
        <CommentLikes likes={16} />
      </div>
      {open && <GetStartedGuide content={content} onClose={() => setOpen(false)} />}
    </>
  );
}
