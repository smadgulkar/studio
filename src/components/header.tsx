import Link from 'next/link';
import { Package2 } from 'lucide-react';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-auto flex items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Package2 className="h-6 w-6 text-primary" />
            <span className="font-bold font-headline text-lg">Unitravco</span>
          </Link>
        </div>
        <nav className="hidden items-center space-x-6 text-sm font-medium md:flex">
          <Link href="#services" className="transition-colors hover:text-primary">
            Services
          </Link>
          <Link href="#testimonials" className="transition-colors hover:text-primary">
            Testimonials
          </Link>
          <Link href="#contact" className="transition-colors hover:text-primary">
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  );
}
