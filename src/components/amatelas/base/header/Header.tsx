import styles from './header.module.scss'

export const Header = () => {
  return (
    <div className={styles.header}>
      <div className={`${styles.left} font-anton text-theme-color-primary`}>Amatelas UI</div>
      {/* <div className={styles.center}>center</div> */}
      <div className={styles.right}>
        <img className={styles['github-icon']} src="src/material/icon/github.png" alt="github" />
      </div>
    </div>
  )
}
