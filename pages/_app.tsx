import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider
      theme={extendTheme({
        fonts: {
          heading: "Inter",
          body: "Inter",
        },
        initialColorMode: "light",
        useSystemColorMode: false,
        colors,
      })}
    >
      <Head>
        {" "}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1"
        />
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
const colors = {
  black: "#0e1012",
  gray: {
    "50": "#f9fafa",
    "100": "#f1f1f2",
    "200": "#e7e7e8",
    "300": "#d3d4d5",
    "400": "#abadaf",
    "500": "#7d7f83",
    "600": "#52555a",
    "700": "#33373d",
    "800": "#1d2025",
    "900": "#171a1d",
  },
  blue: {
    "50": "#f4f6f9",
    "100": "#d5dfe9",
    "200": "#b7c8d9",
    "300": "#96aec7",
    "400": "#7797b7",
    "500": "#5c82a8",
    "600": "#416d9a",
    "700": "#305378",
    "800": "#274462",
    "900": "#203750",
  },
  purple: {
    "50": "#f8f6fa",
    "100": "#e2dcec",
    "200": "#ccc3df",
    "300": "#ad9ecb",
    "400": "#9885be",
    "500": "#7d65ad",
    "600": "#6b50a1",
    "700": "#593b96",
    "800": "#49317a",
    "900": "#36245a",
  },
  pink: {
    "50": "#faf6f8",
    "100": "#eddde5",
    "200": "#dec1d0",
    "300": "#cb9db4",
    "400": "#bd84a1",
    "500": "#ac6488",
    "600": "#a04d77",
    "700": "#8b3761",
    "800": "#6c2b4c",
    "900": "#4f1f38",
  },
  red: {
    "50": "#faf6f6",
    "100": "#eddcdc",
    "200": "#ddbfbf",
    "300": "#c99a9a",
    "400": "#be8686",
    "500": "#af6a6a",
    "600": "#a25151",
    "700": "#8e3939",
    "800": "#783030",
    "900": "#572323",
  },
  orange: {
    "50": "#fcfaf9",
    "100": "#f2ece6",
    "200": "#e3d7ca",
    "300": "#ceb8a3",
    "400": "#bb9d7f",
    "500": "#aa855f",
    "600": "#996d3f",
    "700": "#7b5631",
    "800": "#614426",
    "900": "#4f381f",
  },
  yellow: {
    "50": "#fefefd",
    "100": "#faf9f5",
    "200": "#efede2",
    "300": "#e3dfcb",
    "400": "#d3ccac",
    "500": "#b3a871",
    "600": "#95863b",
    "700": "#74692e",
    "800": "#574e23",
    "900": "#48411d",
  },
  green: {
    "50": "#f9fcfa",
    "100": "#dfeee7",
    "200": "#bedccd",
    "300": "#99c9b1",
    "400": "#72b493",
    "500": "#4a9e75",
    "600": "#35845d",
    "700": "#296748",
    "800": "#21543b",
    "900": "#1b4531",
  },
  teal: {
    "50": "#f6fafa",
    "100": "#daecec",
    "200": "#bbdbdb",
    "300": "#96c7c7",
    "400": "#65adad",
    "500": "#3c9696",
    "600": "#307a7a",
    "700": "#265f5f",
    "800": "#1f4f4f",
    "900": "#1a4141",
  },
  cyan: {
    "50": "#f7fafb",
    "100": "#dfebee",
    "200": "#d1e3e6",
    "300": "#c0d9de",
    "400": "#91bcc4",
    "500": "#7baeb8",
    "600": "#619fab",
    "700": "#3b8594",
    "800": "#306d7a",
    "900": "#25555e",
  },
  primary: {
    "50": "#f6fafa",
    "100": "#daecec",
    "200": "#bbdbdb",
    "300": "#96c7c7",
    "400": "#65adad",
    "500": "#3c9696",
    "600": "#307a7a",
    "700": "#265f5f",
    "800": "#1f4f4f",
    "900": "#1a4141",
  },
};
export default MyApp;
