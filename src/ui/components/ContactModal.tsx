"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { IoCloseOutline, IoSendOutline } from "react-icons/io5";

/* ── Types ─────────────────────────────────────────── */

type ContactModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

type FormState = "idle" | "sending" | "success" | "error";

/* ── Component ─────────────────────────────────────── */

export const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  const [formState, setFormState] = useState<FormState>("idle");
  const formRef = useRef<HTMLFormElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);

  /* Focus first field on open */
  useEffect(() => {
    if (isOpen) {
      setFormState("idle");
      setTimeout(() => nameRef.current?.focus(), 200);
    }
  }, [isOpen]);

  /* Close on Escape */
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  /* Submit handler — uses FormSubmit.co (no signup needed) */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setFormState("sending");

    const data = new FormData(formRef.current);
    const payload = {
      name: data.get("name"),
      email: data.get("email"),
      type: data.get("type"),
      message: data.get("message"),
      _subject: `Portafolio · ${data.get("type")} — ${data.get("name")}`,
    };

    try {
      const res = await fetch(
        "https://formsubmit.co/ajax/jorianom@unal.edu.co",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      if (res.ok) {
        setFormState("success");
        formRef.current.reset();
        setTimeout(onClose, 2000);
      } else {
        setFormState("error");
      }
    } catch {
      setFormState("error");
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          {/* Backdrop — translucent blur */}
          <motion.div
            className="absolute inset-0 bg-black/70 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="relative w-full max-w-lg rounded-2xl border border-white/10 bg-surface shadow-2xl shadow-black/50 overflow-hidden"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/5">
              <div>
                <h3 className="text-lg font-bold text-white">Contáctame</h3>
                <p className="text-xs text-slate-500 font-mono mt-0.5">
                  Freelance · Ofertas · Colaboración
                </p>
              </div>
              <button
                onClick={onClose}
                className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-white/10
                           text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                <IoCloseOutline size={20} />
              </button>
            </div>

            {/* Form */}
            <form ref={formRef} onSubmit={handleSubmit} className="p-6 flex flex-col gap-4">
              {/* Name */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="contact-name" className="text-xs font-mono uppercase tracking-widest text-slate-500">
                  Nombre
                </label>
                <input
                  ref={nameRef}
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  placeholder="Tu nombre"
                  className="rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white
                             placeholder:text-slate-600 outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30
                             transition-all"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="contact-email" className="text-xs font-mono uppercase tracking-widest text-slate-500">
                  Correo electrónico
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  placeholder="correo@ejemplo.com"
                  className="rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white
                             placeholder:text-slate-600 outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30
                             transition-all"
                />
              </div>

              {/* Type */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="contact-type" className="text-xs font-mono uppercase tracking-widest text-slate-500">
                  Tipo de contacto
                </label>
                <select
                  id="contact-type"
                  name="type"
                  defaultValue="freelance"
                  className="rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white
                             outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30
                             transition-all cursor-pointer appearance-none"
                >
                  <option value="freelance" className="bg-surface">Proyecto Freelance</option>
                  <option value="oferta" className="bg-surface">Oferta Laboral</option>
                  <option value="colaboracion" className="bg-surface">Colaboración</option>
                  <option value="otro" className="bg-surface">Otro</option>
                </select>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="contact-message" className="text-xs font-mono uppercase tracking-widest text-slate-500">
                  Mensaje
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={3}
                  placeholder="Cuéntame brevemente sobre tu proyecto..."
                  className="rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white
                             placeholder:text-slate-600 outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30
                             transition-all resize-none"
                />
              </div>

              {/* Submit */}
              <motion.button
                type="submit"
                disabled={formState === "sending" || formState === "success"}
                whileTap={{ scale: 0.97 }}
                className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3
                           text-sm font-bold text-white transition-all hover:bg-primary/90
                           disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              >
                {formState === "idle" && (
                  <>
                    Enviar mensaje <IoSendOutline size={16} />
                  </>
                )}
                {formState === "sending" && (
                  <span className="flex items-center gap-2">
                    <span className="h-4 w-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                    Enviando...
                  </span>
                )}
                {formState === "success" && "✓ Mensaje enviado"}
                {formState === "error" && "Error — Intenta de nuevo"}
              </motion.button>

              {formState === "error" && (
                <p className="text-xs text-red-400 text-center font-mono">
                  No se pudo enviar. Intenta de nuevo o escríbeme a jjrianom@unal.edu.co
                </p>
              )}
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
