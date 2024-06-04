import { FunctionComponent, ReactNode, useState } from "react"
import { SettingsContext } from "../context/SettingsContext"

type SettingsContextProviderProps = {
  children: ReactNode | ReactNode[]
}

const SettingsContextProvider: FunctionComponent<
  SettingsContextProviderProps
> = ({ children }) => {
  const [passwordCharacterLength, setPasswordCharacterLength] =
    useState<number>(6)
  const [includeUpperCase, setIncludeUpperCase] = useState<boolean>(false)
  const [includeLowerCase, setIncludeLowerCase] = useState<boolean>(false)
  const [includeNumbers, setIncludeNumbers] = useState<boolean>(false)
  const [includeSymbols, setIncludeSymbols] = useState<boolean>(false)

  const settings = [
    includeUpperCase,
    includeLowerCase,
    includeNumbers,
    includeSymbols,
  ]

  const enabledSettings = settings.filter(Boolean).length

  return (
    <SettingsContext.Provider
      value={{
        passwordCharacterLength,
        setPasswordCharacterLength,
        includeUpperCase,
        setIncludeUpperCase,
        includeLowerCase,
        setIncludeLowerCase,
        includeNumbers,
        setIncludeNumbers,
        includeSymbols,
        setIncludeSymbols,
        enabledSettings,
      }}
    >
      {children}
    </SettingsContext.Provider>
  )
}

export default SettingsContextProvider
