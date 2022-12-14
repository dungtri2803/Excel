import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import Homes from "../components/Home/Home";
import Loading from "../components/Loading/Loading";

const Home: NextPage = () => {
  const [LoadingPage, setLoadingPage] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoadingPage(false);
    }, 5200);
  }, []);
  return (
    <div>
      {LoadingPage ? (
        <Loading />
      ) : (
        <div>
          <Head>
            <title>{`ET`}</title>
          </Head>
          <Homes />
        </div>
      )}
      {/* <Modal /> */}
    </div>
  );
};

export default Home;
