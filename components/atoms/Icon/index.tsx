import { Badge, Box, BoxProps } from '@chakra-ui/react';

interface IconProps extends BoxProps {
  width?: string;
  height?: string;
  className?: string;
}

export const HamburgerMenuIcon = ({ width = '32px', height = '32px', className, ...props }: IconProps) => (
  <Box
    as="svg"
    width={width}
    height={height}
    className={className}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect opacity="0.01" width="32" height="32" fill="#FF963C" />
    <path d="M3 8H29" stroke="#FF963C" strokeWidth="3" />
    <path d="M3 16H29" stroke="#FF963C" strokeWidth="3" />
    <path d="M3 24H29" stroke="#FF963C" strokeWidth="3" />
  </Box>
);

export const InformationIcon = ({ width = '32px', height = '32px', className, ...props }: IconProps) => (
  <Box
    as="svg"
    width={width}
    height={height}
    className={className}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect opacity="0.01" width="32" height="32" fill="#FF963C" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M28.5 25.2975H16.0722L8.07178 31V25.2975H3.5V3H28.5V25.2975H28.5ZM26.2142 5.27186H5.78577V23.0256H10.3576V26.5755L15.3374 23.0256H26.2142V5.27186ZM17.3634 13.391V19.9249H14.7335V13.391H17.3634ZM16.048 11.4314C16.9555 11.4314 17.6913 10.6998 17.6913 9.79798C17.6913 8.896 16.9555 8.16444 16.048 8.16444C15.1405 8.16444 14.4044 8.89601 14.4044 9.79798C14.4044 10.6998 15.1405 11.4314 16.048 11.4314Z"
      fill="#FF963C"
    />
  </Box>
);

export const MedalIcon = ({ width = '32px', height = '32px', className, ...props }: IconProps) => (
  <Box
    as="svg"
    width={width}
    height={height}
    className={className}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect opacity="0.01" width="32" height="32" fill="#FF963C" />
    <g clipPath="url(#clip0_41637_391)">
      <path
        d="M11.2523 14.468L10.44 15.0223C10.9593 15.7839 11.6219 16.4266 12.3809 16.9232L12.919 16.0993C12.2667 15.6732 11.6983 15.1201 11.2523 14.468Z"
        fill="#FF963C"
      />
      <path
        d="M14.7857 5.71515C15.1977 5.62921 15.6062 5.58795 16.01 5.58795C16.3806 5.58795 16.7466 5.62213 17.1032 5.68915L17.2845 4.7229C16.8679 4.64532 16.4419 4.604 16.01 4.604C15.5402 4.604 15.0623 4.65228 14.5858 4.75116L14.567 4.75592L14.7695 5.71747L14.7857 5.71515Z"
        fill="#FF963C"
      />
      <path
        d="M12.8181 6.46692L12.2625 5.65601C11.5022 6.17615 10.8596 6.83887 10.364 7.59803L11.188 8.13587C11.6128 7.48377 12.166 6.91297 12.8181 6.46692Z"
        fill="#FF963C"
      />
      <path
        d="M10.2739 11.2433C10.2739 10.8714 10.3091 10.5042 10.3762 10.1452L9.41013 9.96399C9.33103 10.3818 9.29001 10.8091 9.29001 11.2433C9.29001 11.7141 9.33811 12.1908 9.4382 12.6686L9.44064 12.6804L10.4033 12.4791L10.4008 12.4686C10.3149 12.0566 10.2739 11.647 10.2739 11.2433V11.2433Z"
        fill="#FF963C"
      />
      <path
        d="M17.2145 16.8912C16.8024 16.9772 16.3939 17.0183 15.9904 17.0183C15.6161 17.0183 15.2465 16.9831 14.8864 16.9147L14.704 17.881C15.123 17.9599 15.5539 18.0011 15.9904 18.0011C16.4599 18.0011 16.9367 17.9528 17.4145 17.854L17.4203 17.8527L17.2201 16.89L17.2145 16.8912Z"
        fill="#FF963C"
      />
      <path
        d="M22.5614 9.83667L22.5568 9.81299L21.594 10.0166L21.5986 10.0378C21.6846 10.4486 21.7258 10.8581 21.7258 11.2618C21.7258 11.6385 21.6893 12.0093 21.621 12.3706L22.5874 12.5542C22.6674 12.1328 22.7085 11.7008 22.7085 11.2618C22.7085 10.7922 22.6616 10.3144 22.5614 9.83666V9.83667Z"
        fill="#FF963C"
      />
      <path
        d="M19.173 16.0415L19.7273 16.8536C20.4888 16.3346 21.1326 15.672 21.6292 14.9139L20.8066 14.375C20.3793 15.027 19.8262 15.5956 19.173 16.0415L19.173 16.0415Z"
        fill="#FF963C"
      />
      <path
        d="M20.742 8.02493L21.5531 7.46933C21.0317 6.70902 20.3678 6.06638 19.6086 5.57199L19.072 6.3959C19.7252 6.82083 20.2949 7.37277 20.742 8.02493Z"
        fill="#FF963C"
      />
      <path
        d="M19.3721 10.14L17.0416 9.80145L15.9996 7.69L14.9576 9.80145L12.627 10.14L14.3133 11.7838L13.9153 14.1044L15.9996 13.0087L18.0838 14.1044L17.6859 11.7838L19.3721 10.14Z"
        fill="#FF963C"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M26.1129 11.5726C26.1129 8.65613 24.9791 6.00561 23.1522 4.09534C22.1625 3.06079 20.9658 2.23926 19.634 1.70374C18.5047 1.2483 17.2798 1 16.001 1C14.712 1 13.4747 1.25293 12.3388 1.71558C11.0172 2.2522 9.83173 3.06787 8.84894 4.09534C7.02179 6.00562 5.888 8.65613 5.888 11.5726C5.888 14.4879 7.02179 17.1361 8.84894 19.0463C10.6761 20.9589 13.2112 22.144 16.001 22.144C18.7896 22.144 21.3249 20.9589 23.1522 19.0463C24.9791 17.1361 26.1129 14.4879 26.1129 11.5726ZM16.001 20.1774C13.7247 20.1774 11.6735 19.217 10.1796 17.6575C8.68902 16.0957 7.76934 13.9524 7.76934 11.5726C7.76934 9.19287 8.68902 7.04602 10.1796 5.48767C11.1534 4.47192 12.3624 3.70935 13.7191 3.3009C14.4417 3.08557 15.2084 2.96789 16.001 2.96789C16.7812 2.96789 17.5366 3.07958 18.2514 3.29382C19.6193 3.69751 20.8406 4.46496 21.8214 5.48767C23.312 7.04602 24.2316 9.19287 24.2316 11.5726C24.2316 13.9524 23.312 16.0957 21.8214 17.6575C20.3273 19.217 18.2774 20.1774 16.001 20.1774H16.001Z"
        fill="#FF963C"
      />
      <path
        d="M8.73693 20.2418C8.5841 20.1181 8.42992 19.9957 8.28161 19.8639L8.28051 19.8675L8.26867 19.858L4.60461 27.7048L4.5 27.9861L4.63892 28.2061C4.73902 28.3592 4.90125 28.4499 5.08265 28.4499H5.16847L8.67006 27.3612L10.0552 30.6755C10.1413 30.8708 10.327 31.0003 10.5426 31.0003C10.7473 31.0003 10.9334 30.8803 11.0192 30.6943L13.8534 24.6259L14.6901 22.8429L14.6867 22.8416L14.6925 22.8275C12.4611 22.5097 10.4225 21.587 8.73695 20.2418L8.73693 20.2418Z"
        fill="#FF963C"
      />
      <path
        d="M24.5542 21.6375L23.7315 19.8686L23.7281 19.8709L23.7222 19.858C22.0745 21.3092 20.0335 22.3249 17.7903 22.7357C17.6324 22.764 17.4761 22.7958 17.3159 22.8169L17.3172 22.8204L17.303 22.824L20.9763 30.6943C21.062 30.8814 21.2481 31.0003 21.4529 31.0003C21.6685 31.0003 21.8543 30.8708 21.9402 30.6755L23.3255 27.3612L26.7598 28.4262L26.8408 28.4499H26.9129C27.094 28.4499 27.2564 28.3592 27.3565 28.2062L27.5003 27.9391L24.5542 21.6375Z"
        fill="#FF963C"
      />
    </g>
    <defs>
      <clipPath id="clip0_41637_391">
        <rect width="23.0002" height="30.0003" fill="white" transform="translate(4.5 1)" />
      </clipPath>
    </defs>
  </Box>
);

export const NoteIcon = ({ width = '32px', height = '32px', className, ...props }: IconProps) => (
  <Box
    as="svg"
    width={width}
    height={height}
    className={className}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect opacity="0.01" width="32" height="32" fill="#FF963C" />
    <path
      d="M29.549 10.6651L28.5569 9.67398C27.9561 9.07205 26.9812 9.07327 26.3792 9.67398L25.452 10.6025L28.6208 13.7712L29.549 12.8438C30.1499 12.242 30.1499 11.267 29.549 10.6651H29.549Z"
      fill="#FF963C"
    />
    <path d="M16.76 19.2868V22.4561H19.9294L27.7571 14.6284L24.5879 11.459L16.76 19.2868Z" fill="#FF963C" />
    <rect x="9.34717" y="9.93436" width="8.9516" height="1.49193" fill="#FF963C" />
    <rect x="9.34717" y="15.3984" width="8.9516" height="1.49193" fill="#FF963C" />
    <rect x="9.36633" y="20.8626" width="5.47042" height="1.49193" fill="#FF963C" />
    <path
      d="M22.5858 26.5985C22.5858 26.826 22.4027 27.0117 22.1775 27.0129H5.36658C5.14148 27.0117 4.9596 26.826 4.95838 26.5985V5.40259C4.9596 5.17407 5.14149 4.98828 5.36658 4.98718H22.1775C22.4027 4.98828 22.5858 5.17407 22.5858 5.40259V11.3897L24.5441 9.40253V5.40259C24.543 4.07593 23.4861 3.0011 22.1775 3H5.36658C4.05933 3.0011 3.00147 4.07593 3 5.40259V26.5985C3.00146 27.9252 4.05933 28.9989 5.36658 29H22.1775C23.4861 28.9989 24.543 28.7748 24.5441 27.4482V19.9488L22.5858 21.9359V26.5985Z"
      fill="#FF963C"
    />
  </Box>
);

export const CutleryIcon = ({ width = '56px', height = '56px', className, ...props }: IconProps) => (
  <Box
    as="svg"
    width={width}
    height={height}
    className={className}
    viewBox="0 0 56 56"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect opacity="0.01" width="56" height="56" fill="white" />
    <g clipPath="url(#clip0_0_172)">
      <g clipPath="url(#clip1_0_172)">
        <path
          d="M11.0234 46.2289C9.93441 47.316 9.93624 49.0846 11.0288 50.1788C12.123 51.2714 13.8917 51.2731 14.9805 50.1844L23.6829 41.4822L19.7255 37.525L11.0234 46.2289Z"
          fill="white"
        />
        <path
          d="M54.2807 13.3726L46.4311 21.2493L45.1201 19.9338L52.7092 11.7941L51.9738 11.0562L43.807 18.6162L42.494 17.3004L50.1175 9.19507L49.3244 8.39758L41.1828 15.9829L39.8698 14.6651L47.7191 6.78833L46.9351 6C46.9351 6 39.5451 11.8138 35.8966 14.8145C34.6176 15.8638 34.103 17.6404 34.2822 19.2911C34.528 21.523 34.7987 22.3888 33.895 23.2959L26.239 30.9764C16.4183 21.1179 5.66828 10.329 4.56159 9.23455C3.91059 8.59014 2.97761 8.59014 2.39313 9.17699C0.355648 11.2217 6.50775 23.4365 14.612 33.6746C16.3017 31.97 17.839 30.4364 17.839 30.4364L37.5219 50.1858C38.7396 51.4082 40.5119 51.1255 41.4466 50.1858H41.4483C42.5317 49.0988 42.5317 47.333 41.4483 46.2457C39.3655 44.156 35.0964 39.8683 30.1764 34.9273L37.8245 27.2522C38.7432 26.3307 39.5915 26.6134 41.8161 26.8742C43.4858 27.0705 45.3137 26.5666 46.3668 25.2544C49.3334 21.5481 55.0001 14.0928 55.0001 14.0928L54.2807 13.3726Z"
          fill="white"
        />
      </g>
    </g>
    <defs>
      <clipPath id="clip0_0_172">
        <rect width="53.0001" height="45" fill="white" transform="translate(2 6)" />
      </clipPath>
      <clipPath id="clip1_0_172">
        <rect width="53.0001" height="45" fill="white" transform="translate(2 6)" />
      </clipPath>
    </defs>
  </Box>
);

export const CupIcon = ({ width = '56px', height = '56px', className, ...props }: IconProps) => (
  <Box
    as="svg"
    width={width}
    height={height}
    className={className}
    viewBox="0 0 56 56"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect opacity="0.01" width="56" height="56" fill="white" />
    <g clipPath="url(#clip0_0_169)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M45 12.0464C42.7853 12.0464 40.9036 10.3071 40.9036 8H15.1486C15.1486 10.304 13.2163 12.0464 11 12.0464V14.6671H45V12.0464ZM12.7004 17.9999L17.9067 48H38.2008L43.3013 17.9999H12.7004ZM39.2861 21.3264L38.1519 28H17.954L16.8198 21.3264H39.2861ZM20.7872 44.6672L19.6532 38.0001H36.4528L35.3203 44.6672H20.7872Z"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="clip0_0_169">
        <rect width="34" height="40" fill="white" transform="translate(11 8)" />
      </clipPath>
    </defs>
  </Box>
);

export const CircularBorderIcon = ({ width = '181px', height = '181px', className, ...props }: IconProps) => (
  <Box
    as="svg"
    width={width}
    height={height}
    className={className}
    viewBox="0 0 181 181"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g filter="url(#filter0_d_0_94)">
      <path
        d="M90.5 181C40.598 181 0 140.402 0 90.5H3C3 138.748 42.252 178 90.5 178C138.748 178 178 138.748 178 90.5C178 42.252 138.748 3 90.5 3V0C140.402 0 181 40.598 181 90.5C181 140.402 140.402 181 90.5 181Z"
        fill="white"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_0_94"
        x={-6}
        y={-6}
        width={193}
        height={193}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset />
        <feGaussianBlur stdDeviation={3} />
        <feColorMatrix type="matrix" values="0 0 0 0 0.988235 0 0 0 0 0.454902 0 0 0 0 0 0 0 0 1 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_94" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_94" result="shape" />
      </filter>
    </defs>
  </Box>
);

export const ArrowUpIcon = ({ width = '48px', height = '48px', className, ...props }: IconProps) => (
  <Box
    as="svg"
    width={width}
    height={height}
    className={className}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M24 0.5C36.9787 0.5 47.5 11.0213 47.5 24C47.5 36.9787 36.9787 47.5 24 47.5C11.0213 47.5 0.5 36.9787 0.5 24C0.5 11.0213 11.0213 0.5 24 0.5Z"
      fill="white"
      fillOpacity="0.01"
      stroke="#777777"
    />
    <path
      d="M30.5853 28.042L24.0002 21.6579L17.4152 28.042L16.539 27.1925L24.0002 19.959L31.4615 27.1925L30.5853 28.042Z"
      fill="#777777"
    />
  </Box>
);

export const CrossIcon = ({ width = '32px', height = '32px', className, ...props }: IconProps) => (
  <Box
    as="svg"
    width={width}
    height={height}
    className={className}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect opacity="0.01" width={32} height={32} fill="#FF963C" />
    <path d="M7 7L26 26" stroke="#FF963C" strokeWidth={3} />
    <path d="M7 26L26 7" stroke="#FF963C" strokeWidth={3} />
  </Box>
);

export function NotificationIcon({ count }: { count: number }) {
  return (
    <Box position="relative">
      <NoteIcon />
      <Badge
        display="flex"
        justifyContent="center"
        alignItems="center"
        fontFamily="inter"
        variant="solid"
        position="absolute"
        top="0"
        right="0"
        bg="primary.500"
        color="white"
        borderRadius="full"
        w={4}
        h={4}
      >
        {count}
      </Badge>
    </Box>
  );
}
