import React from "react";
import useBreakpoints from "./useBreakpoints";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";
export default function Breakpoint({ at, children }) {
  if (!at) {
    console.error("<Breakpoint>: must specify a breakpoint for the `at` prop.");
  }
  const { active } = useBreakpoints();
  return active === at ? children : null;
}
