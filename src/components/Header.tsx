import { type ReactNode } from "react";

type ImageType = {
  src: string;
  alt: string;
};
type HeaderType = {
    children:ReactNode,
    image:ImageType
};

function Header({ image, children }: HeaderType) {
  return (
    <header>
      <img {...image} />      
      {children}
    </header>
  );
}
export default Header;
