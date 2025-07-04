import { useState, useEffect } from 'react';
import { tripService } from '../services';
import { type Trip } from '../common/types/trip';

const useGetDirection = () => {
  const [data, setData] = useState<Trip | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const getTrip = async () => {
      try {
        setIsLoading(true);
        const trip = await tripService.getTrip();
        setData(trip);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    getTrip();
  }, []);

  return { isLoading, data };
};

export default useGetDirection;
