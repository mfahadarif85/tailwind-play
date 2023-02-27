import Image from "next/image";
export default function Home() {
  return (
    <>
      <div className='flex justify-center bg-gray-300'>
        <div className='order-last mx-4 self-center'>
          <Image
            src='/panaverse.png'
            alt='logo'
            height={80}
            width={80}
            className='rounded-full'
          />
        </div>
        <div className='mx-4 self-center text-center'>
          <h1 className='text-2xl text-blue-800'>Welcome to Panaverse</h1>
          <h2 className='font-semibold text-blue-600 sm:text-xl lg:text-3xl'>
            A community of Web3 and Metaverse Developers
          </h2>
          <button className='my-4 rounded-lg border-2 border-black bg-red-900 px-4 py-2 text-white'>
            Learn More
          </button>
        </div>
      </div>
      <div>
        <div className='mb-10'>
          <button className='border border-black p-10'>One</button>
          <button className='m-10 border border-black'>Two</button>
          <button className='m-2 border-4 border-black p-2'>Three</button>
        </div>
        <div>
          <button className='m-4 rounded-md border-2 border-black p-4'>
            Four
          </button>
          <button className='m-4 rounded-2xl border-2 border-black p-4'>
            Five
          </button>
          <button className='m-4 rounded-full border-2 border-black p-4'>
            Six
          </button>
        </div>
      </div>
      <div className='h-full bg-slate-500 text-center'>
        <p className='text-base font-bold capitalize leading-normal tracking-widest text-white underline decoration-wavy decoration-2 selection:bg-red-400'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad officia
          eligendi quis, voluptates nobis possimus quo distinctio velit dolorem
          voluptatum nihil tenetur sapiente doloribus, ab nostrum quia
          aspernatur laudantium molestias.
        </p>
        <ul className='list-inside list-disc'>
          <li>Phase 1</li>
          <li>Phase 2</li>
          <li>Phase 3</li>
        </ul>
      </div>
      <article className='prose prose-slate lg:prose-xl'>
        <h1>Garlic bread with cheese: What the science tells us</h1>
        <p>
          For years parents have espoused the health benefits of eating garlic
          bread with cheese to their children, with the food earning such an
          iconic status in our culture that kids will often dress up as warm,
          cheesy loaf for Halloween.
        </p>
        <p>
          But a recent study shows that the celebrated appetizer may be linked
          to a series of rabies cases springing up around the country.
        </p>
      </article>
      <div>
        <label htmlFor='username'>User Name</label>
        <input
          type='text'
          id='username'
          className='form-input block rounded-full'
        />
        <button className='block rounded-lg border-2 border-black bg-gray-500 p-2 text-white'>
          Submit
        </button>
      </div>
    </>
  );
}
