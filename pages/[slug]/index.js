import favorite from "../../components/data/favorite";
import React, { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";
import { Minus } from "../../components/UI/Minus";
import { Plus } from "../../components/UI/Plus";

function getIphone(id) {
  const item = favorite.find((e) => e.id === Number(id));
  if (typeof item === "object") {
    return item;
  }
  return {};
}

function Detail() {
  const router = useRouter();
  const { slug } = router.query;

  const iphone= getIphone(slug);

  if (Object.keys(iphone).length === 1) {
    return <div>Item not found</div>;
  }

  const [qty, setQty] = useState(1);

  const total = qty * iphone.price


  return (
    <>
      <div className="container lg:max-w-screen-lg mx-auto py-24 px-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-12">
          {/* Product's image */}
          <div className="relative">
            <img
              src={iphone.img}
              alt={iphone.title}
              className="w-96"
            />
          </div>

          {/* Product's details */}
          <div className="flex-1 max-w-md border border-opacity-50 rounded-md shadow-lg p-6 mt-80">
            <h2 className="text-3xl font-semibold">{iphone.title}</h2>
            <p>
              <span className="text-gray-500">Stok:</span>{" "}
              <span className="font-semibold">{iphone.stock}</span>
            </p>
            <p className="mt-4">{iphone.description}</p>

            {/* Price */}
            <div className="mt-8 border-t pt-4">
              <p className="text-gray-500">Harga:</p>
              <p className="text-xl font-semibold">{iphone.price}</p>
            </div>

            <div className="mt-4 border-t pt-4">
              <p className="text-gray-500">Jumlah:</p>
              <div className="mt-1 flex items-center space-x-3">
                <button
                  onClick={() => setQty(prev => prev - 1)}
                  disabled={qty <= 1}
                  className="text-white disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-current hover:bg-rose-100 hover:text-rose-500 rounded-md p-1 border-0"
                >
                  <Minus />
                </button>
                <p className="font-semibold text-xl">{qty}</p>
                <button
                  onClick={() => setQty(prev => prev + 1)}
                  disabled={qty >= (iphone.stock)}
                  className="text-white disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-current hover:bg-green-100 hover:text-green-500 rounded-md p-1 border-0"
                >
                  <Plus />
                </button>
              </div>
              <button
                type="button"
                disabled
                className="mt-8 border rounded py-2 px-6 bg-orange-500 hover:bg-orange-600 border-orange-500 hover:border-orange-600 focus:ring-4 focus:ring-opacity-50 focus:ring-orange-500 text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex felx-row"
              >
                Masukkan keranjang (IDR {total})
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Detail;