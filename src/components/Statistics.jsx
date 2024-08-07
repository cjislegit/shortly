const Statistics = () => {
  return (
    <section className='bg-grayish-violet w-[100%] px-[50px] relative mt-[150px] text-center'>
      <div className='bg-shorten-mobile  bg-right-top bg-no-repeat bg-dark-violet rounded-md mt-[50px] relative top-[-70px]'>
        <form action='' className='flex flex-col px-[10%] py-[10%]'>
          <input
            className='rounded-md mb-[15px] h-[35px] pl-[15px]'
            type='text'
            name='link'
            id='link'
            placeholder='Shorten a link here...'
          />
          <input
            className='rounded-md text-white bg-custom-cyan h-[35px]'
            type='submit'
            value='Shorten It!'
          />
        </form>
      </div>
      <div>
        <h2 className='poppins-bold text-2xl mb-[20px]'>Advanced Statistics</h2>
        <p className='text-custom-gray'>
          Track how your links are performing across the web with our advanced
          statistics dashboard
        </p>
      </div>
      <div>
        <img src='' alt='' />
        <h3 className='poppins-bold text-1xl mb-[20px]'>Brand Recognition</h3>
        <p>
          Boost your brand recognition with each click. Generic links don ti
          mean a thing. Branded links help instil confidence in your content.
        </p>
      </div>
      <div>
        <img src='' alt='' />
        <h3 className='poppins-bold text-1xl mb-[20px]'>Detailed Records</h3>
        <p>
          Gain insights into who is clicking your links. Knowing when and where
          people engage with your content helps inform better decisions.
        </p>
      </div>
      <div>
        <img src='' alt='' />
        <h3 className='poppins-bold text-1xl mb-[20px]'>Fully Customizable</h3>
        <p>
          Improve brand awareness and content discoverability through
          customizable links, supercharging audience engagement.
        </p>
      </div>
    </section>
  );
};

export default Statistics;
