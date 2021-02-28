import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/profile";

import styles from '../styles/pages/home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <ExperienceBar />
      
      <section>
      <div>
        <Profile />
        </div>
        <div>
          
          </div>
      </section>
    </div>
  )
}
