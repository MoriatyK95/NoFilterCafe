/*
 * Code Connect mapping for the Button component.
 * ---------------------------------------------------------------------------
 * figma.connect(ReactComponent, figmaComponentUrl, { props, example })
 *
 *  - The URL points at the Figma "Button" component SET (node 8:257) in the
 *    NoFilter Cafe file. All six variants (Style x Size) live under it.
 *  - `props` is the dictionary between design and code: it says how Figma's
 *    design properties translate into our React props.
 *  - `example` is the snippet developers see in Dev Mode when they select a
 *    Button instance. Because it's real JSX referencing our real component,
 *    it is always valid, importable, and current.
 *
 * To publish (requires the component set to be published to a team library on
 * an Org/Enterprise plan, plus FIGMA_ACCESS_TOKEN):
 *   npx figma connect publish
 */

import figma from '@figma/code-connect'
import { Button } from '../components/Button'

figma.connect(
  Button,
  'https://www.figma.com/design/TGQ5K9nbtNx7OILfnFL5DQ/NofilterCafe?node-id=8-257',
  {
    props: {
      // Figma VARIANT "Style" -> React prop `variant`.
      // Left: exact Figma variant values. Right: our prop values.
      variant: figma.enum('Style', {
        Primary: 'primary',
        Secondary: 'secondary',
        Ghost: 'ghost',
      }),

      // Figma VARIANT "Size" -> React prop `size`.
      size: figma.enum('Size', {
        Lg: 'lg',
        Md: 'md',
      }),

      // Figma TEXT "Label" -> the text flows straight in as children.
      label: figma.string('Label'),
    },

    // What Dev Mode shows for a selected instance, e.g. Style=Secondary,
    // Size=Md, Label="Sign in"  ->  <Button variant="secondary" size="md">Sign in</Button>
    example: ({ variant, size, label }) => (
      <Button variant={variant} size={size}>
        {label}
      </Button>
    ),
  },
)
