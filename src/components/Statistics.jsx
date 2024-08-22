import brandRecognition from '../assets/images/icon-brand-recognition.svg';
import detailedRecords from '../assets/images/icon-detailed-records.svg';
import fullyCustomizable from '../assets/images/icon-fully-customizable.svg';

const Statistics = () => {
  return (
    <section className='bg-gray-100 w-[100%] px-[25px] relative mt-[150px] text-center lg:px-[100px]'>
      <div className='bg-shorten-mobile  bg-right-top bg-no-repeat bg-dark-violet rounded-md mt-[50px] relative top-[-70px] lg:bg-shorten-desktop lg:flex lg:justify-center lg:py-[25px]'>
        <form
          action=''
          className='flex flex-col p-[40px] lg:flex-row lg:py-0 lg:w-[100%] lg:px-[5%]'
        >
          <input
            className='rounded-md mb-[15px] h-[35px] pl-[15px] lg:mb-0 lg:w-[100%] lg:mr-[20px] lg:justify-between'
            type='text'
            name='link'
            id='link'
            placeholder='Shorten a link here...'
          />
          <input
            className='rounded-md text-white bg-custom-cyan h-[35px] lg:w-[15%] lg:max-w-[162px]'
            type='submit'
            value='Shorten It!'
          />
        </form>
      </div>
      <div>
        <h2 className='poppins-bold text-[1.7em] mb-[20px]'>
          Advanced Statistics
        </h2>
        <p className='text-custom-gray poppins-medium'>
          Track how your links are performing across the web with our advanced
          statistics dashboard
        </p>
      </div>
      <div className='flex flex-col bg-white relative mt-[55px] w-[100%] rounded-md px-5 pb-7'>
        <div className='bg-dark-violet rounded-full p-[15px] w-[70px] h-[70px] flex justify-center self-center relative top-[-30px]'>
          <img
            src={brandRecognition}
            alt='Brand recognition icon'
            className='h-[40px]'
          />
        </div>
        <h3 className='poppins-bold text-[1.4em] mb-[20px]'>
          Brand Recognition
        </h3>
        <p className='text-custom-gray poppins-medium'>
          Boost your brand recognition with each click. Generic links don't mean
          a thing. Branded links help instil confidence in your content.
        </p>
      </div>
      <div className='flex flex-col bg-white relative mt-[55px] w-[100%] rounded-md px-5 pb-7'>
        <div className='bg-dark-violet rounded-full p-[15px] w-[70px] h-[70px] flex justify-center self-center relative top-[-30px]'>
          <img src={detailedRecords} alt='Detailed records icon' />
        </div>
        <h3 className='poppins-bold text-[1.4em] mb-[20px]'>
          Detailed Records
        </h3>
        <p className='text-custom-gray poppins-medium'>
          Gain insights into who is clicking your links. Knowing when and where
          people engage with your content helps inform better decisions.
        </p>
      </div>
      <div className='flex flex-col bg-white relative mt-[55px] w-[100%] rounded-md px-5 pb-7'>
        <div className='bg-dark-violet rounded-full p-[15px] w-[70px] h-[70px] flex justify-center self-center relative top-[-30px]'>
          <img src={fullyCustomizable} alt='Fully customizable icon' />
        </div>
        <h3 className='poppins-bold text-[1.4em] mb-[20px]'>
          Fully Customizable
        </h3>
        <p className='text-custom-gray poppins-medium'>
          Improve brand awareness and content discoverability through
          customizable links, supercharging audience engagement.
        </p>
      </div>
    </section>
  );
};

export default Statistics;
