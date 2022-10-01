import { useMemo } from 'react';
import SkeletonBox from '../SkeletonBox';

const SkeletonMainPage = () => {
  const arr = useMemo(() => Array.from({ length: 12 }, (_, i) => i), []);
  return (
    <>
      <div className="grid justify-center w-[100%] pt-[19px]  bg-gray-600 gap-x-[27px] gap-y-[30px] grid-cols-auto-fit justify-items-center pr-[48px] pl-[39px] min-w-fit">
        {arr.map(v => (
          <SkeletonBox key={v} />
        ))}
      </div>
    </>
  );
};

export default SkeletonMainPage;
