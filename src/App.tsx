import { Space } from './components/layout/Space'
import { TelasColumn } from './components/telas/TelasColumn/TelasColumn'
import { TelasHeading } from './components/telas/TelasHeading/TelasHeading'
import { TelasHighlight } from './components/telas/TelasHighlight/TelasHighlight'
import { TelasList, TelasListItem } from './components/telas/TelasList/TelasList'
// import { TelasMessage } from './components/telas/TelasMessage/TelasMessage'
import { TelasParagraph } from './components/telas/TelasParagraph/TelasParagraph'
import { TelasTitle } from './components/telas/TelasTitle/TelasTitle'

function App() {
  return (
    <TelasColumn>
      <TelasTitle posted="20th May 2023">Introduction</TelasTitle>
      <TelasHeading>Overview</TelasHeading>
      <TelasParagraph justify>
        東京大学理学部数学科4年生。専門は<TelasHighlight>数理物理学</TelasHighlight>
        。大学入学からプログラミングの学習を開始。ベンチャー企業でのインターンなどを経てWebアプリケーション開発の技術を習得。使用言語は，
        <TelasHighlight>TypeScript</TelasHighlight>，<TelasHighlight>Python</TelasHighlight>，
        <TelasHighlight>Go</TelasHighlight>など。フロントエンド，バックエンドおよびインフラに興味がある。
      </TelasParagraph>

      <TelasHeading>Education</TelasHeading>
      <TelasList>
        <TelasListItem>熊本県立第二高等学校</TelasListItem>
        <TelasListItem>東京大学教養学部</TelasListItem>
        <TelasListItem>東京大学理学部数学科</TelasListItem>
      </TelasList>

      <TelasHeading>Job Experiences</TelasHeading>
      <TelasList>
        <TelasListItem>株式会社楽天グループ</TelasListItem>
        <TelasListItem>株式会社ネットプロテクションズ</TelasListItem>
        <TelasListItem>株式会社PKSHA Technology</TelasListItem>
      </TelasList>

      <TelasHeading>Contact</TelasHeading>
      <TelasParagraph>
        okmtyuta[at]gmail.comまでご連絡ください。
      </TelasParagraph>

      <div className="flex justify-center pt-12">
        <span className="font-anton text-theme-color-primary">POWERED BY </span>
        <Space />
        <TelasHighlight>Amatelas UI</TelasHighlight>
      </div>
    </TelasColumn>
  )
}

export default App
