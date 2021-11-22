import styles from '../styles/Home.module.css';
import { Toolbar } from '../components/Toolbar';

export default function Home() {
  return (
    <div className="page-container">
      <Toolbar />

      <div className={styles.main}>
        <h1>FeedNews</h1>
        <h3>Just the best news for you</h3>
      </div>
    </div>
  );
}