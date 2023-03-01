import React from "react";
import useSWR from "swr";
import { useRouter } from "next/router";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Single() {
  const router = useRouter();
  const { URL } = router.query;

  const { data, error, isLoading } = useSWR(
    `https://cast-parser.onrender.com/api/parse_details?url=${URL}`,
    fetcher
  );

  if (error) return "An error has occurred.";
  if (isLoading) return "Loading...";
  return (
    <div>
      <h1>{data["Cast.kz ID"]}</h1>
      <h1>{data["Город"]}</h1>
      <h1>{data["Пол"]}</h1>

      {/* <p>{data.description}</p> */}
      {/* <strong>👁 {data.subscribers_count}</strong>{" "} */}
      {/* <strong>✨ {data.stargazers_count}</strong>{" "} */}
      {/* <strong>🍴 {data.forks_count}</strong> */}
    </div>
  );
}
