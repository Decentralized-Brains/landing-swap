import chart from "../assets/img/Chart.png";

const Graph = () => {
  return (
    <div className="my-8 xl:my-28">
      <h2 className="text-indigo-500 text-center mb-8 pt-12">
        Decentralised <span className="text-black">Economoy</span>
      </h2>
      <div className="md:grid grid-cols-2 gap-12 py-12">
        <div className="flex flex-col justify-center">
          <h3 className="font-bold pb-4 text-2xl">Lorem ipsum</h3>
          <p className="text-indigo-800">
            Our Native Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Voluptates amet commodi doloremque deserunt tenetur, cum minus
            maiores vel quisquam itaque repellendus, iste cumque consequatur
            voluptate suscipit, adipisci fugiat magni! Eligendi!
          </p>
          <br />
          <h3 className="font-bold pb-4 text-2xl">Loremer ipsum</h3>
          <p className="text-indigo-800">
            Our Native Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Voluptates amet commodi doloremque deserunt tenetur, cum minus
            maiores vel quisquam itaque repellendus, iste cumque consequatur
            voluptate suscipit, adipisci fugiat magni! Eligendi!
          </p>
        </div>
        <div>
          <img className="mt-10 xl:mt-6" src={chart} alt="" />
          <p className="text-center py-12 font-semibold text-gray-500">
            Distribution of Tokens
          </p>
        </div>
      </div>
    </div>
  );
};

export default Graph;
