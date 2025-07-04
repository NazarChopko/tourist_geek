import { type FC } from 'react';
import style from './index.module.css';
type InfoWindowContentProps = {
  name: string;
  adress: string;
};

const InfoWindowContent: FC<InfoWindowContentProps> = ({ name, adress }) => {
  return (
    <div className={style.infoWindow__wrapper}>
      <h2 className={style.title}>{name}</h2>
      <p className={style.description}>{adress}</p>
    </div>
  );
};

export default InfoWindowContent;
