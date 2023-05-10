interface SkeletonPostProps {}

const SkeletonPost = ({}: SkeletonPostProps) => {
  return (
    <div className="w-full h-full">
      <div className="relative m-1 bg-black  h-[327px] w-full rounded-[10px] ">
        <div className=" p-1 bg-white w-full h-[212px] rounded-[10px] object-cover animate-skeleton-gradient" />

        <div className="absolute bottom-0 w-full px-[10px]  h-[115px] ">
          <div className="mt-[10px] w-200 h-24 bg-white animate-skeleton-gradient"></div>
          <div className="mt-[10px] w-110 h-24 bg-white animate-skeleton-gradient" />
          <div className="mt-[10px] w-50 h-24 bg-white animate-skeleton-gradient" />
        </div>
      </div>
    </div>
  );
};

export default SkeletonPost;
