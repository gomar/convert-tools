#!/bin/tcsh -f

foreach file ($*)
  set name = $file:r
  convert -density 300 -quality 100 $name.pdf $name.png
end
