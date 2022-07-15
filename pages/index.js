import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import Result from "../components/result";
import Search from "../components/search_components";

export default function Home() {

  const [data, setData] = useState(null);
  

  return (
    <div>
      {
        data ? (
          <Result data={data} />
        ): (
          <Search setData={setData} />
        )
      }
      </div>

  );
}
