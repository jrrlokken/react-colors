# FIX!

- On SingleColorPalette, only on the xs breakpoint, there is an issue with the COPY button where it doesn't display properly when in the middle of the page
- xs breakpoint, I removed the logo, which was a link home, so now there is no back link on the SingleColorPalette screen.
- Add color name on COPIED modal
- Fix animation transition for COPIED modal
- When we 'Go Back' from a SingleColorPalette to a normal palette page, our 'level' is not preserved, and we are always returned to level=500. I wonder if we can preserve level on back...
