/**
 * Kamus Terjemahan Multi-Bahasa Koperasi Keuangan
 * Mendukung Bahasa Indonesia (id), English (en), Arabic (ar), dan Français (fr).
 * Struktur data dijaga seragam 100% antar-bahasa guna mencegah error undefined pada runtime.
 */

export const translations = {
  id: {
    navbar: {
      brand: "Koperasi Amanah Mandiri",
      home: "Beranda",
      about: "Tentang Kami",
      services: "Layanan",
      whyUs: "Keunggulan",
      contact: "Hubungi Kami",
      langSelect: "Pilih Bahasa",
      themeToggle: "Ubah Tema",
      memberPortal: "Portal Anggota",
    },
    hero: {
      badge: "Koperasi Keuangan Terdaftar & Berizin Resmi",
      tagline: "Ekonomi Gotong Royong Berbasis Digital",
      title: "Solusi Finansial Berkelanjutan untuk Masa Depan Bersama",
      slogan: "Tumbuh Bersama, Sejahtera untuk Semua",
      subtitle:
        "Kami menghadirkan layanan simpan pinjam syariah dan konvensional yang transparan, aman, serta terpercaya dengan sistem digital mutakhir untuk kemakmuran seluruh anggota.",
      ctaPrimary: "Daftar Jadi Anggota",
      ctaSecondary: "Pelajari Layanan",
      stats: [
        { label: "Anggota Aktif", value: "25.000+" },
        { label: "Dana Terkelola", value: "Rp 150 M+" },
        { label: "Tingkat NPL", value: "< 0.8%" },
        { label: "Dividen SHU (2025)", value: "12.4%" },
      ],
      previewCard: {
        badge: "Smart Ledger & SHU Realtime",
        simTitle: "Simulasi Finansial Anggota",
        depositLabel: "Simpanan Berjangka",
        projectedReturn: "Estimasi SHU Tahunan",
        securityBadge: "Enkripsi 256-bit",
        accountStatus: "Status: Anggota Terverifikasi",
        codeSnippetTitle: "cooperativeLedger.ts",
      },
    },
    about: {
      title: "Tentang Kami",
      subtitle: "Mengenal Lebih Dekat Koperasi Keuangan Amanah Mandiri",
      lead:
        "Didirikan dengan semangat kekeluargaan dan gotong royong, Koperasi Keuangan Amanah Mandiri berdedikasi membangun ekosistem finansial yang inklusif, adil, dan transparan bagi pelaku UMKM dan masyarakat umum.",
      visionTag: "Visi Kami",
      visionText:
        "Menjadi koperasi keuangan modern terdepan di tingkat nasional yang terpercaya, mandiri, dan berdaya saing global demi kemakmuran anggota.",
      missionTag: "Misi Kami",
      missions: [
        "Memberikan solusi pembiayaan yang mudah, cepat, dan terjangkau bagi para pelaku usaha kecil dan mikro.",
        "Mengembangkan teknologi finansial digital terintegrasi untuk kenyamanan dan keamanan transaksi para anggota.",
        "Mewujudkan tata kelola koperasi yang transparan, akuntabel, dan berkeadilan melalui pembagian SHU yang optimal.",
        "Mengedukasi masyarakat mengenai literasi keuangan dan pengelolaan modal usaha berkelanjutan.",
      ],
      valuesTitle: "Nilai-Nilai Utama",
      values: [
        { title: "Amanah", desc: "Menjunjung tinggi kejujuran dan tanggung jawab dalam mengelola dana amanat anggota." },
        { title: "Transparan", desc: "Setiap laporan neraca dan pembagian sisa hasil usaha dapat diakses secara terbuka." },
        { title: "Inovatif", desc: "Memanfaatkan teknologi modern untuk mempercepat layanan dan meminimalkan risiko." },
        { title: "Kolaboratif", desc: "Mengutamakan sinergi gotong royong untuk kemajuan ekonomi bersama." },
      ],
    },
    whyUs: {
      title: "Mengapa Memilih Kami?",
      subtitle: "Komitmen kami dalam menghadirkan standar layanan terbaik bagi setiap anggota.",
      items: [
        {
          number: "01",
          title: "Bunga Adil & Bagi Hasil Kompetitif",
          desc: "Skema pembiayaan dengan margin adil serta pembagian Sisa Hasil Usaha (SHU) yang menguntungkan bagi penyimpan dana.",
        },
        {
          number: "02",
          title: "Digitalisasi Penuh & Transparan",
          desc: "Akses saldo, mutasi, pengajuan pinjaman, dan laporan keuangan berkala kapan saja melalui aplikasi digital kami.",
        },
        {
          number: "03",
          title: "Keamanan Aset Terjamin",
          desc: "Pengelolaan risiko teruji diawasi oleh Dewan Pengawas berpengalaman serta didukung sistem keamanan enkripsi perbankan.",
        },
        {
          number: "04",
          title: "Pemberdayaan Nyata untuk UMKM",
          desc: "Tidak sekadar memberi pinjaman modal, kami menyediakan bimbingan bisnis dan jejaring kemitraan antar-anggota.",
        },
      ],
    },
    advantages: {
      title: "Mengapa Memilih Kami?",
      subtitle: "Komitmen kami dalam menghadirkan standar layanan terbaik bagi setiap anggota.",
      items: [
        {
          number: "01",
          title: "Bunga Adil & Bagi Hasil Kompetitif",
          desc: "Skema pembiayaan dengan margin adil serta pembagian Sisa Hasil Usaha (SHU) yang menguntungkan bagi penyimpan dana.",
        },
        {
          number: "02",
          title: "Digitalisasi Penuh & Transparan",
          desc: "Akses saldo, mutasi, pengajuan pinjaman, dan laporan keuangan berkala kapan saja melalui aplikasi digital kami.",
        },
        {
          number: "03",
          title: "Keamanan Aset Terjamin",
          desc: "Pengelolaan risiko teruji diawasi oleh Dewan Pengawas berpengalaman serta didukung sistem keamanan enkripsi perbankan.",
        },
        {
          number: "04",
          title: "Pemberdayaan Nyata untuk UMKM",
          desc: "Tidak sekadar memberi pinjaman modal, kami menyediakan bimbingan bisnis dan jejaring kemitraan antar-anggota.",
        },
      ],
    },
    services: {
      title: "Layanan Keuangan Kami",
      subtitle: "Produk simpanan, pembiayaan, dan investasi yang dirancang khusus untuk memenuhi kebutuhan hidup dan bisnis Anda.",
      clickDetail: "Klik untuk melihat rincian & syarat",
      modalClose: "Tutup",
      items: [
        {
          id: "simpanan-sukarela",
          icon: "Wallet",
          badge: "Simpanan",
          title: "Simpanan Sukarela & Berjangka",
          shortDesc: "Tabungan fleksibel dengan imbal hasil menarik dan bagi hasil bulanan yang langsung masuk ke rekening anggota.",
          detail: {
            title: "Rincian Simpanan Sukarela & Berjangka",
            description:
              "Program simpanan yang memberikan keleluasaan anggota dalam merencanakan masa depan keuangan dengan proteksi dana optimal.",
            points: [
              "Setoran awal ringan mulai dari Rp 50.000,-",
              "Bebas biaya administrasi bulanan",
              "Bagi hasil hingga 8.5% p.a. untuk simpanan berjangka",
              "Penarikan dana yang mudah dan dapat dilakukan secara daring",
              "Sertifikat bilyet simpanan berjangka resmi berpenjaminan",
            ],
            outro:
              "Mulai simpanan Anda sekarang dan nikmati imbal hasil yang lebih optimal dibanding tabungan konvensional dengan prinsip kemakmuran bersama.",
          },
        },
        {
          id: "pembiayaan-umkm",
          icon: "Store",
          badge: "Pembiayaan",
          title: "Pinjaman Modal Usaha UMKM",
          shortDesc: "Bantuan modal usaha produktif dengan proses cepat, tenor fleksibel, dan persyaratan yang ramah bagi pelaku usaha.",
          detail: {
            title: "Rincian Pinjaman Modal Usaha UMKM",
            description:
              "Dirancang khusus untuk mendukung pertumbuhan usaha mikro, kecil, dan menengah dengan plafon hingga Rp 250.000.000,-.",
            points: [
              "Proses persetujuan cepat dalam 1x24 jam kerja",
              "Tenor fleksibel mulai dari 3 hingga 36 bulan",
              "Bunga flat ringan kompetitif mulai 0.75% per bulan",
              "Tanpa potongan tersembunyi pada saat pencairan",
              "Pendampingan bisnis dan konsultasi laporan keuangan gratis",
            ],
            outro:
              "Kembangkan kapasitas usaha Anda tanpa khawatir jeratan bunga tinggi. Kami siap menjadi mitra strategis pertumbuhan bisnis Anda.",
          },
        },
        {
          id: "pembiayaan-syariah",
          icon: "ShieldCheck",
          badge: "Syariah",
          title: "Pembiayaan Syariah (Murabahah & Mudharabah)",
          shortDesc: "Solusi keuangan berlandaskan akad syariah yang menentramkan jiwa, bebas riba, dan diawasi Dewan Syariah.",
          detail: {
            title: "Rincian Pembiayaan Syariah",
            description:
              "Fasilitas pembiayaan untuk kepemilikan aset atau permodalan kerja dengan mengedepankan prinsip keadilan, keterbukaan, dan berkah.",
            points: [
              "Akad Murabahah (jual beli transparan) & Mudharabah (bagi hasil murni)",
              "Diawasi secara ketat oleh Dewan Pengawas Syariah bersertifikasi",
              "Bebas dari unsur gharar (ketidakpastian) dan riba",
              "Plafon pembiayaan hingga Rp 500.000.000,-",
              "Pilihan pembayaran cicilan autodebet yang aman dan praktis",
            ],
            outro:
              "Wujudkan ketenangan finansial keluarga dan bisnis dengan produk keuangan halal, adil, dan penuh berkah.",
          },
        },
        {
          id: "dana-talangan",
          icon: "CreditCard",
          badge: "Darurat",
          title: "Dana Talangan & Kebutuhan Darurat",
          shortDesc: "Fasilitas dana kilat untuk kebutuhan mendesak kesehatan, pendidikan, atau renovasi dengan proses verifikasi instan.",
          detail: {
            title: "Rincian Dana Talangan & Kebutuhan Darurat",
            description:
              "Solusi cepat saat anggota menghadapi situasi mendesak tanpa perlu menunggu proses birokrasi perbankan yang rumit.",
            points: [
              "Pencairan kilat dalam waktu hitungan jam setelah diverifikasi",
              "Plafon darurat hingga Rp 20.000.000,-",
              "Persyaratan mudah hanya KTP & bukti keanggotaan aktif",
              "Opsi pelunasan dipercepat tanpa biaya pinalti",
              "Dukungan asuransi jiwa pelindung angsuran",
            ],
            outro:
              "Keadaan darurat tidak bisa menunggu. Koperasi kami hadir menjadi garda penyelamat stabilitas finansial keluarga Anda.",
          },
        },
        {
          id: "investasi-proyek",
          icon: "TrendingUp",
          badge: "Investasi",
          title: "Penyertaan Modal Proyek Koperasi",
          shortDesc: "Peluang bagi anggota untuk berinvestasi pada proyek-proyek riil sektor pangan, logistik, dan properti milik koperasi.",
          detail: {
            title: "Rincian Penyertaan Modal Proyek",
            description:
              "Investasi sektor riil yang dikelola langsung oleh unit bisnis profesional koperasi dengan laporan laba rugi periodik transparan.",
            points: [
              "Proyek riil yang terverifikasi legalitas dan prospek bisnisnya",
              "Bagi hasil dividen berkala setiap triwulan",
              "Laporan perkembangan proyek dapat dipantau di portal anggota",
              "Diversifikasi risiko investasi dengan portofolio terukur",
              "Kontribusi langsung terhadap penciptaan lapangan kerja lokal",
            ],
            outro:
              "Jadilah pemilik sekaligus penerima manfaat dari roda industri riil yang dibangun secara gotong royong.",
          },
        },
        {
          id: "pendidikan-finansial",
          icon: "BookOpen",
          badge: "Edukasi",
          title: "Konsultasi & Literasi Keuangan",
          shortDesc: "Pelatihan pembukuan sederhana, perencanaan anggaran keluarga, dan konsultasi kesehatan finansial cuma-cuma bagi anggota.",
          detail: {
            title: "Rincian Konsultasi & Literasi Keuangan",
            description:
              "Layanan pemberdayaan sumber daya manusia agar setiap anggota memiliki pemahaman finansial yang sehat dan berkelanjutan.",
            points: [
              "Workshop bulanan bersama perencana keuangan bersertifikat (CFP)",
              "Modul pembukuan digital gratis untuk toko dan usaha mikro",
              "Sesi konsultasi privat bebas biaya untuk restrukturisasi utang luar",
              "Webinar berkala tentang investasi aman dan pencegahan pinjol ilegal",
              "Komunitas belajar dan networking antar-anggota koperasi",
            ],
            outro:
              "Kekayaan sejati bermula dari literasi finansial yang baik. Kami hadir mendampingi perjalanan kemandirian Anda.",
          },
        },
      ],
    },
    contact: {
      title: "Hubungi Kami",
      subtitle: "Punya pertanyaan seputar keanggotaan, simpanan, atau pinjaman? Tim representatif kami siap melayani Anda.",
      addressLabel: "Alamat Kantor Pusat",
      address: "Gedung Graha Amanah Mandiri Lt. 3-5, Jl. Sudirman Kav. 45, Jakarta Selatan 12190",
      emailLabel: "Email Resmi",
      email: "layanan@amanahmandiri-koperasi.co.id",
      phoneLabel: "Telepon & WhatsApp Layanan",
      phone: "+62 21 555-8900 / +62 812-3456-7890",
      hoursLabel: "Jam Operasional",
      hours: "Senin - Jumat: 08:00 - 17:00 WIB | Sabtu: 08:30 - 12:30 WIB",
      form: {
        heading: "Kirim Pesan / Formulir Pendaftaran Awal",
        subheading: "Data Anda akan langsung tersinkronisasi ke sistem administrasi kami.",
        nameLabel: "Nama Lengkap Sesuai KTP",
        namePlaceholder: "cth: Muhammad Pratama",
        emailLabel: "Alamat Email Aktif",
        emailPlaceholder: "cth: pratama@email.com",
        phoneLabel: "Nomor WhatsApp / HP",
        phonePlaceholder: "cth: 081234567890",
        serviceLabel: "Layanan yang Diminati",
        servicePlaceholder: "Pilih Layanan...",
        messageLabel: "Pesan / Pertanyaan Tambahan",
        messagePlaceholder: "Tuliskan kebutuhan permodalan, simpanan, atau pertanyaan Anda di sini...",
        submitBtn: "Kirim Pesan Sekarang",
        sendingBtn: "Mengirim Data...",
        successMsg: "Terima kasih! Pesan Anda telah berhasil terkirim dan disimpan di sistem kami. Tim kami akan segera menghubungi Anda.",
        errorMsg: "Maaf, terjadi kendala saat mengirim pesan. Silakan coba kembali atau hubungi kami langsung via WhatsApp.",
      },
    },
    footer: {
      brand: "Koperasi Amanah Mandiri",
      tagline: "Koperasi Keuangan Terpercaya, Berdaya Saing, dan Menyejahterakan.",
      desc: "Lembaga keuangan berbadan hukum koperasi nomor 503/BH/KOP-DKI/2018. Berkomitmen menghadirkan tata kelola profesional, amanah, dan berpihak pada kesejahteraan bersama.",
      quickLinks: "Tautan Cepat",
      servicesTitle: "Layanan Utama",
      contactTitle: "Kontak Layanan",
      rights: "Hak Cipta Dilindungi Undang-Undang.",
      privacy: "Kebijakan Privasi",
      terms: "Syarat & Ketentuan",
      disclaimer: "Simpanan anggota dijamin oleh sistem cadangan likuiditas dan dana penjaminan internal koperasi sesuai AD/ART.",
    },
  },

  en: {
    navbar: {
      brand: "Amanah Mandiri Cooperative",
      home: "Home",
      about: "About Us",
      services: "Services",
      whyUs: "Why Us",
      contact: "Contact Us",
      langSelect: "Select Language",
      themeToggle: "Toggle Theme",
      memberPortal: "Member Portal",
    },
    hero: {
      badge: "Officially Registered & Licensed Financial Cooperative",
      tagline: "Digital-Powered Mutual Aid Economy",
      title: "Sustainable Financial Solutions for Our Collective Future",
      slogan: "Growing Together, Prosperity for All",
      subtitle:
        "We offer transparent, secure, and reputable Sharia and conventional savings and credit services backed by modern digital technology for the prosperity of all members.",
      ctaPrimary: "Become a Member",
      ctaSecondary: "Explore Services",
      stats: [
        { label: "Active Members", value: "25,000+" },
        { label: "Managed Assets", value: "$10M+ USD" },
        { label: "NPL Ratio", value: "< 0.8%" },
        { label: "Annual Dividend (2025)", value: "12.4%" },
      ],
      previewCard: {
        badge: "Smart Ledger & Realtime Dividend",
        simTitle: "Member Financial Simulator",
        depositLabel: "Term Deposit Balance",
        projectedReturn: "Est. Annual Return",
        securityBadge: "256-bit Encryption",
        accountStatus: "Status: Verified Member",
        codeSnippetTitle: "cooperativeLedger.ts",
      },
    },
    about: {
      title: "About Us",
      subtitle: "Getting to Know Amanah Mandiri Financial Cooperative",
      lead:
        "Founded on the principles of family and mutual assistance, Amanah Mandiri Financial Cooperative is dedicated to building an inclusive, fair, and transparent financial ecosystem for MSMEs and communities.",
      visionTag: "Our Vision",
      visionText:
        "To become the leading modern financial cooperative at the national level, globally competitive, independent, and trusted for member prosperity.",
      missionTag: "Our Mission",
      missions: [
        "Provide affordable, fast, and accessible financing solutions for micro and small businesses.",
        "Develop integrated digital financial technology to maximize security and convenience for all members.",
        "Uphold transparent, accountable, and fair cooperative governance through optimal dividend sharing.",
        "Educate the public on financial literacy and sustainable business capital management.",
      ],
      valuesTitle: "Core Values",
      values: [
        { title: "Integrity", desc: "Upholding honesty and responsibility in safeguarding our members' entrusted capital." },
        { title: "Transparency", desc: "Balance sheets and profit-sharing statements are accessible openly at all times." },
        { title: "Innovation", desc: "Leveraging modern technology to accelerate operations and minimize risks." },
        { title: "Collaboration", desc: "Prioritizing mutual cooperation for sustainable communal economic growth." },
      ],
    },
    whyUs: {
      title: "Why Choose Us?",
      subtitle: "Our steadfast commitment to delivering premier service standards for every member.",
      items: [
        {
          number: "01",
          title: "Fair Interest & Competitive Profit-Sharing",
          desc: "Equitable loan financing rates and competitive dividend distributions for capital contributors.",
        },
        {
          number: "02",
          title: "Fully Digital & Transparent",
          desc: "Real-time balance checks, fund transfers, loan applications, and audited financial statements anytime.",
        },
        {
          number: "03",
          title: "Guaranteed Asset Security",
          desc: "Vetted risk management supervised by an expert board and protected by bank-grade data encryption.",
        },
        {
          number: "04",
          title: "Real Empowerment for MSMEs",
          desc: "Beyond business loans, we provide hands-on business mentorship and member peer-networking programs.",
        },
      ],
    },
    advantages: {
      title: "Why Choose Us?",
      subtitle: "Our steadfast commitment to delivering premier service standards for every member.",
      items: [
        {
          number: "01",
          title: "Fair Interest & Competitive Profit-Sharing",
          desc: "Equitable loan financing rates and competitive dividend distributions for capital contributors.",
        },
        {
          number: "02",
          title: "Fully Digital & Transparent",
          desc: "Real-time balance checks, fund transfers, loan applications, and audited financial statements anytime.",
        },
        {
          number: "03",
          title: "Guaranteed Asset Security",
          desc: "Vetted risk management supervised by an expert board and protected by bank-grade data encryption.",
        },
        {
          number: "04",
          title: "Real Empowerment for MSMEs",
          desc: "Beyond business loans, we provide hands-on business mentorship and member peer-networking programs.",
        },
      ],
    },
    services: {
      title: "Our Financial Services",
      subtitle: "Savings, financing, and investment products tailored specifically to meet your life and business aspirations.",
      clickDetail: "Click to view full details & terms",
      modalClose: "Close",
      items: [
        {
          id: "simpanan-sukarela",
          icon: "Wallet",
          badge: "Savings",
          title: "Voluntary & Term Savings",
          shortDesc: "Flexible savings accounts with attractive returns and monthly profit distributions paid directly to your account.",
          detail: {
            title: "Voluntary & Term Deposit Details",
            description:
              "A structured savings vehicle giving members full agility in planning their financial future with optimal principal safety.",
            points: [
              "Low initial deposit starting from $5 USD equivalent",
              "Zero monthly administrative maintenance fees",
              "Annualized yield up to 8.5% for fixed term deposits",
              "Seamless digital withdrawals anytime via portal",
              "Official guaranteed cooperative certificate of deposit",
            ],
            outro:
              "Start your savings journey today and enjoy superior yields compared to standard retail banking, driven by mutual prosperity.",
          },
        },
        {
          id: "pembiayaan-umkm",
          icon: "Store",
          badge: "Financing",
          title: "MSME Working Capital Financing",
          shortDesc: "Productive working capital loans featuring rapid turnaround, flexible tenors, and entrepreneur-friendly criteria.",
          detail: {
            title: "MSME Business Financing Details",
            description:
              "Designed specifically to supercharge the expansion of micro, small, and medium businesses with capital up to $20,000 USD.",
            points: [
              "Rapid approval turnarounds within 24 business hours",
              "Flexible repayment periods ranging from 3 to 36 months",
              "Low flat interest margins starting from 0.75% per month",
              "Zero hidden deduction fees upon capital disbursement",
              "Complimentary business advisory and bookkeeping support",
            ],
            outro:
              "Scale your commercial venture with confidence. We are your dedicated ally in achieving sustainable economic milestones.",
          },
        },
        {
          id: "pembiayaan-syariah",
          icon: "ShieldCheck",
          badge: "Sharia",
          title: "Sharia Financing (Murabahah & Mudharabah)",
          shortDesc: "Peace-of-mind financing based on authentic Islamic contracts, free of usury (riba), supervised by Sharia board.",
          detail: {
            title: "Sharia Financing Details",
            description:
              "Financing facilities for asset acquisition or working capital anchored in equity, total transparency, and ethical blessings.",
            points: [
              "Murabahah (transparent cost-plus) & Mudharabah (pure profit-sharing)",
              "Strict oversight by certified Islamic Sharia Supervisory Council",
              "Free from usury (riba), deception (gharar), and speculative excess",
              "Financing limits accommodating up to $35,000 USD",
              "Automated scheduled deductions for effortless peace of mind",
            ],
            outro:
              "Anchor your family and corporate assets in ethical, fair, and dividend-yielding financial stewardship.",
          },
        },
        {
          id: "dana-talangan",
          icon: "CreditCard",
          badge: "Emergency",
          title: "Emergency Cash & Bridging Facility",
          shortDesc: "Express bridging liquidity for urgent medical, education, or renovation costs with instant identity verification.",
          detail: {
            title: "Emergency Bridging Loan Details",
            description:
              "A rapid lifeline for members facing unforeseen life crises without the sluggish bureaucracy of conventional banking.",
            points: [
              "Same-day emergency disbursement upon rapid verification",
              "Emergency credit lines up to $1,500 USD equivalent",
              "Simple requirements: government ID and active membership card",
              "Flexible early repayment without penalty penalties",
              "Embedded credit-shield life coverage for borrower safety",
            ],
            outro:
              "When emergencies strike, speed matters. Our cooperative acts as an immediate safety net for your family.",
          },
        },
        {
          id: "investasi-proyek",
          icon: "TrendingUp",
          badge: "Investment",
          title: "Cooperative Real-Sector Project Equity",
          shortDesc: "Direct equity participation in high-yield cooperative ventures in food supply, logistics, and sustainable real estate.",
          detail: {
            title: "Cooperative Project Investment Details",
            description:
              "Direct equity placement in tangible real-economy projects run by professional managers with quarterly audited performance sheets.",
            points: [
              "Vetted real-sector projects with proven commercial viability",
              "Quarterly dividend payouts distributed straight to members",
              "Live project progress metrics accessible via member dashboard",
              "Prudent risk mitigation across multiple asset classes",
              "Direct contribution toward local job creation and green growth",
            ],
            outro:
              "Become both an equity holder and beneficiary in productive domestic industrial ventures built on solidarity.",
          },
        },
        {
          id: "pendidikan-finansial",
          icon: "BookOpen",
          badge: "Education",
          title: "Financial Literacy & Advisory Services",
          shortDesc: "Free accounting workshops, family budgeting strategies, and 1-on-1 financial health consultations for all members.",
          detail: {
            title: "Financial Literacy & Advisory Details",
            description:
              "Empowerment programs ensuring every member builds long-term wealth, debt resilience, and financial independence.",
            points: [
              "Monthly interactive webinars hosted by Certified Financial Planners",
              "Free digital bookkeeping software access for merchant members",
              "Confidential one-on-one sessions for debt restructuring",
              "Educational campaigns combating predatory illegal loan apps",
              "Collaborative peer-to-peer business networking roundtables",
            ],
            outro:
              "True enduring wealth begins with sound financial literacy. We walk beside you on your journey toward true independence.",
          },
        },
      ],
    },
    contact: {
      title: "Contact Us",
      subtitle: "Have inquiries regarding membership, savings options, or loan programs? Our representative desk is ready to help.",
      addressLabel: "Headquarters Address",
      address: "Graha Amanah Mandiri Tower, 3rd-5th Fl., Jl. Sudirman Kav. 45, South Jakarta 12190",
      emailLabel: "Official Email",
      email: "support@amanahmandiri-koperasi.co.id",
      phoneLabel: "Phone & WhatsApp Desk",
      phone: "+62 21 555-8900 / +62 812-3456-7890",
      hoursLabel: "Operating Hours",
      hours: "Monday - Friday: 08:00 - 17:00 WIB | Saturday: 08:30 - 12:30 WIB",
      form: {
        heading: "Send an Inquiry / Pre-Registration Form",
        subheading: "Your submission will automatically synchronize with our core administration ledger.",
        nameLabel: "Full Name (as per ID card)",
        namePlaceholder: "e.g. John Alexander Doe",
        emailLabel: "Active Email Address",
        emailPlaceholder: "e.g. john.doe@email.com",
        phoneLabel: "WhatsApp / Mobile Number",
        phonePlaceholder: "e.g. +62 812 3456 7890",
        serviceLabel: "Interested Service",
        servicePlaceholder: "Select Service...",
        messageLabel: "Message / Specific Inquiry",
        messagePlaceholder: "Briefly explain your capital or deposit requirements or any queries here...",
        submitBtn: "Send Message Now",
        sendingBtn: "Submitting Data...",
        successMsg: "Thank you! Your message has been successfully recorded in our system. Our team will contact you promptly.",
        errorMsg: "Oops! We encountered an issue sending your message. Please try again or message us directly via WhatsApp.",
      },
    },
    footer: {
      brand: "Amanah Mandiri Cooperative",
      tagline: "Trusted, Competitive, and Member-Centric Financial Cooperative.",
      desc: "Licensed legal financial cooperative entity No. 503/BH/KOP-DKI/2018. Committed to delivering professional, trustworthy, and mutually beneficial financial services.",
      quickLinks: "Quick Navigation",
      servicesTitle: "Key Services",
      contactTitle: "Contact Desk",
      rights: "All Rights Reserved.",
      privacy: "Privacy Policy",
      terms: "Terms & Conditions",
      disclaimer: "Member deposits are safeguarded under cooperative internal liquidity reserves and capital adequacy bylaws.",
    },
  },

  ar: {
    navbar: {
      brand: "تعاونية أمانة مانديري المالية",
      home: "الرئيسية",
      about: "من نحن",
      services: "الخدمات",
      whyUs: "مميزاتنا",
      contact: "اتصل بنا",
      langSelect: "اختر اللغة",
      themeToggle: "تغيير المظهر",
      memberPortal: "بوابة الأعضاء",
    },
    hero: {
      badge: "تعاونية مالية معتمدة ومرخصة رسمياً",
      tagline: "اقتصاد التكافل الاجتماعي الرقمي الحديث",
      title: "حلول مالية مستدامة من أجل مستقبلنا المشترك",
      slogan: "ننمو معاً، ورخاء للجميع",
      subtitle:
        "نقدم خدمات الادخار والتمويل الإسلامي والتقليدي بشفافية وأمان وثقة تامة، مدعومة بأحدث التقنيات الرقمية لتحقيق الازدهار لجميع الأعضاء.",
      ctaPrimary: "سجل كعضو الآن",
      ctaSecondary: "استكشف خدماتنا",
      stats: [
        { label: "الأعضاء النشطون", value: "+٢٥،٠٠٠" },
        { label: "الأصول المدارة", value: "+١٠ مليون $" },
        { label: "نسبة التعثر (NPL)", value: "< ٠.٨٪" },
        { label: "عائد الأرباح السنوي", value: "١٢.٤٪" },
      ],
      previewCard: {
        badge: "دفتر الأستاذ الذكي وتوزيع الأرباح",
        simTitle: "محاكي العوائد المالية للعضو",
        depositLabel: "رصيد الودائع لأجل",
        projectedReturn: "العائد السنوي المتوقع",
        securityBadge: "تشفير ٢٥٦ بت آمن",
        accountStatus: "الحالة: عضو معتمد ونشط",
        codeSnippetTitle: "cooperativeLedger.ts",
      },
    },
    about: {
      title: "من نحن",
      subtitle: "تعرف عن قرب على تعاونية أمانة مانديري المالية",
      lead:
        "تأسست بروح الأسرة الواحدة والتعاون المثمر، وتكرس تعاونية أمانة مانديري جهودها لبناء منظومة مالية شاملة وعادلة وشفافة للمشاريع الصغيرة والمجتمع.",
      visionTag: "رؤيتنا",
      visionText:
        "أن نكون التعاونية المالية الحديثة الرائدة وطنياً، الموثوقة والمستقلة والقادرة على المنافسة لتحقيق رخاء الأعضاء.",
      missionTag: "رسالتنا",
      missions: [
        "تقديم حلول تمويلية ميسرة وسريعة وفي متناول أصحاب المشاريع الصغيرة ومتناهية الصغر.",
        "تطوير تقنيات مالية رقمية متكاملة لضمان أقصى درجات الأمان والراحة لجميع الأعضاء.",
        "ترسيخ حوكمة تعاونية شفافة وعادلة عبر التوزيع الأمثل للأرباح السنوية.",
        "تثقيف المجتمع حول الإدارة المالية المستدامة وتنمية رأس المال الاستثماري.",
      ],
      valuesTitle: "قيمنا الجوهرية",
      values: [
        { title: "الأمانة", desc: "الالتزام بالصدق والمسؤولية التامة في إدارة أموال الأعضاء واستثمارها بأمان." },
        { title: "الشفافية", desc: "إتاحة التقارير المالية وميزانيات الأرباح بكل وضوح لجميع الأعضاء في أي وقت." },
        { title: "الابتكار", desc: "توظيف أحدث الحلول الرقمية لتسريع المعاملات والحد من المخاطر التشغيلية." },
        { title: "التكافل", desc: "العمل معاً بروح التعاون الجماعي لتحقيق نمو اقتصادي مستدام للجميع." },
      ],
    },
    whyUs: {
      title: "لماذا تختارنا؟",
      subtitle: "التزامنا الراسخ بتقديم أعلى معايير الخدمة المالية المتميزة لكل عضو.",
      items: [
        {
          number: "٠١",
          title: "عوائد أرباح مجزية ونسب عادلة",
          desc: "شروط تمويل ميسرة وتوزيعات أرباح استثمارية تنافسية تضمن النمو المالي المستمر للأعضاء.",
        },
        {
          number: "٠٢",
          title: "معاملات رقمية سريعة وشفافة",
          desc: "متابعة الأرصدة، طلب التمويل، وإصدار التقارير المالية بكل سهولة عبر منصتنا الرقمية.",
        },
        {
          number: "٠٣",
          title: "حماية تامة للأصول والمدخرات",
          desc: "إدارة مخاطر صارمة تحت إشراف هيئة رقابية متخصصة مع تشفير بنكي متطور للبيانات.",
        },
        {
          number: "٠٤",
          title: "تمكين حقيقي للمشاريع الناشئة",
          desc: "لا نكتفي بتقديم التمويل فحسب، بل نوفر استشارات تجارية وتوجيهاً مهنياً لنجاح أعمالك.",
        },
      ],
    },
    advantages: {
      title: "لماذا تختارنا؟",
      subtitle: "التزامنا الراسخ بتقديم أعلى معايير الخدمة المالية المتميزة لكل عضو.",
      items: [
        {
          number: "٠١",
          title: "عوائد أرباح مجزية ونسب عادلة",
          desc: "شروط تمويل ميسرة وتوزيعات أرباح استثمارية تنافسية تضمن النمو المالي المستمر للأعضاء.",
        },
        {
          number: "٠٢",
          title: "معاملات رقمية سريعة وشفافة",
          desc: "متابعة الأرصدة، طلب التمويل، وإصدار التقارير المالية بكل سهولة عبر منصتنا الرقمية.",
        },
        {
          number: "٠٣",
          title: "حماية تامة للأصول والمدخرات",
          desc: "إدارة مخاطر صارمة تحت إشراف هيئة رقابية متخصصة مع تشفير بنكي متطور للبيانات.",
        },
        {
          number: "٠٤",
          title: "تمكين حقيقي للمشاريع الناشئة",
          desc: "لا نكتفي بتقديم التمويل فحسب، بل نوفر استشارات تجارية وتوجيهاً مهنياً لنجاح أعمالك.",
        },
      ],
    },
    services: {
      title: "خدماتنا المالية",
      subtitle: "باقات متكاملة من الادخار، التمويل، والاستثمار صممت خصيصاً لتلبية احتياجاتك الشخصية والمهنية.",
      clickDetail: "انقر للاطلاع على التفاصيل والشروط",
      modalClose: "إغلاق",
      items: [
        {
          id: "simpanan-sukarela",
          icon: "Wallet",
          badge: "ادخار",
          title: "المدخرات المرنة والودائع لأجل",
          shortDesc: "حسابات ادخار مرنة بعوائد مجزية وأرباح دورية تدفع مباشرة إلى حسابك الشخصي.",
          detail: {
            title: "تفاصيل المدخرات المرنة والودائع لأجل",
            description:
              "برنامج ادخاري متكامل يتيح للأعضاء التخطيط الآمن لمستقبلهم المالي مع ضمان سلامة رأس المال.",
            points: [
              "إيداع أولي ميسر يبدأ من مبالغ رمزية بسيطة",
              "إعفاء كامل من رسوم الإدارة الشهرية",
              "عوائد سنوية تصل إلى ٨.٥٪ للودائع الاستثمارية لأجل",
              "سحب إلكتروني سريع ومرن في أي وقت",
              "شهادات إيداع رسمية مضمونة وفق اللوائح التعاونية",
            ],
            outro:
              "ابدأ مدخراتك اليوم واحصل على عوائد تنافسية أعلى من الحسابات البنكية العادية ضمن مظلة التعاون والبركة.",
          },
        },
        {
          id: "pembiayaan-umkm",
          icon: "Store",
          badge: "تمويل",
          title: "تمويل المشاريع الصغيرة والمتوسطة",
          shortDesc: "دعم مالي سريع للمشاريع المنتجة مع فترات سداد ميسرة وشروط تشجيعية لأصحاب الأعمال.",
          detail: {
            title: "تفاصيل تمويل المشاريع الصغيرة",
            description:
              "صمم خصيصاً لتسريع توسع وتطوير المشاريع الصغيرة ومتناهية الصغر بسقوف تمويلية تلبي طموحاتك.",
            points: [
              "موافقة سريعة خلال ٢٤ ساعة عمل فقط",
              "فترات سداد مرنة تتراوح بين ٣ إلى ٣٦ شهراً",
              "هامش ربح تنافسي وثابت يبدأ من ٠.٧٥٪ شهرياً",
              "بدون أي خصومات أو رسوم إضافية مخفية عند الصرف",
              "استشارات إدارية ومحاسبية مجانية لتطوير أداء عملك",
            ],
            outro:
              "طوّر مشروعك بثقة وراحة بال تامة دون خوف من الديون المرهقة، فنحن شريكك الدائم للنمو والنجاح.",
          },
        },
        {
          id: "pembiayaan-syariah",
          icon: "ShieldCheck",
          badge: "إسلامي",
          title: "التمويل الإسلامي (مرابحة ومضاربة)",
          shortDesc: "حلول تمويلية قائمة على العقود الشرعية الأصيلة، خالية من الربا وتحت إشراف هيئة رقابة شرعية.",
          detail: {
            title: "تفاصيل التمويل الإسلامي",
            description:
              "تسهيلات تمويلية لتملك الأصول أو تشغيل الأعمال وفق مبادئ العدالة والشفافية التامة والبركة.",
            points: [
              "عقود مرابحة ومضاربة واضحة ومتوافقة مع الشريعة",
              "إشراف دقيق من قبل هيئة رقابة شرعية معتمدة",
              "خالية تماماً من شبهات الربا أو الغرر أو الاستغلال",
              "سقوف تمويلية تلبي مختلف المشاريع والاحتياجات",
              "خيارات سداد آلية مريحة وآمنة عبر الحساب",
            ],
            outro:
              "حقق الاستقرار المالي لأسرتك وتجارتك مع باقات التمويل الإسلامي الحلال المليئة بالخير والبركة.",
          },
        },
        {
          id: "dana-talangan",
          icon: "CreditCard",
          badge: "طوارئ",
          title: "تسهيلات السيولة والظروف الطارئة",
          shortDesc: "تمويل فوري لمواجهة النفقات الصحية الطارئة، الرسوم الدراسية، والاحتياجات العاجلة دون تعقيد.",
          detail: {
            title: "تفاصيل تمويل الحالات الطارئة",
            description:
              "حل إسعافي سريع للأعضاء في الأوقات العصيبة دون الحاجة لانتظار الإجراءات البيروقراطية الطويلة.",
            points: [
              "صرف فوري خلال ساعات قليلة بعد التحقق السريع",
              "مبالغ مخصصة لتغطية الظروف العاجلة والمفاجئة",
              "شروط ميسرة تقتصر على إثبات الهوية والعضوية الفعالة",
              "إمكانية السداد المبكر دون أي غرامات إضافية",
              "حماية تأمينية مدمجة لمزيد من الأمان وراحة البال",
            ],
            outro:
              "عندما تقع الظروف غير المتوقعة، تجدنا بجانبك كحزام أمان موثوق يحمي استقرارك العائلي.",
          },
        },
        {
          id: "investasi-proyek",
          icon: "TrendingUp",
          badge: "استثمار",
          title: "المساهمة في مشاريع التعاونية الميدانية",
          shortDesc: "فرصة للأعضاء للمشاركة في مشاريع حقيقية في قطاعات الإنتاج، الخدمات اللوجستية، والأغذية.",
          detail: {
            title: "تفاصيل الاستثمار في المشاريع الحقيقية",
            description:
              "استثمار مباشر في الاقتصاد الحقيقي تديره كوادر مهنية ذات خبرة مع تقارير أداء وميزانيات دورية شفافة.",
            points: [
              "مشاريع ميدانية قائمة ومحققة للجدوى الاقتصادية",
              "توزيعات أرباح نقدية ربع سنوية تدفع للأعضاء",
              "متابعة سير المشاريع مباشرة عبر لوحة تحكم العضو",
              "تنويع ذكي للمخاطر الاستثمارية عبر عدة قطاعات",
              "مساهمة فعالة في خلق وظائف جديدة وتنمية الاقتصاد المحلي",
            ],
            outro:
              "كن شريكاً ومستفيداً في مشاريع تنموية ملموسة تبنى على التعاون والتضامن المثمر.",
          },
        },
        {
          id: "pendidikan-finansial",
          icon: "BookOpen",
          badge: "تثقيف",
          title: "التثقيف والاستشارات المالية المجانية",
          shortDesc: "ورش عمل مجانية في المحاسبة، تخطيط ميزانية الأسرة، وجلسات استشارية فردية لجميع الأعضاء.",
          detail: {
            title: "تفاصيل التثقيف والاستشارات المالية",
            description:
              "برامج تدريبية وتوعوية تضمن امتلاك كل عضو لمهارات التخطيط المالي السليم وبناء مستقبل آمن.",
            points: [
              "ورش شهرية يقدمها خبراء تخطيط مالي معتمدون",
              "أدوات وبرامج محاسبية رقمية مجانية لأصحاب المتاجر",
              "جلسات استشارية فردية سرية لإعادة تنظيم الديون والالتزامات",
              "حملات توعوية للوقاية من المعاملات الاحتيالية والتطبيقات المشبوهة",
              "شبكة تواصل وتبادل خبرات عملية بين رواد الأعمال",
            ],
            outro:
              "الثروة الحقيقية تبدأ من الوعي المالي الصحيح. نحن هنا لنرشدك في كل خطوة نحو الاستقلال المالي.",
          },
        },
      ],
    },
    contact: {
      title: "اتصل بنا",
      subtitle: "هل لديك استفسار حول العضوية، برامج الادخار، أو التمويل؟ فريقنا المتخصص مستعد لخدمتك ومساعدتك دائماً.",
      addressLabel: "عنوان المقر الرئيسي",
      address: "برج غراها أمانة مانديري، الطابق ٣-٥، شارع سوديرمان ٤٥، جاكرتا الجنوبية ١٢١٩٠",
      emailLabel: "البريد الإلكتروني الرسمي",
      email: "support@amanahmandiri-koperasi.co.id",
      phoneLabel: "الهاتف وخدمة واتساب",
      phone: "+62 21 555-8900 / +62 812-3456-7890",
      hoursLabel: "ساعات العمل الرسمية",
      hours: "الإثنين - الجمعة: ٠٨:٠٠ - ١٧:٠٠ | السبت: ٠٨:٣٠ - ١٢:٣٠",
      form: {
        heading: "أرسل استفسارك / نموذج التسجيل الأولي",
        subheading: "سيتم مزامنة بياناتك مباشرة وبأمان مع نظام الإدارة الداخلي لدينا.",
        nameLabel: "الاسم الكامل (حسب بطاقة الهوية)",
        namePlaceholder: "مثال: أحمد عبد الله المحمد",
        emailLabel: "البريد الإلكتروني المعتمد",
        emailPlaceholder: "مثال: ahmad@email.com",
        phoneLabel: "رقم الجوال أو واتساب",
        phonePlaceholder: "مثال: ٠٨١٢٣٤٥٦٧٨٩٠",
        serviceLabel: "الخدمة المطلوبة",
        servicePlaceholder: "اختر الخدمة المناسبة...",
        messageLabel: "تفاصيل الاستفسار أو الرسالة",
        messagePlaceholder: "يرجى كتابة متطلباتك أو استفسارك بالتفصيل هنا...",
        submitBtn: "إرسال الرسالة الآن",
        sendingBtn: "جارٍ إرسال البيانات...",
        successMsg: "شكراً لك! تم استلام رسالتك وحفظها بنجاح في نظامنا. سيتواصل معك ممثلنا في أقرب وقت.",
        errorMsg: "عذراً، حدث خطأ أثناء إرسال البيانات. يرجى المحاولة لاحقاً أو مراسلتنا مباشرة عبر واتساب.",
      },
    },
    footer: {
      brand: "تعاونية أمانة مانديري المالية",
      tagline: "تعاونية مالية موثوقة، رائدة، وتعمل لخير وازدهار الجميع.",
      desc: "كيان مالي تعاوني مرخص وقانوني رقم 503/BH/KOP-DKI/2018. ملتزمون بتقديم خدمات مالية مهنية وأمينة تخدم مصلحة المجتمع.",
      quickLinks: "روابط سريعة",
      servicesTitle: "خدماتنا الرئيسية",
      contactTitle: "بيانات التواصل",
      rights: "جميع الحقوق محفوظة ومحمية بموجب القانون.",
      privacy: "سياسة الخصوصية",
      terms: "الشروط والأحكام",
      disclaimer: "مدخرات الأعضاء محمية عبر صندوق احتياطي السيولة والتأمين الداخلي المعتمد للتعاونية.",
    },
  },

  fr: {
    navbar: {
      brand: "Coopérative Amanah Mandiri",
      home: "Accueil",
      about: "À Propos",
      services: "Services",
      whyUs: "Pourquoi Nous",
      contact: "Contact",
      langSelect: "Choisir la Langue",
      themeToggle: "Changer de Thème",
      memberPortal: "Portail Membre",
    },
    hero: {
      badge: "Coopérative Financière Officiellement Enregistrée & Agréée",
      tagline: "Économie d'Entraide Propulsée par le Numérique",
      title: "Des Solutions Financières Durables pour Notre Avenir Commun",
      slogan: "Grandir Ensemble, Prospérité pour Tous",
      subtitle:
        "Nous proposons des services d'épargne et de crédit islamiques et conventionnels, sécurisés et transparents, grâce à une technologie numérique moderne pour l'épanouissement de tous les membres.",
      ctaPrimary: "Devenir Membre",
      ctaSecondary: "Découvrir les Services",
      stats: [
        { label: "Membres Actifs", value: "25 000+" },
        { label: "Actifs Gérés", value: "+10M $ USD" },
        { label: "Taux de Créances Douteuses", value: "< 0,8%" },
        { label: "Dividende Annuel (2025)", value: "12,4%" },
      ],
      previewCard: {
        badge: "Grand Livre Intelligent & Dividendes",
        simTitle: "Simulateur Financier du Membre",
        depositLabel: "Épargne à Terme",
        projectedReturn: "Rendement Annuel Estimé",
        securityBadge: "Chiffrement 256 bits",
        accountStatus: "Statut: Membre Certifié",
        codeSnippetTitle: "cooperativeLedger.ts",
      },
    },
    about: {
      title: "À Propos de Nous",
      subtitle: "Mieux Connaître la Coopérative Financière Amanah Mandiri",
      lead:
        "Fondée sur l'esprit familial et la solidarité mutuelle, la Coopérative Financière Amanah Mandiri se consacre à bâtir un écosystème financier inclusif, équitable et transparent au service des PME et de la communauté.",
      visionTag: "Notre Vision",
      visionText:
        "Être la coopérative financière moderne de référence au niveau national, compétitive, autonome et digne de confiance pour la prospérité de ses membres.",
      missionTag: "Notre Mission",
      missions: [
        "Offrir des solutions de financement abordables, rapides et accessibles aux micro et petites entreprises.",
        "Développer des technologies financières numériques intégrées assurant confort et sécurité à chaque transaction.",
        "Garantir une gouvernance coopérative transparente et juste par une répartition optimale des dividendes.",
        "Éduquer la communauté à la gestion financière saine et à l'autonomie économique.",
      ],
      valuesTitle: "Valeurs Fondamentales",
      values: [
        { title: "Intégrité", desc: "Respecter scrupuleusement la confiance accordée dans la gestion des fonds des sociétaires." },
        { title: "Transparence", desc: "Accès public et continu aux bilans financiers et aux répartitions des bénéfices." },
        { title: "Innovation", desc: "Intégrer les technologies de pointe pour accélérer les services et réduire les risques." },
        { title: "Solidarité", desc: "Privilégier la coopération collective pour une prospérité économique partagée." },
      ],
    },
    whyUs: {
      title: "Pourquoi Nous Choisir ?",
      subtitle: "Notre engagement constant à offrir les plus hauts standards de service financier.",
      items: [
        {
          number: "01",
          title: "Intérêts Justes & Dividendes Compétitifs",
          desc: "Taux de prêt équitables et redistribution attrayante des bénéfices annuels aux sociétaires.",
        },
        {
          number: "02",
          title: "Numérisation Complète & Transparence",
          desc: "Consultation des soldes, demandes de crédit et bilans comptables à tout moment sur votre mobile.",
        },
        {
          number: "03",
          title: "Sécurité des Actifs Garantie",
          desc: "Gestion des risques éprouvée sous contrôle d'un conseil d'experts et chiffrement de qualité bancaire.",
        },
        {
          number: "04",
          title: "Soutien Concret aux Entrepreneurs",
          desc: "Au-delà du capital, nous proposons du mentorat d'affaires et un réseau d'échange inter-membres.",
        },
      ],
    },
    advantages: {
      title: "Pourquoi Nous Choisir ?",
      subtitle: "Notre engagement constant à offrir les plus hauts standards de service financier.",
      items: [
        {
          number: "01",
          title: "Intérêts Justes & Dividendes Compétitifs",
          desc: "Taux de prêt équitables et redistribution attrayante des bénéfices annuels aux sociétaires.",
        },
        {
          number: "02",
          title: "Numérisation Complète & Transparence",
          desc: "Consultation des soldes, demandes de crédit et bilans comptables à tout moment sur votre mobile.",
        },
        {
          number: "03",
          title: "Sécurité des Actifs Garantie",
          desc: "Gestion des risques éprouvée sous contrôle d'un conseil d'experts et chiffrement de qualité bancaire.",
        },
        {
          number: "04",
          title: "Soutien Concret aux Entrepreneurs",
          desc: "Au-delà du capital, nous proposons du mentorat d'affaires et un réseau d'échange inter-membres.",
        },
      ],
    },
    services: {
      title: "Nos Services Financiers",
      subtitle: "Des solutions d'épargne, de financement et d'investissement créées pour répondre à vos objectifs de vie et d'affaires.",
      clickDetail: "Cliquez pour voir les détails & conditions",
      modalClose: "Fermer",
      items: [
        {
          id: "simpanan-sukarela",
          icon: "Wallet",
          badge: "Épargne",
          title: "Épargne Libre & Dépôts à Terme",
          shortDesc: "Comptes d'épargne souples avec rendements attrayants et intérêts crédités chaque mois sur votre compte.",
          detail: {
            title: "Détails de l'Épargne & Dépôts à Terme",
            description:
              "Une formule d'épargne structurée offrant une totale tranquillité pour faire fructifier votre capital en toute sécurité.",
            points: [
              "Dépôt initial très accessible",
              "Aucun frais de tenue de compte mensuel",
              "Rendement annuel jusqu'à 8,5% pour les dépôts bloqués",
              "Retraits numériques rapides et simples via votre espace",
              "Certificats de dépôt officiels garantis par la coopérative",
            ],
            outro:
              "Commencez à épargner dès aujourd'hui et profitez d'une rémunération supérieure aux banques traditionnelles.",
          },
        },
        {
          id: "pembiayaan-umkm",
          icon: "Store",
          badge: "Crédit",
          title: "Financement des PME & Micro-Entreprises",
          shortDesc: "Prêts pour fonds de roulement avec délais d'approbation express et échéances flexibles pour entrepreneurs.",
          detail: {
            title: "Détails du Financement PME",
            description:
              "Spécialement conçu pour booster la croissance des micro, petites et moyennes entreprises avec un soutien adapté.",
            points: [
              "Décision rapide sous 24 heures ouvrées",
              "Durées de remboursement flexibles de 3 à 36 mois",
              "Taux d'intérêt modéré et transparent dès 0,75% par mois",
              "Aucun frais caché retenu sur le décaissement",
              "Assistance comptable et conseils de gestion d'entreprise offerts",
            ],
            outro:
              "Développez votre activité en toute sérénité. Nous sommes le partenaire dévoué de votre réussite économique.",
          },
        },
        {
          id: "pembiayaan-syariah",
          icon: "ShieldCheck",
          badge: "Finance Islamique",
          title: "Financement Islamique (Mourabaha & Moudaraba)",
          shortDesc: "Des solutions éthiques conformes aux préceptes de la finance islamique, sans usure (riba), certifiées par un comité dédié.",
          detail: {
            title: "Détails du Financement Islamique",
            description:
              "Facilités d'acquisition d'actifs ou de fonds de roulement basées sur l'équité, l'honnêteté et le partage des profits.",
            points: [
              "Contrats Mourabaha et Moudaraba strictement conformes",
              "Supervision rigoureuse par un Comité de Conformité Sharia agréé",
              "Exempt d'usure (riba), d'incertitude (gharar) ou de spéculation",
              "Plafonds de crédit adaptés aux ambitions de votre projet",
              "Prélèvements automatiques programmés simples et sécurisés",
            ],
            outro:
              "Garantissez la sérénité financière de vos proches et de votre entreprise grâce à des solutions financières éthiques.",
          },
        },
        {
          id: "dana-talangan",
          icon: "CreditCard",
          badge: "Urgence",
          title: "Fonds de Secours & Trésorerie d'Urgence",
          shortDesc: "Assistance liquide immédiate pour frais de santé, scolarité ou imprévus familiaux avec vérification simplifiée.",
          detail: {
            title: "Détails du Fonds d'Urgence",
            description:
              "Une solution d'assistance rapide en cas de coup dur, sans les lenteurs des circuits bancaires ordinaires.",
            points: [
              "Déblocage ultra-rapide en quelques heures après vérification",
              "Lignes de crédit d'urgence pour faire face aux imprévus",
              "Formalités allégées : pièce d'identité et carte de sociétaire",
              "Remboursement anticipé possible sans aucune pénalité",
              "Protection et prévoyance intégrées pour la famille",
            ],
            outro:
              "Les urgences n'attendent pas. Notre coopérative constitue le filet de sécurité protecteur de votre foyer.",
          },
        },
        {
          id: "investasi-proyek",
          icon: "TrendingUp",
          badge: "Investissement",
          title: "Participation aux Projets Coopératifs",
          shortDesc: "Opportunité d'investir directement dans l'économie réelle : filières agroalimentaires, logistique et immobilier solidaire.",
          detail: {
            title: "Détails de l'Investissement Participatif",
            description:
              "Prise de participation directe dans des projets concrets gérés par des professionnels avec reddition de comptes périodique.",
            points: [
              "Projets concrets audités et rentables sur le terrain",
              "Dividendes versés trimestriellement aux souscripteurs",
              "Suivi de l'évolution des chantiers sur votre portail membre",
              "Diversification des risques sur des portefeuilles équilibrés",
              "Soutien direct à la création d'emplois locaux et durables",
            ],
            outro:
              "Soyez à la fois investisseur et bénéficiaire des fleurons économiques locaux fondés sur la solidarité.",
          },
        },
        {
          id: "pendidikan-finansial",
          icon: "BookOpen",
          badge: "Formation",
          title: "Conseil & Éducation Financière Gratuite",
          shortDesc: "Ateliers de gestion budgétaire, tenue de caisse et entretiens de santé financière offerts à tous les membres.",
          detail: {
            title: "Détails de l'Éducation Financière",
            description:
              "Des sessions d'accompagnement pour permettre à chacun de développer une autonomie financière pérenne.",
            points: [
              "Webinaires mensuels animés par des conseillers financiers agréés",
              "Logiciel de comptabilité simplifié offert aux commerçants",
              "Consultations privées gratuites pour l'optimisation budgétaire",
              "Campagnes de prévention contre les pièges du crédit abusif",
              "Réseautage et partages d'expériences entre membres",
            ],
            outro:
              "La prospérité durable naît d'une bonne culture financière. Nous sommes à vos côtés pour vous guider pas à pas.",
          },
        },
      ],
    },
    contact: {
      title: "Contactez-Nous",
      subtitle: "Des questions sur l'adhésion, les formules d'épargne ou de crédit ? Nos conseillers sont à votre entière disposition.",
      addressLabel: "Adresse du Siège Social",
      address: "Tour Graha Amanah Mandiri, 3e-5e Ét., Jl. Sudirman Kav. 45, Jakarta Sud 12190",
      emailLabel: "Courriel Officiel",
      email: "contact@amanahmandiri-koperasi.co.id",
      phoneLabel: "Ligne Téléphonique & WhatsApp",
      phone: "+62 21 555-8900 / +62 812-3456-7890",
      hoursLabel: "Heures d'Ouverture",
      hours: "Lundi - Vendredi: 08h00 - 17h00 | Samedi: 08h30 - 12h30",
      form: {
        heading: "Envoyer un Message / Pré-Inscription",
        subheading: "Vos données seront directement et confidentiellement synchronisées avec notre administration.",
        nameLabel: "Nom Complet (selon pièce d'identité)",
        namePlaceholder: "ex: Jean-Luc Martin",
        emailLabel: "Adresse Courriel Valide",
        emailPlaceholder: "ex: jean.martin@email.com",
        phoneLabel: "Numéro de Mobile / WhatsApp",
        phonePlaceholder: "ex: +62 812 3456 7890",
        serviceLabel: "Service Souhaité",
        servicePlaceholder: "Sélectionnez un service...",
        messageLabel: "Message / Précisions",
        messagePlaceholder: "Décrivez brièvement vos besoins d'emprunt, d'épargne ou toute autre question...",
        submitBtn: "Envoyer le Message",
        sendingBtn: "Transmission en cours...",
        successMsg: "Merci ! Votre message a bien été enregistré dans nos serveurs. Notre équipe vous recontactera très rapidement.",
        errorMsg: "Désolé, une erreur est survenue lors de l'envoi. Veuillez réessayer ou nous joindre directement par WhatsApp.",
      },
    },
    footer: {
      brand: "Coopérative Amanah Mandiri",
      tagline: "Coopérative Financière de Confiance, Solidaire et Performante.",
      desc: "Institution financière légale agréée sous le numéro 503/BH/KOP-DKI/2018. Engagée dans une gestion professionnelle, éthique et équitable au profit de tous ses membres.",
      quickLinks: "Liens Rapides",
      servicesTitle: "Services Clés",
      contactTitle: "Nous Contacter",
      rights: "Tous droits réservés.",
      privacy: "Politique de Confidentialité",
      terms: "Conditions Générales",
      disclaimer: "L'épargne des sociétaires est protégée par le fonds de réserve interne et les statuts légaux de la coopérative.",
    },
  },
};

/**
 * Daftar konfigurasi bahasa yang didukung oleh aplikasi.
 */
export const supportedLanguages = [
  { code: "id", name: "Bahasa Indonesia", flag: "🇮🇩", dir: "ltr" },
  { code: "en", name: "English", flag: "🇬🇧", dir: "ltr" },
  { code: "ar", name: "العربية", flag: "🇸🇦", dir: "rtl" },
  { code: "fr", name: "Français", flag: "🇫🇷", dir: "ltr" },
];

