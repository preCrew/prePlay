import Layout from '@src/components/Common/Layout/Layout';

interface IMainLayoutProps {
  children?: React.ReactNode;
}

const MainLayout = ({ children }: IMainLayoutProps) => {
  return (
    <>
      <Layout>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">{children}</div>
      </Layout>
    </>
  );
};

export default MainLayout;
