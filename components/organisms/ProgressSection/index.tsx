import { CircularProgress, CircularProgressLabel, Flex, Image } from '@chakra-ui/react';
import featuredImage from '@/assets/images/d01.jpg';

const ProgressSection = ({ className }: { className?: string }) => {
  return (
    <Flex h="312px" position="relative" justifyContent="center" alignItems="center" className={className}>
      <Image
        pos="absolute"
        top={0}
        left={0}
        alt="Progress img"
        width="full"
        height="full"
        objectFit="cover"
        src={featuredImage.src}
        maxW="full"
      />

      <CircularProgress
        filter="drop-shadow(0px 0px 6px #FC7400)"
        size={181}
        position="absolute"
        value={70}
        zIndex={2}
        thickness={3}
        color="white"
        trackColor="transparent"
      >
        <CircularProgressLabel color="white" fontSize="xl" fontWeight="bold">
          70%
        </CircularProgressLabel>
      </CircularProgress>
    </Flex>
  );
};

export default ProgressSection;
