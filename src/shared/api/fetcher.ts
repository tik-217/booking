import { request } from "graphql-request";

export const fetcher = (query: string) =>
  request("http://localhost:3001/graphql", query);
