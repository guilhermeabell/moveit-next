import Head from 'next/head';

import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { CompleteChallenge } from "../components/CompleteChallenge";
import { ChallengeBox } from "../components/ChallengeBox";
import { Countdown } from "../components/Countdown";

import styles from '../styles/pages/Home.module.css';





export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Inicio | move.it</title>
       </Head> 

      <ExperienceBar />
      
      <section>
      <div>
        <Profile />
        <CompleteChallenge />
        <Countdown />
        </div>
        <div>
         <ChallengeBox />
          
          </div>
      </section>
    </div>
  )
}
