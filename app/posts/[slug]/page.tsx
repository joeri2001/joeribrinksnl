import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getPostMetadata from "@/components/blog/getPostMetadata";
import Link from "next/link";

const getPostContent = (slug: string) => {
  const folder = "posts/";
  const file = `${folder}${slug}.md`;
  try {
    const content = fs.readFileSync(file, "utf8");
    const matterResult = matter(content);
    return matterResult;
  } catch (error) {
    return null;
  }
};

export const generateStaticParams = async () => {
  const posts = getPostMetadata();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

const PostPage = (props: any) => {
  const slug = props.params.slug;
  const post = getPostContent(slug);

  if (!post) {
    return (
      <div>
        <p>Post not found!</p>
        <Link href={"/"}>Go back to home</Link>
      </div>
    );
  }

  return (
    <div>
      <div>
        <h1>{post.data.title}</h1>
        <p>{post.data.date}</p>
      </div>

      <article className="prose">
        <Markdown>{post.content}</Markdown>
      </article>
    </div>
  );
};

export default PostPage;
