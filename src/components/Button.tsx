import ButtonSvg from '../assets/svg/ButtonSvg'

type ButtonProps = {
  className?: string,
  href?: string,
  children: React.ReactNode,
  onClick?: () => void,
  px?: string,
  white?: boolean,
}
const Button = ({ className, href, onClick, children, px, white }: ButtonProps) => {
  const classes = `${className} button relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 ${
    px || 'px-7'
  } ${white ? 'text-n-8' : 'text-n-1'}`
  const spanClasses = 'relative z-10'

  const renderButton = () => (
    <button className={classes} onClick={onClick}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </button>
  )

  const renderLink = () => (
    <a href={href} className={classes}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </a>
  )

  return href ? renderLink() : renderButton()
}

export default Button