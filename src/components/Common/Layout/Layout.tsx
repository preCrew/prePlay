import Header from './Header';
import Nav from './Nav/Nav';

interface ILayoutProps {
  children?: React.ReactNode;
}

const Layout = ({ children }: ILayoutProps) => {
  return (
    <>
      <Header />
      <div className="p-basic-top contents-box"> {children}</div>
      <Nav />
    </>
  );
};

export default Layout;
