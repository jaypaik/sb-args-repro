import React, { FC, ReactNode } from "react";

export type ButtonProps = {
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
export const Button: FC<ButtonProps> = (props: ButtonProps) => (
  <button type="button" {...props} />
);
