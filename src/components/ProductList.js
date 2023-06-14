import ProductCard from "./ProductCard"
import { useState, useEffect } from "react"

const ProductList = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const domain = process.env.SHOPIFY_STORE_DOMAIN;
    const storefrontAccessToken = process.env.SHOPIFY_STOREFRONT_ACCESSTOKEN;
    async function ShopifyData(query) {
      const URL = `https://${domain}/api/2022-10/graphql.json`
      const options = {
        endpoint: URL,
        method: "POST",
        headers: {
          "X-Shopify-Storefront-Access-Token": storefrontAccessToken,
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query })
      }
      try {
        const data = await fetch(URL, options).then(response => {
          console.log("Response: ", response)
          return response.json()
        })
        return data
      } catch (error) {
        console.log("Error: ", error)
        throw new Error("Products not fetched")
      }
    }







    const fetchProducts = async () => {
      const query = `
            {
                products(first: 4) {
                  edges {
                    node {
                      id
                      title
                      handle
                      description
                      images(first: 10) {
                        edges {
                          node {
                            url
                            altText
                          }
                        }
                      }
                      priceRange {
                        minVariantPrice {
                          amount
                        }
                      }
                    }
                  }
                }
              }
            `
      const response = await ShopifyData(query)
      setProducts(response.data?.products.edges || [])
    }
    fetchProducts()
  }, [])

  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-extrabold text-gray-900 mb-6">
          Products
        </h2>
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {
            products.map(product => (
              <ProductCard key={product.node.id} product={product} />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default ProductList
