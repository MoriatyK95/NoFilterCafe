/*
 * Chip — our React version of the Figma "Chip" component.
 *
 * The Figma component set has:
 *   State = Default | Selected   (VARIANT property)
 *   Label = "Chip"               (TEXT property)
 *
 * Again we mirror the Figma API: `selected` maps to State, `children`
 * maps to Label. A future Chip.figma.tsx mapping will be trivial.
 *
 * WHAT'S WRONG IN THIS VERSION (eyeballed):
 *   - 34px tall instead of Figma's 38px
 *   - 14px side padding instead of 18px
 *   - 13px text instead of 14px
 */

import type { ReactNode } from 'react'

export interface ChipProps {
  /** Maps to the Figma variant property `State` (true = Selected) */
  selected?: boolean
  /** Maps to the Figma TEXT property `Label` */
  children: ReactNode
}

export function Chip({ selected = false, children }: ChipProps) {
  return <span className={`chip${selected ? ' chip--selected' : ''}`}>{children}</span>
}
