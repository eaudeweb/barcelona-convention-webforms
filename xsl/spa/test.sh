#!/bin/sh
java -jar ../saxon/saxon9.jar \
  -s:./spa_IT_2018_test_sections.xml \
  -o:./spa_output.html \
  -xsl:./spa_transform.xsl \
&& google-chrome-stable ./spa_output.html