import Link from "next/link";
import "../product/product.css"

export default function Product() {
    return (
        <div>
                <h1> Product Page </h1>
            <br />
          <h4>This is Product page</h4>
            <br />
            <button>
         <Link href="/product/product">Nested Product</Link> 
        </button>
        </div>
    )
}