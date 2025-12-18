"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [profileTilt, setProfileTilt] = useState({ x: 0, y: 0 });

  const handleProfileMouseMove = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const offsetX = (e.clientX - rect.left) / rect.width - 0.5;
    const offsetY = (e.clientY - rect.top) / rect.height - 0.5;

    setProfileTilt({
      x: offsetX * 10,
      y: offsetY * -10,
    });
  };

  const resetProfileTilt = () => {
    setProfileTilt({ x: 0, y: 0 });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-indigo-50 text-zinc-900">
      <main className="relative max-w-4xl mx-auto px-4 py-8 md:py-12 space-y-8 md:space-y-10">
        {/* 전체 배경 장식 */}
        <div className="pointer-events-none absolute -top-40 -right-40 h-72 w-72 rounded-full bg-sky-200/50 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -left-32 h-72 w-72 rounded-full bg-indigo-200/50 blur-3xl" />

        {/* Profile Card */}
        <section
          className="relative bg-white/80 backdrop-blur-md rounded-3xl border border-zinc-200 shadow-lg px-5 py-6 md:px-8 md:py-8 overflow-hidden"
          onMouseMove={handleProfileMouseMove}
          onMouseLeave={resetProfileTilt}
        >
          {/* 카드 배경 이미지 & 빛 효과 */}
          <div className="pointer-events-none absolute inset-0">
            <Image
              src="/globe.svg"
              alt="빛나는 개발 배경"
              fill
              className="object-cover opacity-10"
              priority
            />
            <div
              className="absolute -top-32 -right-24 h-64 w-64 rounded-full bg-gradient-to-br from-sky-300/70 via-indigo-300/60 to-purple-300/40 blur-3xl mix-blend-screen"
              style={{
                transform: `translate3d(${profileTilt.x}px, ${profileTilt.y}px, 0)`,
                transition: "transform 120ms ease-out",
              }}
            />
          </div>

          <div className="relative text-sm font-medium text-zinc-600 mb-3">
            Profile : Title
          </div>
          <div className="relative h-px bg-zinc-200 mb-6" />

          <div className="relative flex flex-col md:flex-row gap-8">
            {/* Photo placeholder */}
            <div className="flex items-center justify-center">
              <div className="h-44 w-44 md:h-48 md:w-48 rounded-full border-2 border-zinc-300 bg-white/70 flex items-center justify-center text-lg font-medium text-zinc-500 shadow-sm">
                사진
              </div>
            </div>

            {/* Info */}
            <div className="flex-1 space-y-5 text-sm md:text-base text-zinc-800">
              <div className="space-y-2">
                <div className="font-semibold">_I AM</div>
                <div className="flex gap-2">
                  <span className="w-16 text-zinc-500">이름 :</span>
                  <span>이프로</span>
                </div>
                <div className="flex gap-2">
                  <span className="w-16 text-zinc-500">포지션 :</span>
                  <span>PM 서비스 기획 / FE Developer(jr)</span>
                </div>
              </div>

              <div className="h-px bg-zinc-200" />

              <div className="space-y-2">
                <div className="font-semibold">_Contact</div>
                <div className="flex gap-2">
                  <span className="w-16 text-zinc-500">Email :</span>
                  <span>leepro@naver.com</span>
                </div>
                <div className="flex gap-2">
                  <span className="w-16 text-zinc-500">Phone :</span>
                  <span>+082 - 1234-5678</span>
                </div>
              </div>

              <div className="h-px bg-zinc-200" />

              <div className="space-y-3">
                <div className="font-semibold">_Channel</div>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <span className="w-16 text-zinc-500">SNS :</span>
                    <div className="flex-1 h-9 rounded-md border border-zinc-200 bg-white/70 hover:border-sky-300 transition-colors" />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-16 text-zinc-500">GitHub :</span>
                    <div className="flex-1 h-9 rounded-md border border-zinc-200 bg-white/70 hover:border-sky-300 transition-colors" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Introduce Card */}
        <section className="bg-white/90 backdrop-blur-md rounded-3xl border border-zinc-200 shadow-sm px-5 py-6 md:px-8 md:py-7 hover:shadow-md transition-shadow">
          <div className="text-sm font-medium text-zinc-600 mb-3">
            Introduce
          </div>
          <div className="h-px bg-zinc-200 mb-5" />

          <div className="rounded-2xl border border-zinc-200 bg-sky-50/70 px-5 py-10 text-center text-sm md:text-base text-zinc-700">
            간단한 자기소개 및 인삿말을 적는 영역입니다.{" "}
            <br className="hidden md:inline" />
            실제 사용 시, 자신의 성향과 경험을 한두 문단 정도로 담아주세요.
          </div>
        </section>

        {/* Tech Skill Card */}
        <section className="bg-white/90 backdrop-blur-md rounded-3xl border border-zinc-200 shadow-sm px-5 py-6 md:px-8 md:py-7">
          <div className="text-sm font-medium text-zinc-600 mb-3">
            Tech Skill
          </div>
          <div className="h-px bg-zinc-200 mb-5" />

          <div className="rounded-2xl border border-zinc-200 bg-white/70 px-5 py-6">
            <div className="flex flex-wrap gap-3">
              {[
                {
                  label: "JS",
                  className:
                    "bg-amber-50 text-amber-800 border-amber-200 shadow-[0_0_0_1px_rgba(251,191,36,0.4)]",
                },
                {
                  label: "TS",
                  className:
                    "bg-sky-50 text-sky-800 border-sky-200 shadow-[0_0_0_1px_rgba(56,189,248,0.4)]",
                },
                {
                  label: "React",
                  className:
                    "bg-cyan-50 text-cyan-800 border-cyan-200 shadow-[0_0_0_1px_rgba(34,211,238,0.4)]",
                },
                {
                  label: "Tailwindcss",
                  className:
                    "bg-teal-50 text-teal-800 border-teal-200 shadow-[0_0_0_1px_rgba(45,212,191,0.4)]",
                },
                {
                  label: "Premierepro",
                  className:
                    "bg-violet-50 text-violet-800 border-violet-200 shadow-[0_0_0_1px_rgba(167,139,250,0.4)]",
                },
              ].map((skill) => (
                <span
                  key={skill.label}
                  className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-transform duration-150 hover:-translate-y-0.5 hover:shadow-md ${skill.className}`}
                >
                  <span className="h-2 w-2 rounded-full bg-current opacity-60" />
                  {skill.label}
                </span>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
