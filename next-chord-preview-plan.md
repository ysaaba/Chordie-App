# Plan: Implement Next Chord Preview Feature

This document outlines the plan to implement a feature where the current chord is displayed alongside an immediately adjacent preview of the next chord in the sequence. The preview will be visually distinguished and the layout will be responsive.

## I. Enhance `useChordProgression` Hook

*   **File:** `src/hooks/useChordProgression.ts`
*   **Objective:** Calculate and expose the `nextChord`.
*   **Changes:**
    1.  Inside the hook, after `practiceChords` and `currentIndex` are determined, calculate the `nextChord`.
    2.  The logic would be:
        ```typescript
        const nextChordIndex = (currentIndex + 1) % practiceChords.length;
        const nextChord = practiceChords.length > 1 ? practiceChords[nextChordIndex] : null;
        ```
    3.  Add `nextChord` to the object returned by the hook.

## II. Update `App.tsx` to Display Current and Next Chords (with Responsive Design)

*   **File:** `src/App.tsx`
*   **Objective:** Fetch `nextChord` and render it alongside `currentChord`, ensuring responsiveness.
*   **Changes:**
    1.  Destructure `nextChord` from the `useChordProgression()` hook.
    2.  Locate the section where `ChordDiagram` for `currentChord` is rendered.
    3.  Wrap the current `ChordDiagram` and the new preview diagram in a flex container that handles different screen sizes using Tailwind CSS:
        ```html
        {/* Container for current and next chord diagrams */}
        <div className="flex flex-col md:flex-row items-center justify-center md:space-x-4 space-y-4 md:space-y-0">

          {/* Current Chord Diagram */}
          <div className="flex flex-col items-center">
            <ChordDiagram chord={currentChord} />
          </div>

          {/* Next Chord Preview (conditional) */}
          {nextChord && (
            <div className="border border-gray-300 p-2 rounded-lg flex flex-col items-center" style={{ transform: 'scale(0.85)' }}>
              <p className="text-xs font-semibold text-gray-600 mb-1 self-start">Next:</p>
              <ChordDiagram chord={nextChord} />
            </div>
          )}
        </div>
        ```
    *   **Explanation of Responsive Classes:**
        *   `flex-col md:flex-row`: Stacks items vertically by default. On medium screens (`md:`) and larger, it switches to a horizontal layout.
        *   `md:space-x-4`: Adds horizontal spacing between items only on medium screens and up.
        *   `space-y-4 md:space-y-0`: Adds vertical spacing between items by default. Removes vertical spacing on medium screens and up.
    *   The preview will be slightly smaller (`style={{ transform: 'scale(0.85)' }}`), bordered, and include a "Next:" label.

## III. (Optional but Recommended) Refactor `ChordDiagram.tsx` for Size Prop

*   **File:** `src/components/ChordDiagram.tsx`
*   **Objective:** Allow the `ChordDiagram` to be rendered at different sizes more cleanly.
*   **Changes:**
    1.  Add an optional `size` prop to `ChordDiagramProps` (e.g., `size?: 'normal' | 'small'`).
    2.  Conditionally apply scaling or different styling classes within `ChordDiagram.tsx` based on this `size` prop.
    3.  If implemented, the inline `style={{ transform: 'scale(0.85)' }}` in `App.tsx` for the preview would be replaced by passing `size="small"` to its `ChordDiagram` component.

## Visual Plans

### Overall Structure:

```mermaid
graph TD
    subgraph "src/hooks/useChordProgression.ts"
        H1[useChordProgression Hook]
        H1 -- "exports currentChord, nextChord" --> A1
    end

    subgraph "src/App.tsx"
        A1[App Component]
        A1 -- "uses" --> H1
        A1 --> DC[Display Container (flex row)]
        DC --> CDC[Current ChordDiagram <br> chord={currentChord}]
        DC --> NCP[Next Chord Preview Container <br> (bordered, scaled down)]
        NCP --> NCL[Label "Next:"]
        NCP --> NCD[Next ChordDiagram <br> chord={nextChord}]
    end

    subgraph "src/components/ChordDiagram.tsx"
        CD[ChordDiagram Component]
        CD -- "receives 'chord' prop" --> A1
        CD -. "optionally receives 'size' prop" .-> A1
    end

    style H1 fill:#D6EAF8,stroke:#333
    style A1 fill:#E8DAEF,stroke:#333
    style DC fill:#FEF9E7,stroke:#333
    style CDC fill:#D5F5E3,stroke:#333
    style NCP fill:#FDEDEC,stroke:#333
    style NCL fill:#FDEDEC,stroke:#333
    style NCD fill:#D5F5E3,stroke:#333
    style CD fill:#D5F5E3,stroke:#333
```

### Responsive Layout for Chord Display in `App.tsx`:

```mermaid
graph TD
    subgraph "src/App.tsx - Chord Display Area"
        ResponsiveContainer["Responsive Container <br> (flex-col md:flex-row)"]
        ResponsiveContainer --> CurrentChordWrapper["Current Chord Wrapper"]
        CurrentChordWrapper --> CDC[Current ChordDiagram]

        ResponsiveContainer --> NextChordPreviewWrapper["Next Chord Preview Wrapper <br> (conditional, bordered, scaled)"]
        NextChordPreviewWrapper --> NCL[Label 'Next:']
        NextChordPreviewWrapper --> NCD[Next ChordDiagram]
    end

    note right of ResponsiveContainer
        Default (Mobile):
        CurrentChordWrapper
        NextChordPreviewWrapper (below)

        md & up (Desktop):
        CurrentChordWrapper --- NextChordPreviewWrapper (side-by-side)
    endnote

    style ResponsiveContainer fill:#FEF9E7,stroke:#333
    style CurrentChordWrapper fill:#D5F5E3,stroke:#333
    style CDC fill:#D5F5E3,stroke:#333
    style NextChordPreviewWrapper fill:#FDEDEC,stroke:#333
    style NCL fill:#FDEDEC,stroke:#333
    style NCD fill:#D5F5E3,stroke:#333