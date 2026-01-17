import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="border-b">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-2 font-bold">
          <span className="rounded bg-primary px-2 py-1 text-white">CA</span>
          <span>MONK</span>
        </div>

        {/* Navigation */}
        <nav className="hidden gap-6 text-sm font-medium md:flex">
          <a href="#" className="hover:text-primary">Tools</a>
          <a href="#" className="hover:text-primary">Practice</a>
          <a href="#" className="hover:text-primary">Events</a>
          <a href="#" className="hover:text-primary">Job Board</a>
          <a href="#" className="hover:text-primary">Points</a>
        </nav>

        {/* Profile */}
        <Button size="sm">Profile</Button>
      </div>
    </header>
  );
}
