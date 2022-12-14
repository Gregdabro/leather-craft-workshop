import "./App.scss"
import Header from "./components/Header/Header"
import { useLocation, useRoutes } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import withRouter from "./hoc/withRouter"
import withRedux from "./hoc/whithRedux"
import AppLoader from "./hoc/appLoader"
import routes from "./routes"
import { useSelector } from "react-redux"
import { isLoggedInSelector } from "./store/authSlice"

function App() {
  const isLoggedIn = useSelector(isLoggedInSelector())
  const location = useLocation()
  const elements = useRoutes(routes(isLoggedIn, location))
  return (
    <div className="App">
      <Header />
      <AppLoader>{elements}</AppLoader>
      <ToastContainer />
    </div>
  )
}

const AppWithStoreAndRoutes = withRedux(withRouter(App))

export default AppWithStoreAndRoutes
