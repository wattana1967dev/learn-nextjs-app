// http:localhost:3000/sign-in
// ไม่เอา (auth) มาเป็น url
import Link from "next/link";

export default function SignInPage() {
  return (
    <main>
      Sign In Page
      <Link href="/">Home</Link>
    </main>
  );
}