import Image from "next/image";

const Loading = () => {
  return (
    <div className="flex-center w-full">
      <Image
        src="assets/icons/loading.svg"
        alt="loading"
        width={50}
        height={50}
        className="object-contain"
      />
    </div>
  );
};

export default Loading;
