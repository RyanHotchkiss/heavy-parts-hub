'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const LanguageSwitcher = () => {
  const pathname = usePathname();

  // Remove the language prefix (e.g., /en or /es) from the current path
  const cleanPath = pathname.replace(/^\/(en|es)/, '');

  return (
    <div>
      <Link href={`/en${cleanPath}`}>English</Link> |{' '}
      <Link href={`/es${cleanPath}`}>Español</Link>
    </div>
  );
};

export default LanguageSwitcher;