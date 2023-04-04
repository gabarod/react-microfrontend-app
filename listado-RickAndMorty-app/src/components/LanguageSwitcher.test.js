import React from "react";
import { render, fireEvent } from "@testing-library/react";
import LanguageSwitcher from "./LanguageSwitcher";
import "@testing-library/jest-dom/extend-expect";

describe("LanguageSwitcher component", () => {
  it("renders correctly", () => {
    const { getByLabelText } = render(<LanguageSwitcher />);
    const label = getByLabelText(/language/i);
    expect(label).toBeInTheDocument();
  });

  it("changes language when a new language is selected", () => {
    const { getByLabelText } = render(<LanguageSwitcher />);
    const select = getByLabelText(/language/i);
    fireEvent.change(select, { target: { value: "es" } });
    expect(select.value).toBe("es");
  });
});
