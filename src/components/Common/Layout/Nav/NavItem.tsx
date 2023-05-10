import { ReactElement } from 'react';
import { Link, useLocation } from 'react-router-dom';

import {
  AiOutlineUser,
  AiOutlineSearch,
  AiOutlineHome,
  AiOutlineHeart,
} from 'react-icons/ai';
import { IconType } from 'react-icons';

interface INavItemProps {
  to: string;
  index: number;
}

const NavItem = ({ to, index }: INavItemProps) => {
  const location = useLocation();

  const iconstyle = 'm-auto text-lg';
  const navActivStyle =
    to === location.pathname
      ? `${iconstyle} text-black`
      : `${iconstyle} text-gray-500 `;

  const iconArr = [
    <AiOutlineHome className={navActivStyle} />,
    <AiOutlineSearch className={navActivStyle} />,
    <AiOutlineHeart className={navActivStyle} />,
    <AiOutlineUser className={navActivStyle} />,
  ];

  return (
    <li className="flex-1 p-2">
      <Link to={to}>{iconArr[index]}</Link>
    </li>
  );
};

export default NavItem;
