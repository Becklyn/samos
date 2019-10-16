2.4.0
=====

*   Added a new global import: `base`.
*   Clean up definitions + CS cleanup.
*   Deprecated `text-overflow`.
*   Added `on-interaction` mixin.
*   Added `svg-child` mixin.
*   Added `inline-svg` mixin.
*   Added (internal) utility functions: `str-replace()`, `url-encode()`.
*   Added `aspect-ratio()` mixin.
*   Added `square()` mixin.


2.3.2
=====

*   Compile to correct CSS list type in `transition` mixin.


2.3.1
=====

*   Added better implementation of default `.content`
    *   Light break: it doesn't support `@content` anymore, but it was never used (and did nothing) anyway.


2.3.0
=====

*   Added `flex-equal-columns` mixin.
*   Added `smooth-scroll` mixin.


2.2.1
=====

*   Fixed a bug in the `import-fonts` mixin, where an invalid path was generated.


2.2.0
=====

*   Added `import-fonts` mixin.


2.1.0
=====

*   The list styling of `ol` is reset as well.
*   The list styling of `ol` and `ul` is set in the `content()` mixin.
*   The hide-text mixin has now an option to set absolute or relative indention.


2.0.0
=====

*   Removed the mixin: `rem-to-px()`.
*   Removed the mixin: `invisible-button()`.
*   Removed the mixin: `navigation-list()`.


1.8.1
=====

*   The hide-text mixin has now an option to set absolute or relative indention. 


1.8.0
=====

*   Added `text-overflow()` mixin.


1.7.0
=====

*   Improved default headline margins in `content` for headlines *inside* the text (and not at the start).
*   Added mixins `flex-fill-width()`, `flex-fill-height()`.


1.6.0
=====

*   Added `content()` mixin.


1.5.0
=====

*   Deprecated the mixin `invisible-button()`.
*   Reset list styling in `reset`.
*   Added `max-width` to reset for `<img>`.
*   Added `svg-color()` mixin, that colors the elements of an SVG according to the default classes.


1.4.0
=====

*   Added new mixin: `centered-container()`.
*   Added the mixin `normalize-to-px()` that replaces `rem-to-px()`.
*   Deprecated the mixin: `rem-to-px()`.
