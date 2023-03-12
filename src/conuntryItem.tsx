import clsx from 'clsx';
import CheckmarkFilled from '@carbon/icons-react/es/CheckmarkFilled';
import Flags, { FlagComponent } from 'country-flag-icons/react/3x2';
import { Country as CountryType } from './gql_gen/graphql';

type CountryDetailsProps = {
  country: CountryType;
};

type AllFlags = { [k: string]: FlagComponent };
const AllFlags: AllFlags = Flags;

function CountryItem({ country = {} }: CountryDetailsProps) {
  const { code, name, iso3, defaultTimezone, otpInAppEnabled } = country;

  if (!code) {
    return null;
  }
  const Flag = code ? AllFlags[code] : () => null;

  return (
    <li key={code} className="mb-2 flex bg-white md:h-16">
      <span
        className={clsx('my-2 w-1 rounded-r-lg', {
          'bg-green-base': otpInAppEnabled,
          'bg-red-base': !otpInAppEnabled,
        })}
      />
      <div className="my-2 mx-4 flex w-full items-center">
        <div className="flex w-0 flex-1 gap-4">
          <div className="flex w-6 flex-none basis-[24px] items-center">
            <Flag width="21px" height="15px" preserveAspectRatio="xMidYMid meet" />
          </div>
          <div className="flex flex-1 flex-col md:flex-row md:items-center md:justify-between">
            <div className="flex flex-col">
              <span className="text-left text-base leading-6 text-graphite"> {name}</span>
              <span className="text-left text-sm leading-6 text-gray-72">Timezone {defaultTimezone}</span>
            </div>
            <div className="text-gray-72">Conuntry code: ({iso3 || 'XXX'})</div>
          </div>
          <div className="flex flex-none basis-[24px] items-center">
            <CheckmarkFilled
              width="21px"
              height="21px"
              className={clsx({ 'text-green-base': otpInAppEnabled, 'text-red-base': !otpInAppEnabled })}
            />
          </div>
        </div>
      </div>
    </li>
  );
}

export default CountryItem;
