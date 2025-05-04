import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="h-screen flex flex-col justify-center items-center gap-4">
        <Image src={"/assets/images/logo.png"} width={75} height={75} alt="website logo" />
        <h1 className="h-fit text-3xl font-bold text-gray-500">
          On Development, stay tuned!
        </h1>
      </div>
    </>
  );
}
