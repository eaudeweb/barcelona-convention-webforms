<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="2.0" exclude-result-prefixes="xml">

    <xsl:variable name="labels" select="document('labels.xml')/labels"/>

    <xsl:template match="/">
        <html>
            <head>
                <style type="text/css"><![CDATA[
.form-section {
    border: solid 1px #CCC;
    border-radius: 1em;

    margin: 1em;
}
.fs-title {
    border-bottom: solid 1px #CCC;
}
.fs-container {
    padding: 1em;
}
table {
    border-collapse: collapse;
}
.table-measures {
    border-collapse: initial !important;
    border-spacing: 0.5em;
}
td.bordered{
    border: solid 1px #CCC;
}
th, td {
    padding: 0.2em;

}
th {
    text-align: right;
}
.article-title {
    border-bottom: solid 1px #CCC;
    margin-bottom: 0.2em;
}
]]>
                </style>
            </head>
            <body>
                <xsl:variable name="root" select="./*[1]"/>
                <!--<xsl:value-of select="string-join($root/*/name(.), ', ')"/>-->
                <xsl:apply-templates/>
            </body>
        </html>
    </xsl:template>

    <xsl:template match="*:contacting_party">
        <h2>Information on the reporting party</h2>
        <div class="form-section">
            <div class="fs-container fs-title">
                Title
            </div>
            <div class="fs-container fs-data">
                <table>
                    <xsl:for-each select="./*">
                        <xsl:variable name="label" select="name(.)"/>
                        <tr>
                            <th><xsl:value-of select="$labels/*[name() = $label]"/></th>
                            <td><xsl:value-of select="."/></td>
                        </tr>
                    </xsl:for-each>
                </table>
            </div>
        </div>
    </xsl:template>

    <xsl:template match="*:bilateralmultilateralagreementsdata">
        <h2>Part I: Bilateral and multilateral agreements</h2>
        <div class="form-section">
            <div class="fs-container fs-title">
                Table I: Bilateral and multilateral agreements
            </div>
            <div class="fs-container fs-data">
                <table>
                    <tr>
                        <th>Agreement name</th>
                        <th>Indicate website/URL link/other reference</th>
                    </tr>
                    <xsl:for-each select="./*:Row">
                        <tr>
                            <td><xsl:value-of select="./*:agreementname"/></td>
                            <td><xsl:value-of select="./*:website_other_reference"/></td>
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
            <tr>
            <td class="bordered">
                <div class="fs-container article-title">
                    Article Title
                </div>
                <div class="fs-container fs-data">
                    <table>
                        <xsl:for-each select="./*">
                            <tr>
                                <th><xsl:value-of select="name(current())"/></th>
                                <td><xsl:value-of select="current()"/></td>
                            </tr>
                        </xsl:for-each>
                    </table>
                </div>
            </td>
            </tr>
        </xsl:for-each>
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
