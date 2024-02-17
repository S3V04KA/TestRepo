import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Footer from './Componets/Footer/Footer'
import Header from './Componets/Header/Header'
import MainPage from './Pages/Main'
import Contacts from './Pages/Contacts'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage/>
  },
  {
    path: '/contacts',
    element: <Contacts/>
  },
])

function App() {

  return (
    <>
      <Header/>
      <RouterProvider router={router}/>
      <Footer/>
    </>
  )
}

export default App
