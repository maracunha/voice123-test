import { QueryStatus, useQuery } from 'react-query';
import { IParams, Provider } from '../interfaces';
import fetchTalents from '../services/fetchTalents';

export default function useTalestsList(params: IParams) {
  const results = useQuery(['search', params], fetchTalents);

  return [results?.data?.providers ?? [], results.status] as [Provider[], QueryStatus];
}

