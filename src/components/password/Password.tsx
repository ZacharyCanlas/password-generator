import CopyIcon from "../svg/CopyIcon";
import { Box, Typography } from "@mui/material";
import CardWrapper from "../ui/CardWrapper";
import { FunctionComponent, useState } from "react";
import clsx from "clsx";
import "./Password.modules.css";

type PasswordProps = {
  generatedPassword: string | undefined;
};

const Password: FunctionComponent<PasswordProps> = ({ generatedPassword }) => {
  const placeholderPassword = "P4$5W0rD!";
  const password = generatedPassword ?? placeholderPassword;
  const [showCopied, setCopied] = useState<boolean>(false);
  const copyPasswordToClipboard = () => {
    navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1200);
  };

  return (
    <CardWrapper className="passwordContainer" dataTest="Password:container">
      <Typography
        variant="h1"
        color="text.primary"
        className={clsx({ faded: generatedPassword === undefined })}
        data-test="Password:generatedPasswordText"
      >
        {password}
      </Typography>
      <Box
        className="copyContainer"
        onClick={copyPasswordToClipboard}
        data-test="Password:copyIcon"
      >
        <Typography
          className={clsx("copiedText", { hidden: !showCopied })}
          variant="h3"
          data-test="Password:copyIconPopUpText"
        >
          COPIED
        </Typography>
        <CopyIcon />
      </Box>
    </CardWrapper>
  );
};

export default Password;
