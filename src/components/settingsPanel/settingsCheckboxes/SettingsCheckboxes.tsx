import { FunctionComponent } from "react"
import { FormControlLabel, FormGroup } from "@mui/material"
import "./SettingsCheckboxes.modules.css"
import CustomCheckbox from "../../ui/CustomCheckbox"
import useSettingsContext from "../../../hooks/useSettingsContext"

const SettingsCheckboxes: FunctionComponent = () => {
  const {
    includeLowerCase,
    includeNumbers,
    includeSymbols,
    includeUpperCase,
    setIncludeLowerCase,
    setIncludeNumbers,
    setIncludeSymbols,
    setIncludeUpperCase,
  } = useSettingsContext()

  return (
    <FormGroup
      className="checkboxContainer"
      data-test="SettingsCheckboxes:container"
    >
      <FormControlLabel
        control={
          <CustomCheckbox
            checked={includeUpperCase}
            setChecked={setIncludeUpperCase}
          />
        }
        label="Include Uppercase Letters"
        data-test="SettingsCheckboxes:upperCase:checkbox"
      />
      <FormControlLabel
        control={
          <CustomCheckbox
            checked={includeLowerCase}
            setChecked={setIncludeLowerCase}
          />
        }
        label="Include Lowercase Letters"
        data-test="SettingsCheckboxes:lowerCase:checkbox"
      />
      <FormControlLabel
        control={
          <CustomCheckbox
            checked={includeNumbers}
            setChecked={setIncludeNumbers}
          />
        }
        label="Include Numbers"
        data-test="SettingsCheckboxes:numbers:checkbox"
      />
      <FormControlLabel
        control={
          <CustomCheckbox
            checked={includeSymbols}
            setChecked={setIncludeSymbols}
          />
        }
        label="Include Symbols"
        data-test="SettingsCheckboxes:symbols:checkbox"
      />
    </FormGroup>
  )
}

export default SettingsCheckboxes
