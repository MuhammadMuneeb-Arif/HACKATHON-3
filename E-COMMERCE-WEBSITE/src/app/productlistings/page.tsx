import React from 'react'
import Header from "@/components/navbar";
import Footer2 from "@/components/footer2";
import ProductCard from "../../components/products";
import Image from 'next/image';

const products = [
    { id: 1, name: "Image 1", image: "/Parent.png", price: "£19.99" },
    { id: 2, name: "Image 2", image: "/Parent (1).png", price: "£9.99" },
    { id: 3, name: "Image 3", image: "/Parent (2).png", price: "£29.99" },
    { id: 4, name: "Image 4", image: "/Parent (3).png", price: "£29.95" },
    { id: 1, name: "Image 1", image: "/Parent (4).png", price: "£19.99" },
    { id: 2, name: "Image 2", image: "/Parent (5).png", price: "£9.99" },
    { id: 3, name: "Image 3", image: "/Parent (6).png", price: "£29.99" },
    { id: 4, name: "Image 4", image: "/Parent (7).png", price: "£29.95" },
    { id: 1, name: "Image 1", image: "/Parent.png", price: "£19.99" },
    { id: 2, name: "Image 2", image: "/Parent (1).png", price: "£9.99" },
    { id: 3, name: "Image 3", image: "/Parent (2).png", price: "£29.99" },
    { id: 4, name: "Image 4", image: "/Parent (3).png", price: "£29.95" },
];
const page = () => {
  return (
    <div>
            
    <Header/>
    <div className='w-full h-auto'>
        <Image
        src="/FRAME 143.png"
        width={1440}
        height={209}
        alt="hero section"
        />
        <Image
        src="/Filters.png"
        width={1440}
        height={64}
        alt="hero section"
        />
    </div>
         <section className="bg-gray-50 py-16 px-4 lg:px-20">
                    <div className="max-w-[1440px] mx-auto">
                      
                        <div className="grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-4 justify-center">
                            {products.map((product) => (
                                <div key={product.id}>
                                    <ProductCard product={product} />
                                </div>
                            ))}
                        </div>

                       
                    </div>
                </section>
         
                <Footer2/>
    </div>
  )
}

export default page