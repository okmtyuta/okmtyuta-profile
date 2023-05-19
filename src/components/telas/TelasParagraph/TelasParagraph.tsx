import { classNames } from '../../function/components/classnames'
import { TelasProps } from '../Telas/TelasProps'
import styles from './telas-paragraph.module.scss'

interface TelasParagraphProps extends TelasProps {
  justify?: boolean
}

const getJustify = (justify?: boolean) => {
  if (justify) {
    return styles.justify
  }

  return ''
}

export const TelasParagraph = (props: TelasParagraphProps) => {
  return <p className={classNames(styles.paragraph, getJustify(props.justify))}>{props.children}</p>
}
