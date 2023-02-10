import { type inferAsyncReturnType } from "@trpc/server";
import { type CreateNextContextOptions } from "@trpc/server/adapters/next";
import { prisma } from "@/server/db/client";

export async function createContext(opts?: CreateNextContextOptions) {
  return { prisma };
}

export type Context = inferAsyncReturnType<typeof createContext>;
