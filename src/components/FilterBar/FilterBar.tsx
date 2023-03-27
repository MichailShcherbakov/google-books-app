import React from "react";
import { FilterBarButton } from "./FilterBarButton";
import { FilterBarPopover } from "./FilterBarPopover";

export function FilterBar() {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null,
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <>
      <FilterBarButton onClick={handleClick} />
      <FilterBarPopover open={open} anchorEl={anchorEl} onClose={handleClose} />
    </>
  );
}
