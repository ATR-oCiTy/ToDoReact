import React from "react";
import Form from "./Form";
import { shallow } from "enzyme";
import { fireEvent, render } from "@testing-library/react";
import Todo from "./Todo";

describe("Basic rendering of View Template", () => {
  it("should be able to edit", () => {
    const { getByTestId } = render(<Todo />);

    expect(getByTestId("edit-button")).not.toHaveAttribute("disabled");
  });

  it("should be able to delete", () => {
    const { getByTestId } = render(<Todo />);

    expect(getByTestId("delete-button")).not.toHaveAttribute("disabled");
  });
});

describe("Basic rendering of Edit Template", () => {
  it("should be able to cancel", () => {
    const { getByTestId } = render(<Todo />);
    fireEvent.click(getByTestId("edit-button"));

    expect(getByTestId("cancel-button")).not.toHaveAttribute("disabled");
  });

  it("should be able to save", () => {
    const { getByTestId } = render(<Todo />);
    fireEvent.click(getByTestId("edit-button"));

    expect(getByTestId("save-button")).not.toHaveAttribute("disabled");
  });

  it("should have blank input", () => {
    const { getByTestId } = render(<Todo />);
    fireEvent.click(getByTestId("edit-button"));

    expect(getByTestId("input-area")).toHaveTextContent("");
  });
});
