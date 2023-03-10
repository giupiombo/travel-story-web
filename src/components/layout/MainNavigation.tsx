import classes from './MainNavigation.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';

const MainNavigation: React.FC = () => {
  const router = useRouter();

  return (
    <header className={classes.header}>
      <div className={classes.logo}>TravelStory</div>
      <nav>
        <ul>
          <li className={router.pathname === '/' ? classes.active : undefined}>
            <Link href="/">ALL POSTS</Link>
          </li>
          <li
            className={
              router.pathname === '/new-post' ? classes.active : undefined
            }
          >
            <Link href="/new-post">NEW POST</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
