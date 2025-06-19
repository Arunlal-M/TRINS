import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import ReadMoreButton from '../components/ReadMoreButton';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const PrincipalMessageSection = () => {
    const principalHeadingRef = useRef(null);
    const principalNoteRef = useRef(null);
    const principalNoteRefContent = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        // Only run animations on non-mobile devices
        if (window.innerWidth > 768) {
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
            gsap.fromTo(
                principalNoteRefContent.current,
                { y: 100, x: 100, rotate: 18, transformOrigin: '0% 100%' },
                {
                    y: 0,
                    x: 0,
                    rotate: 0,
                    duration: 1.3,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: principalNoteRefContent.current,
                        start: 'top 95%',
                        toggleActions: 'play reverse play reverse',
                    },
                }
            );
        }
    }, []);

    return (
        <div className="principal-message-section relative w-full flex flex-col items-center justify-center min-h-[90vh] md:min-h-screen bg-[#fefbff] overflow-hidden px-4 py-12 md:py-0">
            <div className="relative flex flex-col md:flex-row items-center justify-center w-full max-w-[1920px] z-10 gap-6 md:gap-10 h-full">
                <div
                    className="flex flex-col items-start justify-start w-full md:w-auto"
                >
                    <h2
                        ref={principalHeadingRef}
                        className="ml-2 text-[#0A523B] font-serif font-[400] text-[10vw] xs:text-[8vw] md:text-[5.5vw] lg:text-[64px] leading-tight uppercase tracking-normal text-left"
                        style={{ fontFamily: 'Gideon Roman, serif' }}
                    >
                        PRINCIPAL'S
                        <br />
                        MESSAGE
                    </h2>
                </div>

                <div className="flex items-center justify-center w-full md:w-auto max-w-[90vw]">
                    <div className="relative w-full principalNoteContainer">
                        <img
                            ref={principalNoteRef}
                            src="/image/home/PsNote-bg.svg"
                            alt="Principal's note"
                            className="-ml-10 w-full min-w-[128%] sm:min-w-[90%] md:min-w-0 md:max-w-[520px] lg:max-w-[700px] xl:max-w-[800px] h-auto drop-shadow-xl PrincipalsNote"
                        />
                        <div className="noteContentContainer" ref={principalNoteRefContent}>
                            <p className="note">
                                I am fortunate to have been part of the creation of Trivandrum International School in
                                2003. From its inception, Mr George M. Thomas has been determined that The school
                                should not just have an outstanding campus, but also a curriculum that makes it a
                                distinct international school.
                            </p>
                            <p className="noteSignature">- Richard Hillebrand</p>
                            <ReadMoreButton className="angle" href="/PrincipalMessage" bgColor="bg-[#075037] text-white" hoverColor="hover:bg-[#f5de9c]  hover:text-black" />{' '}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrincipalMessageSection;