## 2024-07-25 - Accessible Table Sorting Announcements
**Learning:** Users relying on screen readers receive no feedback when sorting a table, making it difficult to understand the current state of the data. A simple `aria-live` region can solve this by announcing the sort changes audibly.
**Action:** For future sortable tables, always include a visually hidden `aria-live="polite"` element. Update its `textContent` within the sorting function to announce the new sort column and direction (e.g., "Sorted by Name, ascending").
