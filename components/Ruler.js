const Markings = () => {
  return (
    <>
      <div className='flex-1 h-4 transform translate-y-2 border-r opacity-75 border-ruler' />
      {[...Array(5).keys()].map((index) => (
        <div
          key={index}
          className='flex-1 h-2 transform translate-y-1 border-r opacity-75 border-ruler'
        />
      ))}
    </>
  );
};

const Ruler = () => {
  return (
    <div className='flex items-end w-full h-4 border-b opacity-25 border-ruler'>
      {[...Array(10).keys()].map((index) => (
        <Markings key={index} />
      ))}
    </div>
  );
};

export default Ruler;
