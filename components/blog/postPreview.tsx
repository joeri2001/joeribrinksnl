import Link from "next/link";
import { PostMetadata } from "./postMetadata";

const PostPreview = (props: PostMetadata) => {
  return (
    <div>
      <Link href={`/posts/${props.slug}`}>
        <h2>{props.title}</h2>
      </Link>
      <p>{props.date}</p>
      <p>{props.content}</p>
    </div>
  );
};

export default PostPreview;