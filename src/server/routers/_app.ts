import { z } from "zod";
import { procedure, router } from "../trpc";

const db_data = [
  {
    id: 1,
    todo: "Read something",
  },
  {
    id: 2,
    todo: "Write something",
  },
];

export const appRouter = router({
  todos: procedure.query(() => {
    return {
      todos: db_data,
    };
  }),
});

export type AppRouter = typeof appRouter;
