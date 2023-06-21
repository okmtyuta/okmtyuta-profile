import { classNames } from '../../../function/components/classnames'
import { BaseProps } from '../../../types/BaseProps'
import styles from './column.module.scss'

interface ColumnProps extends BaseProps {}

export const Column = (props: ColumnProps) => {
  return <div className={classNames(styles.column)}>{props.children}</div>
}
