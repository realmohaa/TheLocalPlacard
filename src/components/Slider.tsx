import Image from "next/image";

interface item {
  id: number;
  img: string;
  title: string;
  description: string;
  bg: string;
}

const Slider = () => {
  const items: item[] = [
    {
      id: 1,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3rhDvPjfDhO-87MnY6Lmbj1JUpM-C0YERh13IeWiC-lKXM-u1",
      title: "LATEST GREATEST",
      description: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
      bg: "f5fafd",
    },
    {
      id: 2,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3rhDvPjfDhO-87MnY6Lmbj1JUpM-C0YERh13IeWiC-lKXM-u1",
      title: "LOCAL COLLECTION",
      description: "DISCOVER NEW TRENDS IN OUR COLLECTION!",
      bg: "fcf1ed",
    },
    {
      id: 3,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3rhDvPjfDhO-87MnY6Lmbj1JUpM-C0YERh13IeWiC-lKXM-u1",
      title: "POPULAR COLLECTION",
      description: "HURRY UP! GRAB YOUR FAVORITE PRODUCTS BEFORE THE SALE ENDS.",
      bg: "fbf0f4",
    },
    {
      id: 4,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3rhDvPjfDhO-87MnY6Lmbj1JUpM-C0YERh13IeWiC-lKXM-u1",
      title: "EXCLUSIVE COLLECTION",
      description: "HURRY UP! GRAB YOUR FAVORITE PRODUCTS BEFORE THE SALE ENDS.",
      bg: "fbf0f4",
    },
  ];

  return (
    <div className="container m-auto overflow-hidden h-70vh relative">
      <div className="h-full flex flex-col md:flex-row ">
        {items.map((item) => (
          <div className='w-full flex flex-col items-start' key={item.id}>
            <div className="flex-1 h-full">
              <Image src={item.img} alt={item.title} width={350} height={350} className="h-90 p-10" />
            </div>
            <div className="flex-2 h-full px-10">
              <h1 className="xl:text-3xl text-2xl uppercase">{item.title}</h1>
              <p className="my-8  text-sm md:text-md font-medium tracking-wider">{item.description}</p>
              <button className="px-6 py-2 border-2 border-teal-500 text-teal-500 font-medium rounded-full hover:bg-teal-500 hover:text-white transition duration-200">
                SHOP NOW
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}  

export default Slider;