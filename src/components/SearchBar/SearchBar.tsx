import { SearchBarButton } from "./SearchBarButton";
import { SearchBarLayout, SearchBarLayoutProps } from "./SearchBarLayout";
import { SearchInputBase } from "./SearchInputBase";
import SearchIcon from "@mui/icons-material/Search";

export interface SearchBarProps extends SearchBarLayoutProps {}

export function SearchBar(props: SearchBarProps) {
  return (
    <SearchBarLayout {...props}>
      <SearchInputBase placeholder="Search…" />
      <SearchBarButton>
        <SearchIcon />
      </SearchBarButton>
    </SearchBarLayout>
  );
}
