const add = (a: number, b: number): number => {
  return a + b;
};

const joinStrings = (a: string, b: string): string => {
  return a + b;
};

interface Post {
  title: string;
  daysOld: number;
  published: boolean;
}

const post = {
  title: "Typescript news",
  daysOld: 10,
  published: true,
};

const printPost = (postToPrint: Post) => {
  return `${postToPrint.title} (${postToPrint.daysOld} days old)`;
};

printPost(post);
