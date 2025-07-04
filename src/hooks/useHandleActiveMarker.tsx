import { useState, useRef } from 'react';

const useHandleActiveMarker = () => {
  const [activeMarkerID, setActiveMarkerID] = useState<number | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleSetActiveMarkerId = (id: number) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      setActiveMarkerID(id);
    }, 120);
  };

  const handleResetActiveMarkerId = () => {
    setActiveMarkerID(null);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  return {
    activeMarkerID,
    handleSetActiveMarkerId,
    handleResetActiveMarkerId
  };
};

export default useHandleActiveMarker;
