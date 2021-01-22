import { PropsWithChildren } from 'react';
import { PlacesProvider } from './usePlaces';

export default function AppProvider({ children }: PropsWithChildren<unknown>) {
  return <PlacesProvider>{children}</PlacesProvider>;
}
