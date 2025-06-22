import React from 'react';
import { Grid, ThreeCircles } from 'react-loader-spinner';

const Loader = () => {
    return (
        <div className='h-dvh flex justify-center items-center'>
            <ThreeCircles
                visible={true}
                height="100"
                width="100"
                color="#CAEB66"
                ariaLabel="three-circles-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
        </div>
    );
}

export default Loader;