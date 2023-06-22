import { ReactNode } from 'react'
import { BaseProps } from '../../../types/BaseProps'
// import styles from './link.module.scss'

interface LinkProps extends BaseProps {
  children: ReactNode
  to: string
}

export const Link = (props: LinkProps) => {
  return <a href={props.to}>{props.children}</a>
}
