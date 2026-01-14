## 2024-07-22 - Accessible Table Sorting

**Learning:** Users relying on screen readers or keyboard navigation may not receive adequate feedback when sorting table columns. Standard `onclick` handlers on `<th>` elements are often inaccessible.

**Action:** To improve accessibility, I replaced the `onclick` and `onkeydown` attributes with a `<button>` element inside each table header. This provides native keyboard accessibility. Additionally, I added an `aria-live` region that announces the sort status (e.g., "Sorted by Name, ascending") to screen reader users, ensuring they receive clear feedback on their actions.
