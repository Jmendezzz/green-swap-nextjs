export function Navigation(){
    return(
        <nav className="flex justify-between p-4 bg-gray-200 bg-gray-200">
            <div>
                <a href="/" className="text-blue-500">Home</a>
            </div>
            <div>
                <a href="/products" className="text-blue-500">Products</a>
            </div>
        </nav>
    )
}