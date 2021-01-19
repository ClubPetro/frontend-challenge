export interface Location {
  country: string
  place: string
  goal: string
  id: number
}

export interface UpdateLocation {
  country: string
  place: string
  goal: string
}

export const NEW_LOCATION: UpdateLocation = {
  country: '',
  place: '',
  goal: '',
}
