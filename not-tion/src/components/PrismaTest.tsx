import { PrismaClient } from '../../prisma';
import { withAccelerate } from '@prisma/extension-accelerate';

const prisma = new PrismaClient().$extends(withAccelerate());

export default function PrismaTest() {
  const newUser = await prisma.
}
