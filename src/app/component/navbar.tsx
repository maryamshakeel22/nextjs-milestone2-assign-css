import Link from "next/link"
import "../component/navbar.css"
export default function Navbar(){
   return ( 
         <div>
                    <nav>
                        <p>
                        <Link href="/" className="mr-5">Home</Link>
                        <Link href="/about" className="mr-5">About</Link>
                        <Link href="/product" className="text-violet-900 text-2xl">Product</Link>
                        </p>
                    </nav>
        </div>
        )
}