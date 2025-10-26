import { FC } from 'react';
import { IconBaseProps } from 'react-icons';
import { StyledImage } from './Icon.styles';

type LocalIconProps = {
  type: 'local';
  src: string;
  size?: number;
  color?: string;
  alt?: string;
};

type LibraryIconProps = {
  type: 'library';
  icon: React.ComponentType<IconBaseProps>;
  size?: number;
  color?: string;
};

type IconProps = LocalIconProps | LibraryIconProps;

export const Icon: FC<IconProps> = (props) => {
  const { size = 24, color } = props;

  if (props.type === 'local') {
    return <StyledImage src={props.src} alt={props.alt || 'icon'} width={size} height={size} />;
  }

  const IconComponent = props.icon;
  return <IconComponent size={size} color={color} />;
};
