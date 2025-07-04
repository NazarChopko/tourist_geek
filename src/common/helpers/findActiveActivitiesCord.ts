import { type Trip } from '../types/trip';

export default function findActiveActivitiesCord(data: Trip | null, activeDay: number | null) {
  return data?.days
    .find((day) => day.id === activeDay)
    ?.activities.map((activity) => ({
      lat: activity.coords.lat,
      lng: activity.coords.lng,
      activityId: activity.id,
      name: activity.name,
      adress: activity.adress
    }));
}
