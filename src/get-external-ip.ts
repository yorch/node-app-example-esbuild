import { getAsCurl } from './get-as-curl';

export const getExternalIP = async () => {
  // const url = 'https://ifconfig.me/all';
  const url = 'https://api.ipify.org';
  const { body } = await getAsCurl(url);

  return body.trim();
};
