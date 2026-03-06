import { useRouteError } from 'react-router-dom';

export function ErrorPage() {
  const error: any = useRouteError(); // return ErrorResponse = {statusText:'some status text'}
  console.log(error);

  return <div>{isError(error) && <p>{error.statusText}</p>}</div>;
}

function isError(error: any): error is { statusText: string } {
  return 'statusText' in error;
}
