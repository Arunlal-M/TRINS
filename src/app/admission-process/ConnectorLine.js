export default function ConnectorLine() {

    return <div
            className="flex justify-center items-center w-full connectorLine"
            style={{ position: "absolute", zIndex: 2, left: 0, top: 100 }}
        >
            <div
                className="rounded-full border-4 border-[#075037] bg-white flex items-center justify-center"
                style={{ width: 90, height: 90 }}
            >
                <img
                    src="/image/admission-process/logoInsideTheTimelineCircle.png"
                    alt="Timeline Logo"
                    className="w-16 h-16 object-contain"
                />
            </div>
        </div>

}