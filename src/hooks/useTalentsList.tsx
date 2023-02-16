import { QueryStatus, useQuery } from "react-query";
import { IParams } from "../interfaces";
import fetchTalents from "../services/fetchTalents";

export default function useTalestsList(params: IParams) {
  const results = useQuery(["search", params], fetchTalents);

  return [results?.data?.providers ?? [], results.status] as [
    string[],
    QueryStatus
  ];
}
