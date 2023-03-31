import { AppBar } from "~/components/AppBar";
import { BookOverview } from "~/components/BookOverview";
import AppPage from "~/interfaces/app-page.interface";
import { SearchLayout } from "~/layouts/SearchLayout";
import { getRunningQueries, wrapper } from "~/store";
import { requestBookAction } from "~/store/books/actions";

export const BookPage: AppPage = props => {
  wrapper.useHydration(props);

  return (
    <>
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
