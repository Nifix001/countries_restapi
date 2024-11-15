// components/CountryCard.tsx

import Link from 'next/link';
import { Country } from '../types';

interface Props {
  country: Country;
}

const CountryCard: React.FC<Props> = ({ country }) => {
  return (
    <Link href={`/CountryPage/${country.name}`}>
      <div className="bg-white dark:bg-dark-blue-elements shadow-lg rounded-lg overflow-hidden transition-colors duration-300">
        <img src={country.flags.png} alt={`${country.name} flag`} className="w-full h-40 object-cover" />
        <div className="p-4">
          <h2 className="text-black dark:text-white-text text-lg font-semibold mb-2">{country.name}</h2>
          <p className="text-gray-900 dark:text-white-text">
            <span className="font-semibold">Population:</span> {country.population.toLocaleString()}
          </p>
          <p className="text-gray-900 dark:text-white-text">
            <span className="font-semibold">Region:</span> {country.region}
          </p>
          <p className="text-gray-900 dark:text-white-text">
            <span className="font-semibold">Capital:</span> {country.capital}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CountryCard;
