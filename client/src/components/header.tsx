
import Link from "next/link";
import { Layers3, LogIn } from "lucide-react";
import ThemeToggle from "@/components/theme-toggle";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-default bg-sidebar">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-white">
            <Layers3 size={21} />
          </span>

          <span className="text-xl font-bold tracking-tight text-text-primary">
            Relagraph<span className="text-primary">.</span>
          </span>
        </Link>

        <div className="flex items-center gap-3">
          <ThemeToggle />

          <Link
            href="/login"
            aria-label="Log in"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white transition-colors hover:bg-primary-hover"
          >
            <LogIn size={19} />
          </Link>
        </div>
      </nav>
    </header>
  );
}
