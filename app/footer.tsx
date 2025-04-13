import Link from 'next/link';

export function Footer() {
  return (
    <footer className="mt-6">
      <div className="flex items-center justify-center gap-2 text-center">
        <Link href="https://substack.com/@0xd669">Substack</Link>
        <Link href="https://x.com/0xd669">Twitter</Link>
        <Link href="https://www.linkedin.com/in/0xd669/">LinkedIn</Link>
        <Link href="https://github.com/0xd669">GitHub</Link>
      </div>
    </footer>
  );
}
