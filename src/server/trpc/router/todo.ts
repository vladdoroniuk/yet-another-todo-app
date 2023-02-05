import { publicProcedure, router } from "../trpc";

export const todoRouter = router({
  getAll: publicProcedure.query(() => {
    return [];
  }),
});
