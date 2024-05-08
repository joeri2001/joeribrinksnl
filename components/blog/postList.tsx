import getPostMetadata from "./getPostMetadata";
import PostPreview from "./postPreview";

const PostList = () => {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));

  return (
    <div>{postPreviews}</div>
  );
};

export default PostList;