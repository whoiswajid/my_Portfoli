// import { useEffect } from "react"

const AboutMe = () => {

    // useEffect(() =>{
    //     Aos.init(),
    // },[])

    return (
        <div>

            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 ">
                <div data-aos="fade-right" className="max-w-xs p-6   rounded-2xl shadow-md">
                    <img src="https://i.ibb.co/LxxnV6f/Whats-App-Image-2023-12-08-at-21-29-29-8d989f23.jpg" alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />

                </div>
                <div>
                    <h1 className="text-4xl font-mono font-bold hover:text-blue-400">Self-Summary</h1>
                    <div className="max-w-md p-6 overflow-hidden rounded-2xl shadow  hover:text-blue-400 ">
                        <article>
                            <h2 className="text-xl font-bold">Daiyan Wajid Salam</h2>
                            <p className=" dark:text-gray-400">Im a Bangladesh-based Web-developer with focus on Front-end, UI/UX design and Back-end. I believe the more you code the better you get</p>
                        </article>
                    </div>
                </div>


            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-1 lg:grid-cols-2 ">
                <section className="card-body rounded-2xl shadow-lg hover:text-blue-400">
                    <div className="container  mx-auto space-y-8 lg:max-w-3xl">
                        <h2 className="text-2xl font-bold md:text-4xl">Exprience</h2>
                        <h2 className="text-lg text-gray-500">Still learning</h2>
                        <div className="space-y-8">
                            <div>
                                <h3 className="mb-3 text-lg font-bold md:text-xl">2023</h3>
                                <ul className="space-y-4">
                                    <li className="space-y-1">
                                        <div className="flex items-center space-x-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current dark:text-violet-400">
                                                <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                                                <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                                            </svg>
                                            <h4 className="font-medium">Good At</h4>
                                        </div>
                                        <p className="ml-7 dark:text-gray-400">Html , CSS, JavaScript, MongoDB, FireBase,React</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="card-body rounded-2xl shadow-lg hover:text-blue-400">
                    <div className="container  mx-auto space-y-8 lg:max-w-3xl">
                        <h2 className="text-2xl font-bold md:text-4xl">Educations</h2>

                        <div className="space-y-8">
                            <div>
                                <h3 className="mb-3 text-lg font-bold md:text-xl">2018-2020</h3>
                                <p>Abdus Subhan Highschool, Jagannathpur</p>
                            </div>
                        </div>
                        <div className="space-y-8">
                            <div>
                                <h3 className="mb-3 text-lg font-bold md:text-xl">2020-2022</h3>
                                <p>Scholarshome Mejortila College,Sylhet</p>
                            </div>
                        </div>
                    </div>
                </section>


            </div>

        </div>
    );
};

export default AboutMe;