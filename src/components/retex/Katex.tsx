
import katex from 'katex'

import 'katex/dist/katex.css'
import './style/math.css'

interface KatexProps {
  equation: string
  display?: boolean
  err?: boolean
}

export const Katex = (props: KatexProps) => {
  const html = katex.renderToString(props.equation, {
    throwOnError: false,
    displayMode: props.display
  })
  // const katexElementRef = useRef(null)
  // const err = props.err ?? false
  // const style = err
  //   ? {
  //       color: 'red'
  //     }
  //   : {}

  // useEffect(() => {
  //   const katexElement = katexElementRef.current

  //   if (katexElement !== null) {
  //     katex.render(props.equation, katexElement, {
  //       displayMode: props.display,
  //       errorColor: '#9c3',
  //       output: 'html',
  //       strict: 'warn',
  //       throwOnError: false,
  //       trust: false
  //     })
  //   }
  // }, [props.equation])
  return (
    <span
      dangerouslySetInnerHTML={{
        __html: html
      }}
    />
  )
}
