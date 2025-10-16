import React from "react";
import axios from "axios";
import "./css/KidsPage.css";

export default function KidsPage() {
  const products = [
    {
      id: 1,
      name: "Tiny T-Shirt",
      price: "$12.99",
      img: "https://media.istockphoto.com/id/2166310484/photo/happy-woman-holding-baby-outdoor.webp?a=1&b=1&s=612x612&w=0&k=20&c=N1iamHUB-XncrZR7QcRErihMDXT0HMdCbSnoF5swexk=",
    },
    {
      id: 2,
      name: "Cute Romper",
      price: "$18.50",
      img: "https://media.istockphoto.com/id/2175359471/photo/smiling-happy-navajo-grandmother-teaching-her-teenage-granddaughter-how-to-weave-on-a-loom-in.webp?a=1&b=1&s=612x612&w=0&k=20&c=HEE3AjY4ycRFKwBIvSJHO3ubIPYc_J88YmKRPL4Qz0c=",
    },
    {
      id: 3,
      name: "Mini Jeans",
      price: "$22.00",
      img: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 4,
      name: "Playful Hoodie",
      price: "$25.00",
      img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 5,
      name: "Summer Dress",
      price: "$19.99",
      img: "https://images.unsplash.com/photo-1514996937319-344454492b37?auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 6,
      name: "Stripe Tee",
      price: "$11.99",
      img: "https://media.istockphoto.com/id/2185288386/photo/little-girl-on-a-charming-rustic-porch-with-hot-chocolate.webp?a=1&b=1&s=612x612&w=0&k=20&c=4HODHsFxuvas3JPg15OXa8k2x7whGIY3VyZQy598RoA=",
    },
    {
      id: 7,
      name: "Pajama Set",
      price: "$16.50",
      img: "https://plus.unsplash.com/premium_photo-1693242804074-20a78966f4e6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a2lkJTIwY2xvdGhzJTIwcGljfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500",
    },
    {
      id: 8,
      name: "Denim Overalls",
      price: "$28.00",
      img: "https://media.istockphoto.com/id/1278610020/photo/little-girl-wearing-scarf-as-protective-measure-during-covid-19.webp?a=1&b=1&s=612x612&w=0&k=20&c=oWXp2Pqt87RsOCCxtenmz_ej8hGAjKaIU4xAgAPJXJI=",
    },
    {
      id: 9,
      name: "Sneaker Shoes",
      price: "$29.99",
      img: "https://images.unsplash.com/photo-1752950047858-aba2be98cf20?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2lkJTIwY2xvdGhzJTIwcGljfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500",
    },
    {
      id: 10,
      name: "Knit Sweater",
      price: "$24.95",
      img: "https://images.unsplash.com/photo-1748774962729-61840bc3e54a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8a2lkJTIwY2xvdGhzJTIwcGljfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500",
    },
    {
      id: 11,
      name: "Cute Hat",
      price: "$9.99",
      img: "https://images.unsplash.com/photo-1658515037149-7d6c5a59c38d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8a2lkJTIwY2xvdGhzJTIwcGljfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500",
    },
    {
      id: 12,
      name: "Raincoat",
      price: "$21.50",
      img: "https://images.unsplash.com/photo-1747069340536-4db7b52b8a73?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8a2lkJTIwY2xvdGhzJTIwcGljfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500",
    },
    {
      id: 13,
      name: "Graphic Tee",
      price: "$13.99",
      img: "https://images.unsplash.com/photo-1576497588513-07df4f2cb99d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGtpZCUyMGNsb3RocyUyMHBpY3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500",
    },
    {
      id: 14,
      name: "Cargo Shorts",
      price: "$17.99",
      img: "https://plus.unsplash.com/premium_photo-1691367782367-2bd37f646abc?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGtpZCUyMGNsb3RocyUyMHBpY3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500",
    },
    {
      id: 15,
      name: "Backpack",
      price: "$15.00",
      img: "https://media.istockphoto.com/id/2170093499/photo/photo-taken-in-1988-in-california-young-man-posing-holding-his-son-looking-at-the-camera.webp?a=1&b=1&s=612x612&w=0&k=20&c=Jgq_lER-Ga3YrOu-jDqhSaMka2uxePRF_KcYTfwcpLo=",
    },
  ];

  // 🟡 Add to Cart (Send to backend DB)
  const handleAddToCart = async (product) => {
    try {
      await axios.post("http://localhost:5000/api/kids_products", {
        name: product.name,
        price: product.price,
        img: product.img,
      });
      alert(`✅ ${product.name} added to database!`);
    } catch (error) {
      console.error("❌ Error sending data:", error);
      alert("Failed to add product!");
    }
  };

  return (
    <div className="kids-page">
      {/* ✅ Banner */}
      <div className="banner">
        <img
          src="https://images.unsplash.com/photo-1503437313881-503a91226405?auto=format&fit=crop&w=1400&q=60"
          alt="Kids Banner"
        />
        <div className="banner-content">
          <h1>Kids Collection</h1>
          <p>Bright, comfy & playful — hand-picked for little ones.</p>
          <button className="shop-btn">Shop Kids</button>
        </div>
      </div>

      {/* ✅ Product Grid */}
      <div className="product-container">
        <div className="product-header">
          <h2>New Arrivals</h2>
          <span>{products.length} items</span>
        </div>

        <div className="product-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.img} alt={product.name} />
              <div className="product-card-body">
                <h6>{product.name}</h6>
                <div className="product-bottom">
                  <span className="price">{product.price}</span>
                  <button
                    className="add-btn"
                    onClick={() => handleAddToCart(product)}
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="load-more">
          <button className="load-more-btn">Load more</button>
        </div>
      </div>
    </div>
  );
}
