#!/bin/bash -f

SAVEIFS=$IFS
IFS=$(echo -en "\n\b")
for file in $*
	do
  		echo $file
  		name="${file%.*}"
  		echo $name
  		sox $name.flac $name.wav
done
IFS=$SAVEIFS
