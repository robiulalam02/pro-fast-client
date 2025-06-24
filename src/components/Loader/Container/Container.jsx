import React from 'react';

const Container = ({children, color}) => {
    return (
        <div className={`py-16 px-4 md:px-8 lg:px-16 rounded-3xl min-h-screen mb-20 ${color}`}>
            {children}
        </div>
    );
};

export default Container;