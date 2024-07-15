import mobileLogo from '../assets/images/bg-shorten-mobile.svg';

const NavBar = () => {
  return (
    <nav>
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
