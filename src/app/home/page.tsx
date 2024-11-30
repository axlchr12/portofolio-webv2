import { WEB_INFO } from '@/core/util/constants';

const HomePage = () => {
  return <div>Home</div>;
};

export default HomePage;

export const metadata = {
  title: WEB_INFO().HOME_PAGE.TITLE,
  description: WEB_INFO().HOME_PAGE.DESC,
};
