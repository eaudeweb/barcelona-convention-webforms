#!/bin/sh
java -jar ../saxon/saxon9.jar \
  -s:./op_IT_2018.xml \
  -o:./op_output.html \
  -xsl:./op_transform.xsl \
&& google-chrome-stable ./op_output.html