import { getRepository } from 'typeorm';

import Country from '../models/Country';
import AppError from '../errors/AppError';

interface Request {
  id: string;
  local: string;
  date: string;
}

class UpdateCountryServicer {
  public async execute({ id, local, date }: Request): Promise<Country> {
    const countryRepository = getRepository(Country);

    const country = await countryRepository.findOne(id);

    if (!country) {
      throw new AppError('this country does not exist.');
    }

    const updatedCountry = {
      ...country,
      local,
      date,
    };

    await countryRepository.save(updatedCountry);

    return updatedCountry;
  }
}

export default UpdateCountryServicer;
