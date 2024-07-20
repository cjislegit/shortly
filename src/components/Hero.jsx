import working from '../assets/images/illustration-working.svg';

const Hero = () => {
  return (
    <section className='pt-[10px] lg:flex lg:flex-row-reverse lg:pt-[90px]'>
      <div className='overflow-hidden'>
        <img
          src={working}
          alt='Illustration of a person working at a desk'
          className='ml-[80px]'
        />
      </div>
      <div className='text-center pt-[20px] lg:text-start lg:pl-[90px]'>
        <h1 className='poppins-bold text-3xl lg:text-6xl'>
          More than just shorter links
        </h1>
        <p className='popping-normal text-custom-gray mt-[10px] text-sm mb-[20px] px-[50px] lg:px-0 lg:text-xl lg:pr-[25%]'>
          Build your brand's recognition and get detailed insights on how your
          links are performing.
        </p>
        <input
          type='button'
          value='Get Started'
          className='bg-custom-cyan text-white px-[20px] py-[6px] rounded-3xl'
        />
      </div>
    </section>
  );
};

export default Hero;
