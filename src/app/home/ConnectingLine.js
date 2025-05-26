import React from 'react';

/**
 * ConnectingLine Component
 * A line that connects diamonds in the curriculum section
 */
const ConnectingLine = () => {
    return (        <div className="hidden md:block absolute h-[1px] bg-black z-0" style={{
                top: '50px',
                left: '25%', // Position after first diamond
                width: '50%', // Width to connect all diamonds without extending beyond
                marginLeft: '20px', // Adjust starting position to align with first diamond's edge
            }}
        ></div>
    );
};

export default ConnectingLine;
