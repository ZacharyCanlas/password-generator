import { Box, Typography } from "@mui/material"
import "./PasswordStrengthIndicator.modules.css"
import PasswordStrengthBars from "./PasswordStrengthBars"
import { FunctionComponent } from "react"

type PasswordStrengthIndicatorProps = {
  passwordStrength: number
}

const PasswordStrengthIndicator: FunctionComponent<
  PasswordStrengthIndicatorProps
> = ({ passwordStrength }) => {
  return (
    <Box className="box">
      <Typography variant="h3" className="text">
        STRENGTH
      </Typography>
      <PasswordStrengthBars passwordStrength={passwordStrength} />
    </Box>
  )
}

export default PasswordStrengthIndicator
