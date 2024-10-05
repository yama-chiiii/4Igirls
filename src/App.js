import { Link, Route, Routes } from "react-router-dom";
import { Akari } from "./components/Akari";
import { Chiho } from "./components/Chiho";
import { Haruna } from "./components/Haruna";
import { Hinata } from "./components/Hinata";
import { Kyoka } from "./components/Kyoka";
import { Mouna } from "./components/Mouna";
import { Tomoka } from "./components/Tomoka";
import { Utano } from "./components/Utano";
import { Yuu } from "./components/Yuu";

const App = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center bg-pink-50">
      <h1 className="mt-12 font-semibold text-4xl text-pink-600">
        メインページ
      </h1>
      <p className="mt-2 mb-4 font-semibold text-md text-pink-600">出席番号を選んでね</p>

      <Link to="/kyoka" className="w-1/5 mt-4 px-6 py-3 bg-pink-200 text-pink-800 font-bold rounded-full shadow-lg hover:bg-pink-300 transition-all duration-300">
        4408
      </Link>

      <Link to="/yuu" className="w-1/5 mt-4 px-6 py-3 bg-blue-200 text-blue-800 font-bold rounded-full shadow-lg hover:bg-blue-300 transition-all duration-300">
        4409
      </Link>

      <Link to="/tomoka" className="w-1/5 mt-4 px-6 py-3 bg-pink-200 text-pink-800 font-bold rounded-full shadow-lg hover:bg-pink-300 transition-all duration-300">
        4414
      </Link>

      <Link to="/akari" className="w-1/5 mt-4 px-6 py-3 bg-blue-200 text-blue-800 font-bold rounded-full shadow-lg hover:bg-blue-300 transition-all duration-300">
        4420
      </Link>

      <Link to="/hinata" className="w-1/5 mt-4 px-6 py-3 bg-pink-200 text-pink-800 font-bold rounded-full shadow-lg hover:bg-pink-300 transition-all duration-300">
        4425
      </Link>

      <Link to="/chiho" className="w-1/5 mt-4 px-6 py-3 bg-blue-200 text-blue-800 font-bold rounded-full shadow-lg hover:bg-blue-300 transition-all duration-300">
        4426
      </Link>

      <Link to="/haruna" className="w-1/5 mt-4 px-6 py-3 bg-pink-200 text-pink-800 font-bold rounded-full shadow-lg hover:bg-pink-300 transition-all duration-300">
        4430
      </Link>

      <Link to="/mouna" className="w-1/5 mt-4 px-6 py-3 bg-blue-200 text-blue-800 font-bold rounded-full shadow-lg hover:bg-blue-300 transition-all duration-300">
        4435
      </Link>

      <Link to="/utano" className="w-1/5 mt-4 px-6 py-3 bg-pink-200 text-pink-800 font-bold rounded-full shadow-lg hover:bg-pink-300 transition-all duration-300">
        4439
      </Link>
    </div>
  );
};

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/kyoka" element={<Kyoka />} />
      <Route path="/yuu" element={<Yuu />} />
      <Route path="/tomoka" element={<Tomoka />} />
      <Route path="/akari" element={<Akari />} />
      <Route path="/hinata" element={<Hinata />} />
      <Route path="/chiho" element={<Chiho />} />
      <Route path="/haruna" element={<Haruna />} />
      <Route path="/mouna" element={<Mouna />} />
      <Route path="/utano" element={<Utano />} />
    </Routes>
  );
};
