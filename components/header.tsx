import { profile } from "@/data/profile";
import { ThemeToggle } from "./theme-toggle";

const NAV = [
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
] as const;

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-line/60 bg-bg/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-3xl items-center justify-between px-6">
        <a href="#top" className="font-serif text-xl tracking-tight text-fg">
          Riazul Islam
        </a>
        <nav aria-label="Primary" className="flex items-center gap-1 text-sm">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hidden rounded-full px-3 py-1.5 text-muted transition-colors hover:text-fg sm:block"
            >
              {item.label}
            </a>
          ))}
          <a
            href={profile.resume}
            className="rounded-full px-3 py-1.5 text-muted transition-colors hover:text-fg"
            download
          >
            CV ↓
          </a>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
