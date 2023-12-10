

const Banner = () => {
    return (
        <div>
            <div className="p-5 mx-auto sm:p-10 md:p-16 dark:bg-gray-800 dark:text-gray-100">
                <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
                    <img  src="https://i.ibb.co/52RP8V1/3357954.jpg" alt="" className="w-full: h-60 sm:h-96 dark:bg-gray-500" />
                    <div className="p-6 pb-12 m-4 mx-auto -mt-64 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md">
                        
                        <div className="space-y-2">
                            <a rel="noopener noreferrer" href="#" className="inline-block text-2xl font-semibold sm:text-3xl text-white">Hi!  welcome to my Portfolio Website</a>
                            
                        </div>
                        <div className="text-gray-100">
                            <p>IM a MERN-Stack developer with the scope of learnig more and more  </p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};
 
export default Banner;