import Logo from "./Logo";
import styles from "./PageNav.module.css";

function PageNav() {
  return (
    <nav className={styles.nav}>
      <Logo />
      {/* Menu items hidden on mobile via CSS, so we keep them for desktop */}
      <ul>
        <li>
          <a href="/product">About us</a>
        </li>
        <li>
          <a href="/pricing">Pricing</a>
        </li>
        <li>
          <a href="/login" className={styles.ctaLink}>
            Login
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;