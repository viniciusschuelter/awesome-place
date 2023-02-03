import type { GetServerSideProps } from 'next';

import { Meta } from '@/layouts/Meta';
import type {
  AwesomePlaceDataResponse,
  CitiesInterface,
} from '@/models/awesome-place.model';
import { Main } from '@/templates/Main';

import { getAwesomePlaceList } from '../../lib/awesome-place-data';

const Index = (props: AwesomePlaceDataResponse) => {
  console.log(props.cities?.length);

  return (
    <Main
      meta={
        <Meta
          title="Next.js Boilerplate Presentation"
          description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
        />
      }
    >
      <ul className="">
        {props?.cities?.slice(0, 10).map((city: CitiesInterface) => (
          <li key={city.name}>
            <article>{city.name}</article>
          </li>
        ))}
      </ul>
    </Main>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const data: AwesomePlaceDataResponse = await getAwesomePlaceList();
  console.log(data.cities?.length);
  return { props: { data } };
};

export default Index;
