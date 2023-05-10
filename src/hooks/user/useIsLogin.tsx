import { useCookies } from 'react-cookie';

export default () => {
  const [cookies, setCookie] = useCookies(['uid']);
  const me = cookies.uid;

  return me;
};
