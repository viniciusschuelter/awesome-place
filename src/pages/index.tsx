import overall from '__mocks__/data/overall.json';
import { useSelector } from 'react-redux';

import CardCity from '@/components/CardCity';
import { Meta } from '@/layouts/Meta';
import type { CitiesInterface } from '@/models/awesome-place.model';
import type { AwesomePlacesState } from '@/store/slices';
import {
  selectAwesomePlacesOverall,
  setAwesomePlacesOverall,
} from '@/store/slices';
import { wrapper } from '@/store/store';
import { Main } from '@/templates/Main';

const Index = (props: AwesomePlacesState) => {
  const overral = useSelector(selectAwesomePlacesOverall);
  console.log(overral);
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
        {props?.overall?.slice(0, 10).map((city: CitiesInterface) => (
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
    console.log(store.getState().awesomePlaces.overall.length);
    if (!store.getState().awesomePlaces.overall.length) {
      // @ts-ignore
      await store.dispatch(setAwesomePlacesOverall(overall));
    }
    return { props: { overall } };
  };
});

export default Index;
