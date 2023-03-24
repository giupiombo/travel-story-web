import classes from './PostDetail.module.css';

const PostDetail: React.FC<{
  title: string;
  name: string;
  date: string;
  text: string;
  country: string;
  image: string;
  id: string;
}> = (props) => {
  return (
    <div className={classes.detail}>
      <div className={classes.card}>
        <h1>{props.title}</h1>
        <h4>
          Published by: {props.name} at {props.date}
        </h4>
        <img src={props.image} alt={props.title} />
        <div className={classes.country}>
          <p>{props.country}</p>
        </div>
        <p>{props.text}</p>
      </div>
    </div>
  );
};

export default PostDetail;
