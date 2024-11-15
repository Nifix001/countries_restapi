// app/CountryPage/[country]/page.tsx

"use client";
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import CountryPage from '@/components/CountryPage';

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

const CountryDetails = () => {
  const router = useRouter();
  const { country } = useParams();
  const [countryData, setCountryData] = useState<CountryData | null>(null);

  useEffect(() => {
    if (country) {
      fetch(`https://restcountries.com/v3.1/name/${country}`)
        .then((response) => response.json())
        .then((data) => {
          if (data && data.length > 0) {
            const countryInfo = data[0];
            setCountryData({
              flag: countryInfo.flags.svg,
              name: countryInfo.name.common,
              nativeName:
                countryInfo.name.nativeName?.[Object.keys(countryInfo.name.nativeName)[0]]?.common ||
                countryInfo.name.common,
              population: countryInfo.population,
              region: countryInfo.region,
              subRegion: countryInfo.subregion,
              capital: countryInfo.capital?.[0] || "N/A",
              topLevelDomain: countryInfo.tld?.[0] || "N/A",
              currencies: Object.values(countryInfo.currencies || {}).map(
                (currency: any) => currency.name
              ),
              languages: Object.values(countryInfo.languages || {}),
              borders: countryInfo.borders || [],
            });
          }
        })
        .catch((error) => console.error("Error fetching country data:", error));
    }
  }, [country]);

  if (!countryData) return <p>Loading...</p>;

  return <CountryPage country={countryData} />;
};

export default CountryDetails;
