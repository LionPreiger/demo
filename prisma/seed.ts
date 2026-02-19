import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Seed default workspace
  const workspace = await prisma.workspace.create({
    data: {
      name: 'Kodeboard',
      slug: 'kodeboard',
      description: 'Default workspace',
    },
  });

  // Seed default board with columns
  const board = await prisma.board.create({
    data: {
      name: 'Sprint Board',
      workspaceId: workspace.id,
      columns: {
        create: [
          { name: 'Backlog', position: 0, color: '#8b949e' },
          { name: 'Todo', position: 1, color: '#58a6ff' },
          { name: 'In Progress', position: 2, color: '#d29922' },
          { name: 'Review', position: 3, color: '#bc8cff' },
          { name: 'Done', position: 4, color: '#3fb950' },
          { name: 'Cancelled', position: 5, color: '#f85149' },
        ],
      },
    },
  });

  console.log(`Seeded workspace: ${workspace.name}`);
  console.log(`Seeded board: ${board.name}`);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
