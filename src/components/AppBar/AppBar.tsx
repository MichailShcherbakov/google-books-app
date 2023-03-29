import { FilterBar } from "../FilterBar";
import { BookSearchBar } from "../BookSearchBar";
import { AppBarLayout, AppBarLayoutProps } from "./AppBarLayout";
import { Logo } from "../Logo";
import { AppBarSection } from "./AppBarSection";
import { useCurrentBookSearchPattern } from "~/store/books/hooks";
import React from "react";
import { RedirectToSearchPageButton } from "../RedirectToSearchPageButton/RedirectToSearchPageButton";

export interface AppBarProps extends AppBarLayoutProps {}

export function AppBar(props: AppBarProps) {
  const { pattern: currentPattern, setPattern: setCurrentPattern } =
    useCurrentBookSearchPattern();

  const [pattern, setPattern] = React.useState("");

  React.useEffect(() => {
    setPattern(currentPattern);
  }, [currentPattern]);

  return (
    <AppBarLayout {...props}>
      <AppBarSection>
        <Logo withSlogan={false}></Logo>
      </AppBarSection>
      <AppBarSection
        sx={theme => ({
          [theme.breakpoints.down("lg")]: {
            justifyContent: "end",
          },
        })}
      >
        <FilterBar />
        <BookSearchBar
          size="small"
          pattern={pattern}
          onPatternChange={setPattern}
          onBooksRequest={pattern => {
            setCurrentPattern(pattern);
          }}
          sx={theme => ({
            [theme.breakpoints.down("lg")]: {
              width: theme.spacing(32),
            },
            [theme.breakpoints.down("sm")]: {
              display: "none",
            },
          })}
        />
        <RedirectToSearchPageButton />
      </AppBarSection>
      <AppBarSection
        sx={theme => ({
          [theme.breakpoints.down("lg")]: {
            display: "none",
          },
        })}
      ></AppBarSection>
    </AppBarLayout>
  );
}
