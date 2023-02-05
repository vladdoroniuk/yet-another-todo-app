import { todoRouter } from "./todo";
import { userRouter } from "./user";
import { router } from "../trpc";

export const appRouter = router({
  user: userRouter,
  todo: todoRouter,
});

export type AppRouter = typeof appRouter;
