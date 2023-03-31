import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import { BookSearchBar } from "~/components/BookSearchBar";
import { Logo } from "~/components/Logo";
import AppPage from "~/interfaces/app-page.interface";
import { HomeLayout } from "~/layouts/HomeLayout";

export const HomePage: AppPage = () => {
  const router = useRouter();
  const [pattern, setPattern] = React.useState("");

  function onBooksRequestHandler(pattern: string) {
    router.push(`/search?pattern=${pattern}`);
  }

  return (
    <>
      <Head>
        <title>Bukstore - Google Book API Provider</title>
      </Head>
      <Logo isNavigatable={false} />
      <BookSearchBar
        pattern={pattern}
        onPatternChange={setPattern}
        onBooksRequest={onBooksRequestHandler}
      />
    </>
  );
};

HomePage.getLayout = page => {
  return <HomeLayout>{page}</HomeLayout>;
};

export default HomePage;
