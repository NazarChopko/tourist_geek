import tripInfo from '../mock/mock-trip.json';
import { type Trip } from '../common/types/trip';

export const getTrip = async (): Promise<Trip> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(tripInfo);
    }, 2000);
  });
};
