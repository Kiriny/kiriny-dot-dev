import Link from "next/link";

export default function Header() {
    return (
        <div role="navigation" className="">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                <div className="col-span-1 lg:col-span-2">
                    <p className="text-white">Title</p>
                </div>
                <div className="col-span-1 flex flex-col items-start">
                    <Link href="/">
                        <a className="text-white">Home</a>
                    </Link>
                    <Link href="/about">
                        <a className="text-white">About</a>
                    </Link>
                    <Link href="/projects">
                        <a className="text-white">Projects</a>
                    </Link>
                    <Link href="/photography">
                        <a className="text-white">Photography</a>
                    </Link>
                    <Link href="/shop">
                        <a className="text-white">Shop</a>
                    </Link>
                </div>
            </div>
        </div>
    );
}
