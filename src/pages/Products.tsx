import PageShell from '../components/PageShell'
import ProductCard from '../components/ProductCard'
import { products } from '../data/products'

const Products = () => (
  <PageShell contentClassName="products-content">
    <div className="products-grid">
      {products.map((product) => (
        <ProductCard key={product.slug} product={product} />
      ))}
    </div>
  </PageShell>
)

export default Products
