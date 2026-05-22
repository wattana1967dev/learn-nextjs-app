// http://localhost:3000/about
import Link from "next/link";

export default function AboutPage() {
  return (
    <div>
      <p>About Us</p>
      <Link href="/">Home</Link> 
    </div>
  );
}