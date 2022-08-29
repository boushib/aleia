import Button from '../Button'
import './PageHeader.sass'

interface Props {
  heading: string
  cta: string
  onClick: () => void
}

const PageHeader = ({ heading, cta, onClick }: Props) => (
  <div className="page-header">
    <h1>{heading}</h1>
    <Button onClick={onClick}>{cta}</Button>
  </div>
)

export default PageHeader
