// components/CountryPage.tsx
"use client";

import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';

interface CountryData {
  flag: string;
  name: string;
  nativeName: string;
  population: number;
  region: string;
  subRegion: string;
  capital: string;
  topLevelDomain: string;
  currencies: string[];
  languages: string[];
  borders: string[];
}

const CountryPage = ({ country }: { country: CountryData }) => {
  const router = useRouter();

  return (
    <div className="container mx-auto px-4 py-2">
      <button
        onClick={() => router.back()}
        className="flex items-center space-x-2 dark:bg-[#2B3844] dark:text-white text-black px-4 py-2 rounded-md shadow-md "
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back</span>
      </button>

      <div className="mt-12 flex flex-col lg:flex-row gap-16">
        <img src={country.flag} alt={`${country.name} flag`} className="w-full lg:w-1/2 object-cover shadow-md" />

        <div className="w-full lg:w-1/2 space-y-4">
          <h2 className="text-3xl font-semibold">{country.name}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p><strong>Native Name:</strong> {country.nativeName}</p>
              <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
              <p><strong>Region:</strong> {country.region}</p>
              <p><strong>Sub Region:</strong> {country.subRegion}</p>
              <p><strong>Capital:</strong> {country.capital}</p>
            </div>
            <div>
              <p><strong>Top Level Domain:</strong> {country.topLevelDomain}</p>
              <p><strong>Currencies:</strong> {country.currencies.join(', ')}</p>
              <p><strong>Languages:</strong> {country.languages.join(', ')}</p>
            </div>
          </div>

          {country.borders && (
            <div className="mt-6">
              <p className="font-semibold">Border Countries:</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {country.borders.map((border) => (
                  <span key={border} className="dark:bg-[#2B3844] dark:text-white text-black px-3 py-1 rounded-md shadow-md">
                    {border}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CountryPage;
