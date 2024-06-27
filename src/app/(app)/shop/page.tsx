import Image from 'next/image'

interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
}

export default async function Shop () {
  const response = await fetch("https://fakestoreapi.com/products")

  if(!response.ok ){
    throw new Error('faled to fetch')
  }

  const products: Product[] = await response.json();

  return (
    <>
       <div className="py-16 ">
        <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
        {products.map((product) => (
          <div key={product.id} className="w-full h-[300px] bg-slate-200 mb-4">
            <h2>{product.title}</h2>
            <div>
            <Image src={product.image} alt='' width={40} height={40} />
            </div>
          </div>
        ))}
        </div>
        </div>
    </div>
    </>
  )
}
