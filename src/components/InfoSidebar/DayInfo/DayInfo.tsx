import ActivityInfo from '../Activity';

import classNames from 'classnames';

import type { FC, MouseEvent } from 'react';
import { type Day } from '../../../common/types/trip';

import styles from './index.module.css';

type DayInfoProps = {
  dayInfo: Day;
  activeDay: number | null;
  onClick: (id: number) => void;
  onMouseEnter: (id: number) => void;
  onMouseLeave: () => void;
};

const DayInfo: FC<DayInfoProps> = ({ dayInfo, activeDay, onClick, onMouseEnter, onMouseLeave }) => {
  return (
    <li
      onClick={() => onClick(dayInfo.id)}
      className={classNames(styles.item, {
        [styles.activeItem]: activeDay === dayInfo.id
      })}
    >
      <span className={styles.title}>
        День {dayInfo.id} - {dayInfo.title}
      </span>
      {dayInfo.activities.length ? (
        <ul
          className={classNames(styles.dayList, {
            [styles.activeDay]: activeDay === dayInfo.id
          })}
        >
          {dayInfo.activities.map((activity) => (
            <li
              onMouseEnter={() => onMouseEnter(activity.id)}
              onMouseLeave={onMouseLeave}
              onClick={(e: MouseEvent<HTMLLIElement>) => e.stopPropagation()}
              className={styles.activiesItem}
              key={activity.id}
            >
              <ActivityInfo activity={activity} />
            </li>
          ))}
        </ul>
      ) : null}
    </li>
  );
};

export default DayInfo;
