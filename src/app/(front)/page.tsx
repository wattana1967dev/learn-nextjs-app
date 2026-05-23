import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HomePage() {
  return (
    <section>
       {/* Prefetched when the link is hovered or enters the viewport */}
      <h1 className="mb-4 text-3xl font-bold">HomePage</h1>

      <div className="flex gap-3">
        <Button asChild>
          <Link href="/about">About Us</Link>
        </Button>

        <Button asChild variant="outline">
          <Link href="/sign-in">Login</Link>
        </Button>
      </div>
    </section>
  );
}
