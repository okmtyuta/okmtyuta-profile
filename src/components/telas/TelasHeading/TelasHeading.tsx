import { classNames } from '../../function/components/classnames'
import styles from './telas-heading.module.scss'
import { TelasProps } from '../Telas/TelasProps'

type HeadingType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

interface TelasHeadingProps extends TelasProps {
  type?: HeadingType
}

export const TelasHeading = (props: TelasHeadingProps) => {
  const type = props.type ?? 'h1'
  return <div className={classNames(styles[type])}>{props.children}</div>
}
