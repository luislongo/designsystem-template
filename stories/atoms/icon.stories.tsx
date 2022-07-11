import React from "react";
import { ComponentMeta, Story } from "@storybook/react";
import { Icon, IconProps } from "../../src/components";
import flag from "../../src/assets/icons/flag.svg";

export default {
  title: "Icon",
  component: Icon,
} as ComponentMeta<typeof Icon>;

const Template: Story<IconProps> = ({ icon, size }) => (
  <Icon icon={icon} size={size} />
);

export const Primary = Template.bind({});
Primary.args = { icon: flag, size: "m" };
