import { ViewType } from "@/types/views";
import SosSection from "./SosSection";
import SupportGrid from "./SupportGrid";

export default function LandingView({ setViewType }: { setViewType: (viewType: ViewType) => void }) {
    return (
        <div>
        <div className="text-center m-10">
          <h2 className="text-xl font-semibold text-gray-800">What&apos;s hardest right now?</h2>
          <p className="text-sm text-gray-500 mt-1">Let&apos;s find resources that might help</p>
        </div>
        <SupportGrid setViewType={setViewType}/>
        <SosSection />
      </div>
  
    )
}