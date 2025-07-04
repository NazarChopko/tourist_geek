import { type FC } from 'react';
import { type Activity } from '../../../common/types/trip';

import styles from './index.module.css';

type ActivityProps = {
  activity: Activity | null;
};

const ActivityInfo: FC<ActivityProps> = ({ activity }) => {
  return (
    <>
      <p className={styles.title}>{activity?.name}</p>
      <img className={styles.image} src={activity?.photo_url} alt={activity?.name} loading="lazy" />
      <p className={styles.description}>{activity?.description}</p>
    </>
  );
};

export default ActivityInfo;
