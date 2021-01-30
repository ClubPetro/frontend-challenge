import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

import api from '../services/api';

export interface Place {
  id: number;
  flag: string;
  country: string;
  local: string;
  meta: string;
}

interface PlaceContextData {
  places: Place[];
  handleRemovePlace(id: number): void;
  handleEditPlace(id: number): void;
}

const ContextOfPlaces = createContext({} as PlaceContextData);

export function PlacesProvider({ children }: PropsWithChildren<unknown>) {
  const [places, setPlaces] = useState<Place[]>([]);

  const getData = useCallback(async () => {
    const response = await api.get('places');

    setPlaces(response.data);
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  const handleEditPlace = useCallback(async id => {
    await api.put(`places/${id}`);
  }, []);

  const handleRemovePlace = useCallback(
    async id => {
      await api.delete(`places/${id}`);

      const placeRemoved = places.findIndex(place => place.id === id);

      const newPlaces = places;
      newPlaces.splice(placeRemoved, 1);

      setPlaces([...newPlaces]);
    },
    [places],
  );

  return (
    <ContextOfPlaces.Provider
      value={{ places, handleEditPlace, handleRemovePlace }}
    >
      {children}
    </ContextOfPlaces.Provider>
  );
}

export function usePlaces() {
  const context = useContext(ContextOfPlaces);

  if (!context) {
    throw new Error('usePlace must be within a PlaceProvider.');
  }

  return context;
}
