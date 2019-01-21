#!/bin/sh
java -jar ../saxon/saxon9.jar \
  -s:./pep_IT_2018.xml \
  -o:./pep_output.html \
  -xsl:./pep_transform.xsl \
&& google-chrome-stable ./pep_output.html