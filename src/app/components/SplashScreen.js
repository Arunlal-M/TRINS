'use client';

import React, { useState, useLayoutEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';

const SplashScreen = () => {
  const [isVisible, setIsVisible] = useState(true);
  useLayoutEffect(() => {
    // Disable vertical scrolling when splash screen is visible
    document.body.style.overflowY = 'hidden';

    const tl = gsap.timeline({
      onComplete: () => {
        setIsVisible(false);
        // Re-enable vertical scrolling when splash screen is hidden
        document.body.style.overflowY = 'unset';
      },
    });

    const logoElement = '.splash-screen .logo-splash';
    const leftBGElement = '.splash-screen .left-bg-element';
    const rightBGElement = '.splash-screen .right-bg-element';
    const titleElement = '.splash-title';
    const subtitleElement = '.splash-subtitle';
    const downArrowElement = '.splash-down-arrow';
    const bgElement = '.splash-screen .full-bg-element';

    // Set initial states
    tl.set(logoElement, { yPercent: -200, autoAlpha: 0 });
    tl.set(titleElement, { autoAlpha: 0 });
    tl.set(subtitleElement, { yPercent: 200, autoAlpha: 0 });
    tl.set(downArrowElement, { autoAlpha: 0 });
    tl.set(leftBGElement, { xPercent: 0, yPercent: -100, opacity: 0, transform: 'rotate(120deg)' });
    tl.set(rightBGElement, { xPercent: 100, yPercent: 100, opacity: 0, transform: 'rotate(0deg)' });
    tl.set(bgElement, { opacity: 0 });

    // Animation sequence
    tl.to(logoElement, { yPercent: 0, autoAlpha: 1, duration: 1.5, ease: 'power2.out' })
      .to(titleElement, { autoAlpha: 1, duration: 1.5 }, '<') // for your reference @rohit-46 < means start at the same time
      .to(subtitleElement, { yPercent: 0, autoAlpha: 1, duration: 1.5, ease: 'power2.out' }, '<')
      .to(bgElement, { opacity: 0.025, duration: 1.5, ease: 'power2.in' }, '<')
      .to(
        leftBGElement,
        {
          xPercent: 0,
          yPercent: 0,
          opacity: 0.15,
          duration: 1.5,
          ease: 'power2.out',
          transform: 'rotate(160deg)',
        },
        '<'
      )
      .to(
        rightBGElement,
        {
          xPercent: 0,
          yPercent: 0,
          opacity: 0.15,
          duration: 1.5,
          ease: 'power2.out',
          transform: 'rotate(-50deg)',
        },
        '<'
      )
      .to({}, { duration: 2 })
      .to([logoElement, titleElement, subtitleElement], {
        yPercent: '-=10',
        duration: 1,
        ease: 'power2.inOut',
      })
      .to(downArrowElement, { autoAlpha: 1, duration: 0.5, ease: 'power2.in' }, '<')
      .to('.splash-screen', { opacity: 0, duration: 1.5, ease: 'power1.in' }); // Cleanup function to ensure vertical scrolling is re-enabled if component unmounts
    return () => {
      document.body.style.overflowY = 'unset';
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="splash-screen fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#074D36] text-white">
      {/* full-screen subtle background */}
      <Image
        src="/image/home/splash/splash-full-bg.png"
        alt="Background cover"
        fill
        className="absolute inset-0 -z-30 full-bg-element"
        style={{ objectFit: 'cover', opacity: 0 }}
        unoptimized
      />
      {/* decorative background element */}
      <Image
        src="/image/home/splash/bgElement.png"
        alt="Subtle background decoration"
        width={1240}
        height={803}
        className="absolute -z-20 left-bg-element"
        style={{
          width: '1240.18px',
          height: '802.95px',
          top: '-333.48px',
          left: '-100px',
          transform: 'rotate(150deg)',
          opacity: 0.05, // lower opacity for subtle effect
        }}
        unoptimized
      />
      {/* bottom-right decorative background element */}
      <Image
        src="/image/home/splash/bgElement.png"
        alt="Background decoration"
        width={1240}
        height={803}
        className="absolute -z-10 right-bg-element"
        style={{
          width: '1240.18px',
          height: '802.95px',
          bottom: '-333.48px',
          right: '-200px',
          transform: 'rotate(-50deg)',
          opacity: 0.11,
        }}
        unoptimized
      />
      <Image
        src="/image/Logo.png"
        alt="Logo"
        width={800}
        height={800}
        priority
        className="opacity-0 logo-splash"
      />
      <p
        className="splash-title opacity-0"
        style={{
          fontFamily: 'Gideon Roman',
          fontWeight: 400,
          fontSize: '70.69px',
          lineHeight: '78.87px',
          letterSpacing: '0%',
          textAlign: 'center',
          textTransform: 'uppercase',
          color: '#FFFFFF',
          width: '1025.65px',
          height: '163.45px',
        }}
      >
        Western International School
      </p>
      <p
        className="splash-subtitle opacity-0"
        style={{
          fontFamily: 'Glass Antiqua',
          fontWeight: 400,
          fontSize: '36.53px',
          lineHeight: '40.76px',
          letterSpacing: '20%',
          textAlign: 'center',
          textTransform: 'uppercase',
          color: '#FFFFFF',
        }}
      >
        Molding a new generation Of Leaders
      </p>
      <div className="splash-down-arrow absolute mt-4 stick bottom-0 left-1/2 transform -translate-x-1/2 opacity-0">
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
  );
};

export default SplashScreen;
