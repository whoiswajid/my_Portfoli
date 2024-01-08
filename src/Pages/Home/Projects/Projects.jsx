import { Link } from "react-router-dom";


const Projects = () => {
    return (
        <div>
            <section className="dark:bg-gray-800 dark:text-gray-100">
                <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
                    <div>

                        <p className="max-w-3xl mx-auto mt-4 text-3xl font-bold text-center  hover:text-blue-400">Some Of My projects </p>
                    </div>
                    <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                        <div data-aos="fade-zoom-in"
                            data-aos-easing="ease-in-back"
                            data-aos-delay="300"
                            data-aos-offset="0">
                            <h3 className="text-2xl font-bold tracki sm:text-3xl hover:text-blue-400">PurrFect Pathways</h3>
                            <p className="mt-3 text-lg hover:text-blue-400">This is a pet service Web-site . It helps you to leave you pets safe at home on with guidance of volunteer who willing to look after your pets.
                                This has both Front-end and Back-end.</p>
                            <p className="mt-3 text-lg hover:text-blue-400">Click here : <Link className="font-extrabold underline" to='https://purrfect-pathways.web.app/'>Visit my site</Link></p>
                            <div className="mt-12 space-y-12">
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center w-12 h-12 rounded-md hover:text-blue-400">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-medium leadi dark:text-gray-50">Things That i used in this Projects</h4>
                                        <p className="mt-2 dark:text-gray-400">For Front-End I used Html,CSS,REACT, Firebase for Authentication, Tailwind, DaisyUI, MambaUI, Vite and more</p>
                                        <p className="mt-2 dark:text-gray-400">For Back-End I used MongoDB for Database</p>
                                    </div>
                                </div>


                            </div>
                        </div>
                        <div data-aos="fade-left"
                            data-aos-anchor="#example-anchor"
                            data-aos-offset="500"
                            data-aos-duration="500" aria-hidden="true" className="mt-10 lg:mt-0">
                            <img src="https://i.ibb.co/t83N1Zv/screencapture-purrfect-pathways-web-app-2023-12-10-22-33-46-1.png" alt="" className="w-11/12 mx-auto rounded-lg shadow-lg" />
                        </div>
                    </div>
                    <div>
                        <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                            <div data-aos="fade-zoom-in"
                                data-aos-easing="ease-in-back"
                                data-aos-delay="300"
                                data-aos-offset="0" className="lg:grid-cols-2">
                                <h3 className="text-2xl font-bold tracki sm:text-3xl hover:text-blue-400">World Seekers</h3>
                                <p className="mt-3 text-lg hover:text-blue-400">This is a travel service Web-site .Through this website tourist can book their destination trip a cross the country. Guide can add there profile . This website has 3 roles Admin , Tourist Guide and Tourist.
                                    This has both Front-end and Back-end.</p>
                                <p className="mt-3 text-lg hover:text-blue-400">Click here : <Link className="font-extrabold underline" to='https://world-seeker-2eeb8.web.app'>Visit my site</Link></p>

                                <div className="mt-12 space-y-12">
                                    <div className="flex">
                                        <div className="flex-shrink-0">
                                            <div className="flex items-center justify-center w-12 h-12 rounded-md hover:text-blue-400">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="ml-4">
                                            <h4 className="text-lg font-medium leadi dark:text-gray-50">Things That i used in this Projects</h4>
                                            <p className="mt-2 dark:text-gray-400">For Front-End I used Html,CSS,REACT, Firebase for Authentication, Tailwind, DaisyUI, MambaUI, Vite, SweetAlert and more </p>
                                            <p className="mt-2 dark:text-gray-400">For Back-End I used MongoDB for Database</p>
                                        </div>
                                    </div>


                                </div>
                            </div>
                            <div data-aos="fade-right"
                                data-aos-offset="300"
                                data-aos-easing="ease-in-sine" className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
                                <img src="https://i.ibb.co/s9qq7YJ/screencapture-world-seeker-2eeb8-web-app-2023-12-10-22-26-22.png" alt="" className="mx-auto rounded-lg shadow-lg dark:bg-gray-500" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Projects;