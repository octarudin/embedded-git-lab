# Game Design

## Core loop
1. Pemain membaca briefing.
2. Pemain mengobservasi state dengan command.
3. Pemain menjalankan tindakan.
4. Simulator memberikan output dan state baru.
5. Objective dievaluasi.
6. Objective baru → checkpoint baru.
7. Semua objective selesai → XP diberikan.

## UX philosophy
Game menampilkan command line sebagai alat utama, tetapi state repository selalu dapat dilihat untuk membantu pembentukan mental model. Challenge mengurangi scaffolding, bukan mengubah aturan engine.

## Failure model
Tidak ada game over. Command invalid menghasilkan feedback, state aman tetap tersimpan, dan pemain dapat kembali ke checkpoint/reset misi.

## Progression
Level 1 memperkenalkan state dasar; Level 2 menambah branch/remote; Level 3 recovery; Level 4 GitHub entity; Level 5 release artifact.
