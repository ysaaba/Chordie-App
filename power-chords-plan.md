# Plan: Add Power Chords to Chordie App

This document outlines the steps to add power chords (E5, A5, D5, G5, C5) to the Chordie application's data source.

## Schema Reference

Based on `src/data/chords/basic.ts`, the `ChordDefinition` interface is:

```typescript
interface ChordDefinition {
  name: string;         // e.g., "A Major"
  positions: number[];  // Fret numbers for EADGBe (-1 for muted)
  fingers: number[];    // Finger numbers for EADGBe (0 for open)
  difficulty: string;   // e.g., "beginner"
}
```

## Implementation Steps

1.  **Create New Data File:** Create `src/data/chords/power.ts`. Define the power chords (E5, A5, D5, G5, C5) using the `ChordDefinition` schema. Ensure fingerings and positions are accurate, referencing [https://www.all-guitar-chords.com/chords/power](https://www.all-guitar-chords.com/chords/power). Assign 'beginner' difficulty.
2.  **Update Chord Index:** Modify `src/data/chords/index.ts` to import and re-export `powerChords` from the new file.
3.  **Update Chord Categories:** Modify `src/data/chords/categories.ts` to add a "Power" category and associate the new chord symbols (E5, A5, etc.) with it.
4.  **Update Chord Sets:** Modify `src/data/chords/sets.ts` to add a "Common Power Chords" set including the new chords.

## Visualization

```mermaid
graph TD
    A[Start] --> B(Create src/data/chords/power.ts);
    B --> C{Define E5, A5, D5, G5, C5};
    C --> D(Update src/data/chords/index.ts);
    D --> E(Update src/data/chords/categories.ts);
    E --> F(Update src/data/chords/sets.ts);
    F --> G[End];

    style B fill:#f9f,stroke:#333,stroke-width:2px
    style D fill:#ccf,stroke:#333,stroke-width:2px
    style E fill:#ccf,stroke:#333,stroke-width:2px
    style F fill:#ccf,stroke:#333,stroke-width:2px