import { Link } from 'react-router-dom';

function PageNotFound404() {

  return (
    <>
      <h1>404 Not Found</h1>
      <Link to='/'>Home</Link>
    </>
  )
}

export default PageNotFound404