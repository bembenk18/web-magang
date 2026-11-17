# Magang System

MVP sistem peserta magang dengan stack:
- Frontend: Next.js 16
- Backend: NestJS 12
- Database: PostgreSQL 16
- ORM: Prisma
- Deployment: Docker Compose

## Fitur dasar yang sudah disiapkan
- Struktur monorepo sederhana (`apps/frontend`, `apps/backend`)
- Backend NestJS dengan endpoint:
  - `GET /`
  - `GET /health`
- Frontend landing page untuk status stack
- Prisma schema untuk:
  - user
  - teacher
  - student
  - attendance
  - daily report
- Docker Compose untuk frontend, backend, PostgreSQL

## Jalankan lokal dengan Docker
```bash
cd /root/Magang
docker compose up -d --build
```

## Port
- Frontend: `3000`
- Backend: `3001`
- PostgreSQL: internal container only

## Endpoint cek
- Frontend: `http://localhost:3000`
- Backend: `http://localhost:3001`
- Health: `http://localhost:3001/health`

## Langkah berikutnya
- auth login/logout
- JWT/session auth
- RBAC guard per role
- CRUD siswa/guru
- absensi masuk/pulang
- laporan harian + review guru
- dashboard statistik
