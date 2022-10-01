import useGetSongs, { TFirebaseSongSetting } from '@src/hooks/useGetSongs';
import React, { useState } from 'react';

const CollectMusicPage = () => {
  const [state, setState] = useState({
    query: '',
    isFirstQuery: false,
  });
  const { mutate, data, isLoading } = useGetSongs(
    state.isFirstQuery,
    state.query,
  );

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState(s => ({ ...s, query: e.target.value }));
  };
  const handleClickButton = () => {
    mutate();
  };
  const handleClickCheckBox = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState(s => ({ ...s, isFirstQuery: e.target.checked }));
  };

  return (
    <div className="w-full h-full flex flex-col justify-center items-center space-y-2">
      <div>
        <input
          className="m-2"
          type="checkbox"
          onChange={handleClickCheckBox}
        />
        처음 검색하는 단어?
      </div>
      <input
        type="text"
        placeholder="input query"
        onChange={handleChangeInput}
      />
      <button
        className="border border-black p-1"
        type="button"
        onClick={handleClickButton}
      >
        검색해서 서버에 저장
      </button>
      {data && (data as TFirebaseSongSetting).lastIdx !== undefined ? (
        <div>{`현재 노래 수: ${(data as TFirebaseSongSetting).lastIdx}`}</div>
      ) : (
        <div>' query를 입력바람 '{isLoading && <div>' loading... '</div>}</div>
      )}
    </div>
  );
};

export default CollectMusicPage;
