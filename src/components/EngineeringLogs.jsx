import React from "react";
import { motion } from "framer-motion";
import { BookOpen, ArrowRight, Clock, Tag, ChevronRight } from "lucide-react";

const EngineeringLogs = () => {
  const logs = [
    {
      id: 1,
      title: "The Discovery Engine — Automating Performance Logic in Large-Scale ERP",
      date: "May 2026",
      topic: "Architecture / Business Intelligence",
      tags: ["Laravel", "RDBMS", "Logic"],
      excerpt: "Banyak sistem KPI hanya mengandalkan input manual. Saya tertantang untuk membuat sistem yang tidak menunggu laporan, tapi aktif mencari bukti pekerjaan.",
      content: `
        Banyak sistem KPI yang saya temui hanya mengandalkan input manual dari manajer. Masalahnya? Subjektivitas dan Human-Error. Saat membangun ekosistem Hopemedia.id, saya tertantang untuk membuat sistem penilaian yang "jujur"—sistem yang tidak menunggu laporan, tapi aktif mencari bukti pekerjaan.

        The Problem: The Empty Dashboard Syndrome
        Dalam ekosistem dengan 20+ spesialisasi, HR sering kesulitan melacak siapa mengerjakan apa. Jika hanya mengandalkan laporan akhir minggu, data seringkali bias atau tidak lengkap. Saya butuh cara untuk memvalidasi kerja tim tanpa menambah beban administratif mereka.

        The Solution: Footprint Discovery Engine
        Saya membangun sebuah KpiService.php yang bekerja sebagai "detektif". Alih-alih satu tabel statis, sistem ini melakukan pemindaian (scanning) terhadap seluruh database operasional:
        1. Scanning Workflows: Sistem mengecek aransemen, jadwal syuting, hingga log edit video.
        2. The "Sharing Gate": Poin KPI tim promosi terkunci hingga mereka memasukkan bukti URL/Screenshot.
        3. Speed Points: Menggunakan Laravel Carbon untuk menghitung selisih waktu submission vs deadline otomatis.

        Reflection
        Membangun sistem ini menyadarkan saya bahwa koding bukan soal membuat fitur "bisa jalan", tapi soal bagaimana teknologi bisa menciptakan transparansi. Precision is not just about code performance, it's about business integrity.
      `
    }
  ];

  return (
    <section id="notes" className="py-40 bg-[#030303] relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-32 space-y-4"
          >
            <span className="text-zinc-600 font-mono text-[10px] tracking-[0.4em] uppercase block">Engineering Logs</span>
            <h2 className="text-4xl md:text-6xl font-light text-white tracking-tight">
              Thoughts on <span className="text-zinc-700 italic">Systems & Logic</span>
            </h2>
            <p className="text-zinc-500 text-lg md:text-xl font-light leading-relaxed max-w-2xl mt-8">
              A documentation of technical puzzles, architectural decisions, and the lessons learned while building production systems.
            </p>
          </motion.div>

          <div className="space-y-12">
            {logs.map((log, index) => (
              <motion.div
                key={log.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative p-10 md:p-12 rounded-[2.5rem] border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-all duration-700"
              >
                <div className="flex flex-col md:flex-row gap-12">
                  <div className="flex-1 space-y-8">
                    <div className="flex flex-wrap items-center gap-6 text-[10px] font-mono uppercase tracking-widest text-zinc-500">
                      <div className="flex items-center gap-2">
                        <Clock size={12} className="text-indigo-400" />
                        {log.date}
                      </div>
                      <div className="flex items-center gap-2">
                        <Tag size={12} className="text-indigo-400" />
                        {log.topic}
                      </div>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-light text-white group-hover:text-indigo-300 transition-colors duration-500 leading-tight">
                      {log.title}
                    </h3>

                    <p className="text-zinc-500 text-base md:text-lg font-light leading-relaxed italic">
                      "{log.excerpt}"
                    </p>

                    <div className="flex flex-wrap gap-3">
                      {log.tags.map(tag => (
                        <span key={tag} className="px-4 py-1.5 rounded-full border border-white/5 bg-white/[0.02] text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col justify-between items-end">
                    <button className="p-6 rounded-full border border-white/5 bg-white/5 text-zinc-500 group-hover:text-white group-hover:border-white/20 transition-all duration-500">
                      <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
                    </button>
                  </div>
                </div>

                {/* Subtle Decorative Line */}
                <div className="absolute bottom-0 left-12 right-12 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-32 flex flex-col items-center text-center space-y-6"
          >
            <div className="w-px h-24 bg-gradient-to-b from-transparent via-zinc-800 to-transparent"></div>
            <p className="text-zinc-600 font-mono text-[10px] uppercase tracking-[0.4em]">End of Transmission</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EngineeringLogs;
