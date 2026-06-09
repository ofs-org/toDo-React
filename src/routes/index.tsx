import { Route, Routes } from 'react-router-dom'
import DefaultLayout from '@/layout/default-layout'
import PageComponents from '@/pages/page-components'
import Home from '../pages/page-home'

const DefaultRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" index element={<Home />} />
        <Route path="/components" element={<PageComponents />} />
      </Route>
    </Routes>
  )
}

export default DefaultRoutes
