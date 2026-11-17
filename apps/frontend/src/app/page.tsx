async function getApiStatus() {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3001";

  try {
    const response = await fetch(`${baseUrl}/health`, {
      cache: "no-store",
    });

    if (!response.ok) {
      return { status: "unreachable", detail: `HTTP ${response.status}` };
    }

    const data = (await response.json()) as { status: string; timestamp: string };
    return { status: data.status, detail: data.timestamp };
  } catch {
    return { status: "unreachable", detail: "backend belum merespons" };
  }
}

const summaryCards = [
  {
    title: "Role sistem",
    value: "4 role",
    detail: "super admin, admin, guru, siswa",
  },
  {
    title: "Absensi",
    value: "Check-in/out",
    detail: "status hadir, terlambat, izin, sakit, alfa",
  },
  {
    title: "Laporan harian",
    value: "1 laporan/hari",
    detail: "aktivitas, hasil, kendala, rencana besok",
  },
];

const menuItems = [
  "Dashboard ringkas per role",
  "Manajemen user dan mapping pembimbing",
  "Absensi masuk dan pulang",
  "Review laporan harian",
  "Rekap dan monitoring periode magang",
];

export default async function Home() {
  const api = await getApiStatus();

  return (
    <main style={{ padding: "32px", maxWidth: 1120, margin: "0 auto" }}>
      <section
        style={{
          display: "grid",
          gap: 16,
          padding: 24,
          border: "1px solid var(--border)",
          borderRadius: 20,
          background: "rgba(15, 23, 42, 0.85)",
          boxShadow: "0 20px 60px rgba(2, 6, 23, 0.45)",
        }}
      >
        <span
          style={{
            width: "fit-content",
            padding: "6px 12px",
            borderRadius: 999,
            background: "var(--primary-soft)",
            color: "var(--primary)",
            fontSize: 13,
            fontWeight: 700,
          }}
        >
          Magang System MVP
        </span>
        <div style={{ display: "grid", gap: 10 }}>
          <h1 style={{ fontSize: 40, lineHeight: 1.1 }}>
            Sistem absensi dan laporan harian peserta magang
          </h1>
          <p style={{ color: "var(--muted)", maxWidth: 760, lineHeight: 1.7 }}>
            Stack: Next.js + NestJS + PostgreSQL + Prisma. Basis sudah docker-ready
            untuk mulai pengembangan modul auth, RBAC, absensi, dan pelaporan.
          </p>
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 12,
            alignItems: "center",
          }}
        >
          <div
            style={{
              padding: "10px 14px",
              borderRadius: 14,
              border: "1px solid var(--border)",
              background: "rgba(15, 23, 42, 0.7)",
            }}
          >
            Backend: <strong>{api.status}</strong>
          </div>
          <div style={{ color: "var(--muted)", fontSize: 14 }}>
            Detail: {api.detail}
          </div>
        </div>
      </section>

      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 16,
          marginTop: 24,
        }}
      >
        {summaryCards.map((card) => (
          <article
            key={card.title}
            style={{
              padding: 20,
              borderRadius: 18,
              border: "1px solid var(--border)",
              background: "rgba(15, 23, 42, 0.78)",
            }}
          >
            <div style={{ color: "var(--muted)", fontSize: 14 }}>{card.title}</div>
            <div style={{ marginTop: 10, fontSize: 24, fontWeight: 700 }}>{card.value}</div>
            <div style={{ marginTop: 8, color: "var(--muted)", lineHeight: 1.6 }}>
              {card.detail}
            </div>
          </article>
        ))}
      </section>

      <section
        style={{
          display: "grid",
          gridTemplateColumns: "1.2fr 0.8fr",
          gap: 16,
          marginTop: 24,
        }}
      >
        <article
          style={{
            padding: 24,
            borderRadius: 18,
            border: "1px solid var(--border)",
            background: "rgba(15, 23, 42, 0.78)",
          }}
        >
          <h2 style={{ fontSize: 22, marginBottom: 14 }}>Cakupan MVP</h2>
          <ul style={{ display: "grid", gap: 12, paddingLeft: 18, color: "var(--muted)" }}>
            {menuItems.map((item) => (
              <li key={item} style={{ lineHeight: 1.6 }}>
                {item}
              </li>
            ))}
          </ul>
        </article>

        <article
          style={{
            padding: 24,
            borderRadius: 18,
            border: "1px solid var(--border)",
            background: "rgba(15, 23, 42, 0.78)",
          }}
        >
          <h2 style={{ fontSize: 22, marginBottom: 14 }}>Entitas inti</h2>
          <div style={{ display: "grid", gap: 10, color: "var(--muted)", lineHeight: 1.6 }}>
            <div>User + role</div>
            <div>Teacher profile</div>
            <div>Student profile</div>
            <div>Attendance</div>
            <div>Daily report</div>
          </div>
        </article>
      </section>
    </main>
  );
}
