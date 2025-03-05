import styles from "./page.module.css";
import { Topbar } from "./components/Topbar";
import { Sidenav } from "./components/Sidenav";
import sections from "./Data/sections.json";

export default function Home() {

  return (
    <div className={styles.page}>
      <Topbar></Topbar>
      <Sidenav></Sidenav>
      <main className={styles.main}>
        {sections.map((sec) => (
          <section id={sec.id} key={sec.title}>
            <h2>{sec.title}</h2>
          </section>
        ))}
      </main>
    </div>
  );
}
