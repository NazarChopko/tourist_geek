export type Trip = {
  trip_title: string;
  days: Day[];
};

export type Day = {
  id: number;
  title: string;
  activities: Activity[];
};

export type Activity = {
  id: number;
  name: string;
  description: string;
  adress: string;
  photo_url: string;
  coords: {
    lat: number;
    lng: number;
  };
};
