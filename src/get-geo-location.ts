import { getAsCurl } from './get-as-curl';

type GeoLocation = {
  ip: string;
  hostname: string;
  city: string;
  region: string;
  country: string;
  loc: string;
  org: string;
  postal: string;
  timezone: string;
  readme: string;
};

export const getGeoLocation = async (ipAddress: string) => {
  const url = `https://ipinfo.io/${ipAddress}`;
  const res = await getAsCurl(url).json<GeoLocation>();
  return res;
};
