import useGetSongs, { TFirebaseSongSetting } from '@src/hooks/useGetSongs';
import { useState } from 'react';

const CollectMusicPage = () => {
  const [state, setState] = useState({
    query: '',
    isAnotherQuery: false,
  });
  const { mutate, data, error, isLoading, isError } = useGetSongs(
    state.isAnotherQuery,
    state.query,
  );

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState(s => ({ ...s, query: e.target.value, isAnotherQuery: true }));
  };
  const handleClickButton = () => {
    setState(s => ({ ...s, isAnotherQuery: false }));
    mutate();
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>error</div>;
  }

  return (
    <>
      <input
        type="text"
        placeholder="input query"
        onChange={handleChangeInput}
      />
      <button onClick={handleClickButton}>불러오기</button>
      {data && (data as TFirebaseSongSetting).lastIdx !== undefined ? (
        <div>{`현재 노래 수: ${(data as TFirebaseSongSetting).lastIdx}`}</div>
      ) : (
        <div>query를 입력바람</div>
      )}
    </>
  );
};

export default CollectMusicPage;
