// import { useParams } from 'react-router-dom'
import { Space } from '../../components/util/space/Space'
import { Column } from '../../components/amatelas/layout/column/Column'
import { Heading } from '../../components/amatelas/base/heading/Heading'
import { Highlight } from '../../components/amatelas/display/highlight/Highlight'
import { Paragraph } from '../../components/amatelas/base/paragraph/Paragraph'
import { Title } from '../../components/amatelas/base/title/title'

export const Article = () => {
  // const params = useParams()
  return (
    <Column>
      <Title posted="date posted">Title</Title>
      <Heading>Heading</Heading>
      <Paragraph justify>content</Paragraph>

      <div className="flex justify-center pt-12">
        <span className="font-anton text-theme-color-primary">POWERED BY </span>
        <Space />
        <Highlight>Amatelas UI</Highlight>
      </div>
    </Column>
  )
}
