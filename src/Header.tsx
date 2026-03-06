import { Link, NavLink, Form } from 'react-router-dom'; // - client side navigation
import logo from './logo.svg';
//import { FormEvent } from 'react';

export function Header() {
  //const [searchParams, setSearchParams] = useSearchParams();
  //const navigate = useNavigate();

  /* function handleSearchSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log('search submitted');
    // FormData is a built in web api to get access to form data
    //this is a browser api to get access to form data - it takes the form element as an argument and returns an object with all the form data
    const formData = new FormData(e.currentTarget);
    const formControlData = formData.get('tf1') as string; // get the value of the search input field
    //console.log(x);
    navigate(`/products?x=${formControlData}`); // setting the search parameter
    //setSearchParams({ x });
  } */

  return (
    <header className="text-center text-slate-50 bg-slate-900">
      <Form className="relative text-right" action="/products">
        <input
          type="search"
          placeholder="Please type a value"
          // defaultValue={searchParams.get('search') ?? ''}
          name="x"
          className="absolute right-0 top-0 rounded py-2 px-3 text-black"
        />
      </Form>
      <Link to="">
        <img src={logo} alt="Logo" className="inline-block h-20" />
      </Link>

      <Link to="">
        <h1 className="text-2xl ">React Tools</h1>
      </Link>

      <nav>
        <NavLink
          to="products"
          className={({ isActive }) =>
            `text-white no-underline p-1 pb-0.5 border-solid border-b-2 ${
              isActive ? 'border-white' : 'border-transparent'
            }`
          }
        >
          Products
        </NavLink>
        <Link to="admin">
          <button>Admin Page</button>
        </Link>
      </nav>
    </header>
  );
}
