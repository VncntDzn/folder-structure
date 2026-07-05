# Folder Structure

## TL;DR

- Put generic, reusable code in `common`.
- Put app composition in `core`.
- Put business behavior in `features`.
- Keep a feature self-contained before promoting anything to shared code.

## High-Level Overview

This project is organized around business features first, with a few top-level support folders around them. The goal is to keep code close to the behavior it supports while still separating truly shared code and application wiring.

## Top-Level Folders

### `common`

Purpose:
- Shared UI primitives
- Generic hooks
- Layouts
- Utilities

Put code here only when it is reusable across features and does not contain business-specific rules.

Examples:
- buttons and inputs
- date formatting helpers
- generic state hooks like `useDisclosure`

### `config`

Purpose:
- Static app configuration
- Environment-driven settings
- Library setup

This folder should stay focused on configuration, not business logic.

### `core`

Purpose:
- Route composition
- App-wide providers
- Global bootstrapping

This is where the application gets wired together. It should not become a second home for feature logic.

### `features`

Purpose:
- Business-facing modules like `auth`, `rooms`, and `bookings`

Each feature owns the pieces needed to deliver that slice of the product.

## Recommended Feature Shape

Not every feature needs every subfolder, but this is the default pattern:

- `domain`: entities, enums, value objects, business rules
- `api`: HTTP calls or request adapters
- `dtos`: request and response payload shapes
- `hooks`: React-facing orchestration
- `components`: reusable feature UI
- `pages`: route-level composition
- `tests`: feature-local verification
- `mappers`: optional translation between DTOs and domain models
- `guards`: optional route or permission gates

There are no feature-level barrel files in this structure. Imports should point to the specific file that owns the type, hook, page, or API helper being used.

## Why This Structure Helps

- It keeps related code together.
- It helps features grow independently.
- It makes ownership clearer.
- It avoids turning shared folders into dumping grounds.
- It supports both simple and complex features without forcing every feature into the same depth.

## Example Feature Roles

### `auth`

Purpose:
- user entry flows like sign in and sign up
- shared auth types like `User`

This is a small feature family. It shows that not every feature needs heavy layering.

### `rooms`

Purpose:
- CRUD-style room management
- room state and permissions

This is a medium feature. It uses `domain`, `api`, `dtos`, `hooks`, `components`, and `pages`.

### `bookings`

Purpose:
- workflow-driven scheduling
- availability checks
- approval logic
- booking lifecycle rules

This is the complex feature example. It shows how to add richer domain rules, DTO mapping, and cross-feature coordination without changing the whole repo structure.

## Shared vs Feature-Local

Use this rule of thumb:

- If the code is generic and reused, it belongs in `common`.
- If the code understands the business meaning of rooms, bookings, or auth, it belongs in that feature.

Avoid moving code to shared folders too early. Keeping behavior inside the owning feature usually makes the system easier to change.
