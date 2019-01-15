<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xpath-default-namespace="https://dd.info-rac.org/namespaces/4"
        xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
        xmlns:xs="http://www.w3.org/2001/XMLSchema"
        xmlns:local="http://local"
        version="2.0" exclude-result-prefixes="xml">

    <xsl:variable name="labels" select="document('hwp_labels.xml')/labels"/>

    <xsl:function name="local:get_difficulty_label" as="xs:string">
        <xsl:param name="diff" as="xs:string"/>
        <xsl:value-of select="$labels/difficulties/label[value = $diff]/label"/>
    </xsl:function>

    <xsl:function name="local:get_monitoring_when_label" as="xs:string">
        <xsl:param name="code" as="xs:string"/>
        <xsl:value-of select="$labels/monitoring_when/label[code = $code]/value"/>
    </xsl:function>

    <xsl:function name="local:get_monitoring_survey_type" as="xs:string">
        <xsl:param name="code" as="xs:string"/>
        <xsl:value-of select="$labels/monitoring_survey_type/label[code = $code]/value"/>
    </xsl:function>

    <xsl:template match="/">
        <html>
            <head>
                <script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"/>
                <script type="text/javascript" src="../static/js/xsl-js.js"/>
                <link rel="stylesheet" type="text/css" href="../static/css/xsl-style.css"/>
            </head>
            <body>
                <div id="container">
                    <xsl:variable name="root" select="./*[1]"/>

                    <xsl:apply-templates select="//contacting_party"/>
                    <xsl:apply-templates select="//measuresdata"/>
                    <h2>PART II: Generation of hazardous wastes and other wastes</h2>
                    <div class="form-section">
                        <xsl:apply-templates select="//hazardous_wastes_domestic_legislation"/>
                        <!--<xsl:apply-templates select="//total_hazardous_wastes"/>-->
                        <!--<xsl:apply-templates select="//wastes_y"/>-->
                    </div>
                </div>
            </body>
        </html>
    </xsl:template>

    <xsl:template match="contacting_party">

        <xsl:variable name="contacting_party" select="."/>
        <h2>Information on the reporting party</h2>
        <xsl:for-each select="$labels/contacting_party/*">
            <div class="form-section">
                <div class="fs-container fs-title">
                    <xsl:for-each select="./labels/*">
                        <div class="newline-separated">
                            <xsl:value-of select="."/>
                        </div>
                    </xsl:for-each>
                </div>
                <div class="fs-container fs-data">
                    <table class="bilateral bordered">
                        <xsl:for-each select="./*[local-name() != 'labels']">
                            <tr>
                                <th>
                                    <xsl:value-of select="."/>
                                </th>
                                <td>
                                    <xsl:call-template name="simple-print">
                                        <xsl:with-param name="label" select="''"/>
                                        <xsl:with-param name="value" select="$contacting_party/*[local-name() = current()/name()]"/>
                                    </xsl:call-template>
                                </td>
                            </tr>
                        </xsl:for-each>
                    </table>
                </div>
            </div>
        </xsl:for-each>
    </xsl:template>

    <xsl:template match="measuresdata">
        <h2>Part I: Legal and regulatory measures</h2>
        <div class="part-label">Question 1: Has the Party, in accordance with Article 14 of the Barcelona Convention, adopted legislation implementing the provisions of the Hazardous Wastes Protocol as listed in Table I below?</div>
        <div class="form-section">
            <table class="table-measures">
                <div class="fs-container fs-title">
                    Table I: Legal and regulatory measures
                </div>
                <xsl:apply-templates select="./Row" mode="measure"/>
            </table>
        </div>
    </xsl:template>

    <xsl:template match="hazardous_wastes_domestic_legislation">
        <table class="table-measures">
            <div class="fs-container fs-title">
                Table II – Wastes other than those listed in Annex I to the Protocol considered or defined as hazardous wastes under domestic legislation (Article 4 1)
            </div>
            <xsl:apply-templates select="Row" mode="title">
                <xsl:with-param name="label_name" select="'table2'"/>
                <xsl:with-param name="title" select="'title'"/>
                <xsl:with-param name="ignored-nodes" select="('collection_id', 'parent_collection_id', 'title')"/>
            </xsl:apply-templates>
        </table>
    </xsl:template>

    <xsl:template match="total_hazardous_wastes">
        <table class="table-measures">
            <div class="fs-container fs-title">
                Table III - Total amount of generation of hazardous wastes and other wastes (Article 8.2)
            </div>
            <xsl:apply-templates select="Row" mode="simple">
                <xsl:with-param name="label_name" select="'table3'"/>
            </xsl:apply-templates>
        </table>
    </xsl:template>

    <xsl:template match="Row" mode="measure">
        <xsl:for-each select=".">
            <xsl:variable name="col_id" select="collection_id"/>
            <xsl:variable name="article_title" select="$labels/table1/article_titles[collection_id = $col_id]/article_title"/>
            <xsl:variable name="optional" select="$labels/table1/article_titles[collection_id = $col_id]/article_title/@optional"/>
            <xsl:variable name="additional_description" select="$labels/table1/article_titles[collection_id = $col_id]/additional_description"/>

            <tr>
            <td class="bordered">
                <div class="fs-container article-title">
                    <xsl:if test="$optional = 'true'">
                        <span class="optional">Optional: </span>
                    </xsl:if>
                    <xsl:value-of select="$article_title"/>
                </div>
                <div class="fs-container fs-data">
                    <h4><xsl:value-of select="description"/></h4>
                    <xsl:if test="string-length($additional_description) > 0">
                        <p class="additional_description"><xsl:value-of select="$additional_description"/></p>
                    </xsl:if>

                    <xsl:variable name="changes">
                        <xsl:choose>
                            <xsl:when test="changes = 'true'">Yes</xsl:when>
                            <xsl:otherwise>No</xsl:otherwise>
                        </xsl:choose>
                    </xsl:variable>
                    <xsl:call-template name="simple-print">
                        <xsl:with-param name="label" select="'Changes in the information provided in the previous report: '"/>
                        <xsl:with-param name="value" select="$changes"/>
                    </xsl:call-template>

                    <xsl:variable name="status" select="status"/>
                    <xsl:call-template name="simple-print">
                        <xsl:with-param name="label" select="'Status: '"/>
                        <xsl:with-param name="value" select="$labels/statuses/label[status = $status]/label"/>
                    </xsl:call-template>

                    <xsl:call-template name="list-print">
                        <xsl:with-param name="label" select="'Status comments: '"/>
                        <xsl:with-param name="value" select="status_comments"/>
                    </xsl:call-template>

                    <xsl:variable name="difficulties" select="string-join(../../measuredata_difficulty/Row[collection_id = $col_id]/local:get_difficulty_label(difficulty), ', ')"/>
                    <xsl:call-template name="simple-print">
                        <xsl:with-param name="label" select="'Difficulties/Challenges: '"/>
                        <xsl:with-param name="value" select="$difficulties"/>
                    </xsl:call-template>

                    <xsl:call-template name="list-print">
                        <xsl:with-param name="label" select="'Difficulties comments: '"/>
                        <xsl:with-param name="value" select="difficulties_comments"/>
                    </xsl:call-template>
                </div>
            </td>
            </tr>
        </xsl:for-each>
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
        <xsl:param name="label"/>
        <xsl:param name="value"/>
        <div>
            <span class="header">
                <xsl:value-of select="$label"/>
            </span>
            <xsl:choose>
                <xsl:when test="string-length($value) > 0">
                    <xsl:value-of select="$value"/>
                </xsl:when>
                <xsl:otherwise>-</xsl:otherwise>
            </xsl:choose>
        </div>
    </xsl:template>

</xsl:stylesheet>
