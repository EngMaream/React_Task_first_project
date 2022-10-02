import { useState } from "react";
import "./index.css";
import Star from "./Star";
const IMAGES = ["im1", "im2", "im3", "im4", "im5", "im6", "im7"];
function App() {
    const [conter, setConter] = useState(0);
    return (
        <div className="md:flex flex flex-col h-screen w-screen items-center justify-center">
            <div className="flex flex-row h-60 relative ">
                <p
                    className="absolute bg-white rounded-full w-8 h-8 text-center text-blue-500 font-bold top-1/2 right-6 cursor-pointer z-10"
                    onClick={() => {
                        if (conter < IMAGES.length - 1) setConter(conter + 1);
                        else setConter(0);
                    }}>
                    {">"}
                </p>
                <p
                    className="absolute bg-white rounded-full w-8 h-8 text-center text-blue-500 font-bold top-1/2 left-6 cursor-pointer z-10"
                    onClick={() => {
                        if (conter > 0) setConter(conter - 1);
                        else setConter(IMAGES.length - 1);
                    }}>
                    {"<"}
                </p>
                <img
                    src={`${"/img/" + IMAGES[conter === 0 ? IMAGES.length - 1 : conter - 1] + ".jpg"}`}
                    alt=""
                    className="object-cover object-centerl h-60 w-40 filter blur-sm contrast-100"
                />
                <img src={`${"/img/" + IMAGES[conter] + ".jpg"}`} alt="" className="object-fill h-60 w-96" />
                <img
                    src={`${"/img/" + IMAGES[conter === IMAGES.length - 1 ? 0 : conter + 1] + ".jpg"}`}
                    alt=""
                    className="object-cover  object-center h-60 w-40 filter blur-sm contrast-100"
                />
            </div>
            {/* 
            <Star /> */}
        </div>
    );
}

export default App;
