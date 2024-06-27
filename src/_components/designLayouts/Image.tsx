// components/Image.tsx
import Image from 'next/image';

interface ImageProps {
  imgSrc: string;
  className?: string;
}

const image: React.FC<ImageProps> = ({ imgSrc, className }) => {
  return <Image className={className} src={imgSrc} alt={imgSrc} />;
};

export default image;
