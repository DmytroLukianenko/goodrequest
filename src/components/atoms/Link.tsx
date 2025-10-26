import { FC, ReactNode } from 'react';
import { StyledLink } from './Link.styles';

type LinkProps = {
  href: string;
  children: ReactNode;
};

export const Link: FC<LinkProps> = ({ href, children }) => {
  return <StyledLink href={href}>{children}</StyledLink>;
};
