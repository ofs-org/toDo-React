import { NavLink } from 'react-router-dom'
import Text from '../text'

const Footer = () => {
  return (
    <footer className="flex items-center gap-3 justify-center h-40">
      <NavLink to="/">
        <Text variant={'sm'}>Home</Text>
      </NavLink>
      <NavLink to="/components">
        <Text variant={'sm'}>Componentes</Text>
      </NavLink>
    </footer>
  )
}

export default Footer
