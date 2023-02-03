export interface AwesomePlaceDataResponse {
  cities: CitiesInterface[];
  slugs: string[];
  temperaturesC: { [s: string]: number };
}

export interface CitiesInterface {
  air_quality: number;
  air_quality_now: number;
  air_quality_now_score: number;
  air_quality_score: number;
  boost: number;
  cost_for_expat_in_usd: number;
  cost_for_family_in_usd: number;
  cost_for_local_in_usd: number;
  cost_for_nomad_in_usd: number;
  cost_score: number;
  country: string;
  country_chinese: string;
  country_code: string;
  country_slug: string;
  descriptionFromReview: string;
  humidity: string;
  image: string;
  image_lastmod: number;
  internet_score: number;
  internet_speed: number;
  last_2_year_growth: number;
  latitude: string;
  leisure_quality: string;
  long_slug: string;
  longitude: string;
  name: string;
  name_chinese: string;
  overall_score: number;
  population: string;
  rank: number;
  region: string;
  safety_level: number;
  short_slug: string;
  slug: string;
  state: string;
  state_chinese: string;
  state_code: string;
  temperatureC: string;
  temperatureC_feels_like: number;
  temperatureF: string;
  temperatureF_feels_like: number;
  total_score: number;
  users_count: number;
  users_count_been: number;
  users_count_been_est: number;
  users_count_est: number;
  weather_emoji: string;
  weather_icon: string;
}
