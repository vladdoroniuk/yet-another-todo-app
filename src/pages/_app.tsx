import "@/styles/globals.css";
import type { AppType } from "next/app";
import { api } from "../utils/api";

const App: AppType = ({ Component, ...pageProps }) => {
  return <Component {...pageProps} />;
};

export default api.withTRPC(App);
