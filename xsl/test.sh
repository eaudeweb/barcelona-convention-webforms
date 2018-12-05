#!/bin/sh
java -jar ./saxon/saxon9.jar -s:../docs/bcrs_IT_2018_test_data.xml -o:output.html -xsl:transform.xsl && google-chrome-stable output.html