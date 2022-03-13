import React from "react";
import Form from "./Form";
import { shallow } from "enzyme";
import { render } from "@testing-library/react";

describe("Basic rendering of Form", () => {
  it("should render form text", () => {
    const component = shallow(<Form />);

    expect(component.find(Text));
  });

  it("submit should be enabled by default", () => {
    const { getByTestId } = render(<Form />);

    expect(getByTestId("submit-button")).not.toHaveAttribute("disabled");
  });

  it("input should be blank", () => {
    const { getByTestId } = render(<Form />);
    
    expect(getByTestId("input-area")).toHaveTextContent("");
  });
});
