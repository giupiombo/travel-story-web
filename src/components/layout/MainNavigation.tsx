import classes from './MainNavigation.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useMediaQuery } from 'react-responsive';
import Image from 'next/image';
import plus from '../../images/plus.png';
import home from '../../images/home.png';
import analytics from '../../images/analytics.png';

const MainNavigation: React.FC = () => {
  const router = useRouter();

  const isMobile = useMediaQuery({
    query: '(max-width: 1000px)',
  });

  const mobileView = (
    <div className={classes.headerMobile}>
      <ul>
        <li>
          <Link href="/">
            <Image src={home} alt="home" width={25} height={25} />
          </Link>
        </li>
        <li>
          <Link href="/new-post">
            <Image src={plus} alt="plus" width={25} height={25} />
          </Link>
        </li>
        <li>
          <Link href="/analytics">
            <Image src={analytics} alt="analytics" width={25} height={25} />
          </Link>
        </li>
      </ul>
    </div>
  );

  const desktopView = (
    <ul>
      <li className={router.pathname === '/' ? classes.active : undefined}>
        <Link href="/">ALL POSTS</Link>
      </li>
      <li
        className={router.pathname === '/new-post' ? classes.active : undefined}
      >
        <Link href="/new-post">NEW POST</Link>
      </li>
      <li
        className={
          router.pathname === '/analytics' ? classes.active : undefined
        }
      >
        <Link href="/analytics">ANALYTICS</Link>
      </li>
    </ul>
  );

  return (
    <header className={classes.header}>
      {!isMobile && <div className={classes.logo}>TravelStory</div>}
      <nav>{isMobile ? mobileView : desktopView}</nav>
    </header>
  );
};

export default MainNavigation;
