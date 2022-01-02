import "./index.css";
import Star from "./Star";
function App() {
    return (
        <div className="md:flex flex flex-col justify-center items-center h-screen w-screen ">
            <Star />
            <div
                className=" grid grid-cols-2 grid-rows-3
              gap-4 h-100 w-100 ">
                <div className="bg-red-200 h-20 w-20 hover:w-40 col-span-2" />
                <div className="bg-red-200 h-20 w-20 hover:w-40" />
                <div className="bg-red-200 h-20 w-20 hover:w-40" />
                <div className="bg-red-200 h-20 w-20 hover:w-40" />
                <div className="bg-red-200 h-20 w-20 hover:w-40" />
                <div className="bg-red-200 h-20 w-20 hover:w-40" />
                <div className="bg-red-200 h-20 w-20 hover:w-40" />
                <div className="bg-red-200 h-20 w-20 hover:w-40" />
                <div className="bg-red-200 h-20 w-20 hover:w-40" />
            </div>{" "}
            <div className="bg-gradient-to-r from-indigo-500 via-purple-500  to-pink-500 w-full h-12"></div>
        </div>
    );
}

export default App;
