# Docs Index

## TL;DR

- `common` contains reusable, non-business-specific building blocks.
- `core` contains app wiring such as routes and providers.
- `config` contains app-level configuration.
- `features` contains business modules, and each feature owns its own types, API calls, UI, hooks, and tests.
- Features communicate through explicit file-level imports, not feature barrel files.

## High-Level Overview

This repo uses a feature-oriented structure so related code stays together. Instead of grouping everything globally by file type, each business area owns the pieces it needs. That makes small features easy to keep simple and larger workflows easier to scale without turning the whole app into one giant `components` or `services` directory.

## Docs In This Folder

- `readme.md`: quick overview of the architecture and folder roles.
- `structure.md`: folder-by-folder explanation of responsibilities and conventions.
- `communication.md`: how features communicate, including the `bookings -> rooms` example.

## Structure Snapshot

```text
src/
  common/
  config/
  core/
  docs/
  features/
    auth/
    rooms/
    bookings/
```

## When To Read What

- Read `structure.md` to understand where new code should go.
- Read `communication.md` to understand how one feature should depend on another.
