import AllPosts from '@/components/AllPosts/AllPosts';
import Head from 'next/head';
import { MongoClient } from 'mongodb';

const AllPostsPage: React.FC<{ posts: [{}] }> = (props) => {
  return (
    <>
      <Head>
        <title>Blog</title>
        <meta
          name="description"
          content="Browse a huge list of posts on this amazing Blog"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AllPosts posts={props.posts} />
    </>
  );
};

export async function getStaticProps() {
  const client = await MongoClient.connect(`${process.env.MONGODB_URL}`);
  const db = client.db();

  const postsCollection = db.collection('posts');

  const posts = await (await postsCollection.find().toArray()).reverse();

  client.close();

  return {
    props: {
      posts: posts.map(
        (
          post
        ): {
          title: string;
          name: string;
          text: string;
          country: string;
          image: string;
          date: string;
          id: string;
        } => ({
          title: post.title,
          name: post.name,
          text: post.text,
          country: post.country,
          image: post.image,
          date: post.date,
          id: post._id.toString(),
        })
      ),
    },
    revalidate: 1,
  };
}

export default AllPostsPage;
