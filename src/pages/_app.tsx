import "@/styles/globals.css";
import type { AppType } from "next/app";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { api } from "../utils/api";

const App: AppType = ({ Component, ...pageProps }) => {
  return (
    <>
      <Component {...pageProps} />
      <ReactQueryDevtools initialIsOpen={false} />
    </>
  );
};

export default api.withTRPC(App);
