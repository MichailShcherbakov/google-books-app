import { FilterBar } from "../FilterBar";
import { BookSearchBar } from "../BookSearchBar";
import { AppBarLayout, AppBarLayoutProps } from "./AppBarLayout";
import { Logo } from "../Logo";
import { AppBarSection } from "./AppBarSection";
import { useCurrentBookSearchPattern } from "~/store/books/hooks";
import React from "react";
import { RedirectToSearchPageButton } from "../RedirectToSearchPageButton/RedirectToSearchPageButton";

export interface AppBarProps extends AppBarLayoutProps {
  /**
   * @default true
   */
  withFilter?: boolean;
}

export function AppBar({ withFilter = true, ...props }: AppBarProps) {
  const { pattern: currentPattern, setPattern: setCurrentPattern } =
    useCurrentBookSearchPattern();

  const [pattern, setPattern] = React.useState(currentPattern);

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
        {withFilter && <FilterBar />}
        <BookSearchBar
          size="small"
          pattern={pattern}
          onPatternChange={setPattern}
          onBooksRequest={setCurrentPattern}
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
