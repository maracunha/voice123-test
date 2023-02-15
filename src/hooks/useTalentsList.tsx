import { QueryStatus, useQuery } from "react-query";
import { IParams } from "../interfaces";
import fetchTalents from "../services/fetchTalents";

export default function useBreedList(params: IParams) {
  const results = useQuery(["search", params], fetchTalents);

  return [results?.data ?? [], results.status] as [
    string[],
    QueryStatus
  ];
}
