import ParseMd from "@/components/markdown/parseMarkdown";

export default async function ListMarkdown() {
  return (
    <div>
        <p>Posts:</p>
        <ul>
            {(await ParseMd()).map((post) => (
                <li key={post.id}>{post.title}</li>
            ))}
        </ul>
    </div>
  );
}
