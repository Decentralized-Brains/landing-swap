import Img from "../assets/img/loading.gif";

const Loader = () => {
  return (
    <div className="flex items-center gap-2 px-4 text-sm">
      <img src={Img} className="w-[25px]" alt="" />
      Processing...
    </div>
  );
};

export default Loader;
