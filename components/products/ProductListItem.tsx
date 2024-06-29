import { ListProductOutDTO } from "@/domain/products/ListProductOutDTO"
import Image from "next/image"

interface Props{
    product: ListProductOutDTO
}
function ProductListItem({product}: Props) {
  return (
    <article className="col-center bg-primary-100 rounded-xl">
        <figure className="position relative h-[200px] w-[200px] md:h-[300px] md:w-[300px]">
            {
                product.urlImage ? <Image src={product.urlImage}  alt={product.name} fill /> : <div className="bg-gray-200 full"></div>
            }
        </figure>
        <section className="space-y-4">
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p><strong>{product.price}</strong></p>
        </section>
    </article>
  )
}

export default ProductListItem