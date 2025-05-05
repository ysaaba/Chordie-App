# Plan: Reorder Components for Mobile View (Revised - Mobile-First)

## Objective

Change the visual stacking order of components *only* on mobile screens (smaller than `lg` breakpoint in Tailwind). The desired mobile order is:

1.  Chord Diagram
2.  Practice Controls
3.  Practice Mode Selector
4.  Chord Set / Scale Selector

The existing two-column layout on larger screens (desktop) should be recreated using explicit grid placement.

## File to Modify

*   `src/App.tsx`

## Method: Mobile-First Structure with Desktop Grid Placement

1.  **Restructure HTML:**
    *   Locate the main grid container (`<div class="grid grid-cols-1 lg:grid-cols-12 ...">`).
    *   Remove the two intermediate column divs (`<div class="lg:col-span-8 ...">` and `<div class="lg:col-span-4 ...">`).
    *   Place the four key component blocks (Chord Diagram, Practice Controls, Practice Mode Selector, Chord/Scale Selectors) directly inside the main grid container. Wrap the individual components (`PracticeControls`, `PracticeModeSelector`) in `div`s if they aren't already.
    *   **Crucially, ensure the source code order of these four blocks matches the desired mobile order.**
        1.  Chord Diagram block (`div`)
        2.  Practice Controls wrapper (`div`)
        3.  Practice Mode Selector wrapper (`div`)
        4.  Chord/Scale Selector block (`div`)

2.  **Apply Desktop Grid Placement:**
    *   Use `lg:` prefixed grid classes (`lg:col-span-*`, `lg:col-start-*`, `lg:row-start-*`) on the wrapper `div`s of these four blocks to position them correctly for the two-column desktop layout.
        *   Chord Diagram block: `lg:col-span-8 lg:row-start-1`
        *   Practice Controls wrapper: `lg:col-start-9 lg:col-span-4 lg:row-start-2`
        *   Practice Mode Selector wrapper: `lg:col-start-9 lg:col-span-4 lg:row-start-1`
        *   Chord/Scale Selector block: `lg:col-span-8 lg:row-start-2`

## Expected Result

*   On mobile (`grid-cols-1`), items stack vertically according to their source order, achieving the desired layout.
*   On large screens (`lg:`), the `lg:col-*` and `lg:row-*` classes explicitly place items into the grid, recreating the original two-column desktop appearance.

## Visual Summary (Conceptual)

```mermaid
graph TD
    subgraph Mobile View (Single Column, Source Order)
        A[Chord Diagram] --> B(Practice Controls);
        B --> C(Practice Mode Selector);
        C --> D(Chord/Scale Selectors);
    end

    subgraph Desktop View (Two Columns, Explicit Grid Placement)
        subgraph Grid Area (Row 1)
            A2[Chord Diagram<br/>(lg:col-span-8 lg:row-start-1)]
            C2(Practice Mode Selector<br/>(lg:col-start-9 lg:col-span-4 lg:row-start-1))
        end
        subgraph Grid Area (Row 2)
            D2(Chord/Scale Selectors<br/>(lg:col-span-8 lg:row-start-2))
            B2(Practice Controls<br/>(lg:col-start-9 lg:col-span-4 lg:row-start-2))
        end
        A2 --> D2;
        C2 --> B2;
    end