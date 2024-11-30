import { Modal } from '@/components/modals/Modal';
import { WEB_INFO } from '@/core/util/constants';

const HomePage = () => {
  return (
    <>
      <h1>Home</h1>
      <Modal />
    </>
  );
};

export default HomePage;

export const metadata = {
  title: WEB_INFO().HOME_PAGE.TITLE,
  description: WEB_INFO().HOME_PAGE.DESC,
};
