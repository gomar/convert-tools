#!/bin/tcsh -f

foreach file ($*)
  set name = $file:r
  fixbb $name.eps
  epstopdf $name.eps
  rm $name.eps
end
