import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/modeToggle";
import { Typography } from "@/components/typography";
export default function Home() {
  return (
    <>
      <div className="p-4 flex flex-col gap-2 items-center justify-center content-center w-full">
        <div className="flex gap-2 items-center">
          <ModeToggle />
          <Button>Click me</Button>
        </div>
        <Typography />
      </div>
    </>
  );
}
