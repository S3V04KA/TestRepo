import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Footer from './Componets/Footer/Footer'
import Header from './Componets/Header/Header'
import MainPage from './Pages/Main'
import Contacts from './Pages/Contacts'
import Projects from './Pages/Projects'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage/>
  },
  {
    path: '/contacts',
    element: <Contacts/>
  },
  {
    path: '/projects',
    element: <Projects/>
  }
]);

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
