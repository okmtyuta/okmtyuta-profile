import { RetexProps } from '../types/Props'
import styles from './fraction.module.scss'

interface FractionProps extends RetexProps {
  numerator?: JSX.Element
  denominator?: JSX.Element
}

export const Fraction = (props: FractionProps) => {
  return (
    <span className={styles.fraction}>
      <span className={styles['numerator-space']}>{props.numerator}</span>
      <span className={styles['denominator-space']}>{props.denominator}</span>
      <span className={styles.numerator}>{props.numerator}</span>
      <span className={styles.denominator}>{props.denominator}</span>
    </span>
  )
}
