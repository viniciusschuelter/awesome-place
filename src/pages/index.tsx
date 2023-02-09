import data from '__mocks__/data/data.json';
import { useSelector } from 'react-redux';

import CardCity from '@/components/CardCity';
import { Meta } from '@/layouts/Meta';
import type {
  AwesomePlaceDataResponse,
  CitiesInterface,
} from '@/models/awesome-place.model';
import {
  selectAwesomePlacesState,
  setAwesomePlacesState,
} from '@/store/slices';
import { wrapper } from '@/store/store';
import { Main } from '@/templates/Main';

const Index = (props: AwesomePlaceDataResponse) => {
  const state = useSelector(selectAwesomePlacesState) || props;
  return (
    <Main
      meta={
        <Meta
          title="Top overall places"
          description="Top overall places choose by community."
        />
      }
    >
      <ul className="container mx-auto flex w-full flex-wrap gap-3 lg:w-4/5">
        {state?.cities?.slice(0, 10).map((city: CitiesInterface) => (
          <CardCity key={city.slug} city={city}></CardCity>
        ))}
      </ul>
    </Main>
  );
};

// export async function getServerSideProps() {
//   return { props: { ...data } };
// }

export const getServerSideProps = wrapper.getServerSideProps((store: any) => {
  return async () => {
    // @ts-ignore
    await store.dispatch(setAwesomePlacesState(data));
    return { props: { data: null } };
  };
});

export default Index;
