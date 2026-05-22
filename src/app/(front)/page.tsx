import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      {/* Prefetched when the link is hovered or enters the viewport */}
       <Link href="/">Home</Link> | <Link href="/about">About Us</Link> | <Link href="/sign-in">SignIn</Link>
    </div>
  );
}
