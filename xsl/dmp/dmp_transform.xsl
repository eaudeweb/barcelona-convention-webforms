<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xpath-default-namespace="https://dd.info-rac.org/namespaces/4"
        xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
        xmlns:xs="http://www.w3.org/2001/XMLSchema"
        xmlns:local="http://local"
        version="2.0" exclude-result-prefixes="xml">

    <xsl:variable name="labels" select="document('dmp_labels.xml')/labels"/>

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
                <link rel="stylesheet" type="text/css" href="../static/css/xsl-style.css"/>
            </head>
            <body>
                <div id="container">
                    <xsl:variable name="root" select="./*[1]"/>
                    <!--<xsl:value-of select="string-join($root/*/name(.), ', ')"/>-->
                    <xsl:apply-templates select="//contacting_party"/>
                    <xsl:apply-templates select="//measuresdata"/>
                    <h2>Part II: Dumping at sea permits and quantities</h2>
                    <div class="form-section">
                        <xsl:apply-templates select="//dumping_at_sea_permits"/>
                        <xsl:apply-templates select="//quantities_dry_weight_of_dredged_material"/>
                    </div>
                    <h2>Part III: Quantities of wastes or other matter for each dump site and coordinates for dump sites</h2>
                    <div class="form-section">
                        <xsl:apply-templates select="//biennieal_summary_wastes"/>
                        <xsl:apply-templates select="//dump_sites_coordinates"/>
                    </div>
                    <xsl:apply-templates select="//monitoring"/>
                    <xsl:apply-templates select="//placement"/>
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
        <div class="part-label">Has the Party, in accordance with Article 14 of the Barcelona Convention, adopted legislation implementing the provisions of the Dumping Protocol, as listed in Table I below?</div>
        <div class="form-section">
            <table class="table-measures">
                <div class="fs-container fs-title">
                    Table I: Legal and regulatory measures
                </div>
                <xsl:apply-templates select="./Row" mode="measure"/>
            </table>
        </div>
    </xsl:template>

    <xsl:template match="dumping_at_sea_permits">
        <table class="table-measures">
            <div class="fs-container fs-title">
                Table 2a . Biennial Summary of Dumping at Sea Permits and Quantities
            </div>
            <xsl:apply-templates select="Row" mode="title">
                <xsl:with-param name="label_name">table2a</xsl:with-param>
                <xsl:with-param name="title" select="'title'"/>
                <xsl:with-param name="ignored-nodes" select="('collection_id', 'parent_collection_id', 'title')"/>
            </xsl:apply-templates>
        </table>
    </xsl:template>

    <xsl:template match="quantities_dry_weight_of_dredged_material">
        <table class="table-measures">
            <div class="fs-container fs-title">
                Table 2b: Quantities in Dry Weight of Dredged Material as specified in Table 2a Conversion factors: Dredged material in volumes (m3) conversion to dry weight, (tons)= ((Wet volume x(100-%moisture)/100) * density of material
            </div>
            <xsl:apply-templates select="Row" mode="simple">
                <xsl:with-param name="label_name">table2b</xsl:with-param>
            </xsl:apply-templates>
        </table>
    </xsl:template>

    <xsl:template match="biennieal_summary_wastes">
        <table class="table-measures">
            <div class="fs-container fs-title">
                Table 3. Biennial Summary of Quantities of Wastes or Other Matter at Sea for Each Dump Site
            </div>
            <xsl:apply-templates select="Row" mode="title">
                <xsl:with-param name="label_name">table3</xsl:with-param>
                <xsl:with-param name="title" select="'dump_site_code'"/>
                <xsl:with-param name="ignored-nodes" select="('collection_id', 'parent_collection_id', 'dump_site_code')"/>
            </xsl:apply-templates>
        </table>
    </xsl:template>

    <xsl:template match="dump_sites_coordinates">
        <table class="table-measures">
            <div class="fs-container fs-title">
                Table 4. Coordinates for Dump Sites
            </div>
            <xsl:apply-templates select="Row" mode="title">
                <xsl:with-param name="label_name">table4</xsl:with-param>
                <xsl:with-param name="title" select="'dump_site_code'"/>
                <xsl:with-param name="ignored-nodes" select="('collection_id', 'parent_collection_id', 'dump_site_code')"/>
            </xsl:apply-templates>
        </table>
    </xsl:template>

    <xsl:template match="monitoring">
        <h2>Part IV: Monitoring</h2>
        <div class="form-section">
            <table class="table-measures">
                <div class="fs-container fs-title">
                    Table 5: Monitoring
                </div>
                <xsl:apply-templates select="./Row" mode="monitoring"/>
            </table>
        </div>
    </xsl:template>

    <xsl:template match="placement">
        <h2>Part V: PLACEMENT (Dumping Protocol, Article 3.4.b)</h2>
        <div class="form-section">
            <table class="table-measures">
                <div class="fs-container fs-title">
                    Table 6: Biennial Summary of Information on Placement for Artificial Reefs
                </div>
                <xsl:apply-templates select="Row" mode="title">
                    <xsl:with-param name="label_name">table6</xsl:with-param>
                    <xsl:with-param name="title" select="'placement_site_code'"/>
                    <xsl:with-param name="ignored-nodes" select="('collection_id', 'parent_collection_id', 'placement_site_code')"/>
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

    <xsl:template match="Row" mode="dumping">
        <xsl:for-each select=".">
            <tr>
            <td class="bordered">
                <div class="fs-container article-title border-bottom padding-fix">
                    <xsl:value-of select="title"/>
                </div>
                <div class="fs-container fs-data">
                    <xsl:call-template name="simple-print">
                        <xsl:with-param name="label" select="'2.2 Type of Permit: '"/>
                        <xsl:with-param name="value" select="permit_type"/>
                    </xsl:call-template>

                    <xsl:call-template name="simple-print">
                        <xsl:with-param name="label" select="'2.3 Waste Category: '"/>
                        <xsl:with-param name="value" select="waste_cateogry"/>
                    </xsl:call-template>

                    <xsl:call-template name="simple-print">
                        <xsl:with-param name="label" select="'2.4 Total Number of New Permits Issued: '"/>
                        <xsl:with-param name="value" select="permits_number_issued"/>
                    </xsl:call-template>

                    <xsl:call-template name="simple-print">
                        <xsl:with-param name="label" select="'2.5.1 Total Quantity of a Waste Category Permitted for Dumping at Sea: '"/>
                        <xsl:with-param name="value" select="waste_quantity_permited"/>
                    </xsl:call-template>

                    <xsl:call-template name="simple-print">
                        <xsl:with-param name="label" select="'2.5.2 Waste Reporting Unit: '"/>
                        <xsl:with-param name="value" select="waste_reporting_unit"/>
                    </xsl:call-template>

                    <xsl:call-template name="simple-print">
                        <xsl:with-param name="label" select="'2.6.1 Total Quantity of a Waste Category Actually Dumped at Sea: '"/>
                        <xsl:with-param name="value" select="waste_quanity_actual"/>
                    </xsl:call-template>

                    <xsl:call-template name="simple-print">
                        <xsl:with-param name="label" select="'2.6.2 Waste Reporting Units: '"/>
                        <xsl:with-param name="value" select="waste_reporting_units"/>
                    </xsl:call-template>

                    <xsl:call-template name="simple-print">
                        <xsl:with-param name="label" select="'2.7 Dumping at Sea Operations Regulated by Other Means: '"/>
                        <xsl:with-param name="value" select="dumping_regulated"/>
                    </xsl:call-template>

                    <xsl:call-template name="list-print">
                        <xsl:with-param name="label" select="'2.8 Notes: '"/>
                        <xsl:with-param name="value" select="notes"/>
                    </xsl:call-template>
                </div>
            </td>
            </tr>
        </xsl:for-each>
    </xsl:template>

    <xsl:template match="Row" mode="monitoring">
        <xsl:for-each select=".">
            <xsl:variable name="col_id" select="collection_id"/>

            <tr>
            <td class="bordered">
                <div class="fs-container article-title border-bottom padding-fix">
                    <xsl:variable name="title_label" select="$labels//table5/dump_site_code_monitore_d/text()"/>
                    <xsl:choose>
                        <xsl:when test="string-length($title_label) > 0">
                            <xsl:value-of select="concat($title_label, ': ', dump_site_code_monitore_d)"/>
                        </xsl:when>
                        <xsl:otherwise>
                            <xsl:value-of select="dump_site_code_monitore_d"/>
                        </xsl:otherwise>
                    </xsl:choose>
                </div>
                <div class="fs-container fs-data">
                    <xsl:variable name="monitoring_conducted_rep_period">
                        <xsl:choose>
                            <xsl:when test="monitoring_conducted_rep_period = 'true'">Yes</xsl:when>
                            <xsl:otherwise>No</xsl:otherwise>
                        </xsl:choose>
                    </xsl:variable>
                    <xsl:call-template name="simple-print">
                        <xsl:with-param name="label" select="concat($labels//table5/monitoring_conducted_rep_period/text(), ': ')"/>
                        <xsl:with-param name="value" select="$monitoring_conducted_rep_period"/>
                    </xsl:call-template>

                    <xsl:variable name="monitoring_when" select="string-join(./field_monitoring_when/local:get_monitoring_when_label(.), ', ')"/>
                    <xsl:call-template name="simple-print">
                        <xsl:with-param name="label" select="concat($labels//table5/field_monitoring_when/text(), ': ')"/>
                        <xsl:with-param name="value" select="$monitoring_when"/>
                    </xsl:call-template>
                    <xsl:call-template name="simple-print">
                        <xsl:with-param name="label" select="'Comments: '"/>
                        <xsl:with-param name="value" select="field_monitoring_when_comments"/>
                    </xsl:call-template>

                    <xsl:variable name="monitoring_survey_type" select="string-join(./field_monitoring_survey_type/local:get_monitoring_survey_type(.), ', ')"/>
                    <xsl:call-template name="simple-print">
                        <xsl:with-param name="label" select="concat($labels//table5/field_monitoring_survey_type/text(), ': ')"/>
                        <xsl:with-param name="value" select="$monitoring_survey_type"/>
                    </xsl:call-template>
                    <xsl:call-template name="simple-print">
                        <xsl:with-param name="label" select="'Comments: '"/>
                        <xsl:with-param name="value" select="field_monitoring_survey_type_comments"/>
                    </xsl:call-template>

                    <xsl:variable name="adverse_impact_found">
                        <xsl:choose>
                            <xsl:when test="adverse_impact_found = 'true'">Yes</xsl:when>
                            <xsl:otherwise>No</xsl:otherwise>
                        </xsl:choose>
                    </xsl:variable>
                    <xsl:call-template name="simple-print">
                        <xsl:with-param name="label" select="concat($labels//table5/adverse_impact_found/text(), ': ')"/>
                        <xsl:with-param name="value" select="$adverse_impact_found"/>
                    </xsl:call-template>

                    <xsl:variable name="adverse_impact_found">
                        <xsl:choose>
                            <xsl:when test="adverse_impact_found = 'true'">Yes</xsl:when>
                            <xsl:otherwise>No</xsl:otherwise>
                        </xsl:choose>
                    </xsl:variable>
                    <xsl:call-template name="simple-print">
                        <xsl:with-param name="label" select="concat($labels//table5/adverse_impact_found/text(), ': ')"/>
                        <xsl:with-param name="value" select="$adverse_impact_found"/>
                    </xsl:call-template>

                    <xsl:call-template name="simple-print">
                        <xsl:with-param name="label" select="concat($labels//table5/impact_description/text(), ': ')"/>
                        <xsl:with-param name="value" select="impact_description"/>
                    </xsl:call-template>

                    <xsl:variable name="compliance_monitoring_permit">
                        <xsl:choose>
                            <xsl:when test="compliance_monitoring_permit = 'true'">Yes</xsl:when>
                            <xsl:otherwise>No</xsl:otherwise>
                        </xsl:choose>
                    </xsl:variable>
                    <xsl:call-template name="simple-print">
                        <xsl:with-param name="label" select="concat($labels//table5/compliance_monitoring_permit/text(), ': ')"/>
                        <xsl:with-param name="value" select="$compliance_monitoring_permit"/>
                    </xsl:call-template>

                    <xsl:variable name="operations_in_compliance_with_permit">
                        <xsl:choose>
                            <xsl:when test="operations_in_compliance_with_permit = 'true'">Yes</xsl:when>
                            <xsl:otherwise>No</xsl:otherwise>
                        </xsl:choose>
                    </xsl:variable>
                    <xsl:call-template name="simple-print">
                        <xsl:with-param name="label" select="concat($labels//table5/operations_in_compliance_with_permit/text(), ': ')"/>
                        <xsl:with-param name="value" select="$operations_in_compliance_with_permit"/>
                    </xsl:call-template>

                    <xsl:call-template name="simple-print">
                        <xsl:with-param name="label" select="concat($labels//table5/is_follow_up_planned/text(), ': ')"/>
                        <xsl:with-param name="value" select="is_follow_up_planned"/>
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
                <div class="fs-container article-title border-bottom padding-fix">
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

    <xsl:template match="Row" mode="simple">
        <xsl:param name="label_name"/>
        <xsl:param name="ignored-nodes"/>
        <xsl:for-each select=".">
            <tr>
            <td class="bordered">
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
