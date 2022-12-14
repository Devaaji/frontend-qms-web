import NextImage from '../nextimage';
import LogoPindadLight from '../../../assets/images/png/logo.png';
import LogoPindadDark from '../../../assets/images/png/LogoWhite.png';
import { useColorMode } from '@chakra-ui/react';

const LogoPindad = ({ multiplySize = 1, responsive = false }) => {
  const baseWidth = 128 * multiplySize;
  const baseHeight = 88 * multiplySize;
  const { colorMode } = useColorMode();
  return (
    <NextImage
      src={colorMode === 'light' ? LogoPindadLight : LogoPindadDark}
      width={baseWidth}
      height={baseHeight}
      layout={responsive ? 'responsive' : undefined}
      priority
    />
  );
};

export default LogoPindad;
