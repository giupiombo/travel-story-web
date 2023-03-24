import PostDetail from '@/components/PostDetail';
import { MongoClient, ObjectId } from 'mongodb';
import Head from 'next/head';

const PostDetailPage: React.FC<{
  postData: {
    id: string;
    name: string;
    date: string;
    title: string;
    country: string;
    image: string;
    text: string;
  };
}> = (props) => {
  return (
    <>
      <Head>
        <title>{props.postData.title}</title>
      </Head>
      <PostDetail
        id={props.postData.id}
        name={props.postData.name}
        date={props.postData.date}
        title={props.postData.title}
        country={props.postData.country}
        image={props.postData.image}
        text={props.postData.text}
      />
    </>
  );
};

export async function getStaticPaths() {
  const client = await MongoClient.connect(`${process.env.MONGODB_URL}`);
  const db = client.db();

  const postsCollection = db.collection('posts');

  const posts = await postsCollection.find({}).toArray();

  client.close();

  return {
    fallback: 'blocking',
    paths: posts.map((post) => ({
      params: { postId: post._id.toString() },
    })),
  };
}

export async function getStaticProps(context: { params: { postId: any } }) {
  const postId = context.params.postId;

  const client = await MongoClient.connect(`${process.env.MONGODB_URL}`);
  const db = client.db();

  const postsCollection = db.collection('posts');

  const selectedPost = await postsCollection.findOne({
    _id: new ObjectId(postId),
  });

  client.close();

  return {
    props: {
      postData: {
        id: selectedPost!._id.toString(),
        name: selectedPost!.name,
        date: selectedPost!.date,
        title: selectedPost!.title,
        country: selectedPost!.country,
        image: selectedPost!.image,
        text: selectedPost!.text,
      },
    },
  };
}

export default PostDetailPage;
