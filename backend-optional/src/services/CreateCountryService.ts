import { getRepository } from 'typeorm';

import Country from '../models/Country';

interface Request {
  id: string;
  name: string;
  flag: string;
  local: string;
  date: string;
}

class CreateCountryService {
  public async execute({
    id,
    name,
    flag,
    local,
    date,
  }: Request): Promise<Country> {
    const countryRepository = getRepository(Country);

    const country = countryRepository.create({
      id,
      name,
      flag,
      local,
      date,
    });

    await countryRepository.save(country);

    return country;
  }
}

export default CreateCountryService;
