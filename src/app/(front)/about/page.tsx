import Link from "next/link";

// http://localhost:3000/about
export default function AboutPage() {
  return (
    <div>
      <p>About Us</p>
      <Link href="/">Home</Link> 
    </div>
  );
}