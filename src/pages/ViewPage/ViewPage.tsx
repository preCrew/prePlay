import { useCookies } from 'react-cookie';

interface ViewPageProps {}

const ViewPage = ({}: ViewPageProps) => {
  const [c, s, removeCookies] = useCookies(['uid']);
  const handleClickLogoutButton = () => {
    removeCookies('uid');
  };
  return (
    <>
      <div>here is view page</div>
      <button
        onClick={handleClickLogoutButton}
        className="border border-black"
      >
        임시 logout button
      </button>
    </>
  );
};

export default ViewPage;
