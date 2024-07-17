import mobileLogo from '../assets/images/logo.svg';

const NavBar = () => {
  return (
    <nav className='flex justify-between mt-[50px]'>
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
