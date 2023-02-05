import { type inferAsyncReturnType } from "@trpc/server";
import { type CreateNextContextOptions } from "@trpc/server/adapters/next";
import { prisma } from "../db/client";

export async function createContext(opts?: CreateNextContextOptions) {
  return { prisma };
}

export type Context = inferAsyncReturnType<typeof createContext>;
