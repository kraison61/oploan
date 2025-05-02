import { PrismaClient } from '@prisma/client';


const prisma = new PrismaClient();

const config = {
  siteUrl: 'https://www.directpaydaylender.net',
  generateRobotsTxt: true,
  exclude: [
    '/admin*',
    '/api*',
  ],
  additionalPaths: async () => {
    const blogs = await prisma.directpaydaylenders.findMany({
      select: {
        slug: true,
      },
    });

    await prisma.$disconnect(); // Optional, clean up

    return blogs.map((post) => ({
      loc: `/blog/${post.slug}`,
      changefreq: 'weekly',
      priority: 0.7,
    }));
  },
};

export default config;
