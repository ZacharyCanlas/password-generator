import { Box, Slider, Typography } from "@mui/material"
import "./CharacterLengthSlider.modules.css"
import useSettingsContext from "../../hooks/useSettingsContext"

const CharacterLengthSlider = () => {
  const { passwordCharacterLength, setPasswordCharacterLength } =
    useSettingsContext()

  const handleSliderChange = (_: Event, value: number | number[]) => {
    setPasswordCharacterLength(value as number)
  }

  return (
    <>
      <Box className="sliderLabel">
        <Typography id="input-slider" data-test="CharacterLengthSlider:label">
          Character Length
        </Typography>
        <Typography
          variant="h1"
          className="sliderLabelValue"
          data-test="CharacterLengthSlider:label:value"
        >
          {passwordCharacterLength}
        </Typography>
      </Box>
      <Slider
        step={1}
        min={6}
        max={20}
        aria-labelledby="input-slider"
        value={passwordCharacterLength}
        onChange={handleSliderChange}
        data-test="CharacterLengthSlider:slider"
        sx={{
          "& .MuiSlider-thumb": {
            backgroundColor: "#e6e5ea",
          },
          "& .MuiSlider-track": {
            color: "#a4ffaf",
          },
          "& .MuiSlider-rail": {
            backgroundColor: "#18171F",
          },
        }}
      />
    </>
  )
}

export default CharacterLengthSlider
