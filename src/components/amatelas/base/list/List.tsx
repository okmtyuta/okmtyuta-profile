import { classNames } from '../../../function/components/classnames'
import { BaseProps } from '../../../types/BaseProps'
import styles from './list.module.scss'

interface ListItemProps extends BaseProps {}

export const ListItem = (props: ListItemProps) => {
  return <li>{props.children}</li>
}

interface ListProps extends BaseProps {
  indent?: boolean
}

export const List = (props: ListProps) => {
  const classes = []
  if (props.indent) {
    classes.push(styles.indent)
  }
  return <ul className={classNames(...classes)}>{props.children}</ul>
}
