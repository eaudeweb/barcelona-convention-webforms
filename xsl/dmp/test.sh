#!/bin/sh
java -jar ../saxon/saxon9.jar \
  -s:./dmp_IT_2018.xml \
  -o:./dmp_output.html \
  -xsl:./dmp_transform.xsl \
&& google-chrome-stable ./dmp_output.html