import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const PrincipalMessageSection = () => {
    const principalHeadingRef = useRef(null);
    const principalNoteRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo(
            principalHeadingRef.current,
            { opacity: 0, y: 0, x: -80 },
            {
                opacity: 1,
                y: 0,
                x: 0,
                duration: 1.2,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: principalHeadingRef.current,
                    start: 'top 80%',
                    toggleActions: 'play reverse play reverse',
                },
            }
        );
        gsap.fromTo(
            principalNoteRef.current,
            { y: 100, x: 100, rotate: 18, transformOrigin: '0% 100%' },
            {
                y: 0,
                x: 0,
                rotate: 0,
                duration: 1.3,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: principalNoteRef.current,
                    start: 'top 85%',
                    toggleActions: 'play reverse play reverse',
                },
            }
        );
    }, []);

    return (        <div className="relative w-full flex flex-col items-center justify-center min-h-screen h-screen bg-[#fefbff] overflow-hidden magnet-section">
            <Image
                src="/image/home/PrincipalsMessage.png"
                alt="Principal's Message background"
                fill
                style={{ objectFit: "cover" }}
                quality={100}
                className="z-0 principalMessageImg"
            />
            <div className="relative flex flex-col md:flex-row items-start justify-center w-full max-w-[1920px] z-10 px-4 mt-12 md:mt-24 pt-0 gap-4 md:gap-8 h-full">
                <div className="flex flex-col items-start justify-start flex-shrink-0 w-full md:w-auto md:min-w-0 lg:min-w-0 xl:min-w-0 mt-8 md:mt-48 md:mr-0 lg:mr-0 xl:mr-0" style={{ maxWidth: 'min-content' }}>
                    <h2 ref={principalHeadingRef} className="text-[#0A523B] font-serif font-[400] text-[8vw] md:text-[56px] lg:text-[64px] leading-tight md:leading-[88px] uppercase tracking-normal text-left" style={{ fontFamily: 'Gideon Roman, serif' }}>
                        PRINCIPAL'S<br />MESSAGE
                    </h2>
                </div>
                <div className="flex items-start justify-center w-full md:w-auto">
                    <img ref={principalNoteRef} src="/image/home/PsNote.svg" alt="Principal's note" className="w-full max-w-[90vw] md:max-w-[520px] lg:max-w-[700px] xl:max-w-[800px] h-auto drop-shadow-xl PrincipalsNote" />
                </div>
            </div>
        </div>
    );
};

export default PrincipalMessageSection;
