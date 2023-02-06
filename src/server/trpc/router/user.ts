import { router, publicProcedure } from "../trpc";

export const userRouter = router({
  getAll: publicProcedure.query(async ({ ctx }) => {
    return ctx.prisma.user.findMany();
  }),
});
