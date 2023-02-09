import { z } from "zod";
import { publicProcedure, router } from "../trpc";

export const todoRouter = router({
  getAll: publicProcedure
    .input(
      z.object({
        userId: z.number(),
      })
    )
    .query(({ input, ctx }) => {
      return ctx.prisma.todo.findMany({
        where: { userId: input.userId },
      });
    }),
});
