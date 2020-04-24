import React from "react";
import {
  ButtonWithOptionalSizeDefaultExport,
  ButtonWithOptionalSizeDefaultExportProps,
} from "./ButtonWithOptionalSizeDefaultExport";

export default {
  title: "ButtonWithOptionalSizeDefaultExport",
  component: ButtonWithOptionalSizeDefaultExport,
};

export const Component = (args: ButtonWithOptionalSizeDefaultExportProps) => (
  <ButtonWithOptionalSizeDefaultExport {...args} />
);
Component.story = { args: { children: "Simple button" } };
