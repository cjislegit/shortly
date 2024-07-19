import working from '../assets/images/illustration-working.svg';

const Hero = () => {
  return (
    <section className='pt-[10px]'>
      <div className='overflow-hidden'>
        <img
          src={working}
          alt='Illustration of a person working at a desk'
          className='ml-[80px]'
        />
      </div>
      <div className='text-center pt-[20px]'>
        <h1 className='poppins-bold text-3xl'>More than just shorter links</h1>
        <p className='popping-normal text-custom-gray mt-[10px] text-sm mb-[20px]'>
          Build your brand's recognition and get detailed insights on how your
          links are performing.
        </p>
        <input
          type='button'
          value='Get Started'
          className='text-white bg-custom-cyan text-sm'
        />
      </div>
    </section>
  );
};

export default Hero;
