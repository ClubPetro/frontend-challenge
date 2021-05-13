import { Router } from 'express';
import { getRepository } from 'typeorm';

import CreateCountryService from '../services/CreateCountryService';
import UpdateCountryService from '../services/UpdateCountryService';
import DeleteCountryService from '../services/DeleteCountryService';
import Country from '../models/Country';

const countriesRouter = Router();

countriesRouter.post('/', async (request, response) => {
  const { id, name, flag, local, date } = request.body;

  const createCountry = new CreateCountryService();

  const country = await createCountry.execute({
    id,
    name,
    flag,
    local,
    date,
  });

  return response.status(201).json(country);
});

countriesRouter.get('/', async (request, response) => {
  const countryRepository = getRepository(Country);

  const countries = await countryRepository.find();

  return response.status(200).json(countries);
});

countriesRouter.patch('/:id', async (request, response) => {
  const { id } = request.params;
  const { local, date } = request.body;

  const updateCountry = new UpdateCountryService();

  const country = await updateCountry.execute({
    id,
    local,
    date,
  });

  return response.status(200).json(country);
});

countriesRouter.delete('/:id', async (request, response) => {
  const { id } = request.params;

  const deleteCountry = new DeleteCountryService();

  await deleteCountry.execute({ id });

  return response.status(204).send();
});

export default countriesRouter;
