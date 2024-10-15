import Image from "next/image";
import Link from "next/link";

function Logo({ pClassName }) {
  return (
    <div className="flex gap-5 items-center cursor-pointer ">
      <Link href="/">
        {/* <Image
          width={56}
          height={56}
          src={"/logo.png"}
          alt="Pepe coin logo"
          className=" w-[56px] h-[56px] bg-white rounded-full border-2 border-white"
        /> */}
        <Image
          src="/pepe-logo.gif"
          alt="My Animation"
          width={500} // Specify width
          height={500} // Specify height
          layout="intrinsic" // Can also use "responsive" or "fixed"
          className=" w-[56px] h-[56px] bg-white rounded-full  border-white"
        />
      </Link>
      <h5 className={` text-3xl font-semibold  ${pClassName}`}>PEPE LAYER 2</h5>
    </div>
  );
}

export default Logo;
