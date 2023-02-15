import { QueryFunction } from 'react-query';
import { ITalentsAPIResponse } from '../interfaces';

const fetchSearch: QueryFunction<
  ITalentsAPIResponse,
  [
    'search',
    {
      keywords: string;
      page: string;
    },
  ]
> = async function ({ queryKey }) {
  const { keywords, page } = queryKey[1];
  const res = await fetch(
    `https://api.sandbox.voice123.com/providers/search/?service=voice_over&keywords=${keywords}&page=${page}`,
  );

  if (!res.ok) throw new Error(`Talent search not okay: ${keywords}, ${page}`);

  return res.json();
};

export default fetchSearch;
