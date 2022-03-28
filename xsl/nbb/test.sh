#!/bin/sh
java -jar ../saxon/saxon9.jar \
  -s:./National_Baseline_Budget__1.xml \
  -o:./nbb_output.html \
  -xsl:./nbb_transform.xsl \
&& chromium ./nbb_output.html