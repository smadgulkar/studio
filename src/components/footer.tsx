import Link from 'next/link';
import { Globe, Twitter, Instagram, Facebook } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="container flex flex-col items-center justify-between gap-6 py-8 md:flex-row">
        <div className="flex flex-col items-center gap-4 md:flex-row md:gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <Globe className="h-6 w-6 text-primary" />
            <span className="font-bold font-headline text-lg">Unitravco</span>
          </Link>
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} Unitravco. All rights reserved.
          </p>
        </div>
        <div className="flex items-center space-x-1">
          <Link href="#" className="p-2 rounded-full text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors">
            <Twitter className="h-5 w-5" />
            <span className="sr-only">Twitter</span>
          </Link>
          <Link href="#" className="p-2 rounded-full text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors">
            <Instagram className="h-5 w-5" />
            <span className="sr-only">Instagram</span>
          </Link>
          <Link href="#" className="p-2 rounded-full text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors">
            <Facebook className="h-5 w-5" />
            <span className="sr-only">Facebook</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
