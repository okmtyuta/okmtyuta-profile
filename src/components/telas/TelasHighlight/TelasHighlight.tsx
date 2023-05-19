import { classNames } from '../../function/components/classnames'
import { TelasProps } from '../Telas/TelasProps'
import styles from './telas-highlight.module.scss'

type Order = 'primary' | 'secondary' | 'tertiary'

interface TelasHighlightProps extends TelasProps {
  order?: Order
}

const getOrder = (order?: Order) => {
  if (order === 'primary') {
    return styles.primary
  }
  if (order === 'secondary') {
    return styles.secondary
  }
  if (order === 'tertiary') {
    return styles.tertiary
  }

  return styles.primary
}

export const TelasHighlight = (props: TelasHighlightProps) => {
  return <span className={classNames(styles.highlight, getOrder(props.order))}>{props.children}</span>
}
