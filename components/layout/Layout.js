import React from "react";
import Link from "next/link";

//styles
import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div>
      <Link href="/">
        <header className={styles.header}>
          <h2>Car shop</h2>
          <p>Choose and Buy your Car</p>
        </header>
      </Link>

      <div className={styles.container}> {children}</div>

      <footer className={styles.footer}>
        <a href="#">CarShop</a> website with Next.js
      </footer>
    </div>
  );
};

export default Layout;
