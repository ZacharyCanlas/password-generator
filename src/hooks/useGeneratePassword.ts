import { useCallback, useState } from "react";
import useSettingsContext from "./useSettingsContext";

const useGeneratePassword = () => {
  const {
    includeLowerCase,
    includeNumbers,
    includeSymbols,
    passwordCharacterLength,
    includeUpperCase,
  } = useSettingsContext();

  const [generatedPassword, setGeneratedPassword] = useState<
    string | undefined
  >(undefined);
  const crypto = window.crypto;

  const settings = [
    includeUpperCase,
    includeLowerCase,
    includeNumbers,
    includeSymbols,
  ];

  const enabledSettings = settings.filter(Boolean).length;

  const numbers = "1234567890";
  const specialCharacters = "!@#$%&'()*+,^-./:;<=>?[]_`{~}|";
  const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
  const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const retrieveRandomCharacters = (
    reference: string | string[],
    getSingleCharacter?: boolean
  ) => {
    const indexes = crypto.getRandomValues(
      new Uint32Array(
        getSingleCharacter ? 1 : passwordCharacterLength - enabledSettings
      )
    );
    let result = "";
    indexes.forEach((index) => (result += reference[index % reference.length]));

    return result;
  };

  const generatePassword = useCallback(() => {
    const characterSet = [
      ...(includeUpperCase ? upperCaseLetters : []),
      ...(includeLowerCase ? lowerCaseLetters : []),
      ...(includeNumbers ? numbers : []),
      ...(includeSymbols ? specialCharacters : []),
    ];

    let password = "";

    if (enabledSettings === 0) {
      const defaultOnlyLowerCasePassword = retrieveRandomCharacters(lowerCaseLetters);
      setGeneratedPassword(defaultOnlyLowerCasePassword);

      return;
    }
    if (includeUpperCase) {
      const randomCharacter = retrieveRandomCharacters(upperCaseLetters, true);
      password += randomCharacter;
    }
    if (includeLowerCase) {
      const randomCharacter = retrieveRandomCharacters(lowerCaseLetters, true);
      password += randomCharacter;
    }
    if (includeNumbers) {
      const randomCharacter = retrieveRandomCharacters(numbers, true);
      password += randomCharacter;
    }
    if (includeSymbols) {
      const randomCharacter = retrieveRandomCharacters(specialCharacters, true);
      password += randomCharacter;
    }
    if (passwordCharacterLength >= 4) {
      const excess = retrieveRandomCharacters(characterSet);
      password += excess;
    }

    const shuffledPassword = password
      .split("")
      .map((value, index, array) =>
        ((number) => (
          ([value, array[number]] = [array[number], value]), value
        ))(Math.floor(Math.random() * (array.length - index)) + index)
      )
      .join("");

    setGeneratedPassword(shuffledPassword);
  }, [enabledSettings, retrieveRandomCharacters]);

  return { password: generatedPassword, generatePassword };
};

export default useGeneratePassword;
