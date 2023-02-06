import type { CitiesInterface } from '@/models/awesome-place.model';
import { colorsByRating } from '@/utils/colors';

interface StatsValuesInterface {
  key: keyof CitiesInterface;
  label: string;
  classList: string;
  percent: number;
}

const CardStats = (props: { city: CitiesInterface }) => {
  const { city } = props;

  const statsValues: StatsValuesInterface[] = [
    {
      key: 'overall_score',
      label: 'Overall',
      classList: `h-4 rounded-full bg-${colorsByRating(city.overall_score)}`,
      percent: (city.overall_score / 5) * 100,
    },
    {
      key: 'cost_score',
      label: 'Cost',
      classList: `h-4 rounded-full bg-${colorsByRating(city.cost_score)}`,
      percent: (city.cost_score / 5) * 100,
    },
    {
      key: 'internet_score',
      label: 'Internet',
      classList: `h-4 rounded-full bg-${colorsByRating(city.internet_score)}`,
      percent: (city.internet_score / 5) * 100,
    },
    {
      key: 'total_score',
      label: 'Fun',
      classList: `h-4 rounded-full bg-${colorsByRating(city.total_score)}`,
      percent: (city.total_score / 5) * 100,
    },
    {
      key: 'safety_level',
      label: 'Safety',
      classList: `h-4 rounded-full bg-${colorsByRating(city.safety_level)}`,
      percent: (city.safety_level / 5) * 100,
    },
  ];

  return (
    <>
      {statsValues.map((stats: StatsValuesInterface) => (
        <div key={stats.key} className="mb-2 flex">
          <div className="w-24 text-sm font-bold leading-tight text-white">
            {stats.label}
          </div>
          <div className="h-4 w-full rounded-full bg-gray-200">
            <div
              className={stats.classList}
              style={{ width: `${stats.percent}%` }}
            ></div>
          </div>
        </div>
      ))}
    </>
  );
};

export default CardStats;
