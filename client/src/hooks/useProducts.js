import { useMemo } from 'react'

export const useSortedProducts = (products, sort) => {
  const sortedProducts = useMemo(() => {
    if (sort) {
      return [...products].sort((a, b) => a[sort].localeCompare(b[sort]))
    } else {
      return products
    }
  }, [sort, products])

  return sortedProducts
}

export const useSelectedProducts = (products, selectedCategory) => {
  const selectedCategoryProducts = useMemo(() => {
    return products.filter((p) => p.category === selectedCategory._id)
  }, [products, selectedCategory])

  return selectedCategoryProducts
}

export const useProducts = (
  products,
  sort,
  query,
  selectedCategory,
  isProductsLoading
) => {
  const sortedProducts = useSortedProducts(products, sort, selectedCategory)

  const sortedAndSearchedProducts = useMemo(() => {
    return sortedProducts.filter((p) =>
      p.name.toLowerCase().includes(query.toLowerCase())
    )
  }, [query, sortedProducts, products, sortedProducts, isProductsLoading])

  return sortedAndSearchedProducts
}
