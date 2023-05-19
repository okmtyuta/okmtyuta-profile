import { RetexProps } from '../types/Props'
import styles from './digit.module.scss'

interface DigitProps extends RetexProps {}

export const Digit = (props: DigitProps) => {
  return <span className={styles.digit}>{props.children}</span>
}
