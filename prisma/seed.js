"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("@prisma/client");
var prisma = new client_1.PrismaClient();
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var event, adminUser, attendeeUser, sampleTicket1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("Seeding database...");
                    return [4 /*yield*/, prisma.event.upsert({
                            where: { id: "devpulse-2026-event" },
                            update: {},
                            create: {
                                id: "devpulse-2026-event",
                                title: "DevPulse 2026: Masterclass on AI Engineering & Distributed Systems",
                                subtitle: "Full-day hands-on workshop building production LLM apps & resilient microservices",
                                description: "Join leading engineers from top AI research labs & tech companies for a deep dive into fine-tuning models, high-performance RAG, vector databases, and real-time backend architecture.",
                                startDate: new Date("2026-09-26T09:00:00Z"),
                                endDate: new Date("2026-09-26T17:00:00Z"),
                                location: "Tech Hub Auditorium, San Francisco & Live Global Stream",
                                totalSeats: 250,
                            },
                        })];
                case 1:
                    event = _a.sent();
                    return [4 /*yield*/, prisma.user.upsert({
                            where: { email: "admin@devpulse.io" },
                            update: { role: "ADMIN" },
                            create: {
                                email: "admin@devpulse.io",
                                name: "Alex Rivera (Admin)",
                                role: "ADMIN",
                                image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=250&q=80",
                            },
                        })];
                case 2:
                    adminUser = _a.sent();
                    return [4 /*yield*/, prisma.user.upsert({
                            where: { email: "user@demo.com" },
                            update: {},
                            create: {
                                email: "user@demo.com",
                                name: "Jordan Lee (Attendee)",
                                role: "USER",
                                image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=250&q=80",
                            },
                        })];
                case 3:
                    attendeeUser = _a.sent();
                    return [4 /*yield*/, prisma.ticket.upsert({
                            where: { ticketCode: "DEVPULSE-VIP-884912" },
                            update: {},
                            create: {
                                ticketCode: "DEVPULSE-VIP-884912",
                                userId: attendeeUser.id,
                                eventId: event.id,
                                tier: "VIP",
                                tierName: "VIP Masterclass Pass",
                                priceInCents: 19900,
                                status: "PAID",
                                checkedIn: true,
                                checkedInAt: new Date(),
                            },
                        })];
                case 4:
                    sampleTicket1 = _a.sent();
                    // Seed Sample Email Logs
                    return [4 /*yield*/, prisma.emailLog.create({
                            data: {
                                toEmail: attendeeUser.email || "user@demo.com",
                                userName: attendeeUser.name || "Jordan Lee",
                                subject: "\uD83C\uDF9F\uFE0F Confirmation: Your Ticket for ".concat(event.title),
                                ticketCode: sampleTicket1.ticketCode,
                                tier: sampleTicket1.tierName,
                                amount: sampleTicket1.priceInCents,
                                status: "SENT",
                            },
                        })];
                case 5:
                    // Seed Sample Email Logs
                    _a.sent();
                    console.log("Database seeded successfully!");
                    console.log("Admin User: ".concat(adminUser.email, " (Role: ").concat(adminUser.role, ")"));
                    console.log("Attendee User: ".concat(attendeeUser.email, " (Role: ").concat(attendeeUser.role, ")"));
                    return [2 /*return*/];
            }
        });
    });
}
main()
    .catch(function (e) {
    console.error("Error seeding database:", e);
    process.exit(1);
})
    .finally(function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, prisma.$disconnect()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
