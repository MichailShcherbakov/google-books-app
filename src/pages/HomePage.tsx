import React from "react";
import { useNavigate } from "react-router-dom";
import { BookSearchBar } from "~/components/BookSearchBar";
import { Logo } from "~/components/Logo";
import { HomeLayout } from "~/layouts/HomeLayout";

export function HomePage() {
  const navigate = useNavigate();
  const [pattern, setPattern] = React.useState("");

  function onBooksRequestHandler(pattern: string) {
    navigate(`/search?q=${pattern}`);
  }

  return (
    <HomeLayout>
      <Logo isNavigatable={false} />
      <BookSearchBar
        pattern={pattern}
        onPatternChange={setPattern}
        onBooksRequest={onBooksRequestHandler}
      />
    </HomeLayout>
  );
}
