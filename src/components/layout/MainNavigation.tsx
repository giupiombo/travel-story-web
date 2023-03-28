import classes from './MainNavigation.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useMediaQuery } from 'react-responsive';
import { slide as Menu } from 'react-burger-menu';

const MainNavigation: React.FC = () => {
  const router = useRouter();

  const isMobile = useMediaQuery({
    query: '(max-width: 1000px)',
  });

  const styles = {
    bmBurgerButton: {
      position: 'absolute',
      width: '36px',
      height: '30px',
      left: '36px',
      top: '36px',
    },
    bmBurgerBars: {
      background: '#1b4965',
    },
    bmBurgerBarsHover: {
      background: '#cae9ff',
    },
    bmCrossButton: {
      height: '24px',
      width: '24px',
    },
    bmCross: {
      background: '#1b4965',
    },
    bmMenuWrap: {
      position: 'fixed',
      height: '100%',
    },
    bmMenu: {
      background: '#cae9ff',
      padding: '2.5em 1.5em 0',
      fontSize: '1.15em',
    },
    bmItemList: {
      color: '#b8b7ad',
      padding: '0.8em',
    },
    bmItem: {
      border: 'none',
      backgroundColor: 'inherit',
      fontSize: '20px',
      fontWeight: 'bold',
      cursor: 'pointer',
      textTransform: 'uppercase',
      letterSpacing: '0.2rem',
      marginBottom: '1rem',
      color: '#1b4965',
      textDecoration: 'none',
    },
    bmItemHover: {
      color: 'white',
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.3)',
    },
  };

  const mobileView = (
    <div className={classes.burger}>
      <Menu styles={styles}>
        <Link href="/">ALL POSTS</Link>
        <Link href="/new-post">NEW POST</Link>
        <Link href="/analytics">ANALYTICS</Link>
      </Menu>
    </div>
  );

  const desktopView = (
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
          <li
            className={
              router.pathname === '/analytics' ? classes.active : undefined
            }
          >
            <Link href="/analytics">ANALYTICS</Link>
          </li>
        </ul>
      </nav>
    </header>
  );

  return isMobile ? mobileView : desktopView;
};

export default MainNavigation;
