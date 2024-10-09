import loader from "../../assets/loader.gif";

const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#001d2f]">
      <div className="w-[200px] h-[200px]">
        <img
          src={loader}
          alt="loading..."
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Loader;
