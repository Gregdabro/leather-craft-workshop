import MainPage from './pages/MainPage'
import AuthLayout from './layouts/AuthLayout'
import { Navigate } from 'react-router-dom'
import SignupPage from './pages/SignupPage'
import ProductsLayout from './layouts/ProductsLayout'
import ProductListPage from './pages/ProductListPage'
import ProductPage from './pages/ProductPage'
import CartPage from './pages/CartPage'
import ContactPage from './pages/ContactPage'
import AboutPage from './pages/AboutPage'
import LoginPage from './pages/LoginPage'
import ProductsTable from './components/ProductsTable/ProductsTable'
import AddProduct from './components/AddProduct/AddProduct'
import UserTable from './components/UsersTable/UserTable'
import AdminPage from './pages/AdminPage'
import AdminHome from './components/AdminHome/AdminHome'

const routes = (isLoggedIn, location, isAdmin) => [
  {
    path: '',
    element: <MainPage />
  },
  {
    path: 'admin',
    element: isAdmin ? <AdminPage /> : <Navigate to="/auth/login" state={{ referrer: location }} />,
    children: [
      {
        path: '',
        element: <AdminHome />
      },
      {
        path: 'users',
        element: <UserTable />
      },
      {
        path: 'products',
        element: <ProductsTable />
      },
      {
        path: 'add-product',
        element: <AddProduct />
      }
    ]
  },
  {
    path: 'auth',
    element: <AuthLayout />,
    children: [
      {
        path: '',
        element: <Navigate to="/auth/signup" />
      },
      {
        path: 'login',
        element: <LoginPage />
      },
      {
        path: 'signup',
        element: <SignupPage />
      },
      {
        path: '*',
        element: <Navigate to="/auth/signup" />
      }
    ]
  },
  {
    path: 'product',
    element: <ProductsLayout />,
    children: [
      {
        path: '',
        element: <ProductListPage />
      },
      {
        path: ':id',
        element: <ProductPage />
      }
    ]
  },
  {
    path: 'cart',
    element: isLoggedIn ? (
      <CartPage />
    ) : (
      <Navigate to="/auth/login" state={{ referrer: location }} />
    )
  },
  {
    path: '/contact',
    element: <ContactPage />
  },
  {
    path: '/about',
    element: <AboutPage />
  },
  {
    path: '*',
    element: <Navigate to="/product" />
  }
]

export default routes
