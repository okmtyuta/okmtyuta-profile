import { TelasProps } from '../Telas/TelasProps'

interface TelasBoxProps extends TelasProps {
  telas?: string
}

export const TelasBox = (props: TelasBoxProps) => {
  return <div>{props.children}</div>
}
