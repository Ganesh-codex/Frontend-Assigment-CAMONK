export default function Footer() {
  return (
    <footer className="mt-16 bg-muted/40 border-t">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div>
            <h3 className="font-semibold">CA Monk</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Empowering the next generation of financial leaders with tools,
              community, and knowledge.
            </p>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-sm">Resources</h4>
            <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
              <li>Blog</li>
              <li>Webinars</li>
              <li>Case Studies</li>
            </ul>
          </div>

          {/* Platform */}
          <div>
            <h4 className="font-semibold text-sm">Platform</h4>
            <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
              <li>Job Board</li>
              <li>Practice Tests</li>
              <li>Mentorship</li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-semibold text-sm">Connect</h4>
            <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
              <li>LinkedIn</li>
              <li>Twitter</li>
              <li>Instagram</li>
            </ul>
          </div>
        </div>

        <p className="mt-8 text-center text-xs text-muted-foreground">
          © 2024 CA Monk. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
