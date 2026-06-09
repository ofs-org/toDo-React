import { Outlet } from 'react-router-dom'
import Footer from '@/components/core/footer'
import Header from '@/components/core/header'

const DefaultLayout = () => {
  return (
    <div className="bg-base-600  h-screen">
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default DefaultLayout
