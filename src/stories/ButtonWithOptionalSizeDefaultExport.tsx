import React, { FC, ReactNode } from "react";

export type ButtonWithOptionalSizeDefaultExportProps = {
  /**
   * Button label
   */
  children: ReactNode;

  /**
   * Simple click handler
   */
  onClick?: () => void;

  /**
   * Size of the button (optional)
   */
  size?: "small" | "large";
};

/**
 * The world's most _basic_ button
 */
export const ButtonWithOptionalSizeDefaultExport: FC<ButtonWithOptionalSizeDefaultExportProps> = (
  props: ButtonWithOptionalSizeDefaultExportProps
) => <button type="button" {...props} />;

export default ButtonWithOptionalSizeDefaultExport;
