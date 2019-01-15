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
                        <xsl:apply-templates select="//total_hazardous_wastes"/>
                        <xsl:apply-templates select="//wastes_y"/>
                    </div>
                    <h2>PART III: Transboundary movements of hazardous wastes or other wastes</h2>
                    <div class="form-section">
                        <xsl:call-template name="export_hazardous"/>
                        <xsl:call-template name="import_hazardous"/>
                    </div>
                    <h2>PART II: Generation of hazardous wastes and other wastes</h2>
                    <div class="form-section">
                        <xsl:apply-templates select="//disposals_incidents"/>
                        <xsl:apply-templates select="//accidents_during_disposal"/>
                    </div>
                    <xsl:apply-templates select="//enf_measures"/>
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
        <xsl:variable name="total_hazardous_wastes_node" select="node()"/>
        <table class="table-measures">
            <div class="fs-container fs-title">
                <div class="newline-separated border-bottom">Table III - Total amount of generation of hazardous wastes and other wastes (Article 8.2)</div>
                <div class="newline-separated">Total amount of hazardous wastes and other wastes generated (metric tonnes)</div>
            </div>
            <xsl:variable name="table3_elements" select="$labels//table3/element"/>
            <xsl:call-template name="generate-table-part-2">
                <xsl:with-param name="table_elements" select="$table3_elements"/>
                <xsl:with-param name="report_node" select="$total_hazardous_wastes_node"/>
            </xsl:call-template>
        </table>
    </xsl:template>

    <xsl:template match="wastes_y">
        <xsl:variable name="wastes_y_node" select="node()"/>
        <table class="table-measures">
            <div class="fs-container fs-title">
                Table IV - Generation of hazardous wastes and other wastes by Y-categories
            </div>
            <xsl:variable name="table4_elements" select="$labels//table4/element"/>
            <xsl:call-template name="generate-table-part-2">
                <xsl:with-param name="table_elements" select="$table4_elements"/>
                <xsl:with-param name="report_node" select="$wastes_y_node"/>
            </xsl:call-template>
        </table>
    </xsl:template>

    <xsl:template name="generate-table-part-2">
        <xsl:param name="table_elements"/>
        <xsl:param name="report_node"/>
        <xsl:variable name="part_2_years" select="(2014, 2015, 2016, 2017)"/>

        <xsl:for-each select="$table_elements">
            <xsl:variable name="label_node" select="current()"/>
            <tr>
            <td class="bordered">
                <div class="fs-container article-title border-bottom">
                    <xsl:value-of select="$label_node/title"/>
                    <xsl:if test="string-length($label_node/title_sub) > 0">
                        <div class="title-sub">
                            <xsl:value-of select="$label_node/title_sub"/>
                        </div>
                    </xsl:if>
                </div>

                <div class="fs-container fs-data">
                    <xsl:for-each select="$part_2_years">
                        <xsl:variable name="current_year" select="current()"/>
                        <xsl:variable name="value" select="$report_node[collection_id = $label_node/collection_id and year=$current_year]/hazardous_waste_value"/>

                        <xsl:call-template name="simple-print">
                            <xsl:with-param name="label" select="concat($current_year, ': ')"/>
                            <xsl:with-param name="value" select="$value"/>
                        </xsl:call-template>
                    </xsl:for-each>
                </div>
            </td>
            </tr>
        </xsl:for-each>
    </xsl:template>

    <xsl:template name="export_hazardous">
        <table class="table-measures">
            <div class="fs-container fs-title">
                Table V - Export of hazardous wastes and other wastes
            </div>
            <xsl:call-template name="hazardous_wastes_total">
                <xsl:with-param name="node" select="//export_hazardous_wastes_total"/>
            </xsl:call-template>
            <xsl:call-template name="hazardous_wastes_y">
                <xsl:with-param name="node" select="//export_hazardous_wastes_y"/>
            </xsl:call-template>
        </table>
    </xsl:template>

    <xsl:template name="import_hazardous">
        <table class="table-measures">
            <div class="fs-container fs-title">
                Table VI - Import of hazardous wastes and other wastes
            </div>
            <xsl:call-template name="hazardous_wastes_total">
                <xsl:with-param name="node" select="//import_hazardous_wastes_total"/>
            </xsl:call-template>
            <xsl:call-template name="hazardous_wastes_y">
                <xsl:with-param name="node" select="//import_hazardous_wastes_y"/>
            </xsl:call-template>
        </table>
    </xsl:template>

    <xsl:template name="hazardous_wastes_total">
        <xsl:param name="node"/>
        <xsl:variable name="node_name" select="$node/local-name()"/>
        <xsl:variable name="excluded_nodes" select="('collection_id', 'parent_collection_id')"/>
        <tr>
        <td class="bordered">
            <div class="fs-container fs-data">
                <xsl:for-each select="$node/Row/*[not(local-name() = $excluded_nodes)]">
                    <xsl:variable name="local_name" select="./local-name()"/>
                    <xsl:variable name="lab" select="$labels//table5-6/*[local-name() = $node_name]/*[local-name() = $local_name]/text()"/>

                    <xsl:call-template name="simple-print">
                        <xsl:with-param name="label">
                            <xsl:choose>
                                <xsl:when test="string-length($lab) > 0">
                                    <xsl:value-of select="concat($lab, ': ')"/>
                                </xsl:when>
                                <xsl:otherwise>
                                    <xsl:value-of select="concat($local_name, ': ')"/>
                                </xsl:otherwise>
                            </xsl:choose>
                        </xsl:with-param>
                        <xsl:with-param name="value" select="current()"/>
                    </xsl:call-template>
                </xsl:for-each>
            </div>
        </td>
        </tr>
    </xsl:template>

    <xsl:template name="hazardous_wastes_y">
        <xsl:param name="node"/>
        <xsl:variable name="node_name" select="$node/local-name()"/>
        <xsl:variable name="excluded_nodes" select="('collection_id', 'parent_collection_id', 'title')"/>

        <xsl:for-each select="$node/Row">
            <tr>
            <td class="bordered">
                <div class="fs-container article-title border-bottom">
                    <xsl:variable name="title_label" select="$labels//*[local-name() = $node_name]/title/text()"/>
                    <xsl:choose>
                        <xsl:when test="string-length($title_label) > 0">
                            <xsl:value-of select="concat($title_label, ': ', title)"/>
                        </xsl:when>
                        <xsl:otherwise>
                            <xsl:value-of select="title"/>
                        </xsl:otherwise>
                    </xsl:choose>
                </div>
                <div class="fs-container fs-data">
                    <xsl:for-each select="./*[not(local-name() = $excluded_nodes)]">
                        <xsl:variable name="local_name" select="./local-name()"/>
                        <xsl:variable name="lab" select="$labels//table5-6/*[local-name() = $node_name]/*[local-name() = $local_name]/text()"/>

                        <xsl:call-template name="simple-print">
                            <xsl:with-param name="label">
                                <xsl:choose>
                                    <xsl:when test="string-length($lab) > 0">
                                        <xsl:value-of select="concat($lab, ': ')"/>
                                    </xsl:when>
                                    <xsl:otherwise>
                                        <xsl:value-of select="concat($local_name, ': ')"/>
                                    </xsl:otherwise>
                                </xsl:choose>
                            </xsl:with-param>
                            <xsl:with-param name="value" select="current()"/>
                        </xsl:call-template>
                    </xsl:for-each>
                </div>
            </td>
            </tr>
        </xsl:for-each>
    </xsl:template>

    <xsl:template match="disposals_incidents">
        <table class="table-measures">
            <div class="fs-container fs-title">
                Table VII - Disposals which did not proceed as intended
            </div>
            <xsl:apply-templates select="Row" mode="title">
                <xsl:with-param name="label_name" select="'table7'"/>
                <xsl:with-param name="title" select="'incident_date'"/>
                <xsl:with-param name="ignored-nodes" select="('collection_id', 'parent_collection_id', 'title')"/>
            </xsl:apply-templates>
        </table>
    </xsl:template>

    <xsl:template match="accidents_during_disposal">
        <table class="table-measures">
            <div class="fs-container fs-title">
                Table VIII. Accidents occurring during the transboundary movement and disposal of hazardous wastes and other wastes
            </div>
            <xsl:apply-templates select="Row" mode="title">
                <xsl:with-param name="label_name" select="'table8'"/>
                <xsl:with-param name="title" select="'incident_date_place'"/>
                <xsl:with-param name="ignored-nodes" select="('collection_id', 'parent_collection_id', 'title')"/>
            </xsl:apply-templates>
        </table>
    </xsl:template>

    <xsl:template match="enf_measures">
        <h2>Part V: Enforcement measures</h2>
        <div class="form-section">
            <table class="table-measures">
                <div class="fs-container fs-title">
                    Table VI – Enforcement measures
                </div>
                <xsl:apply-templates select="Row" mode="title">
                    <xsl:with-param name="label_name" select="'table9'"/>
                    <xsl:with-param name="title" select="'title'"/>
                    <xsl:with-param name="ignored-nodes" select="('collection_id', 'parent_collection_id', 'title')"/>
                </xsl:apply-templates>
            </table>
        </div>
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

    <xsl:template match="Row" mode="title">
        <xsl:param name="label_name"/>
        <xsl:param name="title"/>
        <xsl:param name="ignored-nodes"/>
        <xsl:for-each select=".">
            <tr>
            <td class="bordered">
                <div class="fs-container article-title border-bottom">
                    <xsl:variable name="title_label" select="$labels//*[local-name() = $label_name]/*[local-name() = $title]/text()"/>
                    <xsl:choose>
                        <xsl:when test="string-length($title_label) > 0">
                            <xsl:value-of select="concat($title_label, ': ', *[local-name() = $title])"/>
                        </xsl:when>
                        <xsl:otherwise>
                            <xsl:value-of select="*[local-name() = $title]"/>
                        </xsl:otherwise>
                    </xsl:choose>
                </div>
                <div class="fs-container fs-data">
                    <xsl:for-each select="./*[not(local-name() = $ignored-nodes)]">
                        <xsl:variable name="local_name" select="./local-name()"/>
                        <xsl:variable name="lab" select="$labels//*[local-name() = $label_name]/*[local-name() = $local_name]/text()"/>

                        <xsl:call-template name="simple-print">
                            <xsl:with-param name="label">
                                <xsl:choose>
                                    <xsl:when test="string-length($lab) > 0">
                                        <xsl:value-of select="concat($lab, ': ')"/>
                                    </xsl:when>
                                    <xsl:otherwise>
                                        <xsl:value-of select="concat($local_name, ': ')"/>
                                    </xsl:otherwise>
                                </xsl:choose>
                            </xsl:with-param>
                            <xsl:with-param name="value" select="node()"/>
                        </xsl:call-template>
                    </xsl:for-each>
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
