import styles from './header.module.scss'
import githubIcon from '../../../material/icon/github.png'

export const Header = () => {
  return (
    <div className={styles.header}>
      <div className={`${styles.left} font-anton text-theme-color-primary`}>Amatelas UI</div>
      {/* <div className={styles.center}>center</div> */}
      <div className={styles.right}>
        <img className={styles['github-icon']} src={githubIcon} alt="github" />
      </div>
    </div>
  )
}
