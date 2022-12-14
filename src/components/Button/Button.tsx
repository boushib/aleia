import './Button.sass'

interface Props {
  children: React.ReactNode
  hasArrow?: boolean
  onClick: () => void
}

const Button = ({ children, hasArrow = true, onClick }: Props) => (
  <button className="btn" onClick={onClick}>
    {children}
    {hasArrow && <RightArrow />}
  </button>
)

const RightArrow = () => (
  <svg
    width="54"
    height="16"
    viewBox="0 0 54 16"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
  >
    <path
      d="M1 7H0V9H1V7ZM53.7071 8.70711C54.0976 8.31658 54.0976 7.68342 53.7071 7.29289L47.3431 0.928932C46.9526 0.538408 46.3195 0.538408 45.9289 0.928932C45.5384 1.31946 45.5384 1.95262 45.9289 2.34315L51.5858 8L45.9289 13.6569C45.5384 14.0474 45.5384 14.6805 45.9289 15.0711C46.3195 15.4616 46.9526 15.4616 47.3431 15.0711L53.7071 8.70711ZM1 9H53V7H1V9Z"
      style={{ color: 'inherit', fill: 'inherit' }}
    />
  </svg>
)

export default Button
