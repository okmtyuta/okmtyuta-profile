import { Space } from './components/layout/Space'
import { Retex } from './components/retex/Retex'
import { Heading } from './components/amatelas/base/heading/Heading'
import { Highlight } from './components/amatelas/display/highlight/Highlight'
import { List, ListItem } from './components/amatelas/base/list/List'
import { Paragraph } from './components/amatelas/base/paragraph/Paragraph'
import { Title } from './components/amatelas/base/title/title'
import { Menu } from './components/amatelas/navigation/menu/Menu'
import { Frame } from './components/page/Frame'

const menuItems = [
  {
    label: 'label1',
    to: 'about',
    active: true
  },
  {
    label: 'label2',
    to: 'design-rule',
    active: false
  }
]

function App() {
  return (
    <Frame pageId={1}>
      <div>
        <Title posted="20th May 2023">Introduction</Title>
        <Heading>Overview</Heading>
        <Paragraph justify>
          東京大学理学部数学科4年生。専門は<Highlight>数理物理学</Highlight>
          。大学入学からプログラミングの学習を開始。ベンチャー企業でのインターンなどを経てWebアプリケーション開発の技術を習得。使用言語は，
          <Highlight>TypeScript</Highlight>，<Highlight>Python</Highlight>，<Highlight>Go</Highlight>
          など。フロントエンド，バックエンドおよびインフラに興味がある。
        </Paragraph>

        <Heading>Education</Heading>
        <List>
          <ListItem>熊本県立第二高等学校</ListItem>
          <ListItem>東京大学教養学部</ListItem>
          <ListItem>東京大学理学部数学科</ListItem>
        </List>

        <Menu menuItems={menuItems} />

        <Heading>Job Experiences</Heading>
        <List>
          <ListItem>株式会社楽天グループ</ListItem>
          <ListItem>株式会社ネットプロテクションズ</ListItem>
          <ListItem>株式会社PKSHA Technology</ListItem>
        </List>

        <Heading>Contact</Heading>
        <Paragraph>okmtyuta[at]gmail.comまでご連絡ください。</Paragraph>

        <Paragraph>
          <Retex text="集合$X$は線型空間であるとし，$X$上のHermite内積が定義されているとする。この内積から定まる距離に関して$X$が完備かつ可分であるとき，$X$" />
        </Paragraph>

        <div className="flex justify-center pt-12">
          <span className="font-anton text-theme-color-primary">POWERED BY </span>
          <Space />
          <Highlight>Amatelas UI</Highlight>
        </div>
      </div>
    </Frame>
  )
}

export default App
