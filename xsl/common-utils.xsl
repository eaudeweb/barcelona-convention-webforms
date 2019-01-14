<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:xs="http://www.w3.org/2001/XMLSchema"
                xmlns:local="http://local"
                version="2.0" exclude-result-prefixes="xml">

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
</xsl:stylesheet>