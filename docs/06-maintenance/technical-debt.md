# Technical Debt

## TD-01 Parser monolitik
`runGitCommand` masih satu modul besar. Target refactor: command registry per family (`branch`, `remote`, `release`) ketika command set bertambah.

## TD-02 Mission functions in source
Objective evaluator adalah function TypeScript sehingga mission tidak dapat langsung di-author dari JSON. Target: predicate DSL/data-driven evaluator.

## TD-03 Simplified graph
Commit hanya memiliki satu parent dalam model v1. Target: multi-parent graph untuk merge visual akurat.

## TD-04 Persistence schema migration
Belum ada versioned migration selain key `v1`. Target: schema version + migration layer sebelum v2/cloud sync.

## TD-05 E2E coverage
v1 automated test fokus engine/catalog. Target: Playwright end-to-end untuk terminal, persistence, dan mission completion.
