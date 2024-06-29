import ProductListItem from '@/components/products/ProductListItem';
import { Section } from '@/components/ui/Section';
import { getProducts } from '@/services/ProductService';

export default async function Page() {
  const data = await getProducts();
  return (
    <Section className="bg-gradient-to-t from-green-900 to-gray-900 h-min-screen relative pt-20 pb-20">
      <div className="col-center gap-10">
        <header className='text-center'>
          <h1 className="text-6xl">Products</h1>
          <p>This is the products page.</p>
        </header>

        <ul className="row-center flex-wrap gap-10">
          {data.content.map((product) => (
            <ProductListItem key={product.id} product={product} />
          ))}
        </ul>
      </div>
    </Section>
  );
}
