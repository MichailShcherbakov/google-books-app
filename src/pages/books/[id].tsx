import Head from "next/head";
import { AppBar } from "~/components/AppBar";
import { BookOverview } from "~/components/BookOverview";
import AppPage from "~/interfaces/app-page.interface";
import { SearchLayout } from "~/layouts/SearchLayout";
import { getRunningQueries, wrapper } from "~/store";
import { requestBookAction } from "~/store/books/actions";
import { useCurrentBook } from "~/store/books/hooks/useCurrentBook";

export const BookPage: AppPage = props => {
  wrapper.useHydration(props);

  const { book } = useCurrentBook();

  return (
    <>
      <Head>
        <title>
          Bukstore - Google Book API Provider - {book?.volumeInfo.title}{" "}
        </title>
      </Head>
      <AppBar withFilter={false} />
      <BookOverview />
    </>
  );
};

BookPage.getLayout = page => {
  return <SearchLayout>{page}</SearchLayout>;
};

export const getServerSideProps = wrapper.getServerSideProps(
  store => async ctx => {
    const bookId = ctx.params?.id as string;

    store.dispatch(
      requestBookAction({
        bookId,
      }),
    );

    await getRunningQueries(store);

    return {
      props: {},
    };
  },
);

export default BookPage;
