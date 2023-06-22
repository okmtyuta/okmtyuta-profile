import styles from './header.module.scss'
import githubIcon from '../../../material/icon/github.png'
import { Link } from '../../amatelas/base/link/Link'

export const Header = () => {
  return (
    <div className={styles.header}>
      <div className={`${styles.left} font-anton text-theme-color-primary`}>okmtyuta</div>
      {/* <div className={styles.center}>center</div> */}
      <div className={styles.right}>
        <Link to='https://github.com/okmtyuta'>
          <img className={styles['github-icon']} src={githubIcon} alt="github" />
        </Link>
      </div>
    </div>
  )
}
