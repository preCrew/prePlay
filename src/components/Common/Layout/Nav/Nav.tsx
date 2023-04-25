import { Link } from 'react-router-dom';

import NavItem from './NavItem';
import useIsLogin from '@src/hooks/user/useIsLogin';

const Nav = () => {
  const me = useIsLogin();

  return (
    <nav className="fixed bottom-0 left-0 z-50 w-full bg-white">
      <ul className="flex items-center justify-around">
        <NavItem
          to="/"
          index={0}
        />
        <NavItem
          to="/search"
          index={1}
        />
        <NavItem
          to="/favorite"
          index={2}
        />
        <NavItem
          to={`/mypage/${me}`}
          index={3}
        />
      </ul>
    </nav>
  );
};

export default Nav;
