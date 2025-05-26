import React from 'react';

// This spacer section is meant to provide room for scrolling
// and appears as content below the video from OurCampusSection
const SpacerSection = () => (
    <div 
        className="w-full h-screen bg-gradient-to-bl from-[#02BA89] to-[#085038] flex items-center justify-center magnet-section" 
        style={{ 
            position: 'relative',
            zIndex: 0, // Increased z-index but still lower than fixed video
        }}
    >
    </div>
);

export default SpacerSection;
