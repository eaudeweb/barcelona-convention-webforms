<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xpath-default-namespace="https://dd.info-rac.org/namespaces/4"
        xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
        xmlns:xs="http://www.w3.org/2001/XMLSchema"
        xmlns:local="http://local"
        version="3.0" exclude-result-prefixes="xml">

    <xsl:variable name="labels" select="document('nbb_labels.xml')/labels"/>
    <xsl:variable name="sectors_labels" select="document('sectors_labels.xml')/root"/>

    <xsl:function name="local:get_label" as="xs:string">
        <xsl:param name="name" as="xs:string"/>
        <xsl:param name="value" as="xs:string"/>
        
        <xsl:variable name="label">
            <xsl:choose>
                <xsl:when test="$name = 'sector_id'">
                    <xsl:value-of select="$sectors_labels/element[sector_id = $value]/sector_name"/>
                </xsl:when>
                <xsl:when test="$name = 'subsector_id'">
                    <xsl:value-of select="$sectors_labels/element/subsectors/element[subsector_id = $value]/subsector_name"/>
                </xsl:when>
                <xsl:when test="$name = 'process_id'">
                    <xsl:value-of select="$sectors_labels/element/subsectors/element/processes/element[process_id = $value]/process_name"/>
                </xsl:when>
                <xsl:otherwise>
                    <xsl:value-of select="$labels/*[local-name() = $name]/element[value = $value]/name"/>
                </xsl:otherwise>
            </xsl:choose>
        </xsl:variable>

        <xsl:choose>
            <xsl:when test="string-length($label) > 0">
                <xsl:value-of select="$label"/>
            </xsl:when>
            <xsl:otherwise>
                <xsl:value-of select="$value"/>
            </xsl:otherwise>
        </xsl:choose>
    </xsl:function>

    <xsl:template match="/">
        <html>
            <head>
                <style type="text/css">
                    <![CDATA[ #container { width: 50em; margin: auto; border: solid 1px #CCC; } div.newline-separated + div.newline-separated { margin-top: 1em; } .form-section { border: solid 1px #CCC; border-radius: 1em; background-clip: border-box; background-color: rgb(245, 245, 245); margin: 1em; } .fs-title { background-clip: border-box; border-radius: 1em 1em 0 0; border-bottom: solid 1px #CCC; } .fs-container { padding: 1em; } table { font-size: medium; border-collapse: collapse; width: 100%; } table.bilateral th, table.bilateral td{ padding: 0.2em 1em; text-align: left; width: 15%; } .table-measures { border-collapse: initial !important; border-spacing: 0.5em; } .bordered{ border: solid 1px #CCC; } .padding { padding: 0.5em; } th, td { background-color: white; padding: 0.2em; } th { width: 50%; text-align: right; } .article-title { padding-bottom: 0em; } ul { margin: 0px; } h2 { margin: 0.5em; } h4 { padding: 1em 0em; margin: 0em; border-top: solid 1px #CCC; } ]]>
                </style>
            </head>
            <body>
                <div id="container">
                    <xsl:variable name="root" select="./*[1]"/>
                    <!-- <xsl:value-of select="string-join($root/*/name(.), ', ')"/> -->
                    <xsl:apply-templates select="$root/contacting_party"/>
                    <xsl:variable name="region_ids" select="distinct-values($root/region/region_id)"/>

                    <xsl:for-each select="$region_ids">
                        <xsl:variable name="region_id" select="current()"/>
                        <h2>
                            <xsl:value-of select="$labels/countries//regions/element[region_id = $region_id]/region_name"/>
                        </h2>
                        <xsl:call-template name="basins">
                            <xsl:with-param name="nodes" select="$root/basins[region_id = $region_id]"/>
                        </xsl:call-template>
                        <xsl:apply-templates select="$root/region[region_id = $region_id]/record"/>
                    </xsl:for-each>
                </div>
            </body>
        </html>
    </xsl:template>

    <xsl:template match="contacting_party">
        <xsl:variable name="contacting_party" select="."/>
        <h2>National Baseline Budget Report (NBB)</h2>
        <div class="form-section">
            <div class="fs-container fs-title">
                Contacting party
            </div>
            <div class="fs-container fs-data">
                <table class="bilateral bordered">
                    <xsl:for-each select="./*[local-name() != 'labels']">
                        <tr>
                            <th>
                                <xsl:value-of select="$labels/contacting_party/*[local-name() = current()/name()]"/>
                            </th>
                            <td>
                                <xsl:call-template name="simple-print">
                                    <xsl:with-param name="prefix" select="''"/>
                                    <xsl:with-param name="value" select="$contacting_party/*[local-name() = current()/name()]"/>
                                </xsl:call-template>
                            </td>
                        </tr>
                    </xsl:for-each>
                </table>
            </div>
        </div>
    </xsl:template>

    <xsl:template match="record">
        <xsl:variable name="record" select="."/>
        <div class="form-section">
            <div class="fs-container fs-title">
                <xsl:call-template name="simple-print">
                    <xsl:with-param name="prefix" select="'Pollutant: '"/>
                    <xsl:with-param name="value" select="$record/pollutant_id"/>
                </xsl:call-template>
            </div>
            <div class="fs-container fs-data">
                <table class="bilateral bordered">
                    <xsl:for-each select="$record/*[local-name() != 'pollutant_id']">
                        <tr>
                            <th>
                                <xsl:value-of select="$labels/record/*[local-name() = current()/name()]"/>
                            </th>
                            <td>
                                <xsl:call-template name="simple-print">
                                    <xsl:with-param name="prefix" select="''"/>
                                    <xsl:with-param name="value" select="."/>
                                </xsl:call-template>
                            </td>
                        </tr>
                    </xsl:for-each>
                </table>
            </div>
        </div>
    </xsl:template>

    <xsl:template name="basins">
        <xsl:param name="nodes"/>

        <div class="form-section">
            <div class="fs-container fs-title">
                Hydrological basins
            </div>
            <div class="fs-container fs-data">
                <table class="bilateral bordered">
                    <xsl:for-each select="$nodes/*[local-name() != 'region_id']">
                        <tr>
                            <th>Basin</th>
                            <td>
                                <xsl:call-template name="simple-print">
                                    <xsl:with-param name="prefix" select="''"/>
                                    <xsl:with-param name="value" select="."/>
                                </xsl:call-template>
                            </td>
                        </tr>
                    </xsl:for-each>
                </table>
            </div>
        </div>
    </xsl:template>

    <xsl:template name="list-print">
        <xsl:param name="label"/>
        <xsl:param name="value"/>
        <div>
            <span class="header">
                <xsl:value-of select="$label"/>
            </span>
            <xsl:choose>
                <xsl:when test="string-length($value) > 0">
                    <ul>
                        <li>
                            <xsl:value-of select="$value"/>
                        </li>
                    </ul>
                </xsl:when>
                <xsl:otherwise>-</xsl:otherwise>
            </xsl:choose>
        </div>
    </xsl:template>

    <xsl:template name="simple-print">
        <xsl:param name="prefix"/>
        <xsl:param name="value"/>

        <xsl:variable name="label" select="local:get_label($value/local-name(), $value)"/>
        <div>
            <span class="header">
                <xsl:value-of select="$prefix"/>
            </span>
            <xsl:choose>
                <xsl:when test="string-length($label) > 0">
                    <xsl:value-of select="$label"/>
                </xsl:when>
                <xsl:otherwise>-</xsl:otherwise>
            </xsl:choose>
        </div>
    </xsl:template>

</xsl:stylesheet>
