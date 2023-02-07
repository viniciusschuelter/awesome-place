import data from '__mocks__/data/data.json';

import CardCity from '@/components/CardCity';
import { Meta } from '@/layouts/Meta';
import type {
  AwesomePlaceDataResponse,
  CitiesInterface,
} from '@/models/awesome-place.model';
import { Main } from '@/templates/Main';

const Index = (props: AwesomePlaceDataResponse) => {
  return (
    <Main
      meta={
        <Meta
          title="Next.js Boilerplate Presentation"
          description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
        />
      }
    >
      <ul className="w-100 container mx-auto flex flex-wrap gap-3 lg:w-4/5">
        {props?.cities?.slice(0, 10).map((city: CitiesInterface) => (
          <CardCity key={city.slug} city={city}></CardCity>
        ))}
      </ul>
    </Main>
  );
};

export async function getServerSideProps() {
  return { props: { ...data } };
}

export default Index;
