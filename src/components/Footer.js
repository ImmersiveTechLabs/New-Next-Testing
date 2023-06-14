import navigation from "../Data/footer"

export default function Footer() {
  const style = {
    backgroundColor: navigation.footerBK,
  }
  const year = new Date().getFullYear()
  return (
    <footer className="" style={style}>
      <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <nav className="flex flex-wrap justify-center">
          {
            navigation.navigation.map((item, i) => (
              <div key={i} className="px-6 py-2">
                <a href={item.href} className="text-gray-500 hover:text-gray-900">
                  {item.name}
                </a>
              </div>
            ))
          }
        </nav>
        <p className="mt-8 text-center text-gray-400">&copy; {year} {navigation.footerText}</p>
      </div>
    </footer>
  )
}
