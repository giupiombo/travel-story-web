import Analytics from '@/components/Analytics/Analytics';
import { MongoClient } from 'mongodb';
import Head from 'next/head';

const AnalyticsPage: React.FC<{ posts: [{}] }> = (props) => {
  return (
    <>
      <Head>
        <title>Analytics</title>
        <meta name="description" content="Analytics Page" />
      </Head>
      <Analytics posts={props.posts} />
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
          country: string;
        } => ({
          country: post.country,
        })
      ),
    },
    revalidate: 1,
  };
}

export default AnalyticsPage;
