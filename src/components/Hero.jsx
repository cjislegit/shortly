import working from '../assets/images/illustration-working.svg';

const Hero = () => {
  return (
    <section>
      <div>
        <img src={working} alt='' />
      </div>
      <div>
        <h1>More than just shorter links</h1>
        <p>
          Build your brand's recongintion and get detailed insights on how your
          links are performing.
        </p>
        <input type='button' value='Get Started' />
      </div>
    </section>
  );
};

export default Hero;
