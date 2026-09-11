/**
 * A social media platform stores posts.
 * Tasks:
 * 1. Find post that containing "typescript"!
 * 2. Find post that containing "nestjs"!
 * 3. Find the post with highest number of likes!
 * 4. Calculate the total of likes!
 */

const posts = [
  {
    author: "Andi",
    content: "Learning TypeScript #typescript #programming",
    hashtags: ["typescript", "programming"],
    likes: 120,
  },
  {
    author: "Budi",
    content: "My first NestJS project #nestjs #typescript",
    hashtags: ["nestjs", "typescript"],
    likes: 250,
  },
  {
    author: "Citra",
    content: "Frontend development #nextjs #react",
    hashtags: ["nextjs", "react"],
    likes: 180,
  },
  {
    author: "Deni",
    content: "Backend with NestJS #nestjs #backend",
    hashtags: ["nestjs", "backend"],
    likes: 300,
  },
];

const typescriptPosts = posts.filter(post =>
    post.hashtags.includes("typescript")
);

const nestjsPosts = posts.filter(post =>
    post.hashtags.includes("nestjs")
);

const highestLikesPost = posts.reduce(
    (highest, post) =>
        post.likes > highest.likes ? post : highest
);

const totalLikes = posts.reduce(
    (total, post) => total + post.likes,
    0
);

console.log("1. Posts containing TypeScript:", typescriptPosts);
console.log("2. Posts containing NestJS:", nestjsPosts);
console.log("3. Highest Likes:", highestLikesPost);
console.log("4. Total Likes:", totalLikes);