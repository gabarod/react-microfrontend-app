import React from "react";
import { fireEvent, render } from "@testing-library/react";
import SeriesButtons from "./SeriesButtons";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  lng: "en",
  fallbackLng: "en",
  resources: {
    en: {
      translation: {
        loadCharacters: "Load {{series}} Characters",
        harryPotter: "Rick and Morty",
      },
    },
  },
});

describe("SeriesButton", () => {
  it("should call onClick function when button is clicked", () => {
    const onClickMock = jest.fn();
    const { getByRole } = render(<SeriesButtons onSerieSelected={onClickMock} />);

    const button = getByRole("button");

    fireEvent.click(button);

    expect(onClickMock).toHaveBeenCalledTimes(1);
    expect(onClickMock).toHaveBeenCalledWith("2");
  });
});
