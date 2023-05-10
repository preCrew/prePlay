import { Link } from 'react-router-dom';

const data = [
  { category: '좋아요', link: '' },
  { category: '댓글', link: '' },
];

const MyActivityList = () => {
  return (
    <ul className="mt-4">
      {data.map(v => (
        <li className="py-2">
          <Link to={v.link}>{v.category}</Link>
        </li>
      ))}
    </ul>
  );
};

export default MyActivityList;
