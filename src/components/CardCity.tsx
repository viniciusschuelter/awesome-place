import CardStats from '@/components/CardStats';
import type { CitiesInterface } from '@/models/awesome-place.model';
import { colorsByRating } from '@/utils/colors';

const CardCity = (props: { city: CitiesInterface }) => {
  const { city } = props;
  const ratingColor = `text-md font-semibold text-${colorsByRating(
    city.total_score
  )}`;
  // @ts-ignore
  return (
    <li className="wrapper sm:w-1/1 w-auto rounded-xl bg-gray-400 text-gray-900 md:w-1/2 lg:w-1/3 xl:w-1/4">
      <div className="group/img relative">
        <img
          className="w-full rounded-t-xl object-cover object-center shadow-md"
          src={city.image}
        />
        <div className="group/stats invisible absolute top-2 z-50 h-full w-full p-5 bg-blend-overlay group-hover/img:visible">
          <CardStats city={city} />
        </div>
      </div>

      <div className="relative -mt-16 px-4 pb-4">
        <div className="rounded-lg bg-white p-6 shadow-lg">
          <div className="flex items-baseline">
            <span className="inline-block rounded-full bg-teal-200 px-2 text-xs font-semibold tracking-wide text-teal-800">
              Rank #{city.rank}
            </span>
            <div className="ml-2 text-xs font-semibold uppercase tracking-wider text-gray-600">
              2 baths &bull; 3 rooms
            </div>
          </div>

          <h4 className="mt-1 truncate text-xl font-semibold leading-tight">
            {city.name} - {city.country}
          </h4>

          <div className="mt-1">
            ${city.cost_for_nomad_in_usd}
            <span className="text-sm text-gray-600"> /month</span>
          </div>
          <div className="mt-4">
            <span className={ratingColor}>
              {city.total_score.toFixed(2)}/5 ratings{' '}
            </span>
            <span className="text-sm text-gray-600">
              ({city.users_count_been} votes)
            </span>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CardCity;
