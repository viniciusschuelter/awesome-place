import cost from '__mocks__/data/cost.json';

import CardCity from '@/components/CardCity';
import { Meta } from '@/layouts/Meta';
import type { CitiesInterface } from '@/models/awesome-place.model';
import type { AwesomePlacesState } from '@/store/slices';
import { Main } from '@/templates/Main';

const Cost = (props: AwesomePlacesState) => {
  return (
    <Main
      meta={
        <Meta
          title="Top cost places"
          description="Top cost places choose by community."
        />
      }
    >
      <ul className="container mx-auto flex w-full flex-wrap gap-3 lg:w-4/5">
        {props?.cost
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
  return { props: { cost } };
}

export default Cost;
