import { PrismaClient } from "@prisma/client";

const gfP = global as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma = gfP.prisma ?? new PrismaClient({ log: ["query"] });

if (process.env.NODE_ENV !== "production") gfP.prisma = prisma;
