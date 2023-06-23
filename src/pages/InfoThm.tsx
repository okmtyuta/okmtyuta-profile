// import { Paragraph } from '../components/amatelas/base/paragraph/Paragraph'
import { Paragraph } from '../components/amatelas/base/paragraph/Paragraph'
import { Title } from '../components/amatelas/base/title/title'
import { Highlight } from '../components/amatelas/display/highlight/Highlight'
// import { Highlight } from '../components/amatelas/display/highlight/Highlight'
import { Frame } from '../components/page/Frame'
// import { Retex } from '../components/retex/Retex'

export const InfoThm = () => {
  return (
    <Frame pageId={1}>
      <Title posted="June 23th 2023">情報理論入門1</Title>

      <Paragraph>情報理論（今井秀樹）の1章および2章の内容を整理します。</Paragraph>

      <Paragraph>
        情報理論の通信伝達システムにおいて，情報を発生する源ことを<Highlight>情報源</Highlight>
        といって，情報源から発生するものを<Highlight>通報</Highlight>という。このとき，情報源から発生した通報は，
        <Highlight>通信路</Highlight>
        を介してあて先に送られる。一般に，通信路は入力された符号を正確に出力するとは限らない。また，離散的な値で表される通報を
        <Highlight>ディジタル通報</Highlight>，連続的な値で表される通報を<Highlight>アナログ通報</Highlight>
        という。さらに，ディジタル通報を発生する情報源を<Highlight>ディジタル情報源</Highlight>
        ，アナログ通報を発生する情報源を<Highlight>アナログ情報源</Highlight>という。
      </Paragraph>

      <Paragraph>
        通報の伝達は通信路を介して行われるが，通報をそのまま通信路に入力できるとは限らない。そこで通報を通信路に入力するために行う変換を，広い意味で
        <Highlight>符号化</Highlight>という。一方で，通信路からの出力を通報に戻す変換を<Highlight>復号</Highlight>
        という。このとき，符号化および復号を行う装置をそれぞれ<Highlight>符号器</Highlight>および
        <Highlight>復号器</Highlight>
        という。また，情報源の統計的性質を利用して，通信路の伝達効率の向上を図るための符号化を
        <Highlight>情報源符号化</Highlight>
        という。また，通信路の雑音や誤りに対処して，通信路の信頼を向上させるための符号化を
        <Highlight>通信路符号化</Highlight>という。
      </Paragraph>

      {/* <Paragraph>
        もともとの通報を完全に複合できる符号化を<Highlight>可逆符号化</Highlight>または
        <Highlight>情報無損失符号化</Highlight>という。一方，復号後の通報がもともとの通報と異なりうる符号化を
        <Highlight>非可逆符号化</Highlight>または<Highlight>情報損失符号化</Highlight>
        という。このとき，もともとの通報と復号後の通報との違いを<Highlight>ひずみ</Highlight>という。
      </Paragraph>

      <Paragraph>
        情報源がとりうる値によってディジタルおよびアナログに分類されたように，通信路にもアナログとディジタルがある。すなわち，入力および出力が離散的値をとる通信路を
        <Highlight>ディジタル通信路</Highlight>といって，入力または出力が連続的な値をとる通信路を
        <Highlight>アナログ通信路</Highlight>という。とくに，入力および出力が0または1という値をとるディジタル通信路を
        <Highlight>二元通信路</Highlight>という。
      </Paragraph>

      <Paragraph>
        情報源から発生する記号を<Highlight>情報源記号</Highlight>
        という。また，符号化によって情報源記号またはその系列に割り当てられた系列を<Highlight>符号語</Highlight>
        といって，符号語全体からなる集合を<Highlight>符号</Highlight>
        という。さらに，符号語に用いれられる記号全体からなる集合を<Highlight>符号アルファベット</Highlight>
        という。とくに元の数が
        <Retex text="$q$" />
        である符号アルファベットをもつ符号を
        <Highlight>
          <Retex text="$q$" />
          元符号
        </Highlight>
        という。受信した符号語の複合を誤る確率を<Highlight>復号誤り率</Highlight>
        という。二元通信路で扱われる符号は二元符号である。
      </Paragraph>

      <Paragraph>
        通信路では誤りが生じうるため，通信路の出力系列は，通信路に入力された符号系列とは必ずしも一致しない。そこで，入力された符号系列と区別して，通信路の出力系列を
        <Highlight>受信系列</Highlight>という。
      </Paragraph> */}
    </Frame>
  )
}
