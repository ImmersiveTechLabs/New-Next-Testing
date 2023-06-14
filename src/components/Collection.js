import Link from 'next/dist/client/link'
import React from 'react'
import { useEffect , useState } from 'react'

const Collection = ()=>{
    // get all the collectiosn using greaph ql api 
    const [ collections , setCollections ] = useState([])
       
  useEffect(()=>{
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

    const Collection = async () => {
        const query = `
            {
                collections(first: 100) {
                    edges {
                        node {
                            id
                            title
                            handle
                            description
                            image {
                                originalSrc
                                altText
                            }
                        }
                    }
                }
            }
        `
        const data = await ShopifyData(query)
        console.log("Collection: ", data)
        setCollections(data.data.collections.edges)
        return data
    }
    Collection()
},[])




    return(
       <>
         <div className="bg-white">

            <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-extrabold text-gray-900 mb-6">
                    Collections
                </h2>
                <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    {
                        collections.map(collection => (
                            <Link href={`/collections/${collection.node.handle}`}>
                            
                                
                            <div className="group relative shadow-xl rounded-lg overflow-hidden bg-white p-6">
                                <div className="relative w-full h-80 rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-4 sm:aspect-h-5">
                                    <img
                                        src={collection.node.image.originalSrc}
                                        alt={collection.node.image.altText}
                                        className="w-full h-full object-center object-cover"
                                    />
                                </div>
                                <div className="mt-4">
                                    <h3 className="text-lg font-medium text-gray-900">
                                        <a href={`/collections/${collection.node.handle}`}>
                                            <span aria-hidden="true" className="absolute inset-0" />
                                            {collection.node.title}
                                        </a>
                                    </h3>
                                    <p className="mt-2 text-sm text-gray-500">{collection.node.description}</p>
                                </div>
                            </div>
                            </Link>
                        ))
                    }
                </div>




             </div>
             </div>
       </> 
    )
}

export default  Collection