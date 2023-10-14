import { useEffect, useRef } from 'react';
import { ArrowUpIcon } from '../Icon';
import { Button } from '@chakra-ui/react';

const SCROLL_THRESHOLD = 250;

const ScrollButton = () => {
  const ref = useRef<HTMLButtonElement | null>(null);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    const onScroll = () => {
      const { current: buttonEl } = ref;

      if (!buttonEl) {
        return;
      }

      if (window.scrollY > SCROLL_THRESHOLD) {
        buttonEl.style.opacity = '1';
      } else {
        buttonEl.style.opacity = '0';
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <Button
      variant="unstyled"
      pos="fixed"
      right={24}
      bottom="30%"
      opacity="0"
      transition="opacity 0.3s ease"
      ref={ref}
      onClick={scrollToTop}
    >
      <ArrowUpIcon />
    </Button>
  );
};

export default ScrollButton;
