import React from "react";
import FilterButton from "./FilterButton";
import { render } from "@testing-library/react";

describe("Basic rendering of Filter Button", () => {
  it("should render filter button", () => {
    const { getByTestId } = render(<FilterButton />);
    
    expect(getByTestId("filter-button")).not.toHaveAttribute("disabled");
  });
});
