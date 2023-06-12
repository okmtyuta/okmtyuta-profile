import { Space } from '../components/layout/Space'
import { Column } from '../components/telas/column/TelasColumn'
import { Heading } from '../components/telas/heading/TelasHeading'
import { Highlight } from '../components/telas/highlight/TelasHighlight'
import { Paragraph } from '../components/telas/paragraph/TelasParagraph'
import { Title } from '../components/telas/title/title'

export const DesignRule = () => {
  return (
    <Column>
      <Title posted="12th June 2023">Design Rule</Title>
      <Heading>Overview</Heading>
      <Paragraph justify>This component library is designed to create colorful web pages!</Paragraph>

      <div className="flex justify-center pt-12">
        <span className="font-anton text-theme-color-primary">POWERED BY </span>
        <Space />
        <Highlight>Amatelas UI</Highlight>
      </div>
    </Column>
  )
}
