import Image from "next/image";
export default function Home() {
  return (
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
        <h1 className='font-bold text-red-600 sm:text-2xl lg:text-6xl'>
          Welcome to Panaverse
        </h1>
        <h2 className='font-semibold text-blue-600 sm:text-xl lg:text-3xl'>
          A community of Web3 and Metaverse Developers
        </h2>
        <button className='my-4 rounded-lg border-2 border-black bg-red-900 px-4 py-2 text-white'>
          Learn More
        </button>
      </div>
    </div>
  );
}
