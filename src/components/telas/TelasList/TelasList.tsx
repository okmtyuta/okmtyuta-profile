import { TelasProps } from '../Telas/TelasProps'
import styles from './telas-list.module.scss'

interface TelasListItemProps extends TelasProps {}

export const TelasListItem = (props: TelasListItemProps) => {
  return <li>{props.children}</li>
}

interface TelasListProps extends TelasProps {}

export const TelasList = (props: TelasListProps) => {
  return <ul>{props.children}</ul>
}
