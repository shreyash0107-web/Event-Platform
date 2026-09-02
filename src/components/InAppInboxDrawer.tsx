"use client";
import { useState, useEffect } from "react";
import { Mail, X, CheckCircle, ExternalLink, Calendar, RefreshCw } from "lucide-react";

interface EmailRecord {
  id: string;
  toEmail: string;
  userName: string;
  subject: string;
  ticketCode: string;
  tier: string;
  amount: number;
  status: string;
  sentAt: string;
}

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export function InAppInboxDrawer({ isOpen, onClose }: Props) {
  const [emails, setEmails] = useState<EmailRecord[]>([]);
  const [selectedEmail, setSelectedEmail] = useState<EmailRecord | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchEmails = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/emails/recent");
      if (res.ok) {
        const data = await res.json();
        setEmails(data.emails || []);
        if (data.emails && data.emails.length > 0 && !selectedEmail) {
          setSelectedEmail(data.emails[0]);
        }
      }
    } catch (err) {
      console.error("Failed to fetch email logs", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      fetchEmails();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-md p-4 animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl w-full max-w-4xl max-h-[85vh] flex flex-col overflow-hidden">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/90">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                Simulated Email Inbox & Receipt Viewer
                <span className="text-xs bg-emerald-500/20 text-emerald-400 font-medium px-2 py-0.5 rounded-full border border-emerald-500/30">
                  Live Dispatch Stream
                </span>
              </h3>
              <p className="text-xs text-slate-400">
                Inspect automatically generated confirmation emails with digital ticket passes.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={fetchEmails}
              className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
              title="Refresh inbox"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin text-indigo-400" : ""}`} />
            </button>
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body: Split view (List on left, Preview on right) */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-12 overflow-hidden min-h-[400px]">
          {/* Left Column: Email List */}
          <div className="md:col-span-5 border-r border-slate-800 overflow-y-auto p-3 space-y-2 bg-slate-950/40">
            {emails.length === 0 ? (
              <div className="text-center py-12 px-4 text-slate-500">
                <Mail className="w-8 h-8 mx-auto mb-2 opacity-40" />
                <p className="text-sm font-medium">No sent emails logged yet.</p>
                <p className="text-xs mt-1">Complete a workshop ticket checkout to trigger automatic confirmation email.</p>
              </div>
            ) : (
              emails.map((email) => (
                <div
                  key={email.id}
                  onClick={() => setSelectedEmail(email)}
                  className={`p-3.5 rounded-xl border transition-all cursor-pointer ${
                    selectedEmail?.id === email.id
                      ? "bg-indigo-600/15 border-indigo-500/50 shadow-lg"
                      : "bg-slate-900/60 border-slate-800 hover:border-slate-700"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-semibold text-slate-300 truncate max-w-[180px]">
                      {email.toEmail}
                    </span>
                    <span className="text-[10px] text-slate-500">
                      {new Date(email.sentAt).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                    </span>
                  </div>
                  <h4 className="text-xs font-bold text-white truncate mb-1">
                    {email.subject}
                  </h4>
                  <div className="flex items-center justify-between text-[11px] text-slate-400">
                    <span className="bg-slate-800 text-indigo-300 font-mono px-1.5 py-0.5 rounded text-[10px]">
                      {email.ticketCode}
                    </span>
                    <span className="text-emerald-400 font-semibold">
                      ${(email.amount / 100).toFixed(2)}
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Right Column: HTML Email Preview */}
          <div className="md:col-span-7 p-6 overflow-y-auto bg-slate-900">
            {selectedEmail ? (
              <div className="space-y-6">
                <div className="border-b border-slate-800 pb-4">
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                    <span>To: <strong className="text-slate-200">{selectedEmail.userName} ({selectedEmail.toEmail})</strong></span>
                    <span>{new Date(selectedEmail.sentAt).toLocaleString()}</span>
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">{selectedEmail.subject}</h3>
                  <div className="flex items-center gap-2 text-xs">
                    <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded-full flex items-center gap-1 font-medium">
                      <CheckCircle className="w-3 h-3" /> Status: {selectedEmail.status}
                    </span>
                    <span className="bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 px-2 py-0.5 rounded-full font-medium">
                      Tier: {selectedEmail.tier}
                    </span>
                  </div>
                </div>

                {/* Email Body Preview Card */}
                <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 space-y-4">
                  <div className="text-center p-4 rounded-lg bg-gradient-to-r from-indigo-900/40 to-purple-900/40 border border-indigo-500/30">
                    <span className="text-[10px] uppercase tracking-widest font-bold text-indigo-400 block mb-1">
                      Official Workshop Ticket Pass
                    </span>
                    <div className="font-mono text-2xl font-black text-cyan-400 tracking-wider">
                      {selectedEmail.ticketCode}
                    </div>
                  </div>

                  <div className="space-y-2 text-xs text-slate-300">
                    <div className="flex justify-between py-1 border-b border-slate-800">
                      <span className="text-slate-400">Event:</span>
                      <span className="font-semibold text-white">DevPulse 2026 Masterclass</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-800">
                      <span className="text-slate-400">Recipient Name:</span>
                      <span className="font-semibold text-white">{selectedEmail.userName}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-800">
                      <span className="text-slate-400">Price Paid:</span>
                      <span className="font-semibold text-emerald-400">${(selectedEmail.amount / 100).toFixed(2)} USD</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="text-slate-400">Date & Location:</span>
                      <span className="font-semibold text-white text-right">Sept 26, 2026 • TP Ganesan Auditorium, SRM University</span>
                    </div>
                  </div>

                  <div className="pt-2 text-center">
                    <a
                      href="/tickets"
                      onClick={onClose}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-400 hover:text-indigo-300 underline"
                    >
                      View Digital Pass in Portal <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-20 text-slate-500">
                <p className="text-sm">Select an email from the left sidebar to preview content.</p>
              </div>
            )}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
          <span>DevPulse Automated Email Engine (Nodemailer / SQLite Logged)</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-colors font-medium"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
