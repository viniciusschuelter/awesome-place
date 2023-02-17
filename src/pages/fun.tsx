import fun from '__mocks__/data/fun.json';

import CardCity from '@/components/CardCity';
import { Meta } from '@/layouts/Meta';
import type { CitiesInterface } from '@/models/awesome-place.model';
import type { AwesomePlacesState } from '@/store/slices';
import { Main } from '@/templates/Main';

const Fun = (props: AwesomePlacesState) => {
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
        {props?.fun
          ?.sort((a, b) => b.total_score - a.total_score)
          .slice(0, 10)
          .map((city: CitiesInterface) => (
            <CardCity key={city.slug} city={city}></CardCity>
          ))}
      </ul>
    </Main>
  );
};

export async function getServerSideProps() {
  return { props: { fun } };
}

export default Fun;
