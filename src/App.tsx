import { Heading } from "./components/amatelas/base/heading/Heading"
import { Paragraph } from "./components/amatelas/base/paragraph/Paragraph"
import { Title } from "./components/amatelas/base/title/title"
import { Frame } from "./components/page/Frame"


export const App = () => {
  return (
    <Frame pageId={1}>
      <Title posted="June 21th 2023">Introduction</Title>
      <Heading type="h2">Overview</Heading>
      <Paragraph justify>Amatelas UI is okmtyuta's personal UI library.</Paragraph>
    </Frame>
  )
}
