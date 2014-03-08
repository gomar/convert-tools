#!/bin/tcsh -f

foreach file ($*)
  set name = $file:r
  pdftops -eps $name.pdf
  rm $name.pdf
  fixbb $name.eps
  epstopdf $name.eps
  rm $name.eps
end
