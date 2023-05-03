import React, { useMemo } from 'react';

import MainLayout from '@src/components/MainPage/MainLayout/MainLayout';
import SkeletonBox from '@src/components/MainPage/SkeletonBox/SkeletonBox';

const SkeletonMainList = () => {
  const arr = useMemo(() => Array.from({ length: 12 }, (_, i) => i), []);

  return (
    <MainLayout>
      {arr.map(v => (
        <SkeletonBox key={v} />
      ))}
    </MainLayout>
  );
};

export default SkeletonMainList;
