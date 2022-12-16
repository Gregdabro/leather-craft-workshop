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
import AdminPage from './pages/AdminPage/AdminPage'

const routes = (isLoggedIn, location) => [
  {
    path: '',
    element: <MainPage />
  },
  {
    path: 'admin',
    element: <AdminPage />
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
