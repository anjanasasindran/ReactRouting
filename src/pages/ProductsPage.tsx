import { Link, useSearchParams } from 'react-router-dom';
import { products } from '../data/products';

export function ProductsPage() {
  const [searchParams, setSearchParams] = useSearchParams(); // return [URLSearchParams, setSearchParams]
  console.log(searchParams);

  function getFilteredProducts() {
    const search = searchParams.get('x');
    if (search === null || search === '') {
      return products;
    } else {
      return products.filter(
        (product) => product.name.toLowerCase().indexOf(search.toLowerCase()) > -1,
      );
    }
  }
  console.log(getFilteredProducts());

  return (
    <div className="text-center p-5">
      <h2 className="text-xl font-bold text-slate-600">Here are some great tools for React</h2>
      <ul>
        {getFilteredProducts().map((product) => (
          <li key={product.id} className="p-1 text-base text-slate-800">
            <Link to={`${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
