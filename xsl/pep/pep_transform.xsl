<xsl:stylesheet xpath-default-namespace="https://dd.info-rac.org/namespaces/4"
        xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
        xmlns:xs="http://www.w3.org/2001/XMLSchema"
        xmlns:local="http://local"
        version="2.0" exclude-result-prefixes="xml">

    <xsl:variable name="labels" select="document('pep_labels.xml')/root"/>

    <xsl:function name="local:get_label" as="xs:string">
        <xsl:param name="value"/>
        <xsl:param name="options"/>
        <xsl:value-of select="$options/element[value = $value]/text"/>
    </xsl:function>

    <xsl:template match="/">
        <html>
            <head>
                <link rel="stylesheet" type="text/css" href="../static/css/xsl-style.css"/>
            </head>
            <body>
                <div id="container">
                    <xsl:call-template name="contacting_party"/>
                    <xsl:call-template name="tab_1"/>
                    <xsl:call-template name="tab_2"/>
                    <xsl:apply-templates select="//pollincidents"/>
                </div>
            </body>
        </html>
    </xsl:template>

    <xsl:template name="contacting_party">
        <xsl:variable name="root" select="./*[1]"/>
        <xsl:variable name="contacting_party" select="$root//contacting_party"/>

        <h2>Information on the reporting party</h2>
        <xsl:for-each select="$labels/country/tables/*">
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
                        <xsl:for-each select="./element">
                            <tr>
                                <th>
                                    <xsl:value-of select="./label"/>
                                </th>
                                <td>
                                    <xsl:call-template name="simple-print">
                                        <xsl:with-param name="label" select="''"/>
                                        <xsl:with-param name="value" select="$contacting_party/*[local-name() = current()/name]"/>
                                    </xsl:call-template>
                                </td>
                            </tr>
                        </xsl:for-each>
                    </table>
                </div>
            </div>
        </xsl:for-each>
    </xsl:template>

    <xsl:template name="tab_1">
        <xsl:call-template name="construct-tab">
            <xsl:with-param name="tab-node" select="$labels/tab_1"/>
            <xsl:with-param name="report-node" select="./*[1]//measuresdata"/>
        </xsl:call-template>
    </xsl:template>

    <xsl:template name="tab_2">
        <xsl:call-template name="construct-tab">
            <xsl:with-param name="tab-node" select="$labels/tab_2"/>
            <xsl:with-param name="report-node" select="./*[1]//measuresdata"/>
        </xsl:call-template>
    </xsl:template>

    <xsl:template match="pollincidents">
        <h2>Part III: Pollution incidents</h2>
        <div class="sub-title">
            <xsl:variable name="pollincidentsInfo">
                <xsl:choose>
                    <xsl:when test="//pollincidentsInfo = 'true'">
                        Yes
                    </xsl:when>
                    <xsl:otherwise>No</xsl:otherwise>
                </xsl:choose>
            </xsl:variable>
            <xsl:call-template name="simple-print">
                <xsl:with-param name="label" select="'Information on Pollution Incidents provided in MEDGIS- MAR for the current biennium'"/>
                <xsl:with-param name="value" select="$pollincidentsInfo"/>
            </xsl:call-template>
        </div>
        <div class="form-section">
            <table class="table-measures">
                <div class="fs-container fs-title">
                    Table III - Pollution incidents
                </div>
                <xsl:apply-templates select="Row" mode="title">
                    <xsl:with-param name="label_name" select="'tab_3'"/>
                    <xsl:with-param name="title" select="'ship_name'"/>
                    <xsl:with-param name="ignored-nodes" select="('collection_id', 'parent_collection_id', 'title')"/>
                </xsl:apply-templates>
            </table>
        </div>
    </xsl:template>

    <xsl:template name="construct-tab">
        <xsl:param name="tab-node"/>
        <xsl:param name="report-node"/>

        <xsl:variable name="main_collection_id" select="$tab-node/collection_id"/>
        <xsl:variable name="table" select="$tab-node/data"/>

        <h2>
            <xsl:value-of select="$tab-node/label"/>
        </h2>
        <div class="sub-title">
            <xsl:value-of select="$table/question/text()"/>
        </div>
        <div class="form-section">
            <table class="table-measures">
                <div class="fs-container fs-title">
                    <xsl:value-of select="$table/table_label"/>
                </div>
                <xsl:for-each select="$table/articles/element">
                    <xsl:variable name="article" select="current()"/>
                    <xsl:variable name="article_title" select="$article/article_title"/>
                    <xsl:variable name="article_items" select="$article/article_items/element"/>
                    <xsl:variable name="optional" select="$article/optional"/>

                    <tr>
                    <td class="bordered">
                        <div class="fs-container article-title">
                            <xsl:if test="$optional = 'true'">
                                <span class="optional">Optional: </span>
                            </xsl:if>
                            <xsl:value-of select="$article_title"/>
                        </div>
                        <xsl:for-each select="$article_items">
                            <xsl:variable name="article_item" select="current()"/>
                            <xsl:variable name="collection_id">
                                <xsl:variable name="col_id" select="$article_item/collection_id"/>
                                <xsl:variable name="col_id_alternate" select="$table/collection_id"/>
                                <xsl:choose>
                                    <xsl:when test="string-length($col_id) > 0">
                                        <xsl:value-of select="$col_id"/>
                                    </xsl:when>
                                    <xsl:otherwise>
                                        <xsl:value-of select="$col_id_alternate"/>
                                    </xsl:otherwise>
                                </xsl:choose>
                            </xsl:variable>
                            <xsl:variable name="parent_collection_id">
                                <xsl:variable name="p_col_id" select="$article_item/parent_collection_id"/>
                                <xsl:variable name="p_col_id_alternate" select="$table/parent_collection_id"/>
                                <xsl:choose>
                                    <xsl:when test="string-length($p_col_id) > 0">
                                        <xsl:value-of select="$p_col_id"/>
                                    </xsl:when>
                                    <xsl:otherwise>
                                        <xsl:value-of select="$p_col_id_alternate"/>
                                    </xsl:otherwise>
                                </xsl:choose>
                            </xsl:variable>
                            <xsl:variable name="description" select="normalize-space($article_item/description)"/>
                            <xsl:variable name="additional_description" select="$article_item/additional_description"/>

                            <!-- debug -->
                            <!--<xsl:value-of select="$collection_id"/> - <xsl:value-of select="$parent_collection_id"/>-->

                            <div class="fs-container fs-data">
                                <xsl:if test="string-length($additional_description) > 0">
                                    <div class="additional-description">
                                        <xsl:value-of select="$additional_description"/>
                                    </div>
                                </xsl:if>
                                <xsl:if test="string-length($description) > 0">
                                    <h4>
                                        <xsl:value-of select="$description"/>
                                    </h4>
                                </xsl:if>
                                <xsl:for-each select="$article_item/items/element">
                                    <xsl:variable name="type" select="current()/type"/>
                                    <xsl:variable name="node_name" select="current()/name"/>

                                    <xsl:variable name="options-label">
                                        <xsl:choose>
                                            <xsl:when test="$node_name = 'pollutantgroup'">
                                                <xsl:copy-of select="$table/pollutants"/>
                                            </xsl:when>
                                            <xsl:when test="$node_name = 'activitysubsector'">
                                                <xsl:copy-of select="$table/sub_sectors"/>
                                            </xsl:when>
                                            <xsl:when test="$node_name = 'activitysector'">
                                                <xsl:copy-of select="$table/sectors"/>
                                            </xsl:when>
                                            <xsl:otherwise>
                                                <xsl:copy-of select="current()/options"/>
                                            </xsl:otherwise>
                                        </xsl:choose>
                                    </xsl:variable>

                                    <!-- debug -->
                                    <!--<div>type: <xsl:value-of select="$type"/></div>-->
                                    <!--<div>node_name: <xsl:value-of select="$node_name"/></div>-->
                                    <!--<div>options: <xsl:value-of select="$options-label"/></div>-->

                                    <xsl:choose>
                                        <xsl:when test="$type = ('changes', 'status')">
                                            <xsl:call-template name="choose-print">
                                                <xsl:with-param name="options" select="$options-label"/>
                                                <xsl:with-param name="label" select="current()/label"/>
                                                <xsl:with-param name="value" select="$report-node/Row[collection_id = $collection_id and parent_collection_id = $parent_collection_id]/*[local-name() = $type]"/>
                                            </xsl:call-template>
                                        </xsl:when>
                                        <xsl:when test="$type = ('special')">
                                            <xsl:call-template name="special-print">
                                                <xsl:with-param name="options" select="$options-label"/>
                                                <xsl:with-param name="label" select="current()/label"/>
                                                <xsl:with-param name="values" select="$report-node/Row[collection_id = $collection_id and parent_collection_id = $parent_collection_id]/*[local-name() = $node_name]"/>
                                            </xsl:call-template>
                                        </xsl:when>
                                        <xsl:when test="$type = ('difficulties')">
                                            <xsl:call-template name="difficulties-print">
                                                <xsl:with-param name="options" select="$options-label"/>
                                                <xsl:with-param name="label" select="current()/label"/>
                                                <xsl:with-param name="measuredata_difficulty" select="$report-node/parent::*/measuredata_difficulty/Row[collection_id = $collection_id]"/>
                                            </xsl:call-template>
                                        </xsl:when>
                                        <xsl:when test="$type = 'select'">
                                            <xsl:call-template name="choose-print">
                                                <xsl:with-param name="options" select="$options-label"/>
                                                <xsl:with-param name="label" select="current()/label"/>
                                                <xsl:with-param name="value" select="$report-node/Row[starts-with(description, $description)]/*[local-name() = $node_name]"/>
                                            </xsl:call-template>
                                        </xsl:when>
                                        <xsl:when test="$type = ('number')">
                                            <xsl:call-template name="simple-print">
                                                <xsl:with-param name="label" select="current()/label"/>
                                                <xsl:with-param name="value" select="$report-node/Row[starts-with(description, $description)]/*[local-name() = $node_name]"/>
                                            </xsl:call-template>
                                        </xsl:when>
                                        <xsl:when test="$type = ('text', 'textarea')">
                                            <xsl:call-template name="simple-print">
                                                <xsl:with-param name="label" select="current()/label"/>
                                                <xsl:with-param name="value" select="$report-node/Row[title = $article_title]/*[local-name() = $node_name]"/>
                                            </xsl:call-template>
                                        </xsl:when>
                                        <xsl:otherwise>
                                            <xsl:call-template name="simple-print">
                                                <xsl:with-param name="label" select="current()/label"/>
                                                <xsl:with-param name="value" select="'#Unknown type'"/>
                                            </xsl:call-template>
                                        </xsl:otherwise>
                                    </xsl:choose>
                                    <xsl:if test="$type = ('status', 'difficulties')">
                                        <xsl:variable name="comments_node" select="concat($type, '_comments')"/>
                                        <xsl:call-template name="simple-print">
                                            <xsl:with-param name="label" select="'Comments'"/>
                                            <xsl:with-param name="value" select="$report-node/Row[collection_id = $collection_id and parent_collection_id = $parent_collection_id]/*[local-name() = $comments_node]"/>
                                        </xsl:call-template>
                                    </xsl:if>
                                </xsl:for-each>
                            </div>
                        </xsl:for-each>
                    </td>
                    </tr>
                </xsl:for-each>
            </table>
        </div>
    </xsl:template>

    <xsl:template match="Row" mode="title">
        <xsl:param name="label_name"/>
        <xsl:param name="title"/>
        <xsl:param name="ignored-nodes"/>
        <xsl:for-each select=".">
            <tr>
            <td class="bordered">
                <div class="fs-container article-title">
                    <xsl:value-of select="*[local-name() = $title]"/>
                </div>
                <div class="fs-container fs-data">
                    <xsl:for-each select="./*[not(local-name() = $ignored-nodes)]">
                        <xsl:variable name="local_name" select="./local-name()"/>
                        <xsl:variable name="lab" select="$labels//*[local-name() = $label_name]/element[name = $local_name]"/>
                        <xsl:variable name="options" select="$lab/options"/>

                        <xsl:call-template name="simple-print">
                            <xsl:with-param name="label">
                                <xsl:choose>
                                    <xsl:when test="string-length($lab/label) > 0">
                                        <xsl:value-of select="$lab/label"/>
                                    </xsl:when>
                                    <xsl:otherwise>
                                        <xsl:value-of select="$labels//*[local-name() = $label_name]/*[local-name() = $local_name]"/>
                                    </xsl:otherwise>
                                </xsl:choose>
                            </xsl:with-param>
                            <xsl:with-param name="value">
                                <xsl:choose>
                                    <xsl:when test="exists($options)">
                                        <xsl:value-of select="local:get_label(node(), $options)"/>
                                    </xsl:when>
                                    <xsl:otherwise>
                                        <xsl:value-of select="node()"/>
                                    </xsl:otherwise>
                                </xsl:choose>
                            </xsl:with-param>
                        </xsl:call-template>
                    </xsl:for-each>
                </div>
            </td>
            </tr>
        </xsl:for-each>
    </xsl:template>

    <xsl:template name="choose-print">
        <xsl:param name="options"/>
        <xsl:param name="label"/>
        <xsl:param name="value"/>

        <xsl:variable name="new_value">
            <xsl:choose>
                <xsl:when test="exists($options//*)">
                    <xsl:value-of select="string-join($options//element[value = $value]/text, ', ')"/>
                </xsl:when>
                <xsl:otherwise>
                    <xsl:value-of select="$value"/>
                </xsl:otherwise>
            </xsl:choose>
        </xsl:variable>

        <xsl:call-template name="simple-print">
            <xsl:with-param name="label" select="$label"/>
            <xsl:with-param name="value" select="$new_value"/>
        </xsl:call-template>
    </xsl:template>

    <xsl:template name="difficulties-print">
        <xsl:param name="options"/>
        <xsl:param name="label"/>
        <xsl:param name="measuredata_difficulty"/>

        <xsl:variable name="new_value" select="string-join($measuredata_difficulty/local:get_label(difficulty, $options//options), ', ')"/>

        <xsl:call-template name="simple-print">
            <xsl:with-param name="label" select="$label"/>
            <xsl:with-param name="value" select="$new_value"/>
        </xsl:call-template>
    </xsl:template>

    <xsl:template name="special-print">
        <xsl:param name="options"/>
        <xsl:param name="label"/>
        <xsl:param name="values"/>

        <xsl:variable name="new_value" select="string-join($values/local:get_label(text(), $options/descendant-or-self::options), ', ')"/>

        <xsl:call-template name="simple-print">
            <xsl:with-param name="label" select="$label"/>
            <xsl:with-param name="value" select="$new_value"/>
        </xsl:call-template>
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
