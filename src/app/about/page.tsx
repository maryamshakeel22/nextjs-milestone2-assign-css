import Link from "next/link";
import "../about/about.css"

export default function About() {
    return (
        <div>
            <h1> About Page </h1>
            <br />
            <h4>This is a About page</h4>
            <br />
            <button>
            <Link href="/about/about">Nested About</Link>
            </button>
        </div>
    )
}