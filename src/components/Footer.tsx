import React from "react";
import { MessageSquare, Heart, Shield, ArrowUp } from "lucide-react";
import { siteConfig } from "../config/site";
import { DeveloperConfig } from "../types";

interface FooterProps {
  devConfig: DeveloperConfig;
}

export default function Footer({ devConfig }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-brand-charcoal border-t border-brand-brown/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-gray-800/60">
          
          {/* Left Brand Identity */}
          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Jayantara Server"
              referrerPolicy="no-referrer"
              className="w-10 h-10 object-contain rounded-full border border-brand-brown/40"
            />
            <div className="flex flex-col">
              <span className="font-display font-bold text-sm tracking-widest text-white uppercase">
                {siteConfig.name}
              </span>
              <span className="text-[10px] text-gray-500 font-mono">
                {siteConfig.server.type}
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-gray-400 font-medium">
            <a href="#about" className="hover:text-brand-gold transition-colors">Tentang Server</a>
            <a href="#rules" className="hover:text-brand-gold transition-colors">Kitab Aturan</a>
            <a href="#support" className="hover:text-brand-gold transition-colors">Dukungan Rank</a>
            <a href="#connect" className="hover:text-brand-gold transition-colors">Hub Komunitas</a>
          </div>
        </div>

        {/* Bottom copyright & Watermark credits */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          
          {/* Copyright description */}
          <div className="text-gray-500 font-mono text-center md:text-left">
            <p>© {currentYear} {siteConfig.name} ({siteConfig.domain}). All rights reserved.</p>
            <p className="text-[10px] text-gray-600 mt-1">Minecraft is a trademark of Mojang Synergies AB. This server is not affiliated with Mojang.</p>
          </div>

          {/* Developer Watermark (Ran Dev - DI FOOTER - Wajib dan Tegas) */}
          <div className="flex flex-col items-center md:items-end gap-1.5 bg-brand-charcoal-light border border-brand-brown/20 px-4 py-2.5 rounded-xl text-gray-400 font-mono shadow-md">
            <div className="flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-brand-gold animate-pulse" />
              <span>
                Website dikembangkan oleh{" "}
                <a
                  href={`https://wa.me/${devConfig.contact.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-gold hover:text-brand-gold-glow font-bold underline transition-colors"
                >
                  {devConfig.name}
                </a>
              </span>
            </div>
            <div className="flex items-center gap-3 text-[10px] text-gray-500">
              <a href={devConfig.community.website} target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold hover:underline transition-colors">{devConfig.community.name}</a>
              <span>•</span>
              <a href={devConfig.community.discord} target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold hover:underline transition-colors">Discord Dev</a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
