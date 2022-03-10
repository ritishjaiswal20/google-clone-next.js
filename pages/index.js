import Head from "next/head";
import Image from "next/image";
import Avatar from "../components/Avatar";
import {
  ViewGridIcon,
  MicrophoneIcon,
  SearchIcon,
} from "@heroicons/react/solid";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="flex w-full p-5 justify-between text-sm text-gray-700">
        <div className="flex space-x-4 items-center">
          <p className="link"> About </p>
          <p className="link">Store</p>
        </div>
        <div className="flex space-x-4 items-center">
          <p className="link">Gmail</p>
          <p className="link">Images</p>
          <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer" />
          <Avatar url="https://coaching.papareact.com/ai9" />
        </div>
      </header>
      <form className="flex flex-col items-center mt-39 flex-grow">
        <Image
          src="https://www.google.com/logos/doodles/2015/googles-new-logo-5078286822539264.3-hp2x.gif"
          width={400}
          height={200}
        />
        <div
          className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg  max-w-md  rounded-full border  border-gray-300 px-5 py-3 items-center
        sm:max-w-xl lg:max-w-2xl "
        >
          <SearchIcon className="h-5 mr-3 text-gray-500" />
          <input type="text" className="flex-grow  focus:outline-none" />
          <MicrophoneIcon className="h-5" />
        </div>
        <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row s:space-x-4">
          <button className="btn">Google Search</button>
          <button className="btn">I am feeling lucky</button>
        </div>
      </form>
    </div>
  );
}
