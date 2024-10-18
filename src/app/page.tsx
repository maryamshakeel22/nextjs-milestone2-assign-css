import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
            <h4>This is a Home page</h4>
            <br />
            <h1>
                Hello Maryam
            </h1>
            <br />
            <button>
            <Link href="/about">About</Link>
            </button>
            <br />
            <br />
            <button>
            <Link href="/product">Product</Link>
            </button>
        </div>
  );
}
