import Header from './Header';
import Nav from './Nav/Nav';

interface ILayoutProps {
  children?: React.ReactNode;
}

const Layout = ({ children }: ILayoutProps) => {
  return (
    <>
      <Header />
      {children}
      <Nav />
    </>
  );
};

export default Layout;
