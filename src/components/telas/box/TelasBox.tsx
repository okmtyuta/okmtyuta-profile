import { BaseProps } from '../types/BaseProps'

interface BoxProps extends BaseProps {
  telas?: string
}

export const Box = (props: BoxProps) => {
  return <div>{props.children}</div>
}
