<div
    className="mt-38 w-full flex flex-col items-center justify-center relative mainContainer"
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
            src="/image/activities/cover.jpg"
            alt="About Us Cover"
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
            About Us
        </h1>
    </div>
</div>