# Non-Functional Requirements

- **NFR-01 Security:** tidak mengeksekusi shell, Git, atau GitHub API nyata.
- **NFR-02 Performance:** command simulator terasa instan pada repository state v1.
- **NFR-03 Reliability:** state harus serializable dan dapat dipulihkan dari localStorage.
- **NFR-04 Accessibility:** keyboard-first terminal, focus state jelas, semantic controls, status tidak hanya mengandalkan warna.
- **NFR-05 Compatibility:** browser modern Chrome, Edge, Firefox, Safari.
- **NFR-06 Deployability:** production build berupa static assets untuk GitHub Pages.
- **NFR-07 Maintainability:** mission data terpisah dari engine dan UI; TypeScript strict digunakan.
- **NFR-08 Testability:** engine dan mission catalog memiliki automated tests.
