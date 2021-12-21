import React from 'react';

export default function Footer() {
  return (
    <div>
      {/* Back to top */}
      <div className="bg-secondary-gray w-screen flex items-center justify-center h-12">
        <a href="#nav" className="text-white">
          Back to top
        </a>
      </div>

      {/* Footer links*/}
      <div className="bg-primary-gray text-white grid grid-cols-4 justify-items-center py-12 border-b border-gray-600">
        <div className="flex flex-col">
          <h1 className="py-3 font-semibold text-lg">Get to Know Us</h1>
          <a href="/">Careers</a>
          <a href="/">Blog</a>
          <a href="/">About Amazon</a>
          <a href="/">Invertor Relations</a>
          <a href="/">Amazon Devices</a>
        </div>
        <div className="flex flex-col">
          <h1 className="py-3 font-semibold text-lg">Make money with us</h1>
          <a href="/">Sell products on Amazon</a>
          <a href="/">Sell on Amazon business</a>
          <a href="/">Sell apps on Amazon</a>
          <a href="/">Become an Affiliate</a>
        </div>
        <div className="flex flex-col">
          <h1 className="py-3 font-semibold text-lg">
            Amazon Payment Products
          </h1>
          <a href="/">Amazon Business Card</a>
          <a href="/">Shop with Points</a>
          <a href="/">Reload Your Balance</a>
          <a href="/">Amazon Currency Converter</a>
        </div>
        <div className="flex flex-col">
          <h1 className="py-3 font-semibold text-lg">Let Us Help You</h1>

          <a href="/">Amazon and COVID-19</a>
          <a href="/">Your Account</a>
          <a href="/">Your Orders</a>
          <a href="/">Shipping Rates & Policies</a>
        </div>
      </div>

      {/* Footer logo */}
      <div className="bg-primary-gray pt-6 w-screen">
        <a href="/">
          <img
            src="/images/amazon_logo.png"
            alt="amazon"
            className="h-12 mx-auto"
          />
        </a>
      </div>
    </div>
  );
}
