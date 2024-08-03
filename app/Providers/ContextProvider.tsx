"use client";

import GlobalStylesProvider from "./GlobalStylesProvider";

interface Props {
  children: React.ReactNode
}

function ContextProvider({ children }: Props) {
  return (
    <GlobalStylesProvider>
      ContextProvider
    </GlobalStylesProvider>
  )
}

export default ContextProvider