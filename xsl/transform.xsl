<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:xs="http://www.w3.org/2001/XMLSchema"
                xmlns:local="http://local"
                version="2.0" exclude-result-prefixes="xml">

    <xsl:variable name="labels" select="document('labels.xml')/labels"/>

    <xsl:function name="local:get_difficulty_label" as="xs:string">
        <xsl:param name="diff" as="xs:string"/>
        <xsl:value-of select="$labels/difficulties[value = $diff]/label"/>
    </xsl:function>

    <xsl:template match="/">
        <html>
            <head>
                <script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"/>
                <script type="text/javascript"><![CDATA[
$(document).ready(function() {
    tables = $('.table-measures');
    for (index = 0; index < tables.length; ++index){
        table = tables[index]
        rows = table.rows
        for(row_idx = 0; row_idx < rows.length - 1; ++row_idx){
            row = rows[row_idx];
            next_row = rows[row_idx + 1];
            next_art_title = next_row.children[0].children[0].textContent;

            if (next_art_title.length == 0) {
                next_data_div = next_row.children[0].children[1];
                row.children[0].appendChild(next_data_div);
                next_row.hidden = true;

                while(row_idx < rows.length - 1){
                    ++row_idx;
                    next_row = rows[row_idx + 1];
                    next_art_title = next_row.children[0].children[0].textContent;
                    if (next_art_title.length > 0) {
                        break;
                    }
                    next_data_div = next_row.children[0].children[1];
                    row.children[0].appendChild(next_data_div);
                    next_row.hidden = true;
                }
            }
        }
    }
});
]]>
                </script>
                <style type="text/css"><![CDATA[
#container {
    width: 50em;
    margin: auto;
    border: solid 1px #CCC;
}
div.newline-separated + div.newline-separated {
    margin-top: 1em;
}
.form-section {
    border: solid 1px #CCC;
    border-radius: 1em;
    background-clip: border-box;
    background-color: rgb(245, 245, 245);
    margin: 1em;
}
.fs-title {
    background-clip: border-box;
    border-radius: 1em 1em 0 0;
    border-bottom: solid 1px #CCC;
}
.fs-container {
    padding: 1em;
}
table {
    font-size: medium;
    border-collapse: collapse;
    width: 100%;
}
table.bilateral th,
table.bilateral td{
    padding: 0.2em 1em;
    text-align: left;
    width: 15%;
}
.table-measures {
    border-collapse: initial !important;
    border-spacing: 0.5em;
}
.bordered{
    border: solid 1px #CCC;
}
.padding {
    padding: 0.5em;
}
th, td {
    background-color: white;
    padding: 0.2em;
}
th {
    width: 50%;
    text-align: right;
}
.article-title {
    padding-bottom: 0em;
}
ul {
    margin: 0px;
}
h2 {
    margin: 0.5em;
}
h4 {
    padding: 1em 0em;
    margin: 0em;
    border-top: solid 1px #CCC;
}
]]>
                </style>
            </head>
            <body>
                <div id="container">
                    <xsl:variable name="root" select="./*[1]"/>
                    <!--<xsl:value-of select="string-join($root/*/name(.), ', ')"/>-->
                    <xsl:apply-templates/>
                </div>
            </body>
        </html>
    </xsl:template>

    <xsl:template match="*:contacting_party">

        <xsl:variable name="contacting_party" select="."/>
        <h2>Information on the reporting party</h2>
        <xsl:for-each select="$labels/general/*">
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
                                    <xsl:call-template name="conditional-print">
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

    <xsl:template match="*:bilateralmultilateralagreementsdata">
        <h2>Part I: Bilateral and multilateral agreements</h2>
        <div class="form-section">
            <div class="fs-container fs-title">
                Table I: Bilateral and multilateral agreements
            </div>
            <div class="fs-container fs-data">
                <table class="bilateral bordered">
                    <tr>
                        <th><div>Agreement name</div></th>
                        <th><div>Indicate website/URL link/other reference</div></th>
                    </tr>
                    <xsl:for-each select="./*:Row">
                        <tr>
                            <td>
                                <xsl:call-template name="conditional-print">
                                    <xsl:with-param name="label" select="''"/>
                                    <xsl:with-param name="value" select="./*:agreementname"/>
                                </xsl:call-template>
                            </td>
                            <td>
                                <xsl:call-template name="conditional-print">
                                    <xsl:with-param name="label" select="''"/>
                                    <xsl:with-param name="value" select="./*:website_other_reference"/>
                                </xsl:call-template>
                            </td>
                        </tr>
                    </xsl:for-each>
                </table>
            </div>
        </div>
    </xsl:template>

    <xsl:template match="*:measuresdata">
        <h2>Part II: Legal and regulatory measures</h2>
        <div class="form-section">
            <table class="table-measures">
                <div class="fs-container fs-title">
                    Table II: Legal and regulatory measures
                </div>
                <xsl:apply-templates select="./*:Row[*:parent_collection_id = 104]" mode="row"/>
            </table>
        </div>
        <h2>Part III: Policy measures</h2>
        <div class="form-section">
            <table class="table-measures">
                <div class="fs-container fs-title">
                    Table III: Policy measures
                </div>
                <xsl:apply-templates select="./*:Row[*:parent_collection_id = 106]" mode="row"/>
            </table>
        </div>
        <h2>Part IV: Monitoring and public access to information</h2>
        <div class="form-section">
            <table class="table-measures">
                <div class="fs-container fs-title">
                    Table IV: Monitoring and public access to information
                </div>
                <xsl:apply-templates select="./*:Row[*:parent_collection_id = 108]" mode="row"/>
            </table>
        </div>
    </xsl:template>

    <xsl:template match="*:Row" mode="row">
        <xsl:for-each select=".">
            <xsl:variable name="col_id" select="*:collection_id"/>

            <tr>
            <td class="bordered">
                <div class="fs-container article-title">
                    <xsl:value-of select="$labels/article_titles[collection_id = $col_id]/article_title"/>
                </div>
                <div class="fs-container fs-data">
                    <h4><xsl:value-of select="*:description"/></h4>

                    <xsl:variable name="changes">
                        <xsl:choose>
                        <xsl:when test="boolean(*:changes)">Yes</xsl:when>
                        <xsl:otherwise>No</xsl:otherwise>
                    </xsl:choose>
                    </xsl:variable>
                    <xsl:call-template name="conditional-print">
                        <xsl:with-param name="label" select="'Changes in the information provided in the previous report: '"/>
                        <xsl:with-param name="value" select="$changes"/>
                    </xsl:call-template>

                    <xsl:variable name="status" select="*:status"/>
                    <xsl:call-template name="conditional-print">
                        <xsl:with-param name="label" select="'Status: '"/>
                        <xsl:with-param name="value" select="$labels/statuses[status = $status]/label"/>
                    </xsl:call-template>

                    <xsl:call-template name="conditional-list-print">
                        <xsl:with-param name="label" select="'Status comments: '"/>
                        <xsl:with-param name="value" select="*:status_comments"/>
                    </xsl:call-template>

                    <xsl:variable name="difficulties" select="string-join(../../*:measuredata_difficulty/*:Row[*:collection_id = $col_id]/local:get_difficulty_label(*:difficulty), ', ')"/>
                    <xsl:call-template name="conditional-print">
                        <xsl:with-param name="label" select="'Difficulties/Challenges: '"/>
                        <xsl:with-param name="value" select="$difficulties"/>
                    </xsl:call-template>

                    <xsl:call-template name="conditional-list-print">
                        <xsl:with-param name="label" select="'Difficulties comments: '"/>
                        <xsl:with-param name="value" select="*:difficulties_comments"/>
                    </xsl:call-template>
                </div>
            </td>
            </tr>
        </xsl:for-each>
    </xsl:template>

    <xsl:template name="conditional-list-print">
        <xsl:param name="label"/>
        <xsl:param name="value"/>
        <div>
            <xsl:value-of select="$label"/>
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

    <xsl:template name="conditional-print">
        <xsl:param name="label"/>
        <xsl:param name="value"/>
        <div>
            <xsl:value-of select="$label"/>
            <xsl:choose>
                <xsl:when test="string-length($value) > 0">
                    <xsl:value-of select="$value"/>
                </xsl:when>
                <xsl:otherwise>-</xsl:otherwise>
            </xsl:choose>
        </div>
    </xsl:template>

    <xsl:template match="*:country">
        <!--<div class="form-section">-->
            <!--<div class="fs-container fs-title">-->
                <!--Title-->
            <!--</div>-->
            <!--<div class="fs-container fs-data">-->
                <!--<xsl:value-of select="name(current())"/> - <xsl:value-of select="current()"/>-->
            <!--</div>-->
        <!--</div>-->
    </xsl:template>

    <xsl:template match="*:measuredata_difficulty">
    </xsl:template>
</xsl:stylesheet>
