import { FC } from 'react';
import './styles.scss';

interface Props {
  children: React.ReactNode;
  style?: object;
  otherProps?: object;
}

export const Container: FC<Props> = ({ children, style, otherProps }) => {
  return (
    <div className="Container" style={style} {...otherProps}>
      {children}
    </div>
  );
};