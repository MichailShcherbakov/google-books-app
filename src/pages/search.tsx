import { Stack } from "@mui/material";
import Head from "next/head";
import { AppBar } from "~/components/AppBar";
import { BookContainer } from "~/components/BookContainer";
import AppPage from "~/interfaces/app-page.interface";
import { SearchLayout } from "~/layouts/SearchLayout";
import { getRunningQueries, wrapper } from "~/store";
import {
  requestBooksAction,
  setBookSearchCriteriaAction,
} from "~/store/books/actions";
import { validateBookSearchParams } from "~/store/books/helpers/validateBookSearchParams";

export const SearchPage: AppPage = props => {
  wrapper.useHydration(props);

  return (
    <>
      <Head>
        <title>Bukstore - Google Book API Provider</title>
      </Head>
      <AppBar />
      <Stack direction="column" p={4}>
        <BookContainer />
      </Stack>
    </>
  );
};

SearchPage.getLayout = page => {
  return <SearchLayout>{page}</SearchLayout>;
};

export const getServerSideProps = wrapper.getServerSideProps(
  store => async ctx => {
    const query = validateBookSearchParams(ctx.query);

    store.dispatch(
      setBookSearchCriteriaAction({
        criteria: {
          pattern: query.pattern,
          filterBy: query.filterBy,
          sortBy: query.sortBy,
        },
      }),
    );

    store.dispatch(requestBooksAction());

    await getRunningQueries(store);

    return {
      props: {},
    };
  },
);

export default SearchPage;
