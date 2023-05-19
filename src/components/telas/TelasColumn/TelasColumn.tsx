import { classNames } from '../../function/components/classnames'
import { TelasProps } from '../Telas/TelasProps'
import styles from './telas-column.module.scss'

interface TelasColumnProps extends TelasProps {}

export const TelasColumn = (props: TelasColumnProps) => {
  return <div className={classNames(styles.column)}>{props.children}</div>
}
