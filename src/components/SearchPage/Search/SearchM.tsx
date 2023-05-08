import { Suspense, useEffect, useState } from 'react';
import axios from 'axios';

import { TSongLists } from '@src/hooks/useGetSongListsQuery';

import VideoItem from '@src/components/VideoList/VideoItem/VideoItem';

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
    <div className="grid justify-center w-[100%] gap-x-[27px] gap-y-[30px] grid-cols-auto-fit justify-items-center in-w-fit">
      {playlist?.map((item: TSongLists) => (
        <VideoItem item={item} />
      ))}
    </div>
  );
};

export default Search;
