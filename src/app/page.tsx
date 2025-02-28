"use client"
import styles from "./page.module.css";
import { Topbar } from "./components/Topbar";
import { useEffect, useState } from "react";

const sections = ["a propos de moi", "projets", "cv", "social", "contact"];

function Sidenav() {
  const [visibility, setvisibility] = useState(false)
  useEffect(()=>{
    setInterval(()=>{
      if (window.scrollY >= 500) {
        setvisibility(true);
      } else {
        setvisibility(false);
      }
    })
  },[])

  if (visibility) {
    return (
      <nav className={styles.sideNav}>
        <ul>
          {sections.map(s => <li key={s}><a href={'#' + s}>{s}</a></li>)}
        </ul>
      </nav>
    );
  } else {
    return (
      <nav className={styles.sideNav + ' ' + styles.invisible}>
        <ul>
          {sections.map(s => <li key={s}><a href={'#' + s}>{s}</a></li>)}
        </ul>
      </nav>
    );
  }
}

export default function Home() {

  return (
    <div className={styles.page}>
      <Topbar></Topbar>
      <Sidenav></Sidenav>
      <main className={styles.main}>
        {sections.map((sec) => (
          <section id={sec} key={sec}>
            <h2>{sec}</h2>
          </section>
        ))}
      </main>
    </div>
  );
}
