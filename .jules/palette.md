## 2024-07-29 - Use Semantic Buttons for Accessible Sorting

**Learning:** Using non-semantic elements like `div` or `span` with `onclick` handlers for sortable table headers is inaccessible. Screen readers do not announce them as interactive controls, and they are not keyboard-focusable by default. This prevents users relying on assistive technology from understanding and operating the sorting functionality.

**Action:** Always use a `<button>` element within the `<th>` for any sortable table header. This ensures the control is correctly announced by screen readers, is keyboard-focusable, and provides the expected interactive user experience for all users. Additionally, implement an `aria-live` region to announce sort changes audibly.