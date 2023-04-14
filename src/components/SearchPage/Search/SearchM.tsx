import { TSongLists } from '@src/hooks/useGetSongListsQuery';
import axios from 'axios';
import { useEffect, useState } from 'react';
import MainBox from '../../MainPage/MainBox';

export interface SearchProps {
  item?: TSongLists;
  search_KW?: string;
}

const Search = (search_KW: SearchProps) => {
  const [playlist, setPlaylist] = useState<TSongLists[] | undefined>(undefined);

  const uri = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=${search_KW.search_KW}&key=AIzaSyDyqR9EnUNVMmJzjHKB1OMqiH_N1IwZFFI`;

  useEffect(() => {
    axios
      .get(uri)
      .then(res => {
        const responseData: TSongLists[] = res.data.items.map((item: any) => {
          return {
            id: item.id,
            thumnail: item.snippet.thumbnails.default.url,
            title: item.snippet.title,
          };
        });
        setPlaylist(responseData);
      })
      .catch(() => {});
  }, [search_KW]);

  return (
    <>
      <div className="grid justify-center w-[100%] pt-[19px]  bg-gray-600 gap-x-[27px] gap-y-[30px] grid-cols-auto-fit justify-items-center pr-[48px] pl-[39px] min-w-fit">
        {playlist?.map((item: TSongLists) => {
          return (
            <>
              <MainBox item={item} />
            </>
          );
        })}
      </div>
    </>
  );
};

export default Search;
