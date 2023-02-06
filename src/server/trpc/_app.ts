import { todoRouter, userRouter } from "./router";
import { router } from "./trpc";

export const appRouter = router({
  user: userRouter,
  todo: todoRouter,
});

export type AppRouter = typeof appRouter;
