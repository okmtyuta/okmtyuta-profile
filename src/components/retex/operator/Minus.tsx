import { RetexProps } from '../types/Props'
import styles from './minus.module.scss'

interface MinusProps extends RetexProps {}

const Space = () => {
  return <span className={styles.space}>-</span>
}

export const Minus = (props: MinusProps) => {
  return (
    <span className={styles.minus}>
      <Space />
      <span className={styles.main}></span>
    </span>
  )
}
