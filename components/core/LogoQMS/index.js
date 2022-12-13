import NextImage from "../nextimage";
import Logo from "../../../assets/images/jpg/LogoQMS.jpeg";

const LogoQMS = ({ multiplySize = 1, responsive = false }) => {
  const baseWidth = 128 * multiplySize;
  const baseHeight = 88 * multiplySize;
  return (
    <NextImage
      src={Logo}
      width={baseWidth}
      height={baseHeight}
      layout={responsive ? "responsive" : undefined}
      priority
    />
  );
};

export default LogoQMS;