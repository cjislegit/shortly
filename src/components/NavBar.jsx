import mobileLogo from '../assets/images/logo.svg';

const NavBar = () => {
  return (
    <nav className='flex justify-between mt-[50px] items-center poppins-medium'>
      <div className=' lg:flex lg:w-[50%] lg:gap-[40px] lg:pl-[90px]'>
        <img
          className='h-auto w-[50%] lg:w-[20%] lg:max-w-[95px]'
          src={mobileLogo}
          alt='Shortly logo'
        />
        <ul className='hidden lg:flex lg:gap-[30px] text-custom-gray'>
          <li>Features</li>
          <li>Pricing</li>
          <li>Resources</li>
        </ul>
      </div>
      <div className='text-custom-gray lg:w-[50%] lg:flex justify-end lg:pr-[90px]'>
        <i className='fa-solid fa-bars fa-lg lg:hidden'></i>
        <ul className='hidden lg:flex lg:gap-[30px] items-center'>
          <li>Login</li>
          <li className='bg-custom-cyan text-white px-[20px] py-[6px] rounded-3xl'>
            Sign Up
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
