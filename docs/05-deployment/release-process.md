# Release Process

1. Pastikan working tree bersih.
2. Update `CHANGELOG.md` dan version `package.json`.
3. Jalankan `npm ci && npm run check`.
4. Commit `chore: release vX.Y.Z`.
5. Buat annotated tag `vX.Y.Z`.
6. Push commit dan tag.
7. Buat GitHub Release dengan ringkasan perubahan.
8. Verifikasi GitHub Pages setelah workflow selesai.
