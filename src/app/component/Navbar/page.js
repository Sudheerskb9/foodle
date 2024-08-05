export default function Navbar() {
  return (
    <div>
      <nav className="bg-red-100 h-12 px-3 py-2 flex justify-between items-center ">
        <div>
          <h1 className="font-bold text-black px-5">Foodle</h1>
        </div>

        <div>
          <ul className="text-black flex">
            <li className="px-3">Home</li>
            <li className="px-3">Offer</li>
            <li className="px-3">Service</li>
            <li className="px-3">Menu</li>
            <li className="px-3">About Us</li>
          </ul>
        </div>
        <div className="flex justify-end items-center border w-[50%]">
          <ul className="text-red-400 flex font-semibold">
            <li className="px-3">Login</li>
            <button className="border border-red-500 px-3 rounded-3xl">
                Sign Up
            </button>
          </ul>
        </div>

        <div></div>
      </nav>
    </div>
  );
}
