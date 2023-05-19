import { classNames } from '../../function/components/classnames'
import { RetexProps } from '../types/Props'
import styles from "./italic.module.scss"

interface ItalicProps extends RetexProps {}

export const Italic = (props: ItalicProps) => {
  return <span className={classNames(styles.italic)}>{props.children}</span>
}
