import React from "react";
import { useTranslation } from "react-i18next";
import ButtonContainer from "../styles/ButtonContainer";
import StyledButton from "../styles/StyledButton";

const SeriesButtons = ({ onSerieSelected }) => {
  const { t } = useTranslation();
  const handleRickAndMortyClick = async () => {
    onSerieSelected("1");
  };

  return (
    <ButtonContainer>
      <StyledButton
        className="button button--primary"
        onClick={handleRickAndMortyClick}
      >
        {t("loadCharacters", { series: t("rickAndMorty") })}
      </StyledButton>
    </ButtonContainer>
  );
};

export default SeriesButtons;
