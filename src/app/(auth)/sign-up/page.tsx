// http:localhost:3000/sign-up
// ไม่เอา (auth) มาเป็น url
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function SignUpPage() {
  return (
    <section className="w-full max-w-md rounded-lg border p-6">
    <h1 className="mb-4 text-3xl font-bold text-sky-500">Register</h1>
      <Button asChild variant="link">
         <Link href="/">Back to Home</Link> 
      </Button>
    </section>
  );
}