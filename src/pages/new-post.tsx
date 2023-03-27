import NewPost from '@/components/NewPost/NewPost';
import Head from 'next/head';
import { useRouter } from 'next/router';

const NewPostPage: React.FC = () => {
  const router = useRouter();
  async function addPostHandler(enteredPostData: {}) {
    const response = await fetch('/api/new-post', {
      method: 'POST',
      body: JSON.stringify(enteredPostData),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();

    router.push('/');
  }

  return (
    <>
      <Head>
        <title>New Post</title>
        <meta name="description" content="Add a new post to the Blog" />
      </Head>
      <NewPost onAddPost={addPostHandler} />
    </>
  );
};

export default NewPostPage;
