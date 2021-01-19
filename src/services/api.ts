import axios from 'axios'
import { TravelsProps } from '../hooks/travels'

const api = axios.create({
  baseURL: 'http://localhost:1337',
})

const fetchTravels = async (): Promise<TravelsProps> => {
  try {
    const res = await api.get('/travels')

    return res.data
  } catch (err) {
    throw new Error(err)
  }
}

type Place = {
  country_name: string
  country_flag_url: string
  local: string
  target: string
}

const fetchAddTravel = async ({
  country_name,
  country_flag_url,
  local,
  target,
}: Place) => {
  try {
    const res = await api.post('/travels', {
      country_name,
      country_flag_url,
      local,
      target,
    })

    return res.data
  } catch (err) {
    throw new Error(err)
  }
}

const fetchRemoveTravel = async (id: number) => {
  try {
    const res = await api.delete(`/travels/${id}`)

    return res.data
  } catch (err) {
    throw new Error(err)
  }
}

type AttTravelProps = {
  id: number
  target: string
  local: string
}

const fetchUpdateTravel = async ({ id, target, local }: AttTravelProps) => {
  try {
    const res = await api.patch(`/travels/${id}`, {
      local,
      target,
    })

    return res.data
  } catch (err) {
    throw new Error(err)
  }
}

export {
  api,
  fetchTravels,
  fetchAddTravel,
  fetchRemoveTravel,
  fetchUpdateTravel,
}
