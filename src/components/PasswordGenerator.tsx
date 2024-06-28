import { Container, Typography } from "@mui/material"
import "./PasswordGenerator.modules.css"
import Password from "./password/Password"
import SettingsPanel from "./settingsPanel/SettingsPanel"
import useGeneratePassword from "../hooks/useGeneratePassword"

const PasswordGenerator = () => {
  const { password, generatePassword, passwordStrength } = useGeneratePassword()

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
      <SettingsPanel generatePassword={generatePassword} passwordStrength={passwordStrength} />
    </Container>
  )
}

export default PasswordGenerator
