"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

interface CredlyBadge {
  id: string;
  name: string;
  issuer: string;
  imageUrl: string;
  issuedAt: string;
  publicUrl: string;
}

const CREDLY_USERNAME = "john-jairo-riano-martinez";
const CREDLY_URL = `https://www.credly.com/users/${CREDLY_USERNAME}/badges.json`;
const ITEMS_PER_PAGE = 4;
const AUTO_PLAY_MS = 8000;

/* Proxies CORS – se prueban en orden hasta que uno responda */
const CORS_PROXIES = [
  (url: string) => `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`,
  (url: string) => `https://corsproxy.io/?url=${encodeURIComponent(url)}`,
];

/* Datos estáticos de respaldo en caso de que todos los proxies fallen */
const FALLBACK_BADGES: CredlyBadge[] = [
  { id: "ec4138ee-556c-4016-9fad-d50db6cf2f5a", name: "Artificial Intelligence Fundamentals", issuer: "IBM SkillsBuild", imageUrl: "https://images.credly.com/images/82b908e1-fdcd-4785-9d32-97f11ccbcf08/image.png", issuedAt: "2025-11-17", publicUrl: "https://www.credly.com/badges/ec4138ee-556c-4016-9fad-d50db6cf2f5a/public_url" },
  { id: "320d753b-6621-4083-863a-4967430e7aef", name: "GitHub Foundations", issuer: "GitHub", imageUrl: "https://images.credly.com/images/024d0122-724d-4c5a-bd83-cfe3c4b7a073/image.png", issuedAt: "2025-03-26", publicUrl: "https://www.credly.com/badges/320d753b-6621-4083-863a-4967430e7aef/public_url" },
  { id: "bb28e22a-5f36-4ce6-bd30-1c089897c6f9", name: "Google Cloud Computing Foundations Certificate", issuer: "Google Cloud", imageUrl: "https://images.credly.com/images/4dda8ae4-99ee-476c-bca3-6f0adbab42fe/image.png", issuedAt: "2024-06-18", publicUrl: "https://www.credly.com/badges/bb28e22a-5f36-4ce6-bd30-1c089897c6f9/public_url" },
  { id: "25c3b1c0-f3e3-45fd-87fc-dc899d952b13", name: "AWS Academy Graduate - Cloud Foundations", issuer: "Amazon Web Services", imageUrl: "https://images.credly.com/images/e3541a0c-dd4a-4820-8052-5001006efc85/blob", issuedAt: "2025-02-28", publicUrl: "https://www.credly.com/badges/25c3b1c0-f3e3-45fd-87fc-dc899d952b13/public_url" },
  { id: "dbf4a20f-95a3-48c0-98f9-d820c2317135", name: "Desarrollo de aplicaciones con Python", issuer: "Coursera", imageUrl: "https://images.credly.com/images/12bcefef-29f0-4561-8e86-0cebf8d3a010/LA.png", issuedAt: "2025-02-08", publicUrl: "https://www.credly.com/badges/dbf4a20f-95a3-48c0-98f9-d820c2317135/public_url" },
  { id: "9db911e5-3893-43dc-a256-fcbe90abf60c", name: "Introduction to Cybersecurity", issuer: "Cisco", imageUrl: "https://images.credly.com/images/af8c6b4e-fc31-47c4-8dcb-eb7a2065dc5b/I2CS__1_.png", issuedAt: "2024-12-12", publicUrl: "https://www.credly.com/badges/9db911e5-3893-43dc-a256-fcbe90abf60c/public_url" },
  { id: "dd48d803-774f-4af9-bb6e-d5c098982866", name: "Prompt Design in Vertex AI Skill Badge", issuer: "Google Cloud", imageUrl: "https://images.credly.com/images/cef82b2e-970a-4318-8e59-c3e26b7f5c19/image.png", issuedAt: "2025-04-28", publicUrl: "https://www.credly.com/badges/dd48d803-774f-4af9-bb6e-d5c098982866/public_url" },
  { id: "74f72a19-0f9c-4599-9a42-b201ba705edf", name: "Applied Data Science with Python - Level 2", issuer: "IBM", imageUrl: "https://images.credly.com/images/90b92982-adc0-4826-afeb-455be8609899/blob", issuedAt: "2022-04-19", publicUrl: "https://www.credly.com/badges/74f72a19-0f9c-4599-9a42-b201ba705edf/public_url" },
];

function parseCredlyResponse(raw: string): CredlyBadge[] {
  const parsed = JSON.parse(raw);
  return parsed.data.map((item: Record<string, unknown>) => {
    const issuerObj = item.issuer as {
      entities: { primary: boolean; entity: { name: string } }[];
    };
    const template = item.badge_template as { name: string };
    return {
      id: item.id,
      name: template.name,
      issuer: issuerObj.entities
        .filter((e) => e.primary)
        .map((e) => e.entity.name)
        .join(", "),
      imageUrl: item.image_url as string,
      issuedAt: item.issued_at_date as string,
      publicUrl: `https://www.credly.com/badges/${item.id}/public_url`,
    };
  });
}

export default function Badge() {
  const [badges, setBadges] = useState<CredlyBadge[]>([]);
  const [loading, setLoading] = useState(true);
  const [[page, direction], setPage] = useState([0, 1]);

  useEffect(() => {
    const fetchBadges = async () => {
      for (const buildProxy of CORS_PROXIES) {
        try {
          const res = await fetch(buildProxy(CREDLY_URL), {
            signal: AbortSignal.timeout(8000),
          });
          if (!res.ok) continue;
          const data = await res.json();
          const contents =
            typeof data.contents === "string" ? data.contents : JSON.stringify(data);
          const mapped = parseCredlyResponse(contents);
          if (mapped.length > 0) {
            setBadges(mapped);
            setLoading(false);
            return;
          }
        } catch {
          /* proxy falló, intentar siguiente */
        }
      }
      /* Si todos los proxies fallaron, usar datos estáticos */
      console.warn("CORS proxies failed – using static badge data");
      setBadges(FALLBACK_BADGES);
      setLoading(false);
    };

    fetchBadges();
  }, []);

  const totalPages = Math.ceil(badges.length / ITEMS_PER_PAGE);

  const paginate = useCallback(
    (dir: number) => {
      setPage(([prev]) => {
        const next = (prev + dir + totalPages) % totalPages;
        return [next, dir];
      });
    },
    [totalPages]
  );

  // Auto-slide
  useEffect(() => {
    if (totalPages <= 1) return;
    const timer = setInterval(() => paginate(1), AUTO_PLAY_MS);
    return () => clearInterval(timer);
  }, [paginate, totalPages]);

  const currentBadges = badges.slice(
    page * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE + ITEMS_PER_PAGE
  );

  const pageVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? "40%" : "-40%",
      opacity: 0,
      scale: 0.95,
    }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (dir: number) => ({
      x: dir > 0 ? "-40%" : "40%",
      opacity: 0,
      scale: 0.95,
    }),
  };

  return (
    <section className="py-10 border-t border-white/5">
      <div className="flex flex-col gap-10">
        {/* Header: título + controles */}
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-black text-white">
              Certificaciones &amp; Insignias
            </h2>
            {!loading && (
              <p className="text-xs text-slate-500 font-mono mt-2">
                {badges.length} credenciales verificadas
              </p>
            )}
          </div>

          {totalPages > 1 && (
            <div className="flex items-center gap-3">
              <button
                onClick={() => paginate(-1)}
                className="h-10 w-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all"
                aria-label="Página anterior"
              >
                <IoChevronBack className="h-4 w-4 text-white" />
              </button>
              <button
                onClick={() => paginate(1)}
                className="h-10 w-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all"
                aria-label="Página siguiente"
              >
                <IoChevronForward className="h-4 w-4 text-white" />
              </button>
            </div>
          )}
        </div>

        {loading ? (
          /* Skeleton */
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {Array.from({ length: ITEMS_PER_PAGE }).map((_, i) => (
              <div key={i} className="rounded-2xl bg-white/5 p-[2px]">
                <div className="rounded-[calc(1rem-1px)] bg-bg-dark p-6 h-56 animate-pulse" />
              </div>
            ))}
          </div>
        ) : (
          /* Carousel gallery */
          <div className="relative overflow-hidden min-h-[280px]">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={page}
                custom={direction}
                variants={pageVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.45, ease: [0.23, 1, 0.32, 1] }}
                className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5"
              >
                {currentBadges.map((badge, idx) => (
                  <motion.a
                    key={badge.id}
                    href={badge.publicUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.08, duration: 0.35 }}
                    className="group rounded-2xl bg-primary/80 p-[2px] hover:bg-primary transition-colors shadow-lg hover:shadow-primary/20"
                  >
                    <div className="rounded-[calc(1rem-1px)] bg-bg-dark p-5 flex flex-col items-center gap-3 text-center h-full border border-white/10 group-hover:border-primary/30 transition-colors">
                      <div className="relative">
                        <img
                          src={badge.imageUrl}
                          alt={badge.name}
                          width={100}
                          height={100}
                          className="object-contain group-hover:scale-110 transition-transform duration-500"
                          loading="lazy"
                        />
                      </div>
                      <div className="flex flex-col gap-1">
                        <h4 className="font-bold text-xs sm:text-sm text-white leading-tight line-clamp-2">
                          {badge.name}
                        </h4>
                        <p className="text-[10px] text-slate-500 uppercase tracking-widest font-mono">
                          {badge.issuer}
                        </p>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        )}

        {/* Page dots */}
        {totalPages > 1 && !loading && (
          <div className="flex justify-center gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage([i, i > page ? 1 : -1])}
                aria-label={`Ir a página ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === page
                    ? "w-6 bg-primary"
                    : "w-2 bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
