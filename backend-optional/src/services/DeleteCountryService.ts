import { getRepository } from 'typeorm';

import Country from '../models/Country';
import AppError from '../errors/AppError';

interface Request {
  id: string;
}

class DeleteCountryService {
  public async execute({ id }: Request): Promise<void> {
    const countryRepository = getRepository(Country);

    const country = await countryRepository.findOne(id);

    if (!country) {
      throw new AppError('this country does not exist.');
    }

    await countryRepository.delete(country);
  }
}

export default DeleteCountryService;
