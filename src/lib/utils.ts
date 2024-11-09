// src/lib/utils.ts

// Example utility function: class names utility (similar to 'classnames' package)
export function cn(...classes: (string | undefined)[]) {
    return classes.filter(Boolean).join(" ");
  }
  