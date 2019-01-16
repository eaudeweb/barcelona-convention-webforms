<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xpath-default-namespace="https://dd.info-rac.org/namespaces/21"
        xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
        xmlns:xs="http://www.w3.org/2001/XMLSchema"
        xmlns:local="http://local"
        version="2.0" exclude-result-prefixes="xml">

    <xsl:variable name="labels" select="document('iczm_labels.xml')/root"/>

    <xsl:template match="/">
        <html>
            <head>
                <link rel="stylesheet" type="text/css" href="../static/css/xsl-style.css"/>
            </head>
            <body>
                <div id="container">
                    <xsl:call-template name="part_I"/>
                    <xsl:call-template name="part_II"/>
                    <xsl:call-template name="part_III"/>
                    <xsl:call-template name="part_IV"/>
                    <xsl:call-template name="part_V"/>
                    <xsl:call-template name="part_VI"/>
                </div>
            </body>
        </html>
    </xsl:template>

    <xsl:template name="part_I">
        <xsl:variable name="contacting_party" select="//contacting_party"/>
        <xsl:variable name="label_nodes" select="$labels/contacting_party/*[not(local-name() = 'labels')]"/>

        <h2>PART I - INFORMATION ON THE REPORTING PARTY</h2>
        <div class="form-section">
            <div class="fs-container fs-title">
                <xsl:for-each select="$labels/contacting_party/labels/value">
                    <div class="newline-separated">
                        <xsl:value-of select="current()"/>
                    </div>
                </xsl:for-each>
            </div>
            <div class="fs-container fs-data">
                <table class="bilateral bordered">
                    <xsl:for-each select="$label_nodes">
                        <tr>
                            <th>
                                <xsl:value-of select="current()"/>
                            </th>
                            <td>
                                <xsl:call-template name="simple-print">
                                    <xsl:with-param name="label" select="''"/>
                                    <xsl:with-param name="value" select="$contacting_party/*[local-name() = current()/name()]/text()"/>
                                </xsl:call-template>
                            </td>
                        </tr>
                    </xsl:for-each>
                </table>
            </div>
        </div>
    </xsl:template>

    <xsl:template name="part_II">
        <xsl:call-template name="construct-tab">
            <xsl:with-param name="part-node" select="$labels/tab_2"/>
            <xsl:with-param name="report-root-node" select="./*[1]"/>
        </xsl:call-template>
    </xsl:template>

    <xsl:template name="part_III">
        <xsl:call-template name="construct-tab">
            <xsl:with-param name="part-node" select="$labels/tab_3"/>
            <xsl:with-param name="report-root-node" select="./*[1]"/>
        </xsl:call-template>
    </xsl:template>

    <xsl:template name="part_IV">
        <xsl:call-template name="construct-tab">
            <xsl:with-param name="part-node" select="$labels/tab_4"/>
            <xsl:with-param name="report-root-node" select="./*[1]"/>
        </xsl:call-template>
    </xsl:template>

    <xsl:template name="part_V">
        <xsl:call-template name="construct-tab">
            <xsl:with-param name="part-node" select="$labels/tab_5"/>
            <xsl:with-param name="report-root-node" select="./*[1]"/>
        </xsl:call-template>
    </xsl:template>

    <xsl:template name="part_VI">
        <xsl:call-template name="construct-tab">
            <xsl:with-param name="part-node" select="$labels/tab_6"/>
            <xsl:with-param name="report-root-node" select="./*[1]"/>
        </xsl:call-template>
    </xsl:template>

    <xsl:template name="construct-tab">
        <xsl:param name="part-node"/>
        <xsl:param name="report-root-node"/>

        <h2>
            <xsl:value-of select="$part-node/label"/>
        </h2>
        <div class="form-section">
            <xsl:for-each select="$part-node/data">
                <xsl:variable name="table" select="current()"/>
                <xsl:variable name="report-data-node" select="current()/local-name()"/>

                <table class="table-measures">
                    <div class="fs-container fs-title">
                        <xsl:value-of select="$table/table_label"/>
                    </div>
                    <xsl:for-each select="$table/articles/element">
                        <xsl:variable name="article" select="current()"/>
                        <xsl:variable name="article_title" select="$article/article_title"/>
                        <xsl:variable name="optional" select="$article/optional"/>

                        <tr>
                        <td class="bordered">
                            <div class="fs-container article-title">
                                <xsl:if test="$optional = 'true'">
                                    <span class="optional">Optional: </span>
                                </xsl:if>
                                <xsl:value-of select="$article_title"/>
                            </div>
                            <div class="fs-container fs-data">
                                <xsl:for-each select="$article/article_items/element">
                                    <xsl:call-template name="simple-print">
                                        <xsl:with-param name="label" select="current()/label"/>
                                        <xsl:with-param name="value" select="$report-root-node/*[local-name() = $report-data-node]/Row/*[local-name() = current()/name]"/>
                                    </xsl:call-template>
                                </xsl:for-each>
                            </div>
                        </td>
                        </tr>
                    </xsl:for-each>
                </table>
            </xsl:for-each>
        </div>
    </xsl:template>

    <xsl:template name="construct-form-part">
        <xsl:param name="part-node"/>
        <xsl:param name="report-root-node"/>

        <h2>
            <xsl:value-of select="$part-node/title"/>
        </h2>
        <div class="form-section">
            <xsl:for-each select="$part-node/tables/*">
                <xsl:variable name="table" select="current()"/>
                <xsl:variable name="report-data-node" select="$table/data_node_name"/>

                <table class="table-measures">
                    <div class="fs-container fs-title">
                        <xsl:value-of select="$table/title"/>
                    </div>
                    <xsl:for-each select="$table/article">
                        <xsl:variable name="article" select="current()"/>
                        <xsl:variable name="article_title" select="$article/title"/>
                        <xsl:variable name="optional" select="$article/optional"/>

                        <tr>
                        <td class="bordered">
                            <div class="fs-container article-title">
                                <xsl:if test="$optional = 'true'">
                                    <span class="optional">Optional: </span>
                                </xsl:if>
                                <xsl:value-of select="$article_title"/>
                            </div>
                            <div class="fs-container fs-data">
                                <xsl:for-each select="$article/fields/*">
                                    <xsl:call-template name="simple-print">
                                        <xsl:with-param name="label" select="current()"/>
                                        <xsl:with-param name="value" select="$report-root-node/*[local-name() = $report-data-node]/Row/*[local-name() = current()/local-name()]"/>
                                    </xsl:call-template>
                                </xsl:for-each>
                            </div>
                        </td>
                        </tr>
                    </xsl:for-each>
                </table>
            </xsl:for-each>
        </div>
    </xsl:template>

    <xsl:template name="simple-print">
        <xsl:param name="label"/>
        <xsl:param name="value"/>
        <div class="print-row">
            <span class="header">
                <xsl:value-of select="$label"/>
            </span>
            <span class="value">
                <xsl:choose>
                    <xsl:when test="string-length($value) > 0">
                        <xsl:value-of select="$value"/>
                    </xsl:when>
                    <xsl:otherwise>-</xsl:otherwise>
                </xsl:choose>
            </span>
        </div>
    </xsl:template>

</xsl:stylesheet>
