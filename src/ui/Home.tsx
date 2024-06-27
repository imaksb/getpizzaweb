import CreateUser from "../features/user/CreateUser";

function Home() {
  return (
    <div className="my-10 text-center sm:my-5">
      <h1 className="text-bold mb-8 text-2xl font-semibold md:text-3xl">
        The best pizza.
        <br />
        <span className="text-m font-mono tracking-tighter text-green-600">
          It's not an elephant but order it anyway.
        </span>
      </h1>
      <CreateUser />
    </div>
  );
}

export default Home;
