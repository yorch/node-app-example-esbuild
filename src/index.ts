import { getExternalIP } from './get-external-ip';
import { getGeoLocation } from './get-geo-location';

const run = async () => {
  try {
    const ipAddress = await getExternalIP();
    console.log(`Your external IP is ${ipAddress}`);
    const { city, region, country } = await getGeoLocation(ipAddress);
    console.log(`Your Geo location is ${city}, ${region}, ${country}`);
  } catch (err) {
    console.error(
      'There was an error getting your IP address or Geo location',
      err
    );
  }
};

run();
