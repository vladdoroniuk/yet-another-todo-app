import { router, publicProcedure } from "../trpc";

export const userRouter = router({
  getAll: publicProcedure.query(() => {
    return ["Jake", "Mike"];
  }),
});
