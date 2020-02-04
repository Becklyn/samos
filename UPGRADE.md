2.x to 3.0
==========

*   The mixin `text-overflow` was removed. Use `text-overflow-ellipsis` instead.
*   The text-alignment on buttons, inputs and textareas is now inherited. If you need the previous behavior (probably on
    `<button>` where the text is centered by default) you need to set an explicit text alignment.


1.x to 2.0
==========

*   The mixin `navigation-list()` was removed. Remove the mixin for `<ul>`s or otherwise it must be inlined.
*   The mixin `invisible-button()` was removed. The functionality was moved to the reset, so it can be removed it without any replacement.
*   The mixin `rem-to-px()` was removed. Use `normalize-to-px()` instead.

