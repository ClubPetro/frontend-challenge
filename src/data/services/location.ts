import axios from 'axios'
import { Location, UpdateLocation } from '../../domain/entities/location'

export async function listLocations(): Promise<Location[]> {
  return (await axios.get('http://localhost:3333/locations')).data
}

export async function addLocation(location: UpdateLocation): Promise<void> {
  return axios.post('http://localhost:3333/locations', location)
}

export async function deleteLocation(id: number): Promise<void> {
  return axios.delete(`http://localhost:3333/locations/${id}`)
}

export async function editLocation(location: Location): Promise<Location> {
  return axios.put(`http://localhost:3333/locations/${location.id}`, location)
}
