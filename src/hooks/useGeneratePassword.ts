import { useCallback, useState } from "react"
import useSettingsContext from "./useSettingsContext"

const useGeneratePassword = () => {
  const {
    includeLowerCase,
    includeNumbers,
    includeSymbols,
    passwordCharacterLength,
    includeUpperCase,
    enabledSettings,
  } = useSettingsContext()

  const [generatedPassword, setGeneratedPassword] = useState<
    string | undefined
  >(undefined)
  const [passwordStrength, setPasswordStrength] = useState<number>(0)
  const crypto = window.crypto

  const numbers = "1234567890"
  const specialCharacters = "!@#$%&'()*+,^-./:;<=>?[]_`{~}|"
  const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz"
  const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

  const retrieveRandomCharacters = useCallback(
    (reference: string | string[], getSingleCharacter?: boolean) => {
      const indexes = crypto.getRandomValues(
        new Uint32Array(
          getSingleCharacter ? 1 : passwordCharacterLength - enabledSettings,
        ),
      )
      let result = ""
      indexes.forEach(index => (result += reference[index % reference.length]))

      return result
    },
    [crypto, enabledSettings, passwordCharacterLength],
  )

  const generatePassword = useCallback(() => {
    const characterSet = [
      ...(includeUpperCase ? upperCaseLetters : []),
      ...(includeLowerCase ? lowerCaseLetters : []),
      ...(includeNumbers ? numbers : []),
      ...(includeSymbols ? specialCharacters : []),
    ]

    let password = ""

    if (enabledSettings === 0) {
      return
    }
    if (includeUpperCase) {
      const randomCharacter = retrieveRandomCharacters(upperCaseLetters, true)
      password += randomCharacter
    }
    if (includeLowerCase) {
      const randomCharacter = retrieveRandomCharacters(lowerCaseLetters, true)
      password += randomCharacter
    }
    if (includeNumbers) {
      const randomCharacter = retrieveRandomCharacters(numbers, true)
      password += randomCharacter
    }
    if (includeSymbols) {
      const randomCharacter = retrieveRandomCharacters(specialCharacters, true)
      password += randomCharacter
    }
    if (passwordCharacterLength >= 4) {
      const excess = retrieveRandomCharacters(characterSet)
      password += excess
    }

    const shuffledPassword = password
      .split("")
      .map((value, index, array) =>
        (number => (([value, array[number]] = [array[number], value]), value))(
          Math.floor(Math.random() * (array.length - index)) + index,
        ),
      )
      .join("")

    setGeneratedPassword(shuffledPassword)
    assessPasswordStrength(shuffledPassword)
  }, [
    enabledSettings,
    retrieveRandomCharacters,
    includeLowerCase,
    includeNumbers,
    includeSymbols,
    includeUpperCase,
    passwordCharacterLength,
  ])

  const assessPasswordStrength = useCallback((password: string
  ) => {
    if (!password) {
      return
    }

    const containsNumbers = /\d/.test(password)
    const containsUpperCase = /[A-Z]/.test(password)
    const containsLowerCase = /[a-z]/.test(password)
    const containsSymbols = /[ `!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/.test(
      password,
    )

    const passwordChecks = [
      containsNumbers,
      containsUpperCase,
      containsLowerCase,
      containsSymbols,
    ]

    setPasswordStrength(passwordChecks.filter(Boolean).length)
  }, [])

  return {
    password: generatedPassword,
    generatePassword,
    passwordStrength,
  }
}

export default useGeneratePassword
