import React from "react";

/* Google Fonts — Bebas Neue */
const fontStyle = `@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');`;

const WOMAN_IMG = "/images/female-podcast.png"

const AvatarStack: React.FC = () => (
    <div className="flex items-center">
        {[
            { bg: "bg-[#cf7a58]", label: "A" },
            { bg: "bg-[#3b4060]", label: "B" },
            { bg: "bg-[#6ea88a]", label: "C" },
        ].map((av, i) => (
            <div
                key={i}
                className={`w-8 h-8 rounded-full border-[2.5px] border-[#f5f0e8] flex items-center justify-center text-white text-[11px] font-bold font-sans ${av.bg}`}
                style={{ marginLeft: i === 0 ? 0 : "-8px", position: "relative", zIndex: 3 - i }}
            >
                {av.label}
            </div>
        ))}
        <div
            className="w-8 h-8 rounded-full border-[2.5px] border-[#f5f0e8] flex items-center justify-center text-white text-[9px] font-bold font-sans"
            style={{ marginLeft: "-8px", background: "linear-gradient(135deg,#e05500,#ff8800)", position: "relative", zIndex: 0 }}
        >
            +10k
        </div>
    </div>
);

const MembersCard: React.FC = () => (
    <div className="absolute right-[6%] bottom-[9%] bg-[#f5f0e8] rounded-2xl p-5 w-52 shadow-2xl" style={{ zIndex: 30 }}>
        <p className="text-[#1a0800] text-[13px] mb-2.5" style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.08em" }}>
            Our Members
        </p>
        <AvatarStack />
        <div className="flex items-end justify-between mt-4">
            <div>
                <p className="text-[#1a0800] leading-none" style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "2.8rem", letterSpacing: "0.02em" }}>
                    100K+
                </p>
                <p className="text-[#666] text-[11px] mt-0.5 font-sans">Monthly Listeners</p>
            </div>
            <div className="w-9 h-9 rounded-full flex items-center justify-center mb-1 flex-shrink-0" style={{ background: "linear-gradient(135deg,#bfaa90,#9a8870)" }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                    <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
            </div>
        </div>
    </div>
);

const Hero: React.FC = () => {
    return (
        <>
            <style>{fontStyle}</style>
            <section
                className="relative bg-[#1c0d07] w-full flex flex-col overflow-hidden"
                style={{ height: "120vh" }}
            >
                {/* HEADLINE 1 */}
                <div
                    className="relative px-9 z-10 flex-shrink-0"
                    style={{ paddingTop: "10rem" }}
                >
                    <h1
                        className="text-white uppercase flex justify-between w-full leading-[0.75]"
                        style={{
                            fontFamily: "'Bebas Neue', sans-serif",
                            fontSize: "clamp(6rem, 14vw, 12rem)",
                            letterSpacing: "-0.03em",
                        }}
                    >
                        <span>LISTEN TO</span>
                        <span className="text-[#e85d00]">SOME FUN</span>
                    </h1>

                    <h1
                        className="text-white uppercase leading-[0.95] mt-4"
                        style={{
                            fontFamily: "'Bebas Neue', sans-serif",
                            fontSize: "clamp(6rem, 14vw, 12rem)",
                            letterSpacing: "-0.03em",
                        }}
                    >
                        TALKS!
                    </h1>
                </div>

                <div className="absolute right-9 text-start z-10" style={{ top: "48%", transform: "translateY(-50%)" }}>
                    <p className="text-white uppercase leading-none" style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(1.4rem, 2.8vw, 2.5rem)", letterSpacing: "0.06em" }}>
                        EVERY VOICE
                    </p>
                    <p className="uppercase leading-tight" style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(1.4rem, 2.8vw, 2.5rem)", letterSpacing: "0.06em", color: "#e85d00" }}>
                        REALLY MATTERS !
                    </p>
                </div>

                <div
                    className="absolute pointer-events-none"
                    style={{ zIndex: 20, bottom: "", top: "-3.15%", left: "46%", transform: "translateX(-50%)", width: "clamp(770px, 30vw, 420px)", height: "75vh" }}
                >
                    <img
                        src={WOMAN_IMG}
                        alt="Podcast host"
                        className="w-full h-full object-cover object-top"
                        style={
                            {
                                height: "900px",
                                width: "1300px",
                            }
                        }
                    />
                </div>

                {/* flex spacer */}
                <div className="flex-grow" />

                {/* GRADIENT CARD */}
                <div className="relative mx-3.5 mb-3.5 rounded-[22px] overflow-hidden flex-shrink-0" style={{ height: "44vh", minHeight: "330px" }}>

                    {/* gradient bg */}
                    <div
                        className="absolute inset-0"
                        style={{
                            background: `
                                radial-gradient(ellipse at 0% 50%,  #7aaec0 0%, transparent 38%),
                                radial-gradient(ellipse at 20% 100%, #8870b4 0%, transparent 36%),
                                radial-gradient(ellipse at 75% 0%,   #d4845a 0%, transparent 42%),
                                radial-gradient(ellipse at 100% 65%, #c8a882 0%, transparent 40%),
                                radial-gradient(ellipse at 50% 50%,  #98baa8 0%, transparent 55%),
                                #a4bdb0
                            `,
                            zIndex: 0,
                        }}
                    />

                    {/* diagonal slices */}
                    {[
                        { left: "-4%", width: "25%", background: "linear-gradient(170deg,#7ab0cc,#4a8aac)", transform: "rotate(-8deg)", opacity: 0.7 },
                        { left: "17%", width: "18%", background: "linear-gradient(170deg,#9a88c4,#6860aa)", transform: "rotate(-8deg)", opacity: 0.5 },
                        { right: "2%", width: "35%", background: "linear-gradient(170deg,#d08050,#e89060)", transform: "rotate(-10deg)", opacity: 0.62 },
                        { right: "27%", width: "26%", background: "linear-gradient(170deg,#cad8b8,#a8c4a0)", transform: "rotate(-8deg)", opacity: 0.48 },
                    ].map((sl, i) => (
                        <div key={i} className="absolute" style={{ height: "200%", top: "-50%", transformOrigin: "top left", zIndex: 1, ...sl }} />
                    ))}

                    {/* tagline bottom-left */}
                    <div className="absolute bottom-5 left-5 max-w-[200px]" style={{ zIndex: 20 }}>
                        <p className="text-white/90 text-[11.5px] leading-relaxed font-sans">
                            Real voices, real laughs, and real stories — served fresh for your ears.
                        </p>
                    </div>

                    <MembersCard />
                </div>
            </section>
        </>
    );
};

export default Hero;