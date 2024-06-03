import { Card } from "@mui/material";
import { FunctionComponent, ReactNode } from "react";
import clsx from "clsx";
import "./CardWrapper.modules.css";

type CardWrapperProps = {
  children: ReactNode;
  className?: string;
  dataTest?: string;
};

const CardWrapper: FunctionComponent<CardWrapperProps> = ({
  children,
  className,
  dataTest,
}) => {
  return <Card className={clsx("card", className)} data-test={dataTest}>{children}</Card>;
};

export default CardWrapper;
