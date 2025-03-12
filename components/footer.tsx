import Link from "next/link"
import { Terminal, Twitter, Github } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 font-bold text-lg mb-4">
              <Terminal className="h-5 w-5" />
              <span>next-freeports</span>
            </Link>
            <p className="text-muted-foreground max-w-md">
              A modern CLI tool to list and kill processes running on specific ports. No more port conflicts, just
              smooth development.
            </p>
            <div className="flex gap-4 mt-6">
              <Link
                href="https://x.com/ufraaaan"
                target="_blank"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>



        </div>

        <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Mohammed Ufraan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

