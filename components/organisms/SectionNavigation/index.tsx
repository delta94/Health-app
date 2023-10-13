import MyRecommendImg from '@/assets/images/MyRecommend-1.jpg';
import { SECTION_IDS } from '@/const/meals';
import { Box, Image, Text } from '@chakra-ui/react';
import { StaticImageData } from 'next/image';

const sectionItems = [
  {
    label: 'Body record',
    caption: '自分のカラダの記録',
    img: MyRecommendImg,
    section: SECTION_IDS.MyBodyRecord,
  },
  {
    label: 'My exercise',
    caption: '自分の運動の記録',
    img: MyRecommendImg,
    section: SECTION_IDS.MyExercise,
  },
  {
    label: 'My diary',
    caption: '自分の日記',
    img: MyRecommendImg,
    section: SECTION_IDS.MyDiary,
  },
];

interface NavigationButtonProps {
  img: StaticImageData;
  label: string;
  caption: string;
  section: string;
  onGotoSection: (id: string) => void;
}

const NavigationButton = ({ caption, img, label, section, onGotoSection }: NavigationButtonProps) => {
  const imgSrc = img.src;
  const handleClick = () => {
    onGotoSection(section);
  };

  return (
    <Box
      onClick={handleClick}
      title={label}
      aria-label={label}
      display="flex"
      alignItems="center"
      justifyContent="center"
      position="relative"
      w="full"
      overflow="hidden"
      bgColor="dark.600"
      borderColor="primary.300"
      borderWidth="24px"
      cursor="pointer"
      color="white"
    >
      <Image
        w="full"
        h="full"
        position="absolute"
        top={0}
        left={0}
        mixBlendMode="luminosity"
        opacity={0.2}
        alt={caption}
        src={imgSrc}
        maxW="full"
        objectFit="cover"
      />
      <Box position="relative">
        <Text
          textTransform="uppercase"
          mx="auto"
          display="block"
          fontFamily="inter"
          w="fit-content"
          lineHeight="30px"
          letterSpacing="0.13px"
          as="h4"
          color="primary.300"
          fontSize="25px"
        >
          {label}
        </Text>
        <Text
          textTransform="uppercase"
          mx="auto"
          fontFamily="hira"
          fontSize="14px"
          display="block"
          w="fit-content"
          lineHeight="30px"
          letterSpacing="0.13px"
          bgColor="primary.400"
          mt="10px"
          px="16px"
        >
          {caption}
        </Text>
      </Box>
    </Box>
  );
};

const SectionNavigation = ({ onGotoSection }: { onGotoSection: (id: string) => void }) => {
  return (
    <Box w="full" h="288px" display="flex" gap={12}>
      {sectionItems.map(item => (
        <NavigationButton onGotoSection={onGotoSection} key={item.section} {...item} />
      ))}
    </Box>
  );
};

export default SectionNavigation;
