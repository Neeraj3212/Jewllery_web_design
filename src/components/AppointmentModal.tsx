import React, { useState } from 'react';
import { X, Calendar, MapPin, CheckCircle2, Sparkles } from 'lucide-react';
import { AppointmentFormData } from '../types';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AppointmentModal({ isOpen, onClose }: AppointmentModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<AppointmentFormData>({
    fullName: '',
    email: '',
    phone: '',
    location: 'Paris — 12 Place Vendôme',
    preferredDate: '',
    interest: 'Signature Solitaire Rings',
    notes: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const resetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fade-in select-none">
      <div className="relative w-full max-w-2xl bg-[#09090b] border border-[#D4AF37]/40 rounded-3xl p-6 sm:p-10 shadow-[0_0_80px_rgba(212,175,55,0.2)] text-white">
        {/* Close button */}
        <button
          onClick={resetAndClose}
          className="absolute top-6 right-6 p-2 rounded-full border border-white/10 hover:border-[#D4AF37] text-white/60 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-12 space-y-6">
            <div className="w-16 h-16 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37] flex items-center justify-center mx-auto text-[#D4AF37]">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <span className="text-[10px] uppercase tracking-[0.35em] text-[#D4AF37] font-semibold block">
              Reservation Confirmed
            </span>
            <h3 className="font-serif-luxury text-3xl sm:text-4xl text-white">
              We Await Your Salon Visit
            </h3>
            <p className="text-xs sm:text-sm text-white/70 font-sans tracking-wider leading-relaxed max-w-md mx-auto">
              Our Senior Concierge will contact you shortly via email/phone to confirm your private viewing details at our {formData.location} salon.
            </p>
            <button
              onClick={resetAndClose}
              className="px-8 py-3 rounded-full bg-gold-gradient text-black font-semibold text-xs uppercase tracking-[0.2em]"
            >
              Return To Atelier
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-[#D4AF37]">
                <Sparkles className="w-4 h-4" />
                <span className="text-[10px] uppercase tracking-[0.35em] font-medium">
                  Exclusive Invitation
                </span>
              </div>
              <h3 className="font-serif-luxury text-3xl sm:text-4xl text-white font-light">
                Book a Private Salon Viewing
              </h3>
              <p className="text-xs text-white/60 font-sans tracking-wider">
                Enjoy a private, one-on-one consultation with our master gemologists in a secluded VIP salon suite.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 pt-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] uppercase tracking-widest text-white/50 block mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Lady Vivienne Vance"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs text-white placeholder:text-white/30 focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>

                <div>
                  <label className="text-[10px] uppercase tracking-widest text-white/50 block mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. vivienne@vance.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs text-white placeholder:text-white/30 focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] uppercase tracking-widest text-white/50 block mb-1">
                    Phone / Whatsapp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs text-white placeholder:text-white/30 focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>

                <div>
                  <label className="text-[10px] uppercase tracking-widest text-white/50 block mb-1">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] uppercase tracking-widest text-white/50 block mb-1">
                    Atelier Location
                  </label>
                  <select
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#121215] border border-white/10 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                  >
                    <option value="Paris — 12 Place Vendôme">Paris — 12 Place Vendôme</option>
                    <option value="Milan — Via Montenapoleone 8">Milan — Via Montenapoleone 8</option>
                    <option value="New York — 712 Fifth Avenue">New York — 712 Fifth Avenue</option>
                    <option value="Tokyo — 5-7-1 Ginza">Tokyo — 5-7-1 Ginza</option>
                  </select>
                </div>

                <div>
                  <label className="text-[10px] uppercase tracking-widest text-white/50 block mb-1">
                    Primary Collection Interest
                  </label>
                  <select
                    value={formData.interest}
                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#121215] border border-white/10 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                  >
                    <option value="Signature Solitaire Rings">Signature Solitaire Rings</option>
                    <option value="High Fine Necklaces">High Fine Necklaces</option>
                    <option value="Sculpted Earrings">Sculpted Earrings</option>
                    <option value="Bespoke Custom Commission">Bespoke Custom Commission</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-[10px] uppercase tracking-widest text-white/50 block mb-1">
                  Special Requests / Ring Sizes
                </label>
                <textarea
                  rows={2}
                  placeholder="Share any preferred diamond cuts, ring sizes, or custom requests..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs text-white placeholder:text-white/30 focus:outline-none focus:border-[#D4AF37]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-full bg-gold-gradient text-black font-semibold uppercase tracking-[0.2em] text-xs shadow-xl shadow-[#D4AF37]/20 hover:opacity-95 transition-opacity flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Request Private Viewing Appointment</span>
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
