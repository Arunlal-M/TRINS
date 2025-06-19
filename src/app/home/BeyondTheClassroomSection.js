import React from 'react';
import Image from 'next/image';
import BeyondClassroomCard from './BeyondClassroomCard';
import Link from "next/link";


// Beyond the Classroom section with transparent to full opacity green gradient background
const BeyondTheClassroomSection = () => {
    return (
        <>
            <div
                className="w-full h-screen bg-gradient-to-bl from-[#02BA89] to-[#085038] flex items-center justify-center magnet-section displayMobNone"
                style={{
                    position: 'relative',
                    zIndex: 0, // Increased z-index but still lower than fixed video
                }}
            >
            </div>
            <div
                className="w-full min-h-screen relative z-60 overflow-hidden bg-gradient-to-b from-transparent to-[#085038] to-25%"
            >
                <div className="container mx-auto px-4 relative pt-16 pb-32 absoluteSectionCardContainer">
                    {/* Arts Card - MOVED AND POSITIONED ABSOLUTELY */}
                    <div className="absolute top-0 right-4 md:w-5/12 w-auto z-20 absoluteSectionCard">
                        <div
                            className="w-full"
                            style={{
                                filter: 'drop-shadow(0px 10px 30px rgba(0, 0, 0, 0.3))',
                            }}
                        >
                            <Link href="/activities/arts-culture">
                                <BeyondClassroomCard
                                    title="ARTS"
                                    subtitle="Built For Adventure"
                                    imageSrc="/image/home/bcr_arts.png"
                                />
                            </Link>
                        </div>
                    </div>

                    {/* Heading and arrow container */}
                    <div className="relative mb-28">
                        {/* Beyond the Classroom heading */}
                        <h2
                            className="font-normal uppercase text-white"
                            style={{
                                fontFamily: 'Gideon Roman',
                                fontSize: '68px',
                                lineHeight: '74px',
                                letterSpacing: '3%',
                                maxWidth: '495px',
                            }}
                        >
                            BEYOND THE CLASSROOM
                        </h2>

                        {/* Downward Arrow */}
                        <div className="absolute left-14 mt-4">
                            <Image
                                src="/gif/Arrow.gif"
                                alt="Downward arrow"
                                width={59}
                                height={59}
                                className="rotate-[270deg]"
                                unoptimized
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-12 gap-4 relative">
                        {/* Sports Card - bottom left */}
                        <div className="col-span-12 md:col-span-5 md:col-start-1 mb-12 md:mb-0 md:mt-52">
                            <div
                                className="w-full z-10"
                                style={{
                                    filter: 'drop-shadow(0px 10px 30px rgba(0, 0, 0, 0.3))',
                                }}
                            >
                                <Link href="/activities/sports">
                                    <BeyondClassroomCard
                                        title="SPORTS"
                                        subtitle="Built For Adventure"
                                        imageSrc="/image/home/bcr_sports.png"
                                    />
                                </Link>
                            </div>
                        </div>

                        {/* Yoga Card - bottom right */}
                        <div className="col-span-12 md:col-span-5 md:col-start-8 md:mt-176">
                            <div
                                className="w-full z-10"
                                style={{
                                    filter: 'drop-shadow(0px 10px 30px rgba(0, 0, 0, 0.3))',
                                }}
                            >    <Link href="/activities/yoga">
                                    <BeyondClassroomCard
                                        title="YOGA"
                                        subtitle="Built For Adventure"
                                        imageSrc="/image/home/bcr_yoga.png"
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BeyondTheClassroomSection;
