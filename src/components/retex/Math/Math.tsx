import { RetexProps } from '../types/Props'
import styles from './math.module.scss'

interface MathProps extends RetexProps {}

export const Math = (props: MathProps) => {
  return <span className={styles.math}>{props.children}</span>
}
