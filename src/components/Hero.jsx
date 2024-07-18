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
      <div>
        <h1>More than just shorter links</h1>
        <p>
          Build your brand's recognition and get detailed insights on how your
          links are performing.
        </p>
        <input type='button' value='Get Started' />
      </div>
    </section>
  );
};

export default Hero;
