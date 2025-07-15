import { AvatarImg } from "./styles";

interface AvatarProps {
  src: string;
  alt: string;
  title?: string;
}

export function Avatar({ src, alt, title }: Readonly<AvatarProps>) {
  return <AvatarImg src={src} alt={alt} title={title} />;
}
