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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/90 backdrop-blur-md backdrop-blur-md p-4 animate-in fade-in duration-200">
      <div className="bg-white border border-gray-200 rounded-2xl shadow-xl shadow-gray-200/50 w-full max-w-4xl max-h-[85vh] flex flex-col overflow-hidden">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 bg-white/90">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600 border border-blue-200">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                Simulated Email Inbox & Receipt Viewer
                <span className="text-xs bg-emerald-500/20 text-emerald-600 font-medium px-2 py-0.5 rounded-full border border-emerald-500/30">
                  Live Dispatch Stream
                </span>
              </h3>
              <p className="text-xs text-gray-500">
                Inspect automatically generated confirmation emails with digital ticket passes.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={fetchEmails}
              className="p-2 text-gray-500 hover:text-gray-900 rounded-lg hover:border-gray-200 transition-colors"
              title="Refresh inbox"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin text-blue-600" : ""}`} />
            </button>
            <button
              onClick={onClose}
              className="p-2 text-gray-500 hover:text-gray-900 rounded-lg hover:border-gray-200 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body: Split view (List on left, Preview on right) */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-12 overflow-hidden min-h-[400px]">
          {/* Left Column: Email List */}
          <div className="md:col-span-5 border-r border-gray-200 overflow-y-auto p-3 space-y-2 bg-gray-50/40">
            {emails.length === 0 ? (
              <div className="text-center py-12 px-4 text-gray-400">
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
                      ? "bg-orange-600/15 border-orange-500/50 shadow-lg"
                      : "bg-white border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-semibold text-gray-600 truncate max-w-[180px]">
                      {email.toEmail}
                    </span>
                    <span className="text-[10px] text-gray-400">
                      {new Date(email.sentAt).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                    </span>
                  </div>
                  <h4 className="text-xs font-bold text-gray-900 truncate mb-1">
                    {email.subject}
                  </h4>
                  <div className="flex items-center justify-between text-[11px] text-gray-500">
                    <span className="border-gray-200 text-orange-300 font-mono px-1.5 py-0.5 rounded text-[10px]">
                      {email.ticketCode}
                    </span>
                    <span className="text-emerald-600 font-semibold">
                      ${(email.amount / 100).toFixed(2)}
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Right Column: HTML Email Preview */}
          <div className="md:col-span-7 p-6 overflow-y-auto bg-white">
            {selectedEmail ? (
              <div className="space-y-6">
                <div className="border-b border-gray-200 pb-4">
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
                    <span>To: <strong className="text-gray-800">{selectedEmail.userName} ({selectedEmail.toEmail})</strong></span>
                    <span>{new Date(selectedEmail.sentAt).toLocaleString()}</span>
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-2">{selectedEmail.subject}</h3>
                  <div className="flex items-center gap-2 text-xs">
                    <span className="bg-emerald-500/20 text-emerald-600 border border-emerald-500/30 px-2 py-0.5 rounded-full flex items-center gap-1 font-medium">
                      <CheckCircle className="w-3 h-3" /> Status: {selectedEmail.status}
                    </span>
                    <span className="bg-orange-500/20 text-orange-300 border border-orange-500/30 px-2 py-0.5 rounded-full font-medium">
                      Tier: {selectedEmail.tier}
                    </span>
                  </div>
                </div>

                {/* Email Body Preview Card */}
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 space-y-4">
                  <div className="text-center p-4 rounded-lg bg-gradient-to-r from-orange-900/40 to-purple-900/40 border border-orange-500/30">
                    <span className="text-[10px] uppercase tracking-widest font-bold text-blue-600 block mb-1">
                      Official Workshop Ticket Pass
                    </span>
                    <div className="font-mono text-2xl font-black text-indigo-600 tracking-wider">
                      {selectedEmail.ticketCode}
                    </div>
                  </div>

                  <div className="space-y-2 text-xs text-gray-600">
                    <div className="flex justify-between py-1 border-b border-gray-200">
                      <span className="text-gray-500">Event:</span>
                      <span className="font-semibold text-gray-900">DevPulse 2026 Masterclass</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-gray-200">
                      <span className="text-gray-500">Recipient Name:</span>
                      <span className="font-semibold text-gray-900">{selectedEmail.userName}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-gray-200">
                      <span className="text-gray-500">Price Paid:</span>
                      <span className="font-semibold text-emerald-600">${(selectedEmail.amount / 100).toFixed(2)} USD</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="text-gray-500">Date & Location:</span>
                      <span className="font-semibold text-gray-900 text-right">Sept 26, 2026 • TP Ganesan Auditorium, SRM University</span>
                    </div>
                  </div>

                  <div className="pt-2 text-center">
                    <a
                      href="/tickets"
                      onClick={onClose}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-orange-300 underline"
                    >
                      View Digital Pass in Portal <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-20 text-gray-400">
                <p className="text-sm">Select an email from the left sidebar to preview content.</p>
              </div>
            )}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 bg-gray-50 border-t border-gray-200 flex items-center justify-between text-xs text-gray-500">
          <span>DevPulse Automated Email Engine (Nodemailer / SQLite Logged)</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 border-gray-200 hover:bg-stone-700 text-gray-900 rounded-lg transition-colors font-medium"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
