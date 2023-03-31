import Head from "next/head";
import { AppBar } from "~/components/AppBar";
import { BookNotFoundStub } from "~/components/BookContainer/BookNotFoundStub";
import { BookOverview } from "~/components/BookOverview";
import AppPage from "~/interfaces/app-page.interface";
import { SearchLayout } from "~/layouts/SearchLayout";
import { getRunningQueries, wrapper } from "~/store";
import { requestBookAction } from "~/store/books/actions";
import { useCurrentBook } from "~/store/books/hooks/useCurrentBook";

export const BookPage: AppPage = props => {
  wrapper.useHydration(props);

  const { book } = useCurrentBook();

  const bookTitle = book?.volumeInfo.title;
  const pageTitle = `Bukstore - Google Book API Provider${
    bookTitle ? ` - ${bookTitle}` : ""
  }`;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <AppBar withFilter={false} />
      {!book && <BookNotFoundStub />}
      {book && <BookOverview />}
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
