import React from "react";

const page = () => {
  return (
    <div className="bg-[url('/jott.jpeg')] bg-cover bg-center h-[40rem] w-full">
      <div className="h-[40rem] w-full bg-black/50 text-white flex flex-col relative">
        <div className="flex flex-col gap-5 text-right mt-[10%] mr-[20%] max-md:mr-[10%] 2xl:mt-[5%]">
          <div className="flex flex-col gap-2">
            <h3 className="uppercase font-semibold text-sm">
              Lorem ipsum dolor sit
            </h3>
            <h3 className="uppercase font-bold text-2xl lg:text-4xl">
              jottify, jotter notes!
            </h3>
          </div>
          <div className="flex flex-col">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Provident.
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
        <div className="flex gap-4 my-2 absolute right-[20%] max-md:right-[10%] bottom-[45%] max-lg:flex-col">
          <button className="font-bold border border-white/50 rounded-full py-2 px-6 hover:bg-yellow-600 hover:border-none">
            Read More
          </button>
          <button className="font-bold border border-white/50 rounded-full py-2 px-6 hover:bg-yellow-600 hover:border-none">
            Write More
          </button>
        </div>
        <div className="flex justify-center items-end h-screen mb-10">
          <input
            type="text"
            placeholder="Location"
            className="w-[50%] p-2 outline-none border border-white/50 bg-transparent" title="enter any location"
          />
          <button className="bg-slate-600 p-2 border border-slate-600 uppercase max-md:hidden cursor-pointer">
            Search for locations
          </button>
        </div>
      </div>

      <div className="mx-20 max-md:mx-0 flex gap-5 p-10 max-md:p-0 max-md:pt-5 max-md:flex-col max-md:items-center max-md:text-justify">
        <div class="">
          <iframe
            class="max-lg:w-[300px] max-lg:h-[400px]"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15756.205923692945!2d7.3638981!3d9.1498234!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104dd9f58204702b%3A0x666c4080fc20e6e2!2searly%20code!5e0!3m2!1sen!2sng!4v1723495102748!5m2!1sen!2sng"
            width="550"
            height="400"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="max-md:mx-4">
          <h3 className="font-bold text-2xl uppercase">location</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            quibusdam laudantium nisi error necessitatibus. Suscipit illum
            maxime recusandae voluptas adipisci.
          </p>
          <p className="font-bold text-sm text-white bg-slate-600 hover:bg-slate-500 border rounded-md inline-block py-1 px-4 mt-2 mb-4">
            Read More
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
