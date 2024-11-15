// utils/fetchCountries.ts
import { Country } from '../types';

export const fetchCountries = async (): Promise<Country[]> => {
  const response = await fetch('https://restcountries.com/v3.1/all');
  const data = await response.json();

  const formattedData = data.map((country: any) => ({
    name: country.name.common,
    capital: country.capital ? country.capital[0] : 'N/A',
    population: country.population,
    region: country.region,
    flags: country.flags,
  }));

  // Sort countries alphabetically by name
  return formattedData.sort((a: Country, b: Country) =>
    a.name.localeCompare(b.name)
  );
};
