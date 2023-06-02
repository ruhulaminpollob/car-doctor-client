
import img1 from "../../../assets/images/banner/1.jpg"
import img2 from "../../../assets/images/banner/2.jpg"
import img3 from "../../../assets/images/banner/3.jpg"
import img4 from "../../../assets/images/banner/4.jpg"

const Banner = () => {
    return (
        <div className="carousel rounded-xl w-full h-[600px] ">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={img1} className="w-full" />
                <div className=" w-full h-[600px] absolute bg-gradient-to-r from-gray-400">

                </div>
                <div className="absolute text-white flex items-center flex-col left-10 top-1/3 bottom-0 gap-5 ">
                    <div className="space-y-5 w-96">
                        <h1 className="text-6xl font-bold">
                            Affordable Price For Car Servicing
                        </h1>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    </div>
                    <div className=" flex gap-5">
                        <button className="btn btn-warning">Discover More</button>
                        <button className="btn btn-outline text-white">Latest Project</button>
                    </div>

                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 gap-5 right-5 bottom-0 ">
                    <a href="#slide4" className="btn bg-gray-300 text-white btn-circle">❮</a>
                    <a href="#slide2" className="btn bg-red-400 text-white btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={img2} className="w-full" />
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 gap-5 right-5 bottom-0">
                    <a href="#slide1" className="btn bg-gray-300 text-white btn-circle">❮</a>
                    <a href="#slide3" className="btn bg-red-400 text-white btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={img3} className="w-full" />
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 gap-5 right-5 bottom-0">
                    <a href="#slide2" className="btn bg-gray-300 text-white btn-circle">❮</a>
                    <a href="#slide4" className="btn bg-red-400 text-white btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={img4} className="w-full" />
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 gap-5 right-5 bottom-0">
                    <a href="#slide3" className="btn bg-gray-300 text-white btn-circle">❮</a>
                    <a href="#slide1" className="btn bg-red-400 text-white btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;