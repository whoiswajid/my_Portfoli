


import Progress from 'react-circle-progress-bar'



const GoodAt = () => {


    return (
        <div data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="250"
        data-aos-offset="0">
            <h1 className='text-center font-bold text-2xl hover:text-blue-400'>
                Skills That i know
            </h1>
             <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 '>
            <Progress  progress={82} subtitle='Html' />
            <Progress  progress={80} subtitle='CSS'/>
            <Progress  progress={75} subtitle='JavaScript'/>
            <Progress  progress={60} subtitle='NodeJs'/>
            <Progress  progress={86} subtitle='MongoDB'/>
            <Progress  progress={78} subtitle='FireBase'/>
            <Progress  progress={73} subtitle='React'/>
            <Progress  progress={67} subtitle='Express'/>
            </div>
        </div>
    );
};

export default GoodAt;