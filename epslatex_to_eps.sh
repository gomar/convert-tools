#!/bin/tcsh -f

foreach file ($*)
  set name = $file:r
  latex $name.tex
  dvips -P pdf -E $name.dvi -o $name.eps
  fixbb $name.eps
  epstopdf $name.eps
  rm $name.dvi $name.log $name.aux $name.tex ${name}-inc.eps $name.eps
end
