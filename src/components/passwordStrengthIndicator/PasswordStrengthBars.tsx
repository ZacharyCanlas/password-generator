import { Box, Typography } from "@mui/material";
import "./PasswordStrengthBars.modules.css";
import clsx from "clsx";
import { FunctionComponent, useCallback, useEffect, useState } from "react";

type PasswordStrengthBarsProps = {
  password: string | undefined;
};

const PasswordStrengthBars: FunctionComponent<PasswordStrengthBarsProps> = ({
  password,
}) => {
  const [passwordStrength, setPasswordStrength] = useState<number>(0);

  const tooWeak = passwordStrength <= 1;
  const weak = passwordStrength === 2;
  const medium = passwordStrength === 3;
  const strong = passwordStrength === 4;

  const assessPasswordStrength = useCallback(() => {
    if (!password) {
      return;
    }

    const containsNumbers = /\d/.test(password);
    const containsUpperCase = /[A-Z]/.test(password);
    const containsLowerCase = /[a-z]/.test(password);
    const containsSymbols = /[ `!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/.test(
      password
    );

    const passwordChecks = [
      containsNumbers,
      containsUpperCase,
      containsLowerCase,
      containsSymbols,
    ];

    setPasswordStrength(passwordChecks.filter(Boolean).length);
  }, [password]);

  useEffect(() => {
    assessPasswordStrength();
  }, [password, assessPasswordStrength]);

  const passwordStrengthText = () => {
    if (tooWeak) return "TOO WEAK!";
    if (weak) return "WEAK";
    if (medium) return "MEDIUM";
    if (strong) return "STRONG";
  };

  return (
    <Box className="strengthContainer">
      <Typography variant="h2" className="strengthText">
        {passwordStrengthText()}
      </Typography>
      <div className="barContainer">
        <div
          className={clsx(
            "bar",
            { tooWeak: tooWeak },
            { weak: weak },
            { medium: medium },
            { strong: strong }
          )}
        ></div>
        <div
          className={clsx(
            "bar",
            { neutral: tooWeak },
            { weak: weak },
            { medium: medium },
            { strong: strong }
          )}
        ></div>
        <div
          className={clsx(
            "bar",
            { neutral: tooWeak },
            { neutral: weak },
            { medium: medium },
            { strong: strong }
          )}
        ></div>
        <div
          className={clsx(
            "bar",
            { neutral: tooWeak },
            { neutral: weak },
            { neutral: medium },
            { strong: strong }
          )}
        ></div>
      </div>
    </Box>
  );
};

export default PasswordStrengthBars;
