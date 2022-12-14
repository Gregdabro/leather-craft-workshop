import { useSelector } from "react-redux"
import { categoryListSelector } from "../store/categorySlice"
import { productListSelector } from "../store/productSlice"
import React from "react"
import ProductList from "../components/ProductList/ProductList"
import CategoryBtn from "../components/CategoryBtn/CategoryBtn"

const ProductListPage = () => {
  const productList = useSelector(productListSelector())
  const categoryList = useSelector(categoryListSelector())
  return (
    <>
      <div style={{ display: "flex", gap: 20, flexWrap: "wrap", justifyContent: "center", alignItems: "center", marginBottom: 30 }} className="categoryList">
          <CategoryBtn>All</CategoryBtn>
          {categoryList &&
          categoryList.map((item) => (
              <CategoryBtn key={item._id}>{item.name}</CategoryBtn>
          ))}
      </div>

      <ProductList>
        {productList &&
          productList.map((item) => (
            <ProductList.Item key={item._id} item={item} />
          ))}
      </ProductList>
    </>
  )
}

export default ProductListPage
