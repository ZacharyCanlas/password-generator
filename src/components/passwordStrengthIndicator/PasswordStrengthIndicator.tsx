import { Box, Typography } from "@mui/material"
import "./PasswordStrengthIndicator.modules.css"
import PasswordStrengthBars from "./PasswordStrengthBars"
import { FunctionComponent } from "react"

type PasswordStrengthIndicatorProps = {
  password: string | undefined
}

const PasswordStrengthIndicator: FunctionComponent<
  PasswordStrengthIndicatorProps
> = ({ password }) => {
  return (
    <Box className="box">
      <Typography variant="h3" className="text">
        STRENGTH
      </Typography>
      <PasswordStrengthBars password={password} />
    </Box>
  )
}

export default PasswordStrengthIndicator
