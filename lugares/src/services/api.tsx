import { axiosInstance as request, apiCountries } from '../configs/axios'

interface CountryPropsInterface {
  country: string;
  flag?: string;
  local: string;
  meta: string;
}

export function getCountryAll() {
  return apiCountries.get('/all')
}

export function getLugaresAll() {
  return request({
    url: '/lugares',
    method: 'get'
  })
}

export function getCountryName(country: string) {
  return request({
    url: '/name/'+country,
    method: 'get'
  })
}

export function create(data: CountryPropsInterface) {
  return request({
    url: '/lugares',
    data,
    method: 'post'
  })
}

export function update(id: string, data: CountryPropsInterface) {
  return request({
    url: '/lugares/'+id,
    data,
    method: 'put'
  })
}

export function deleteLugaresId(id: string) {
  return request({
    url: '/lugares/'+id,
    method: 'delete'
  })
}

