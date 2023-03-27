import Link from 'next/link';
import classes from './PostItem.module.css';

const PostItem: React.FC<{
  title: string;
  name: string;
  date: string;
  text: string;
  image: string;
  id: string;
}> = (props) => {
  return (
    <div className={classes.item}>
      <h2>{props.title}</h2>
      <img src={props.image} alt={props.title} />
      <h4>Author: {props.name}</h4>
      <p>{props.date}</p>
      <Link href={'/' + props.id}>See more</Link>
    </div>
  );
};

export default PostItem;
