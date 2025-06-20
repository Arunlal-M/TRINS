<div
    className="mt-11 w-full flex flex-col items-center justify-center relative mainContainer"
    style={{ minHeight: 320 }}
>
    {/* Cover Section */}
    <div
        style={{
            position: "relative",
            width: "100%",
            height: 300,
            margin: "0 auto",
            overflow: "hidden",
        }}
    >
        <Image
          src="/image/careers/cover.jpg"
          alt="Careers Cover"
            fill
            style={{
                objectFit: "cover",
                objectPosition: "center",
                backgroundColor: "#074B35",
            }}
            priority
        />
        <div
            className="absolute inset-0 w-full h-full z-10"
            style={{
                background: "linear-gradient(180deg, rgba(0,0,0,0.5) 100%)"
            }}
        />
        <h1
            style={{
                fontFamily: "Gideon Roman",
                fontWeight: 400,
                fontSize: "clamp(32px, 8vw, 120px)",
                lineHeight: "1",
                letterSpacing: "clamp(2px, 2vw, 4px)",
                textTransform: "uppercase",
                color: "#FFFFFF",
                position: "absolute",
                zIndex: 20,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                textShadow: "0 4px 32px rgba(0,0,0,0.18)",
                inset: 0,
                padding: "0 16px",
                wordBreak: "break-word",
                opacity: 0.7,
            }}
        >
            PRINCIPAL'S MESSAGE
        </h1>
        <p className="text-white mt-2 subTitle"
        >
            Providing comprehensive education that promotes critical thinking, creativity, and application-based learning
        </p>
    </div>
</div>


{/* Title SubSection */ }
<div className="w-full flex flex-row items-stretch mt-8">
    <div className="w-full bannerSectionContainer bg-[#075037]">
        <div className="contentWidthAdjust h-full w-full">
            <div className="imgContainer">
                <img
                    src="/image/admission-process/Copy of 13.jpg"
                    alt="Admission Process Main"
                />
            </div>
            <div className="contentContainer">
                <h1 className="text-white leading-title font-normal mb-2"
                >
                    ADMISSION <br /> PROCESS
                </h1>
                <p className="text-white mt-2 subTitle"
                >
                    Begin your child's journey
                </p>
            </div>
        </div>
    </div>
</div>