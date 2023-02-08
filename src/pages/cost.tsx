import data from '__mocks__/data/data.json';

import CardCity from '@/components/CardCity';
import { Meta } from '@/layouts/Meta';
import type {
  AwesomePlaceDataResponse,
  CitiesInterface,
} from '@/models/awesome-place.model';
import { Main } from '@/templates/Main';

const Cost = (props: AwesomePlaceDataResponse) => {
  return (
    <Main
      meta={
        <Meta
          title="Top cost places"
          description="Top cost places choose by community."
        />
      }
    >
      <ul className="w-100 container mx-auto flex flex-wrap gap-3 lg:w-4/5">
        {props?.cities
          ?.sort((a, b) => b.cost_score - a.cost_score)
          .slice(0, 10)
          .map((city: CitiesInterface) => (
            <CardCity key={city.slug} city={city}></CardCity>
          ))}
      </ul>
    </Main>
  );
};

export async function getServerSideProps() {
  return { props: { ...data } };
}

export default Cost;
