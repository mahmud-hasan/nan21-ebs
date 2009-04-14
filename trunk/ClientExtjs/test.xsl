<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
<xsl:output method="html" indent="yes"/>
<xsl:variable name="groupByColumn" select="/reportData/groupBy"/>
<xsl:variable name="reportWidth" select="'670'"/>    <!-- 670, 890 -->

 <xsl:template match="/">
 <html>
  <style>
     table.reportHeader { width:<xsl:value-of select="$reportWidth"/>px;padding:2px; font-family:helvetica,sans-serif,tahoma,arial; font-size:11px; border-bottom:2px solid black; border-collapse: collapse; color:#000; }
    .reportTitle { font-size:18px;font-weight:bold; }


    table.queryParam { width:<xsl:value-of select="$reportWidth"/>px;padding:2px;margin-top:1px;font-family:helvetica,sans-serif,tahoma,arial; font-size:11px;border-bottom:1px solid black; border-collapse: collapse; }
    table.queryParam tr { }
    table.queryParam td {padding:0px;font-family:helvetica,sans-serif,tahoma,arial;font-size:11px;}

    table.results { width:<xsl:value-of select="$reportWidth"/>px;padding:2px;margin-top:2px; font-family:helvetica,sans-serif,tahoma,arial; color:black; font-size:10px;border:1px solid black; border-collapse: collapse; }

    table.results td.rHead {font-weight:bold; font-size:11px; border-bottom:1px solid black;}
    table.results td {padding:3px;border-bottom:1px dashed black; font-family:helvetica,sans-serif,tahoma,arial; color:black;}
    table.results tr.oddRow {background:#f00;}

  </style>
  <body>

    <table class="reportHeader">
      <tr>
        <td width="25%" >
          <span style="font-size:20px;font-weight:bold;line-height:22px;font-family:verdana">nan21</span>
            <br/>
          <span style="font-size:9px;font-weight:bold;line-height:10px;font-family:arial">eBusiness Suite</span>
        </td>
        <td width="50%" align="center" class="reportTitle"><xsl:value-of select="/reportData/@title"/></td>
        <td width="25%" align="right">
           <xsl:value-of select="/reportData/staticText/label[@id='runBy']"/>: <xsl:value-of select="/reportData/@by"/> <br/>
           <xsl:value-of select="/reportData/staticText/label[@id='runOn']"/>: <xsl:value-of select="/reportData/@on"/>
        </td>
      </tr>
    </table>


    <table class="queryParam">
      <xsl:apply-templates select="//queryParams"/>
    </table>



    <table class="results">
      <xsl:apply-templates select="//columnDef"/>
      <xsl:apply-templates select="//record"/>
    </table>
</body>
</html>
</xsl:template>


 <xsl:template match="queryParams">
  <xsl:variable name="hqpc" select="round(count(//queryParams/*) div 2) "/>
  <tr>
    <td colspan="2"><xsl:value-of select="/reportData/staticText/label[@id='queryParamsTitle']"/>: 
      <xsl:if test="count(//queryParams/*)=0">-</xsl:if>
    </td>
  </tr>
  <tr>
    <td valign="top" width="50%" style="padding-left:4px;">
      <table cellspacing="0" cellpadding="0">
          <xsl:for-each select="./*">
            <xsl:variable name="currentColumn" select="name()"/>
            <xsl:variable name="idx" select="position()"/>
            <xsl:if test="$hqpc >= number($idx) and . != ''">
              <tr><td><xsl:value-of select="//reportData/columnDef/*[local-name() = $currentColumn]/label"/>: </td><td><xsl:value-of select="."/></td></tr>
            </xsl:if>
          </xsl:for-each >

      </table>
    </td>
    <td valign="top" width="50%">
      <table cellspacing="0" cellpadding="0">
          <xsl:for-each select="./*">
            <xsl:variable name="currentColumn" select="name()"/>
            <xsl:variable name="idx" select="position()"/>
            <xsl:if test="number($idx) > $hqpc and . != '' ">
             <tr> <td><xsl:value-of select="//reportData/columnDef/*[local-name() = $currentColumn]/label"/>: </td><td><xsl:value-of select="."/></td> </tr>
            </xsl:if>
          </xsl:for-each >

      </table>
    </td>
 </tr>
</xsl:template>




 <xsl:template match="record">
  <xsl:variable name="columnDefPath" select="//reportData/columnDef"/>
  <xsl:if test="$groupByColumn != ''">
    <xsl:variable name="prevGroupByColumnValue" select="preceding-sibling::record[1]/*[local-name() = $groupByColumn]"/>
    <xsl:variable name="currentGroupByColumnValue" select="./*[local-name() = $groupByColumn]"/>
  
    <!-- first group -->
    <xsl:if test="position()=1">
       <tr style="height:30px;"><td align="left" colspan="40" valign="bottom" style="font-weight:bold;line-height:16px;border-bottom:1px solid gray;" >
       <xsl:value-of select="//reportData/columnDef/*[local-name() = $groupByColumn]/label"/>:
       <xsl:value-of select="$currentGroupByColumnValue"/></td></tr>
    </xsl:if>

    <xsl:if test="$prevGroupByColumnValue != $currentGroupByColumnValue">
       <tr style="height:30px;"><td align="left" colspan="40" valign="bottom" style="font-weight:bold;line-height:16px;border-bottom:1px solid gray;" >
       <xsl:value-of select="//reportData/columnDef/*[local-name() = $groupByColumn]/label"/>:
       <xsl:value-of select="$currentGroupByColumnValue"/></td></tr>
    </xsl:if>
  </xsl:if>

  <tr>
    <td align="right" style="border-right:1px solid gray"><xsl:value-of select="position()"/> </td>
    <xsl:for-each select="./*">
      <xsl:variable name="currentColumn" select="name()"/>
      <xsl:variable name="columnDef" select="$columnDefPath/*[local-name() = $currentColumn]/dataType"/>
      <xsl:if test="$columnDef = 'NUMBER'">
        <td align="right"><xsl:value-of select="format-number(., '###,###,##0.00')"/> </td>
      </xsl:if>
      <xsl:if test="$columnDef = 'BOOLEAN'">
        <td align="center"><xsl:value-of select="."/> </td>
      </xsl:if>
      <xsl:if test="$columnDef != 'NUMBER' and $columnDef != 'BOOLEAN'">
        <td><xsl:value-of select="."/> </td>
      </xsl:if>
    </xsl:for-each >
 </tr>
</xsl:template>



<xsl:template match="columnDef">
  <tr>
    <td class="rHead" align="right" style="border-right:1px solid gray">No</td>
    <xsl:for-each select="./*">
      <xsl:if test="@isColumn = 'Y'">
        <xsl:if test="./dataType = 'NUMBER'">
          <td class="rHead" align="right"><xsl:value-of select="./label"/> </td>
        </xsl:if>
        <xsl:if test="./dataType = 'BOOLEAN'">
          <td class="rHead" align="center"><xsl:value-of select="./label"/> </td>
        </xsl:if>
        <xsl:if test="./dataType != 'NUMBER' and ./dataType != 'BOOLEAN'">
          <td class="rHead"><xsl:value-of select="./label"/> </td>
        </xsl:if>
      </xsl:if>
    </xsl:for-each >
 </tr>
</xsl:template>

</xsl:stylesheet>