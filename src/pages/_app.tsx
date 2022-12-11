import '../styles/globals.css'
import type { AppProps } from 'next/app'
import React from "react";
import {MantineProvider} from "@mantine/core";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider
      theme={{
        fontFamily: 'Open Sans, sans serif',
        colorScheme: 'dark',
        spacing: { xs: 15, sm: 20, md: 25, lg: 30, xl: 40 },
      }}
    >
      <Component {...pageProps} />
    </MantineProvider>
  )
}
