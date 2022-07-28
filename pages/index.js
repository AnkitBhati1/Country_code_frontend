import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import Result from "../components/result";
import Search from "../components/search_components";
import Script from "next/script";

export default function Home() {

  const [data, setData] = useState(null);
  

  return (
    
    <div>
      <Script src="/hello.js"/>
      {
        data ? (
          <Result data={data} setData = {setData} />
        ): (
          <Search setData={setData} />
        )
      }
      </div>


  );
}
