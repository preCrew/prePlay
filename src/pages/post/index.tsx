import React from 'react';

const Post = () => {
  return (
    <div className="px-7">
      <div className="flex justify-between w-4/5 m-auto">
        <h2>playlist1/talk that talk-트와이스</h2>
        <i>+30</i>
      </div>
      <div className="max-w-[644px] m-auto">
        <section>
          <article>
            <div className="bg-black">
              <img src="https://image.ytn.co.kr/general/jpg/2022/0805/202208050913233246_d.jpg" />
            </div>
            <div className="p-4 text-white bg-black">
              <h3 className="f">talk that talk</h3>
              <p>트와이스</p>
              <ul>
                <li>
                  <a href="">#해시태그</a>
                </li>
              </ul>
            </div>
            <button type="button">좋아요</button>
          </article>
        </section>
        <section>
          <article>
            <div>
              <span>cdfkjdlfkgjdf@gmail.com</span>
              <sub>2022.09.10</sub>
            </div>
            <form>
              <input placeholder="댓글을 달아주세요" />
              <button>전송</button>
            </form>
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
