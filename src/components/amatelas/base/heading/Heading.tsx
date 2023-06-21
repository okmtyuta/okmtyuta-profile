import { classNames } from '../../../function/components/classnames'
import styles from './heading.module.scss'
import { BaseProps } from '../../../types/BaseProps'

type HeadingType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

interface HeadingProps extends BaseProps {
  type?: HeadingType
}

export const Heading = (props: HeadingProps) => {
  const type = props.type ?? 'h1'
  return <div className={classNames(styles[type])}>{props.children}</div>
}
