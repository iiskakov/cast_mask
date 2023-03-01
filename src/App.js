import React from "react";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function App() {
  const { data, error, isLoading } = useSWR(
    "https://cast-parser.onrender.com/api/parse_details?url=https://cast.kz/list/Ar4Eil/1234",
    fetcher
  );

  if (error) return "An error has occurred.";
  if (isLoading) return "Loading...";
  return (
    <div>
      <h1>{data.name}</h1>
      <h1>{data}</h1>
      <h1>{data['Город:']}</h1>
      {/* <p>{data.description}</p> */}
      {/* <strong>👁 {data.subscribers_count}</strong>{" "} */}
      {/* <strong>✨ {data.stargazers_count}</strong>{" "} */}
      {/* <strong>🍴 {data.forks_count}</strong> */}
    </div>
  );
}
