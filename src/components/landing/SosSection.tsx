import { Phone } from "lucide-react";

export default function SosSection() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-red-50 border-t border-red-200 py-3 px-4 text-center text-sm z-50">
      <p className="text-gray-700 flex items-center justify-center">
        If you need help now, {" "}
        <a 
          href="tel:1767" 
          className="text-red-600 font-semibold inline-flex items-center hover:text-red-800 ml-1"
        >
          <Phone className="w-3 h-3 mr-1" /> call 1767
        </a>
      </p>
    </div>
  );
}
