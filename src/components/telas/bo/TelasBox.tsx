import { BaseProps } from '../types/BaseProps'

interface TelasBoxProps extends BaseProps {
  telas?: string
}

export const TelasBox = (props: TelasBoxProps) => {
  return <div>{props.children}</div>
}
