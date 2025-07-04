import { useState } from 'react';

import useGetDirection from '../../hooks/useGetDirection';
import MyMap from '../../components/Map';
import InfoSidebar from '../../components/InfoSidebar';
import AppLoader from '../../shared/AppLoader';
import findActiveActivitiesCord from '../../common/helpers/findActiveActivitiesCord';
import useHandleActiveMarker from '../../hooks/useHandleActiveMarker';

import styles from './index.module.css';

const DirectionInfoWidget = () => {
  const { isLoading, data } = useGetDirection();
  const { activeMarkerID, handleResetActiveMarkerId, handleSetActiveMarkerId } = useHandleActiveMarker();
  const [activeDay, setActiveDay] = useState<number | null>(1);

  const cords = findActiveActivitiesCord(data, activeDay);

  const handleSetActiveDay = (id: number) => {
    if (activeDay === id) {
      setActiveDay(null);
    } else {
      setActiveDay(id);
    }
  };

  return (
    <div className={styles.wrapper}>
      <AppLoader isLoading={isLoading}>
        <InfoSidebar
          data={data}
          handleSetActiveDay={handleSetActiveDay}
          activeDay={activeDay}
          onMouseEnter={handleSetActiveMarkerId}
          onMouseLeave={handleResetActiveMarkerId}
        />

        <MyMap listOfCords={cords || []} activeMarkerID={activeMarkerID} />
      </AppLoader>
    </div>
  );
};

export default DirectionInfoWidget;
