import React, { FC, ReactNode } from "react";

export type ButtonWithDefaultExportProps = {
  /**
   * Button label
   */
  children: ReactNode;

  /**
   * Simple click handler
   */
  onClick?: () => void;

  /**
   * Size of the button
   */
  size: "small" | "large";
};

/**
 * The world's most _basic_ button
 */
export const ButtonWithDefaultExport: FC<ButtonWithDefaultExportProps> = (
  props: ButtonWithDefaultExportProps
) => <button type="button" {...props} />;

export default ButtonWithDefaultExport;
