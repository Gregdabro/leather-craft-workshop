import { Outlet } from "react-router-dom"
// import {useDispatch} from "react-redux";
// import {getProducts} from "../store/productSlice";

const ProductsLayout = () => {
  // const dispatch = useDispatch()
  //
  // useEffect(() => {
  //     const loadProductData = () => {
  //         dispatch(getProducts())
  //     }
  //     loadProductData()
  // }, [dispatch])

  return <Outlet />
}

export default ProductsLayout
