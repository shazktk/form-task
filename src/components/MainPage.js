import { Link, Outlet } from 'react-router-dom';
import '../App.css';


function MainPage() {
  return (
    <div className="App">
      <nav className='nav'>
        <Link className='link' to='inputdata'><h2>Form</h2></Link>
        <div className='link'><h2>/</h2></div>
        <Link className='link' to='table'><h2>Table</h2></Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default MainPage;