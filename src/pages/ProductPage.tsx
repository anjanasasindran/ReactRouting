import { useParams } from 'react-router-dom';
import { products } from '../data/products';
import { Link } from 'react-router-dom';

type Params = {
  id: string;
  x: string;
};
export function ProductPage() {
  const params = useParams<Params>(); // -- query your RouteParams - return {id:1}

  const id = params.id === undefined ? undefined : parseInt(params.id); // 1

  const product = products.find((product) => product.id === id); // corrensponding record based on product id

  return (
    <div className="text-center p-5 text-xl">
      {product === undefined ? (
        <h1 className="text-xl text-slate-900">unknown product</h1>
      ) : (
        <>
          <h1 className="text-xl text-slate-900">{product.name}</h1>
          <p className="text-base text-slate-800">{product.description}</p>
          <p className="text-base text-slate-800">
            {new Intl.NumberFormat('en-US', {
              currency: 'USD',
              style: 'currency',
            }).format(product.price)}
          </p>
          <Link to="/products" className="text-blue-600 hover:underline mt-4 block">
            ← Back to Products
          </Link>
        </>
      )}
    </div>
  );
}
