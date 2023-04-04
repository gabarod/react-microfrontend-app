import React from "react";
import { useTranslation } from "react-i18next";
import ButtonContainer from "../styles/ButtonContainer";
import StyledButton from "../styles/StyledButton";

const SeriesButtons = ({ onSerieSelected }) => {
  const { t } = useTranslation();

  const handleHarryPotterClick = async () => {
    onSerieSelected("2");
  };

  return (
    <ButtonContainer>
      <StyledButton
        className="button button--secondary"
        onClick={handleHarryPotterClick}
      >
        {t("loadCharacters", { series: t("harryPotter") })}
      </StyledButton>
    </ButtonContainer>
  );
};

export default SeriesButtons;
