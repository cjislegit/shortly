const Statistics = () => {
  return (
    <section className='bg-grayish-violet w-[100%] px-[50px] relative'>
      <div className='bg-shorten-mobile  bg-right-top bg-no-repeat bg-dark-violet rounded-md mt-[50px] relative'>
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
      <div className='text-center'>
        <h2 className='poppins-bold text-2xl mb-[20px]'>Advanced Statistics</h2>
        <p className='text-custom-gray'>
          Track how your links are performing across the web with our advanced
          statistics dashboard
        </p>
      </div>
      <div></div>
      <div></div>
      <div></div>
    </section>
  );
};

export default Statistics;
