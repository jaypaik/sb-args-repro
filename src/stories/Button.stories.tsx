import React from "react";
import { Button, ButtonProps } from "./Button";

export default {
  title: "Button",
  component: Button,
};

export const Component = (args: ButtonProps) => <Button {...args} />;
Component.story = { args: { children: "Simple button" } };
