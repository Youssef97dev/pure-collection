import Image from "next/image";

const Loader = () => {
  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center h-screen">
      {/* Beige background with logo animation */}
      <div className="absolute inset-0 bg-white flex flex-col items-center justify-center">
        <Image
          src="/logo-1.png" // Replace with your logo path
          alt="Logo"
          width={500}
          height={500}
          className="w-52 animate-scale-3d"
        />
      </div>
    </div>
  );
};

export default Loader;
