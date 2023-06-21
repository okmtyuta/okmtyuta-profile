import { Heading } from '../components/amatelas/base/heading/Heading'
import { Paragraph } from '../components/amatelas/base/paragraph/Paragraph'
import { Title } from '../components/amatelas/base/title/title'
import { Frame } from '../components/page/Frame'

export const DesignRule = () => {
  return (
    <Frame pageId={2}>
      <Title posted="20th May 2023">Design Rule</Title>

      <Paragraph>
        Kuma UI includes a powerful Style System that gives developers the flexibility to style their components using
        simple, type-safe utility props. Let's take a look at some of the main concepts in the Style System.
      </Paragraph>
      <Heading type="h2">Style Props</Heading>
      <Paragraph justify>
        Style props allow you to modify the style of a component by simply passing props to it. This allows for a more
        intuitive and efficient way to style your components. Here's a list of the available style props in Kuma UI,
        grouped by the relevant CSS properties:
      </Paragraph>

      <Heading type="h2">Developer Experience: Familiar Yet Revolutionary</Heading>
      <Paragraph>
        Kuma UI is built with performance as its cornerstone. By utilizing a zero-runtime approach, it extracts CSS
        during the build process itself, which results in an ultra fast rendering. This means your application will stay
        as agile and responsive as possible, delivering an optimal user experience. No more trade-offs between power and
        performance. With Kuma UI, you can have both.
      </Paragraph>

      <Heading type="h2">Job Experiences</Heading>
      <Paragraph>
        We're passionate about providing a familiar and intuitive developer experience. If you've used Chakra UI, Styled
        System, or xstyled, you'll feel right at home with Kuma UI. What sets Kuma UI apart? It's simple: our
        zero-runtime approach. This not only makes Kuma UI performance-friendly, but also ensures compatibility with
        Next.js's App Router and React Server Components (RSC). You can write your styles just as you would with other
        libraries, but with Kuma UI, you enjoy superior performance and greater flexibility.
      </Paragraph>

      <Heading type="h2">Contact</Heading>
      <Paragraph>okmtyuta[at]gmail.comまでご連絡ください。</Paragraph>
    </Frame>
  )
}
