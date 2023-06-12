import katex from 'katex'
import 'katex/dist/katex.css'
import './equation.scss'

interface EquationProps {
  math: string
  display?: boolean
}

export const Equation = (props: EquationProps) => {
  const html = katex.renderToString(props.math, {
    throwOnError: false
  })
  return (
    <span
      dangerouslySetInnerHTML={{
        __html: html
      }}
    />
  )
}
