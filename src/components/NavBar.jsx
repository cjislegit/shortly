import mobileLogo from '../assets/images/logo.svg';

const NavBar = () => {
  return (
    <nav className='flex justify-between'>
      <div>
        <img src={mobileLogo} alt='' />
      </div>
      <div>
        <i className='fa-solid fa-bars'></i>
      </div>
    </nav>
  );
};

export default NavBar;
