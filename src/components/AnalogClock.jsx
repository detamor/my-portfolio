import React, { useState, useEffect } from "react";

const AnalogClock = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const seconds = time.getSeconds();
    const minutes = time.getMinutes();
    const hours = time.getHours() % 12;

    const secondDeg = seconds * 6;
    const minuteDeg = minutes * 6 + seconds * 0.1;
    const hourDeg = hours * 30 + minutes * 0.5;

    const dayNames = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    const monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

    const day = dayNames[time.getDay()];
    const date = time.getDate();
    const month = monthNames[time.getMonth()];
    const year = time.getFullYear();

    const hourFormatted = String(time.getHours()).padStart(2, '0');
    const minuteFormatted = String(time.getMinutes()).padStart(2, '0');

    // Hour markers
    const markers = Array.from({ length: 12 }, (_, i) => {
        const angle = i * 30;
        const isMain = i % 3 === 0;
        return { angle, isMain, label: i === 0 ? 12 : i };
    });

    // Minute tick marks
    const ticks = Array.from({ length: 60 }, (_, i) => {
        const angle = i * 6;
        const isHour = i % 5 === 0;
        return { angle, isHour };
    });

    return (
        <div className="flex flex-col items-center gap-6">
            {/* Clock face */}
            <div className="relative w-56 h-56 md:w-64 md:h-64">
                <svg viewBox="0 0 200 200" className="w-full h-full">
                    {/* Outer ring */}
                    <circle cx="100" cy="100" r="96" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
                    <circle cx="100" cy="100" r="94" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />

                    {/* Inner subtle fill */}
                    <circle cx="100" cy="100" r="93" fill="rgba(255,255,255,0.015)" />

                    {/* Minute ticks */}
                    {ticks.map((tick, i) => {
                        const rad = (tick.angle - 90) * (Math.PI / 180);
                        const outerR = 90;
                        const innerR = tick.isHour ? 83 : 87;
                        return (
                            <line
                                key={i}
                                x1={100 + Math.cos(rad) * innerR}
                                y1={100 + Math.sin(rad) * innerR}
                                x2={100 + Math.cos(rad) * outerR}
                                y2={100 + Math.sin(rad) * outerR}
                                stroke={tick.isHour ? "rgba(255,255,255,0.3)" : "rgba(255,255,255,0.08)"}
                                strokeWidth={tick.isHour ? "1.5" : "0.5"}
                                strokeLinecap="round"
                            />
                        );
                    })}

                    {/* Hour numbers */}
                    {markers.map((marker) => {
                        const rad = (marker.angle - 90) * (Math.PI / 180);
                        const r = 74;
                        return (
                            <text
                                key={marker.angle}
                                x={100 + Math.cos(rad) * r}
                                y={100 + Math.sin(rad) * r + 1}
                                textAnchor="middle"
                                dominantBaseline="central"
                                fill={marker.isMain ? "rgba(255,255,255,0.5)" : "rgba(255,255,255,0.2)"}
                                fontSize={marker.isMain ? "10" : "8"}
                                fontFamily="monospace"
                                fontWeight={marker.isMain ? "500" : "300"}
                            >
                                {marker.label}
                            </text>
                        );
                    })}

                    {/* Hour hand */}
                    <line
                        x1="100" y1="100"
                        x2="100" y2="48"
                        stroke="rgba(255,255,255,0.7)"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        transform={`rotate(${hourDeg}, 100, 100)`}
                        style={{ transition: 'transform 0.5s cubic-bezier(0.4, 2.08, 0.55, 0.44)' }}
                    />

                    {/* Minute hand */}
                    <line
                        x1="100" y1="100"
                        x2="100" y2="30"
                        stroke="rgba(255,255,255,0.5)"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        transform={`rotate(${minuteDeg}, 100, 100)`}
                        style={{ transition: 'transform 0.3s ease' }}
                    />

                    {/* Second hand */}
                    <line
                        x1="100" y1="110"
                        x2="100" y2="25"
                        stroke="rgba(255,255,255,0.2)"
                        strokeWidth="0.75"
                        strokeLinecap="round"
                        transform={`rotate(${secondDeg}, 100, 100)`}
                    />

                    {/* Center dot */}
                    <circle cx="100" cy="100" r="3" fill="rgba(255,255,255,0.4)" />
                    <circle cx="100" cy="100" r="1.5" fill="rgba(255,255,255,0.7)" />
                </svg>
            </div>

            {/* Digital time + date */}
            <div className="text-center space-y-2">
                <div className="text-2xl font-mono text-zinc-400 tracking-[0.3em] font-light">
                    {hourFormatted}:{minuteFormatted}
                </div>
                <div className="flex items-center justify-center gap-3">
                    <span className="text-[10px] font-mono text-zinc-500 tracking-widest">{day}</span>
                    <span className="w-px h-3 bg-zinc-800"></span>
                    <span className="text-[10px] font-mono text-zinc-500 tracking-widest">{date} {month}</span>
                    <span className="w-px h-3 bg-zinc-800"></span>
                    <span className="text-[10px] font-mono text-zinc-500 tracking-widest">{year}</span>
                </div>
            </div>
        </div>
    );
};

export default AnalogClock;
