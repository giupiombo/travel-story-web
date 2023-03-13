import Head from 'next/head';
import PostItem from './PostItem';
import classes from './AllPosts.module.css';

const AllPosts: React.FC<{ posts: any }> = (props) => {
  return (
    <>
      <Head>
        <title>All Posts</title>
      </Head>
      <div className={classes.row}>
        {props.posts.map(
          (post: {
            id: string;
            title: string;
            name: string;
            date: string;
            text: string;
            image: string;
          }): any => (
            <PostItem
              key={post.id}
              title={post.title}
              name={post.name}
              date={post.date}
              text={post.text}
              image={post.image}
              id={post.id}
            />
          )
        )}
      </div>
    </>
  );
};

export default AllPosts;
