import React from "react";
import useSWR from "swr";
import { useRouter } from "next/router";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function App() {
  const router = useRouter();
  const { id } = router.query;
  const baseUrl = "https://cast.kz/list/";
  const formattedId = id?.startsWith("/") ? id.substring(1) : id;

  const { data, error, isLoading } = useSWR(
    `${baseUrl}${formattedId}`,
    fetcher
  );

  if (error) return "An error has occurred.";
  if (isLoading) return "Loading...";
  return (
    <div>
      <h1>{data["Город"]}</h1>
      <h1>{data["Пол"]}</h1>

      {/* <p>{data.description}</p> */}
      {/* <strong>👁 {data.subscribers_count}</strong>{" "} */}
      {/* <strong>✨ {data.stargazers_count}</strong>{" "} */}
      {/* <strong>🍴 {data.forks_count}</strong> */}
    </div>
  );
}
