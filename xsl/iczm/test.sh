#!/bin/sh
java -jar ../saxon/saxon9.jar \
  -s:./ICZM_in_the_Mediterranean__1.xml \
  -o:./iczm_output.html \
  -xsl:./iczm_transform.xsl \
&& google-chrome-stable ./iczm_output.html