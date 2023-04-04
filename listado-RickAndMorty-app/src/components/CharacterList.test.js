import React from "react";
import { render } from "@testing-library/react";
import { I18nextProvider } from "react-i18next";
import CharacterList from "./CharacterList";
import i18n from "../utils/i18n";
import "@testing-library/jest-dom/extend-expect";

describe("CharacterList", () => {
  const characters = [
    {
      id: "1",
      author: "User 1",
      download_url: "https://example.com/image1.jpg",
    },
    {
      id: "2",
      author: "User 2",
      download_url: "https://example.com/image2.jpg",
    },
  ];

  it("should render a list of characters", () => {
    const { getByText } = render(
      <I18nextProvider i18n={i18n}>
        <CharacterList characters={characters} loading={false} />
      </I18nextProvider>
    );

    expect(getByText("User 1")).toBeInTheDocument();
    expect(getByText("User 2")).toBeInTheDocument();
  });

  it("should render a loading message when loading is true", () => {
    const { getByText } = render(
      <I18nextProvider i18n={i18n}>
        <CharacterList characters={[]} loading={true} />
      </I18nextProvider>
    );

    expect(getByText("Loading...")).toBeInTheDocument();
  });
});
