import { ReactNode } from 'react'
import { classNames } from '../../function/components/classnames'
import { RetexProps } from '../types/Props'
import styles from './subscript.module.scss'

interface SubscriptProps extends RetexProps {}

const Space = (props: { children: ReactNode }) => {
  return <span className={styles.space}>{props.children}</span>
}

export const Subscript = (props: SubscriptProps) => {
  return (
    <span className={classNames(styles.subscript)}>
      <Space>{props.children}</Space>
      <span className={styles.sub}>{props.children}</span>
    </span>
  )
}
