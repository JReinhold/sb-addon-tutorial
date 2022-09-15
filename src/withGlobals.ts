import type { DecoratorFunction } from "@storybook/addons";
import { useEffect, useGlobals } from "@storybook/addons";
import { useMemo } from "react";
import { clearStyles, addOutlineStyles } from "./helpers";
import outlineCSS from "./outlineCSS";

export const withGlobals: DecoratorFunction = (StoryFn, context) => {
  const [{ outlineActive }] = useGlobals();
  // Is the addon being used in the docs panel
  const isInDocs = context.viewMode === "docs";

  const outlineStyles = useMemo(() => {
    const selector = isInDocs
      ? `#anchor--${context.id} .docs-story`
      : ".sb-show-main";
    return outlineCSS(selector);
  }, [context.id, isInDocs]);

  useEffect(() => {
    debugger;
    const selectorId = isInDocs
      ? `my-addon-outline-docs-${context.id}`
      : `my-addon-outline`;

    if (!outlineActive) {
      clearStyles(selectorId);
      return;
    }

    addOutlineStyles(selectorId, outlineStyles);

    return () => {
      clearStyles(selectorId);
    };
  }, [outlineActive, outlineStyles, context.id]);

  return StoryFn();
};
