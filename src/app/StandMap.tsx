"use client";

import { useState } from "react";

type StallType = "S" | "M" | "L";

type Stall = {
  id: string;
  type: StallType;
  x: number;
  y: number;
  w: number;
  h: number;
};

const STALL_INFO: Record<
  StallType,
  { label: string; size: string; fill: string; stroke: string; count: number }
> = {
  S: { label: "Stor", size: "ca. 5 × 5 m", fill: "#fbd3d3", stroke: "#d97a7a", count: 16 },
  M: { label: "Mellem", size: "ca. 4 × 4 m", fill: "#d3d3ed", stroke: "#7272b8", count: 48 },
  L: { label: "Lille", size: "ca. 2,5 × 5 m eller 3,5 × 3 m", fill: "#fbe6a1", stroke: "#c69a2e", count: 34 },
};

function hRow(
  type: StallType,
  ids: string[],
  startX: number,
  y: number,
  w: number,
  h: number,
  gap = 2
): Stall[] {
  return ids.map((id, i) => ({ id, type, x: startX + i * (w + gap), y, w, h }));
}
function vRow(
  type: StallType,
  ids: string[],
  x: number,
  startY: number,
  w: number,
  h: number,
  gap = 2
): Stall[] {
  return ids.map((id, i) => ({ id, type, x, y: startY + i * (h + gap), w, h }));
}

const STALLS: Stall[] = [
  ...hRow("S", ["5", "4", "3", "2", "1"], 230, 185, 26, 20),
  ...hRow("S", ["70", "69", "68", "67", "66", "65", "64", "63"], 700, 215, 48, 28, 4),
  ...vRow("S", ["6", "7", "8"], 138, 255, 28, 28, 4),
  ...hRow("L", ["39A", "40A", "41A", "42A", "43A", "44A"], 440, 280, 30, 20, 2),
  ...hRow("M", ["36B", "23B"], 265, 300, 28, 20),
  ...hRow("M", ["35B", "24B"], 265, 322, 28, 20),
  ...hRow("M", ["34B", "25B"], 265, 344, 28, 20),
  ...hRow("M", ["37B", "38B"], 420, 312, 28, 20),
  ...hRow("M", ["33B", "26B"], 265, 440, 28, 20),
  ...hRow("M", ["32B", "27B"], 265, 462, 28, 20),
  ...hRow("M", ["31B", "28B"], 265, 484, 28, 20),
  ...hRow("M", ["30B", "29B"], 265, 506, 28, 20),
  ...vRow("M", ["9B", "10B"], 160, 470, 28, 20, 4),
  ...vRow("M", ["22B", "21B", "20B", "19B"], 418, 490, 30, 22, 4),
  { id: "11B", type: "M", x: 135, y: 635, w: 28, h: 22 },
  ...hRow("M", ["12B", "13B", "14B", "15B", "16B", "17B", "18B"], 205, 670, 30, 22, 3),
  ...vRow("M", ["45B", "46B", "47B", "48B", "49B"], 722, 325, 30, 22, 4),
  ...vRow("M", ["62B", "61B", "60B", "59B"], 1078, 355, 30, 22, 4),
  ...hRow("L", ["71A", "72A", "73A", "74A", "75A", "76A", "77A"], 775, 322, 38, 22, 2),
  ...hRow("L", ["84A", "83A", "82A", "81A", "80A", "79A", "78A"], 775, 348, 38, 22, 2),
  ...hRow("L", ["85A", "86A", "87A", "88A", "89A", "90A", "91A"], 775, 430, 38, 22, 2),
  ...hRow("L", ["98A", "97A", "96A", "95A", "94A", "93A", "92A"], 775, 456, 38, 22, 2),
  ...hRow("M", ["50B", "51B", "52B", "53B", "54B", "55B", "56B", "57B", "58B"], 740, 530, 35, 22, 3),
];

export default function StandMap() {
  const [selected, setSelected] = useState<Stall | null>(null);

  return (
    <div className="w-full">
      <div className="relative w-full rounded-2xl bg-[#f5f6f1] ring-1 ring-black/5 overflow-hidden">
        <svg
          viewBox="0 0 1200 760"
          className="w-full h-auto block"
          role="img"
          aria-label="Interaktivt kort over stadepladser p&aring; Gladsaxe Loppemarked"
        >
          <rect x="460" y="360" width="240" height="160" fill="#9ca3af" opacity="0.5" />
          <text x="580" y="445" textAnchor="middle" fontSize="14" fill="#fff" fontWeight="600">
            Haraldskirken
          </text>

          <rect x="460" y="490" width="35" height="180" fill="#e5e7eb" stroke="#9ca3af" strokeWidth="0.5" />

          <text x="140" y="175" fontSize="10" fill="#64748b" fontWeight="500">
            Indgang til Gladsaxe Kulturhus
          </text>

          <rect x="360" y="185" width="26" height="20" fill="#e5e7eb" stroke="#9ca3af" strokeWidth="0.6" rx="1.5" />
          <text x="373" y="200" textAnchor="middle" fontSize="11" fill="#111" fontWeight="700">
            H
          </text>

          <circle cx="180" cy="195" r="9" fill="#dc2626" />
          <text x="195" y="199" fontSize="10" fill="#111" fontWeight="500">
            Café-område
          </text>

          <circle cx="545" cy="620" r="11" fill="#dc2626" />
          <text x="562" y="625" fontSize="11" fill="#111" fontWeight="600">
            Information
          </text>

          {Array.from({ length: 7 }).map((_, i) => (
            <rect
              key={i}
              x={785 + i * 40}
              y={390}
              width={30}
              height={26}
              fill="#d1d5db"
              stroke="#9ca3af"
              strokeWidth="0.5"
              rx="2"
            />
          ))}

          {STALLS.map((stall) => {
            const info = STALL_INFO[stall.type];
            const isSelected = selected?.id === stall.id;
            return (
              <g
                key={stall.id}
                onPointerEnter={() => setSelected(stall)}
                onPointerDown={() => setSelected(stall)}
                onFocus={() => setSelected(stall)}
                tabIndex={0}
                className="cursor-pointer focus:outline-none"
              >
                <rect
                  x={stall.x}
                  y={stall.y}
                  width={stall.w}
                  height={stall.h}
                  fill={info.fill}
                  stroke={isSelected ? "#111" : info.stroke}
                  strokeWidth={isSelected ? 2 : 0.9}
                  rx="2"
                  style={{ transition: "stroke 0.15s, stroke-width 0.15s" }}
                />
                <text
                  x={stall.x + stall.w / 2}
                  y={stall.y + stall.h / 2 + 3.5}
                  textAnchor="middle"
                  fontSize={stall.w < 30 ? 8.5 : 10}
                  fill="#111"
                  fontWeight="600"
                  pointerEvents="none"
                  style={{ userSelect: "none" }}
                >
                  {stall.id}
                </text>
              </g>
            );
          })}
        </svg>

        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md rounded-xl border border-black/5 shadow-lg p-4 min-w-[220px] max-w-[260px]">
          {selected ? (
            <>
              <div className="text-xs uppercase tracking-widest text-accent font-semibold mb-1">
                Stadeplads
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">{selected.id}</div>
              <div className="text-sm text-muted mb-1">
                <span className="font-semibold text-foreground">{STALL_INFO[selected.type].label}</span>
              </div>
              <div className="text-xs text-muted mb-4">{STALL_INFO[selected.type].size}</div>
              <a
                href="https://booking.gladsaxeloppemarked.dk"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-accent hover:bg-accent-light text-white text-sm font-semibold px-4 py-2.5 rounded-full transition-colors"
              >
                Book plads {selected.id} &rarr;
              </a>
            </>
          ) : (
            <>
              <div className="text-xs uppercase tracking-widest text-accent font-semibold mb-2">
                Pladsoversigt
              </div>
              <div className="text-sm text-muted leading-relaxed">
                Hold musen over &mdash; eller tryk p&aring; &mdash; en plads for at se st&oslash;rrelse og booke.
              </div>
            </>
          )}
        </div>
      </div>

      <div className="flex flex-wrap gap-x-6 gap-y-3 mt-6">
        {(Object.keys(STALL_INFO) as StallType[]).map((t) => (
          <div key={t} className="flex items-center gap-2 text-sm">
            <span
              className="w-4 h-4 rounded-sm border"
              style={{ background: STALL_INFO[t].fill, borderColor: STALL_INFO[t].stroke }}
            />
            <span className="text-muted">
              <strong className="text-foreground">{STALL_INFO[t].label}</strong> &middot; {STALL_INFO[t].size} &middot; {STALL_INFO[t].count} stk.
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
