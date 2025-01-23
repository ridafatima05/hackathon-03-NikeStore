import React from "react";
import { FaMobileAlt } from "react-icons/fa";
import { RiMessage2Fill } from "react-icons/ri";
import { IoIosMail } from "react-icons/io";
import Image from "next/image";
import { AiOutlineSearch } from "react-icons/ai";
import { IoIosThumbsUp } from "react-icons/io";
import { IoIosThumbsDown } from "react-icons/io";

const GetHelp = () => {
  return (
    <div className="p-6 lg:p-10">
     
      <div className="text-center mb-10">
        <h1 className="text-2xl lg:text-4xl font-semibold mb-4">GET HELP</h1>
        <div className=" w-full max-w-lg lg:flex items-center bg-gray-100 h-[56px] py-2 flex justify-between border border-black  px-4  rounded-md p-3 md:ml-3 lg:ml-[380px] ">
          <input
            type="text"
            placeholder="What can we help you with?"
            className="bg-transparent outline-none ml-2 text-sm placeholder-gray-500"
          />{" "}
          <AiOutlineSearch className="text-black-500" size={20} />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-10 ">
        {/* Left Content */}
        <div className="flex-1 mt-10">
          {/* Title */}
          <h2 className="text-xl lg:text-2xl font-semibold mb-4">
            WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?
          </h2>

          {/* Description */}
          <p className="text-sm lg:text-base mb-4">
            We want to make buying your favorite Nike shoes and gear online fast
            and easy, and we accept the following payment options:
          </p>
          <div className="list-disc  mb-4 text-sm lg:text-base">
            <p>
              Visa, Mastercard, Diners Club, Discover, American Express Visa
              Electron, Maestro
              <p>Apple Pay</p>
            </p>
          </div>
          <p className="text-sm lg:text-base mb-4">
            If you enter your PAN information at checkout, you’ll be able to pay
            for your order with PayTM or a local credit or debit card.
          </p>
          <p className="text-sm lg:text-base mb-6">
            Nike Members can store multiple debit or credit cards in their
            profile for faster checkout. If you’re not already a Member,{" "}
            <a href="/joinus" className="underline ">
              join us today
            </a>
            .
          </p>

        
          <div className="flex gap-4 mb-10">
            <button className="bg-black text-white px-6 py-2 rounded-full">
              JOIN US
            </button>
            <button className="bg-black text-white px-6 py-2 rounded-full">
              SHOP NIKE
            </button>
          </div>

          
          <h3 className="text-lg lg:text-xl font-semibold mb-4">FAQs</h3>
          <div className="mb-6">
            <h4 className="font-medium text-sm lg:text-base ">
              <b> Does my card need international purchases enabled?</b>
            </h4>
            <p className="text-sm lg:text-base">
              Yes, we recommend asking your bank to enable international
              purchases on your card. You will be notified at checkout if
              international purchases need to be enabled.
            </p>
            <p className="text-sm lg:text-base">
              Please note, some banks may charge a small transaction fee for
              international orders.
            </p>
          </div>
          <div className="mb-6">
            <h4 className="font-medium text-sm lg:text-base">
              <b> Can I pay for my order with multiple methods?</b>
            </h4>
            <p className="text-sm lg:text-base">
              No, payment for Nike orders can&#39;t be split between multiple
              payment methods.
            </p>
          </div>
          <div className="mb-6">
            <h4 className="font-medium text-sm lg:text-base">
              <b> What payment method is accepted for SNKRS orders?</b>
            </h4>
            <p className="text-sm lg:text-base">
              You can use any accepted credit card to pay for your SNKRS order.
            </p>
          </div>
          <div className="mb-6">
            <h4 className="font-medium text-sm lg:text-base">
              <b> Why do not I see Apple Pay as an option?</b>
            </h4>
            <p className="text-sm lg:text-base">
              To see Apple Pay as an option in the Nike App or on Nike.com,
              you will need to use a compatible Apple device running the latest
              OS, be signed in to your iCloud account and have a supported card
              in your Wallet. Additionally, you will need to use Safari to use
              Apple Pay on Nike.com.
            </p>
            <div>
        {" "}
        <p className="font-medium mt-5">Was this answer helpful?</p>
        <div className="flex justify-start"><IoIosThumbsUp size={25}  />
        <IoIosThumbsDown size={25} /></div>
        <p className="text text-grey-100" >RELATED</p>
        <p className="text-[10px] ml-5">WHAT ARE NIKE S DELIVERY OPTIONS?</p>
        <p className="text-[10px] ml-5">HOW DO I GET FREE DELIVERY ON NIKE ORDERS?</p>
      </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="w-full lg:w-[300px] border-l border-gray-200 pl-6 mt-10">
          <h3 className="text-lg font-semibold mb-4 text-center text-[30px]">
            CONTACT US
          </h3>
          <ul className="space-y-6 text-sm lg:text-base">
            <li className="text-center ">
              <FaMobileAlt size={80} className="ml-20 " />
              <p className="font-medium mt-5">000 800 919 0566</p>
              <p className="mt-5">
                Products & Orders: 24 hours a day, 7 days a week
              </p>
              <p className="mt-5">
                Company Info & Enquiries: 07:30 - 16:30, Monday - Friday
              </p>
            </li>
            <li className="text-center ">
              <RiMessage2Fill size={80} className="ml-20 mt-8" />
              <p className="font-medium mt-5">24 hours a day</p>
              <p>7 days a week</p>
            </li>
            <li className="text-center ">
              <IoIosMail size={80} className=" ml-20 mt-8" />
              <p className="font-medium mt-5">
                We’ll reply within five business days
              </p>
            </li>
            <li className="text-center ">
              <Image
                src={"/images/Image (16).png"}
                alt=""
                width={64}
                height={64}
                className=" ml-20 mt-8 mb-3"
              />
              <p className="font-medium">STORE LOCATOR</p>
              <p>Find Nike retail stores near you</p>
            </li>
          </ul>
        </div>
      </div>
      
    </div>
  );
};

export default GetHelp;
