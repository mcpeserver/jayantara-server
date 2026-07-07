import React, { useState, useEffect } from "react";
import { Copy, Check, MessageSquare, ShieldAlert, Coins, HelpCircle } from "lucide-react";
import { siteConfig } from "../config/site";
import { DeveloperConfig } from "../types";

interface HeaderProps {
  onShowToast: (message: string) => void;
  devConfig: DeveloperConfig;
}

export default function Header({ onShowToast, devConfig }: HeaderProps) {
  const [copied, setCopied] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const copyServerIP = () => {
    navigator.clipboard.writeText(siteConfig.server.java.ip).then(() => {
      setCopied(true);
      onShowToast("IP Server Java & Bedrock berhasil disalin!");
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300">
      {/* Top Header Watermark (Promosi RAN DEV - Sangat Jelas & Mencolok) */}
      <div className="w-full bg-gradient-to-r from-brand-brown via-brand-gold to-brand-brown-light text-brand-charcoal py-2 px-4 text-center text-xs font-semibold tracking-wide shadow-md flex justify-center items-center gap-2 flex-wrap">
        <span className="animate-pulse bg-brand-charcoal text-white text-[9px] px-1.5 py-0.5 rounded uppercase font-black shrink-0">
          Promo
        </span>
        <span className="text-brand-charcoal leading-relaxed text-center">
          Developed by <strong className="font-extrabold">{devConfig.name}</strong> (WhatsApp: <a href={`https://wa.me/${devConfig.contact.whatsapp}`} target="_blank" rel="noopener noreferrer" className="underline font-bold hover:text-white transition-colors">{devConfig.contact.whatsapp}</a>) — Hubungi kami untuk pembuatan website profesional! Hubungi via <a href={devConfig.community.website} target="_blank" rel="noopener noreferrer" className="underline font-bold hover:text-white transition-colors">Website Komunitas</a> atau gabung <a href={devConfig.community.discord} target="_blank" rel="noopener noreferrer" className="underline font-bold hover:text-white transition-colors">Discord Developer</a>.
        </span>
      </div>

      {/* Main Navbar */}
      <nav
        className={`w-full transition-all duration-300 ${
          scrolled
            ? "bg-brand-charcoal/95 backdrop-blur-md py-3 shadow-lg border-b border-brand-brown/20"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo & Name */}
          <a href="#hero" className="flex items-center gap-3 group">
            <img
              src="/logo.png"
              alt="Jayantara Server Logo"
              referrerPolicy="no-referrer"
              className={`object-contain rounded-full border border-brand-gold/30 transition-all duration-300 ${
                scrolled ? "w-10 h-10" : "w-12 h-12"
              } group-hover:scale-105 group-hover:border-brand-gold`}
            />
            <div className="flex flex-col">
              <span className="font-display font-bold text-lg md:text-xl tracking-wider text-white flex items-center gap-1.5">
                {siteConfig.name.split(" ")[0]}
                <span className="text-brand-gold">{siteConfig.name.split(" ")[1] || "SERVER"}</span>
              </span>
            </div>
          </a>

          {/* Center Navigation Links */}
          <div className="hidden md:flex items-center gap-6 text-sm font-medium">
            <a href="#about" className="text-gray-300 hover:text-brand-gold transition-colors flex items-center gap-1.5">
              <Coins className="w-4 h-4 text-brand-gold" /> Tentang
            </a>
            <a href="#rules" className="text-gray-300 hover:text-brand-gold transition-colors flex items-center gap-1.5">
              <ShieldAlert className="w-4 h-4 text-brand-brown-light" /> Peraturan
            </a>
            <a href="#support" className="text-gray-300 hover:text-brand-gold transition-colors flex items-center gap-1.5">
              <HelpCircle className="w-4 h-4 text-brand-emerald" /> Donasi Rank
            </a>
            <a href="#connect" className="text-gray-300 hover:text-brand-gold transition-colors flex items-center gap-1.5">
              <MessageSquare className="w-4 h-4 text-brand-cyan" /> Komunitas
            </a>
          </div>

          {/* Quick Copy IP Actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={copyServerIP}
              id="header_copy_ip_btn"
              className="flex items-center gap-2 bg-brand-moss-medium/80 border border-brand-brown/30 hover:border-brand-gold hover:bg-brand-brown/20 text-white px-3.5 py-1.5 rounded-lg text-xs md:text-sm font-mono font-semibold transition-all duration-300 shadow-md cursor-pointer group active:scale-95"
            >
              <span className="hidden sm:inline text-gray-400 select-none">IP:</span>
              <span className="text-brand-gold group-hover:text-brand-gold-glow">{siteConfig.server.java.ip}</span>
              {copied ? (
                <Check className="w-4 h-4 text-brand-emerald animate-bounce" />
              ) : (
                <Copy className="w-4 h-4 text-brand-gold transition-transform group-hover:scale-110" />
              )}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
