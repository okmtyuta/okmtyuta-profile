import { RetexProps } from '../types/Props'
import styles from "./char.module.scss"

interface CharProps extends RetexProps {}

export const Char = (props: CharProps) => {
  return <span className={styles.char}>{props.children}</span>
}
