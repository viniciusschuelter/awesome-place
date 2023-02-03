import type { AwesomePlaceDataResponse } from '@/models/awesome-place.model';

// const data = async (): Promise<AwesomePlaceDataResponse> => await fetch(
//   "https://nomadlist.com/static/filter/filter-770b8ee1397249ec869a3736646c21fa.json"
// ).then((response) => response.json());

export async function getAwesomePlaceList(): Promise<AwesomePlaceDataResponse> {
  return fetch(
    'https://nomadlist.com/static/filter/filter-770b8ee1397249ec869a3736646c21fa.json'
  ).then((response) => response.json());
}

// export const awesomePlaceList = data;

// export const slugsList = data.slugs;
//
// export const temperaturesValues = data.temperaturesC;
