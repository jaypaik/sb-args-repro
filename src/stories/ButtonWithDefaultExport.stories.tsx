import React from "react";
import {
  ButtonWithDefaultExport,
  ButtonWithDefaultExportProps,
} from "./ButtonWithDefaultExport";

export default {
  title: "ButtonWithDefaultExport",
  component: ButtonWithDefaultExport,
};

export const Component = (args: ButtonWithDefaultExportProps) => (
  <ButtonWithDefaultExport {...args} />
);
Component.story = { args: { children: "Simple button" } };
