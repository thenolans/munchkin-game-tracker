import React from "react";
import cx from "classnames";
import { Link, LinkProps as RRLinkProps } from "react-router-dom";

import "./Button.css";

type CommonProps = {
  className?: string;
  fluid?: boolean;
  styleReset?: boolean;
  theme?: "default" | "info";
};

type LinkProps = RRLinkProps & {
  as: typeof Link;
};

type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  as?: "button";
  type?: "button" | "submit" | "reset";
};

const buildClasses = (props: CommonProps) => {
  return cx(
    "button",
    `button--${props.theme || "default"}`,
    { "button--fluid": props.fluid },
    { "button--style-reset": props.styleReset },
    props.className
  );
};

function Button(props: CommonProps & LinkProps): React.ReactElement;
function Button(props: CommonProps & ButtonProps): React.ReactElement;

function Button(
  props: (CommonProps & LinkProps) | (CommonProps & ButtonProps)
) {
  // https://github.com/microsoft/TypeScript/issues/12184
  // Issue with typescript failing to narrow return types
  // and destructuring leads to a slightly awkward implementation
  if (props.as === Link) {
    const { as, className, theme, styleReset, fluid, ...rest } = props;
    return <Link className={buildClasses(props)} {...rest} />;
  }
  if (props.as === "button" || props.as === undefined) {
    const { type, className, theme, styleReset, fluid, ...rest } = props;
    return (
      <button
        className={buildClasses(props)}
        data-testid="button"
        type={type}
        {...rest}
      />
    );
  }
}

export default Button;
