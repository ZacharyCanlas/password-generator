import CardWrapper from "../ui/CardWrapper";
import "./SettingsPanel.modules.css";
import CharacterLengthSlider from "../characterLengthSlider/CharacterLengthSlider";
import { FunctionComponent } from "react";
import SettingsCheckboxes from "./settingsCheckboxes/SettingsCheckboxes";
import PasswordStrengthIndicator from "../passwordStrengthIndicator/PasswordStrengthIndicator";
import { Button } from "@mui/base/Button";
import { Typography } from "@mui/material";
import ArrowRight from "../svg/ArrowRight";
import useSettingsContext from "../../hooks/useSettingsContext";
import clsx from "clsx";

type SettingsPanelProps = {
  password: string | undefined;
  generatePassword: () => void;
};

const SettingsPanel: FunctionComponent<SettingsPanelProps> = ({
  password,
  generatePassword,
}) => {
  const { enabledSettings } = useSettingsContext();

  const noEnabledSettings = enabledSettings === 0;

  return (
    <CardWrapper className="cardContainer" dataTest="SettingsPanel:container">
      <CharacterLengthSlider />
      <SettingsCheckboxes />
      <PasswordStrengthIndicator password={password} />
      <Button
        className={clsx("generateButton", { disabled: noEnabledSettings })} //
        onClick={generatePassword}
        data-test="SettingsPanel:generatePasswordbutton"
        disabled={noEnabledSettings}
      >
        <Typography variant="h3" sx={{ fontWeight: "700" }}>
          GENERATE
        </Typography>
        <ArrowRight />
      </Button>
    </CardWrapper>
  );
};

export default SettingsPanel;
