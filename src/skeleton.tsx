import Image from '@carbon/icons-react/es/Image';
import CheckmarkFilled from '@carbon/icons-react/es/CheckmarkFilled';

function Skeleton({ count = 4 }: { count?: number }) {
  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <li key={index} className="mb-2 flex bg-white md:h-16" data-testid="skeleton-item">
          <span className={'my-2 w-1 rounded-r-lg bg-gray-200'} />
          <div className="my-2 mx-4 flex w-full items-center">
            <div className="flex w-0 flex-1 gap-4">
              <div className="flex w-6 flex-none basis-[24px] items-center">
                <Image width="21px" height="15px" />
              </div>
              <div className="flex flex-1 flex-col md:flex-row md:items-center md:justify-between">
                <div className="flex flex-col">
                  <div className="my-1 mb-2.5 h-2.5 w-28 rounded-full bg-gray-300 dark:bg-gray-600"></div>
                  <div className="my-1 h-2 w-32 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                </div>
                <div className="my-1 h-2 w-40 rounded-full bg-gray-200 dark:bg-gray-700"></div>
              </div>
              <div className="flex flex-none basis-[24px] items-center">
                <CheckmarkFilled width="21px" height="21px" className="text-gray-200" />
              </div>
            </div>
          </div>
        </li>
      ))}
    </>
  );
}

export default Skeleton;
