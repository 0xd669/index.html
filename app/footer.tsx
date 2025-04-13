import Link from 'next/link';

export function Footer() {
  return (
    <footer className="mt-4 sm:mt-20">
      <p className="mt-4 text-center text-sm opacity-50">
        &copy; {new Date().getFullYear()}.{' '}
        <Link
          href="/"
          aria-label="홈으로 돌아가기"
          className="no-underline hover:underline"
        >
          황성현
        </Link>
        . All rights reserved.
      </p>
    </footer>
  );
}
