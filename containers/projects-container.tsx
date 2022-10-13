import {
  PostsWrap,
  Post,
  Title,
  Date,
  Description,
} from "../styles/pages/blog";
import Link from "next/link";

import Banner from "../components/Banner";
import { Container } from "../styles/components/layout";

function ProjectContainer({posts}: any) {
  return (
    <Container>
      <Banner
        name="Projects"
        text="
              I write mostly about web development and tech. In total, I've written 51 articles on my blog. Use the search below to filter by title."
      />

      <PostsWrap>
        {posts.map((post: any) => (
          <Post key={post.filePath}>
            <Link
              as={`/blog/${post.filePath.replace(/\.mdx?$/, "")}`}
              href={`/blog/[slug]`}
            >
              <Title>{post.data.title}</Title>
            </Link>
            <Date>{post.data.date}</Date>
            <Description>{post.data.description}</Description>
          </Post>
        ))}
      </PostsWrap>
    </Container>
  );
}

export default ProjectContainer;
