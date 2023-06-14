import Link from 'next/link'
import { useContext } from 'react'
import { CartContext } from '../context/shopContext'
import MiniCart from './MiniCart'
import navigation from '../Data/header.js'

export default function Nav() {
  const { cart, cartOpen, setCartOpen } = useContext(CartContext)

  let cartQuantity = 0
  cart.map(item => {
    return (cartQuantity += item?.variantQuantity)
  })
  const menuToggle = () => {
    const toggleMenu = document.querySelector('#toggle')
    toggleMenu.classList.toggle('top-[-700px]')
    toggleMenu.classList.toggle('top-[70px]')
  }

  const stylemobile = {
    backgroundColor: navigation.mobileBK,
  }
  const styleheader = {
    backgroundColor: navigation.headerBK,
  }
  const styletoggleButton = {
    color: navigation.toggleButton,
  }

  return (
    <header className="border-b sticky top-0 z-20 bg-white" style={styleheader}>
      <div className="flex items-center justify-between max-w-6xl pt-4 pb-2 px-4 mx-auto lg:max-w-screen-xl">
        <Link href="/" passHref>
          <a className="cursor-pointer">
            <span className="text-lg pt-1 font-bold">
              {navigation.logo.img ? (
                <img src={navigation.logo.img} alt={navigation.logo.alt} className="h-8 w-8" />
              ) : (
                navigation.logo.alt
              )
              }
            </span>
          </a>
        </Link>

        <nav className="hidden lg:flex space-x-10">

          {navigation.navigation.map((item, i) => (
            <Link href={item.href} key={i}>
              <a className="text-md font-bold cursor-pointer">{item.name}</a>
            </Link>
          ))}

        </nav>

        <nav className="flex lg:hidden">
          <button
            className="p-2 rounded-md "
            style={styletoggleButton}
            aria-label="Toggle menu"
            onClick={menuToggle}
          >
            <svg
              width="20"
              height="20"
              fill="currentColor"
              className="h-8 w-8"
              viewBox="0 0 1792 1792"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1664 1344v128q0 26-19 45t-45 19H192q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19H192q-26 0-45-19T128 960V832q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19H192q-26 0-45-19T128 448V320q0-26 19-45t45-19h1408q26 0 45 19t19 45z"
              />
            </svg>
          </button>
        </nav>


        <div id="toggle" className="absolute z-[-999] lg:top-[-700px] top-[-700px] transition-all left-0 w-[100%] p-[1rem]" style={stylemobile}>
          <div className="pt-2 pb-3 space-y-1 flex flex-col  " >
            {navigation.navigation.map((item, i) => (
              <Link href={item.href} key={i}>
                <a className="text-md font-bold cursor-pointer">{item.name}</a>
              </Link>
            ))
            }
            <a
              className="text-md font-bold cursor-pointer"
              onClick={() => setCartOpen(!cartOpen)}
            >
              🛒 ({cartQuantity})
            </a>
          </div>
        </div>






        <a
          className="hidden lg:flex text-md font-bold cursor-pointer"
          onClick={() => setCartOpen(!cartOpen)}
        >
          🛒 ({cartQuantity})
        </a>
        <MiniCart cart={cart} />
      </div>
    </header>
  )
}
