"use client";

import { useEffect, useState } from 'react';
import CountryCard from '../components/CountryCard';
import { Country } from '../types';
import { fetchCountries } from '../utils/fetchCountries';

const HomePage = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [search, setSearch] = useState('');
  const [region, setRegion] = useState('');

  // Use the fetchCountries utility function
  useEffect(() => {
    const loadCountries = async () => {
      try {
        const countriesData = await fetchCountries();
        setCountries(countriesData);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };
    loadCountries();
  }, []);

  const filteredCountries = countries.filter(country =>
    country.name.toLowerCase().includes(search.toLowerCase()) &&
    (region === '' || country.region === region)
  );

  return (
    <div className="min-h-screen text-white p-6">
      <div className="flex flex-col md:flex-row justify-between mb-6 ">
        <input
          type="text"
          placeholder="Search for a country..."
          className="w-full md:w-2/5 px-4 py-2 rounded-md shadow-lg bg-white dark:bg-dark-blue-elements text-very-dark-blue-text dark:text-white-text placeholder-dark-gray-input dark:placeholder-white-text transition-colors duration-300 "
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        
        <select
          className="bg-white text-gray-900 dark:bg-dark-blue-elements dark:text-white-text shadow-lg overflow-hidden transition-colors duration-300 rounded-md p-3 mt-4 md:mt-0 w-1/2 md:w-1/5"
          value={region}
          onChange={(e) => setRegion(e.target.value)}
        >
          <option value="">Filter by Region</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredCountries.map((country) => (
          <CountryCard key={country.name} country={country} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
