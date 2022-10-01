interface SkeletonBoxProps {}

const SkeletonBox = ({}: SkeletonBoxProps) => {
  return (
    <>
      <div className="relative bg-black  h-327 w-318 rounded-[10px] ">
        <div className="bg-white  h-[212px] rounded-[10px] animate-skeleton-gradient" />

        <div className="absolute bottom-0 w-full px-[10px]  h-[115px]">
          <div className="mt-[10px] w-200 h-24 bg-white animate-skeleton-gradient"></div>
          <div className="mt-[10px] w-110 h-24 bg-white animate-skeleton-gradient" />
          <div className="mt-[10px] w-50 h-24 bg-white animate-skeleton-gradient" />
        </div>
      </div>
    </>
  );
};

export default SkeletonBox;
