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
import AdminPage from './pages/AdminPage'
import ProductsTable from './components/Admin/ProductsTable'
import UserTable from './components/Admin/UserTable'
import CommonList from './components/Admin/CommonList'
import AddProduct from './components/Admin/AddProduct'
import Cart from './components/Cart/Cart'
import CartSuccess from './components/Cart/CartSuccess'

const routes = (isLoggedIn, location, isAdmin) => [
  {
    path: '',
    element: <MainPage />
  },
  {
    path: 'admin',
    element: isAdmin ? (
      <AdminPage />
    ) : (
      <Navigate to="/auth/login" state={{ referrer: location }} />
    ),
    children: [
      {
        path: '',
        element: <ProductsTable />
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
        path: 'orders',
        element: <CommonList />
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
      { path: '', element: <ProductListPage /> },
      { path: ':productId', element: <ProductPage /> }
    ]
  },
  {
    path: 'cart',
    element: isLoggedIn ? (
      <CartPage />
    ) : (
      <Navigate to="/auth/login" state={{ referrer: location }} />
    ),
    children: [
      {
        path: '', element: <Cart/>
      },
      {
        path: 'success', element: <CartSuccess/>
      }
    ]
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
