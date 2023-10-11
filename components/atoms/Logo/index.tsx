import { Image, Link } from '@chakra-ui/react';

export function Logo() {
  return (
    <Link href="/">
      <Image src="/logo.svg" alt="Logo" />
    </Link>
  );
}
