import { useQuery } from 'urql';

import { graphql } from './gql_gen';
import CountryItem from './countryItem';
import Skeleton from './skeleton';

const query = graphql(/* GraphQL */ `
  query allCountries {
    countryResolver {
      code
      name
      iso3
      dialCode
      defaultTimezone
      otpInAppEnabled
    }
  }
`);
function App() {
  const [{ data, fetching, error }, reexecuteQuery] = useQuery({ query });

  return (
    <>
      <div className="flex flex-col sm:flex-row md:items-center">
        <span>
          <svg width="80" height="30" viewBox="0 0 80 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 29.6296H80V0H0V29.6296ZM3.12048 26.3996H76.8801V3.23007H3.12048V26.3996ZM66.7141 22.5601H73.2313V7.07033H71.2651C67.1175 7.10189 63.219 8.72231 60.2885 11.6037C57.3196 14.5228 55.6859 18.4126 55.6859 22.5601H59.588C59.588 16.9535 63.8066 12.2507 69.3282 11.299V18.5207H66.7141V22.5601ZM58.3837 11.1088H52.9766V22.5601H49.0753V11.1088H44.1582V7.07031H58.3837V11.1088ZM35.9917 18.218C35.9917 14.311 39.0525 11.1395 42.7173 11.1088V7.07031C40.1765 7.09107 37.8112 8.03379 35.9917 9.6371V7.07031H32.0895V22.5601H35.9917V18.218ZM25.82 22.5602H29.7225V7.07036H25.82V22.5602ZM19.773 18.0269C22.7414 15.1077 24.3759 11.2179 24.3759 7.07034H20.473C20.473 12.6771 16.2553 17.3789 10.7328 18.3315V11.1098H13.3469V7.07034H6.83017V22.5602H8.79593C12.9438 22.5277 16.8423 20.9083 19.773 18.0269Z"
              fill="#212121"
            />
          </svg>
        </span>
        <div className="ml-4 mt-16 text-[20px] font-bold leading-8 tracking-[-0.2px] sm:mt-0 lg:ml-[10.0625rem]">
          Virta platform compatible countries
        </div>
      </div>
      <div className="mt-9 sm:mt-[5.125rem] md:flex md:flex-col md:items-center md:justify-center md:pl-0 xl:block  xl:pl-[16rem]">
        <main className="">
          <h1 className="hidden h-[8rem] text-[54px] font-bold leading-[65px] tracking-[-0.6px] sm:block">
            Compatible countries
          </h1>
          {error && (
            <div data-testid="country-list-error" className="inline-block bg-red-100 p-3">
              There was a problem processing your request. Please{' '}
              <button className="text-red-base" onClick={() => reexecuteQuery()}>
                retry.{' '}
              </button>
            </div>
          )}
          {!error && (
            <ul className="mt-8 md:w-[38rem]" data-testid="country-list">
              {fetching && <Skeleton />}
              {data?.countryResolver?.map((country) => {
                if (!country) {
                  return null;
                }

                return <CountryItem key={country?.code} country={country} />;
              })}
            </ul>
          )}
        </main>
      </div>
    </>
  );
}

export default App;
