import { type FC } from 'react';

import { type Trip } from '../../common/types/trip';
import style from './infoSidebar.module.css';
import DayInfo from './DayInfo';

type InfoSidebarProps = {
  data: null | Trip;
  activeDay: number | null;
  handleSetActiveDay: (id: number) => void;
  onMouseEnter: (id: number) => void;
  onMouseLeave: () => void;
};

const InfoSidebar: FC<InfoSidebarProps> = ({ data, activeDay, handleSetActiveDay, onMouseEnter, onMouseLeave }) => {
  return (
    <div className={style.wrapper}>
      <h1 className={style.title}>{data?.trip_title}</h1>
      {data?.days.length ? (
        <ul className={style.list}>
          {data.days.map((day) => (
            <DayInfo
              key={day.id}
              dayInfo={day}
              activeDay={activeDay}
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
              onClick={handleSetActiveDay}
            />
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default InfoSidebar;
