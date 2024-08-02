const Statistics = () => {
  return (
    <section>
      <div className='bg-shorten-mobile  bg-right-top bg-no-repeat bg-dark-violet rounded-md'>
        <form action='' className='flex flex-col px-[10%] py-[10%]'>
          <input
            className='rounded-md mb-[15px]'
            type='text'
            name='link'
            id='link'
          />
          <input
            className='rounded-md text-white bg-custom-cyan'
            type='submit'
            value='Shorten It!'
          />
        </form>
      </div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </section>
  );
};

export default Statistics;
