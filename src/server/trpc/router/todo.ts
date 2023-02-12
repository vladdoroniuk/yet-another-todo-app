import { title } from "process";
import { z } from "zod";
import { publicProcedure, router } from "../trpc";

export const todoRouter = router({
  getAll: publicProcedure
    .input(
      z.object({
        userId: z.number(),
      })
    )
    .query(async ({ input, ctx }) => {
      return ctx.prisma.todo.findMany({
        where: { userId: input.userId },
      });
    }),
  get: publicProcedure
    .input(z.object({ userId: z.number(), todoId: z.number() }))
    .query(async ({ input, ctx }) => {
      return ctx.prisma.todo.findFirst({
        where: { userId: input.userId, id: input.todoId },
      });
    }),
  create: publicProcedure
    .input(z.object({ userId: z.number(), title: z.string() }))
    .query(async ({ input, ctx }) => {
      const res = await ctx.prisma.todo.create({
        data: {
          userId: input.userId,
          title: input.title,
        },
      });

      return res;
    }),
  update: publicProcedure
    .input(z.object({ userId: z.number(), todoId: z.number() }))
    .query(async ({ input, ctx }) => {
      return ctx.prisma.todo.findFirst({
        where: {
          userId: input.userId,
          id: input.todoId,
        },
      });
    }),
  delete: publicProcedure
    .input(z.object({ todoId: z.number() }))
    .query(async ({ input, ctx }) => {
      const res = await ctx.prisma.todo.delete({
        where: {
          id: input.todoId,
        },
      });

      return res;
    }),
});
