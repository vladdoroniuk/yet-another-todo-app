import * as trpcNext from "@trpc/server/adapters/next";
import { appRouter } from "@/server/trpc/_app";
import { createContext } from "@/server/trpc/context";

export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext,
});
