# Feature Communication

## TL;DR

- Features can depend on other features when there is a clear business relationship.
- They should communicate through explicit file-level imports.
- In this repo, `bookings` depends on `rooms`, while `rooms` stays independent.

## High-Level Overview

Feature communication is about how one feature uses another feature's code without tightly coupling itself to the other feature's internals. The goal is to allow integration while preserving boundaries.

## The Main Rule

When one feature needs data or behavior from another feature:

- import the exact file that owns the type or behavior
- keep those cross-feature imports narrow and intentional
- do not add a feature `index.ts` as a catch-all export surface

This keeps dependencies explicit and easy to trace.

## Example: `bookings` Communicating With `rooms`

The connection happens through `roomId` and direct imports from the `rooms` feature.

In `bookings/api/create-booking.ts`:

- `bookings` imports `getRooms` from `features/rooms/api/get-rooms`
- it loads room data
- it finds the selected room using `payload.roomId`
- it applies booking rules using room information

That lets `bookings` answer questions like:

- does this room exist?
- does this booking overlap an existing schedule?
- does this room require approval for larger meetings?

## Dependency Direction

The dependency direction matters:

- `bookings -> rooms`
- not `rooms -> bookings`

Why this is useful:

- `rooms` remains a reusable foundational feature
- `bookings` becomes the orchestration layer that builds workflow rules on top of room data
- the base feature stays simpler and easier to reuse elsewhere

## Explicit Import Example

Use direct imports like these instead of feature barrels:

- `features/rooms/api/get-rooms`
- `features/rooms/domain/room`
- `features/bookings/pages/bookings.page`

## Why This Communication Style Helps

- it keeps dependencies explicit
- it makes refactors safer
- it makes it easier to see what one feature actually uses from another
- it avoids oversized catch-all export files

## Practical Guideline

When adding a new feature:

- start by keeping logic inside the feature
- if another feature needs something, import the specific file directly
- keep cross-feature imports limited to stable, well-named modules
- if many features need the same truly generic code, then consider moving it to `common`
