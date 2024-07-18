import mobileLogo from '../assets/images/logo.svg';

const NavBar = () => {
  return (
    <nav className='flex justify-between mt-[50px] items-center'>
      <div>
        <img className='h-auto w-[60%]' src={mobileLogo} alt='Shortly logo' />
      </div>
      <div>
        <i className='fa-solid fa-bars fa-lg text-custom-gray'></i>
      </div>
    </nav>
  );
};

export default NavBar;
