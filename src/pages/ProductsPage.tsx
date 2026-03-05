import { Link } from 'react-router-dom';
import { products } from '../data/products';

export function ProductsPage() {
  return (
    <div className="text-center p-5">
      <h2 className="text-xl font-bold text-slate-600">Here are some great tools for React</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id} className="p-1 text-base text-slate-800">
            <Link to={`${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
