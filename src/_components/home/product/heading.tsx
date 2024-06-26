interface HeadingProps{
    text: string;
}

const Heading: React.FC<HeadingProps> = ({ text }) => {
  return (
    <div className="bg-primeColor w-[200px] mb-2 p-8 h-[35px] text-white flex justify-center items-center text-base font-semibold hover:bg-black duration-300 cursor-pointer">
      {text}
    </div>
  );
};

export default Heading;