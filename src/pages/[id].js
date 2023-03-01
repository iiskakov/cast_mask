import React from "react";
import useSWR from "swr";
import { useRouter } from "next/router";
import { Table } from 'nextui'

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function App() {
  const router = useRouter();
  const { id } = router.query;
  const baseUrl = "https://cast.kz/";
  const formattedId = id?.startsWith("/") ? id.substring(1) : id;

  const { data, error, isLoading } = useSWR(
    `${baseUrl}${formattedId}`,
    fetcher
  );

  if (error) return "An error has occurred.";
  if (isLoading) return "Loading...";
  return (
    <TableExample data={data}/>
  );
}

const TableExample = ({ data }) => {
  // Create an array of objects containing the data for each row
  const rows = data.map(item => ({ ...item }))

  // Extract the keys from the first item in the array to use as column headers
  const columns = Object.keys(rows[0] || {})

  return (
    <Table data={rows}>
      {columns.map(column => (
        <Table.Column key={column} prop={column} label={column} />
      ))}
    </Table>
  )
}

