import { RetexProps } from '../types/Props'
import styles from './plus.module.scss'

interface PlusProps extends RetexProps {}

const Space = () => {
  return <span className={styles.space}>+</span>
}

export const Plus = (props: PlusProps) => {
  return (
    <span className={styles.plus}>
      <Space />
      <span className={styles.main}></span>
    </span>
  )
}
