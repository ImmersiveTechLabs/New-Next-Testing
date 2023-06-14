import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import "tailwindcss/tailwind.css"

const ProductList = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const domain = "el-dorado-pk.myshopify.com";
    const storefrontAccessToken = "d35cc2760d85327edfc2475b867e4d92";
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
                products(first: 100) {
                  edges {
                    node {
                      id
                      title
                      handle
                      description
                      images(first: 5) {
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
          {products.map((product) => (
            // make product cards here
            <Link
              href={`/products`}
            >
              <a className="group">
                <div className="w-full overflow-hidden bg-gray-200 rounded-3xl">
                  <div className="relative group-hover:opacity-75 h-72">

                    {/* <img className="w-full rounded-lg" src={product.node.images.edges[0].node.url} /> */}
                   <Image
                      src={product.node.images.edges[0].node.url}
                      layout="fill"
                      objectFit="cover"
                      className="w-full rounded-lg"
                    />
                  </div>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">{product.node.title}</h3>
                <p className="mt-1 text-sm text-gray-700">{product.node.priceRange.minVariantPrice.amount}</p>
              </a>
            </Link>

          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductList