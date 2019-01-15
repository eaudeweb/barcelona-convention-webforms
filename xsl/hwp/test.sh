#!/bin/sh
java -jar ../saxon/saxon9.jar \
  -s:./hwp_IT_2018.xml \
  -o:./hwp_output.html \
  -xsl:./hwp_transform.xsl \
&& google-chrome-stable ./hwp_output.html