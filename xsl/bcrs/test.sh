#!/bin/sh
java -jar ../saxon/saxon9.jar \
  -s:./bcrs_IT_2018_test_data.xml \
  -o:./bcrs_output.html \
  -xsl:./bcrs_transform.xsl \
&& google-chrome-stable ./bcrs_output.html