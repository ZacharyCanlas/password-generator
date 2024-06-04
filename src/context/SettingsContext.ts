import { Dispatch, SetStateAction, createContext } from "react"

type SettingsContext = {
  passwordCharacterLength: number
  setPasswordCharacterLength: Dispatch<SetStateAction<number>>
  includeUpperCase: boolean
  setIncludeUpperCase: Dispatch<SetStateAction<boolean>>
  includeLowerCase: boolean
  setIncludeLowerCase: Dispatch<SetStateAction<boolean>>
  includeNumbers: boolean
  setIncludeNumbers: Dispatch<SetStateAction<boolean>>
  includeSymbols: boolean
  setIncludeSymbols: Dispatch<SetStateAction<boolean>>
  enabledSettings: number
}

export const SettingsContext = createContext<SettingsContext>({
  passwordCharacterLength: 6,
  setPasswordCharacterLength: () => false,
  includeUpperCase: false,
  setIncludeUpperCase: () => false,
  includeLowerCase: false,
  setIncludeLowerCase: () => false,
  includeNumbers: false,
  setIncludeNumbers: () => false,
  includeSymbols: false,
  setIncludeSymbols: () => false,
  enabledSettings: 0,
})
