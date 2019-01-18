#!/bin/sh
java -jar ../saxon/saxon9.jar \
  -s:./lbs_IT_2018.xml \
  -o:./lbs_output.html \
  -xsl:./lbs_transform.xsl \
&& google-chrome-stable ./lbs_output.html