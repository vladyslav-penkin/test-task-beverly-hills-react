import { FC } from 'react';
import './styles.scss';

interface Props {
  image: string;
  title: string;
  description: string
}

export const CardInfo: FC<Props> = ({ image, title, description }) => {
  return (
    <div className="CardInfo" key={title}>
      <img className="CardInfo_image" src={image} alt={title} />
      <h3 className="CardInfo_title">{title}</h3>
      <p className="CardInfo_description">{description}</p>
    </div>
  );
};