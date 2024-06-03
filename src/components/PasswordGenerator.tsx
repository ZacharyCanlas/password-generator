import { Container, Typography } from "@mui/material";
import "./PasswordGenerator.modules.css";
import Password from "./password/Password";
import SettingsPanel from "./settingsPanel/SettingsPanel";
import useGeneratePassword from "../hooks/useGeneratePassword";

const PasswordGenerator = () => {
  const { password, generatePassword } = useGeneratePassword();

  return (
    <Container maxWidth={false} disableGutters sx={{ display: "flex" }}>
      <Typography
        variant="h2"
        color="text.secondary"
        className="title"
        data-test="PasswordGenerator:title"
      >
        Password Generator
      </Typography>
      <Password generatedPassword={password} />
      <SettingsPanel password={password} generatePassword={generatePassword} />
    </Container>
  );
};

export default PasswordGenerator;
