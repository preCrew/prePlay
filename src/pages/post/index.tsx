import React from 'react';

const Post = () => {
  return (
    <div className="px-7">
      <div className="flex justify-between w-4/5 py-8 m-auto">
        <h2>playlist1/talk that talk-트와이스</h2>
        <i>+30</i>
      </div>
      <div className="max-w-[644px] m-auto">
        <section className="mb-7">
          <article className="bg-black">
            <div className="">
              <img src="https://image.ytn.co.kr/general/jpg/2022/0805/202208050913233246_d.jpg" />
            </div>
            <div className="relative pb-6 mx-4 mt-6 text-white rounded-b-xl">
              <h3 className="mb-5 text-xl">talk that talk</h3>
              <p className="mb-8 text-sm">트와이스</p>
              <ul>
                <li>
                  <a href="">#해시태그</a>
                </li>
              </ul>
              <button
                type="button"
                className="absolute top-0 right-5"
              >
                좋아요
              </button>
            </div>
          </article>
        </section>
        <section>
          <article>
            <div className="px-4 pt-4 pb-8 border rounded-lg border-primary1">
              <div>
                <span>cdfkjdlfkgjdf@gmail.com</span>
              </div>
              <form className="relative">
                <input
                  type="text"
                  placeholder="댓글을 달아주세요"
                  className="w-[calc(100%-60px)]"
                />
                <button className="w-[50px] absolute right-0 top-0 bg-[#d2d6f8] text-sm">
                  전송
                </button>
              </form>
            </div>
            <ul>
              <li>
                <div>
                  <span>cdfkjdlfkgjdf@gmail.com</span>
                  <sub>2022.09.10</sub>
                </div>
                <p>
                  정말노래좋아여정말노래좋아여정말노래좋아여정말노래좋아여정말노래좋아여정말노래좋아여정말노래좋아여정말노래좋아여정말노래좋아여정말노래좋아여정말노래좋아여
                </p>
              </li>
            </ul>
          </article>
        </section>
      </div>
    </div>
  );
};

export default Post;
