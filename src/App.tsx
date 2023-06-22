import { Heading } from './components/amatelas/base/heading/Heading'
import { List, ListItem } from './components/amatelas/base/list/List'
import { Paragraph } from './components/amatelas/base/paragraph/Paragraph'
import { Title } from './components/amatelas/base/title/title'
import { Highlight } from './components/amatelas/display/highlight/Highlight'
import { Frame } from './components/page/Frame'

export const App = () => {
  return (
    <Frame pageId={1}>
      <Title posted="June 21th 2023">Introduction</Title>
      Hello! I am okmtyuta, an software engineer. This is my personal page.
      <Heading type="h2">Overview</Heading>
      <Paragraph justify>My almost all of products will be available on GitHub.</Paragraph>
      <Paragraph>
        I mainly create these products:
        <List>
          <ListItem>
            <Highlight>Amatelas UI</Highlight>: a UI library for my personal project.
          </ListItem>
          <ListItem>
            <Highlight>RuTeX</Highlight>: More flexible LaTeX-like tool by Rust.
          </ListItem>
          <ListItem>
            <Highlight>okmtyuta-flavored-markdown</Highlight>: a markdown parser for me.
          </ListItem>
          <ListItem>
            <Highlight>Ratis</Highlight>: Documents creator.
          </ListItem>
          <ListItem>
            <Highlight>Teuto</Highlight>: Coming soon.
          </ListItem>
        </List>
      </Paragraph>
    </Frame>
  )
}
