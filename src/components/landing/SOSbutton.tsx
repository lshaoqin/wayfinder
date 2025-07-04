import { Button } from "@/components/ui/button";

export default function SOSbutton() {
  return (
    <div className="flex justify-center mb-10">
      <Button
        variant="destructive"
        asChild
        className="max-w-xs w-full justify-center"
      >
        <a href="tel:1767">
          Need Help Now? Call 1767
        </a>
      </Button>
    </div>

  );
}
