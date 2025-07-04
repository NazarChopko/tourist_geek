import { type FC } from 'react';

import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api';
import InfoWindowContent from './InfoWindowContent';

import style from './index.module.css';

type MyMapProps = {
  listOfCords: {
    lat: number;
    lng: number;
    activityId: number;
    name: string;
    adress: string;
  }[];
  activeMarkerID: number | null;
};

const containerStyle = {
  width: '100%',
  height: '100%'
};

const GM_KEY = import.meta.env.VITE_GOGLE_MAP_KEY;

const MyMap: FC<MyMapProps> = ({ listOfCords, activeMarkerID }) => {
  const { isLoaded } = useJsApiLoader({
    id: GM_KEY,
    googleMapsApiKey: GM_KEY
  });

  const activeCords = listOfCords.find((cord) => cord.activityId === activeMarkerID) || { lat: 0, lng: 0 };

  const options = {
    markerProps: (cord: MyMapProps['listOfCords'][0]) => {
      const isActive = cord.activityId === activeMarkerID;
      return {
        position: { lat: cord.lat, lng: cord.lng },
        icon: {
          url: isActive ? '/images/active.png' : '/images/inactive.png',
          scaledSize: isActive ? new window.google.maps.Size(60, 60) : new window.google.maps.Size(40, 40)
        }
      };
    },
    mapProps: {
      mapContainerStyle: containerStyle,
      center: listOfCords.length
        ? {
            lat: activeMarkerID ? activeCords!.lat : listOfCords[0].lat,
            lng: activeMarkerID ? activeCords!.lng : listOfCords[0].lng
          }
        : {
            lat: 0,
            lng: 0
          },
      zoom: activeMarkerID ? 15 : 13.5
    }
  };

  return (
    <div className={style.wrapper}>
      {listOfCords.length ? (
        isLoaded && (
          <GoogleMap {...options.mapProps}>
            {listOfCords.map((cord) => (
              <Marker {...options.markerProps(cord)} key={cord.lat}>
                {activeMarkerID === cord.activityId && (
                  <InfoWindow>
                    <InfoWindowContent name={cord.name} adress={cord.adress} />
                  </InfoWindow>
                )}
              </Marker>
            ))}
          </GoogleMap>
        )
      ) : (
        <p className={style.warningMessage}>You have no activities!</p>
      )}
    </div>
  );
};

export default MyMap;
