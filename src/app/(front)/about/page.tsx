import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import Link from "next/link";

// http://localhost:3000/about
export default function AboutPage() {
  return (
    <section>
      <h1 className="mb-4 text-3xl font-bold text-sky-500">About Us</h1>
    
      <Spinner className="mb-4"/>

      <hr />
      <Button asChild variant="link">
         <Link href="/">Back to Home</Link> 
      </Button>
    </section>
  );
}