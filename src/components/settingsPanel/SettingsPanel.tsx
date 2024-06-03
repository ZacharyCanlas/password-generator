import CardWrapper from "../ui/CardWrapper";
import "./SettingsPanel.modules.css";
import CharacterLengthSlider from "../characterLengthSlider/CharacterLengthSlider";
import { FunctionComponent } from "react";
import SettingsCheckboxes from "./settingsCheckboxes/SettingsCheckboxes";
import PasswordStrengthIndicator from "../passwordStrengthIndicator/PasswordStrengthIndicator";
import { Button } from "@mui/base/Button";
import { Typography } from "@mui/material";
import ArrowRight from "../svg/ArrowRight";

type SettingsPanelProps = {
  password: string | undefined;
  generatePassword: () => void;
};

const SettingsPanel: FunctionComponent<SettingsPanelProps> = ({
  password,
  generatePassword,
}) => {
  return (
    <CardWrapper className="cardContainer" dataTest="SettingsPanel:container">
      <CharacterLengthSlider />
      <SettingsCheckboxes />
      <PasswordStrengthIndicator password={password} />
      <Button className="generateButton" onClick={generatePassword} data-test="SettingsPanel:generatePasswordbutton">
        <Typography variant="h3" sx={{ fontWeight: "700" }}>
          GENERATE
        </Typography>
        <ArrowRight />
      </Button>
    </CardWrapper>
  );
};

export default SettingsPanel;
