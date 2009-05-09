<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" 
   xmlns:xsl="http://www.w3.org/1999/XSL/Transform" 
   xmlns:fo="http://www.w3.org/1999/XSL/Format">
 <xsl:output method="xml" indent="yes"/>



 <xsl:template match="/reportData">
 <xsl:variable name="columnDefPath" select="//reportData/columnDef"/>
 <xsl:variable name="printLayout" select="//reportData/@layout"/>
  <fo:root xmlns:fo="http://www.w3.org/1999/XSL/Format">
   <fo:layout-master-set>

     <xsl:if test="$printLayout = 'Landscape'">
       <fo:simple-page-master master-name="table" page-height="8.5in"
         page-width="11in" margin-top=".5in" margin-bottom=".5in"
         margin-left=".5in" margin-right=".5in">
         <fo:region-body margin-top="1in" margin-bottom="1in"/>
         <fo:region-before extent=".5in"/>
         <fo:region-after extent=".5in"/>
        </fo:simple-page-master>
     </xsl:if>
     <xsl:if test="$printLayout != 'Landscape'">
       <fo:simple-page-master master-name="table" page-height="11in"
         page-width="8.5in" margin-top=".5in" margin-bottom=".5in"
         margin-left=".5in" margin-right=".5in">
         <fo:region-body margin-top="1in" margin-bottom="1in"/>
         <fo:region-before extent=".5in"/>
         <fo:region-after extent=".5in"/>
        </fo:simple-page-master>
     </xsl:if>



   </fo:layout-master-set>
   <fo:page-sequence master-reference="table">


    <fo:static-content flow-name="xsl-region-before" text-align="center">
    
     <fo:table table-layout="fixed" font-size="9pt" space-before="1pt" border-bottom-width="0.5mm" border-bottom-style="solid" >
        <fo:table-body>
            <fo:table-row>
               <fo:table-cell padding="1mm" border-style="none" text-align="start" >
                 <fo:block font-size="16pt" font-weight="bold" >
                    <xsl:text >nan21 </xsl:text>
                 </fo:block>
                 <fo:block font-size="10pt"  >
                    <xsl:text >eBusiness Suite </xsl:text>
                 </fo:block>
               </fo:table-cell >
               <fo:table-cell padding="1mm" border-style="none" >
                 <fo:block font-size="20pt" font-weight="bold">
                  <xsl:value-of select="/reportData/@title"/>
                 </fo:block>
               </fo:table-cell >
               <fo:table-cell padding="1mm" border-style="none" >
                  <fo:block text-align="end" font-size="9pt">
                     <xsl:text >User: </xsl:text><xsl:value-of select="/reportData/@by"/>
                   </fo:block>
                   <fo:block text-align="end" font-size="9pt">
                      <xsl:text >Date: </xsl:text> <xsl:value-of select="/reportData/@on"/>
                   </fo:block>
               </fo:table-cell >
            </fo:table-row>
        </fo:table-body>
     </fo:table>
    </fo:static-content>


    <fo:static-content flow-name="xsl-region-after">
     <fo:block text-align="end" font-size="9pt" padding-top="4pt" border-top-width="0.1mm" border-top-style="solid" border-color="#999999" >
          Page <fo:page-number/> of <fo:page-number-citation ref-id="last-page"/>
     </fo:block>
    </fo:static-content>



      <fo:flow flow-name="xsl-region-body">
       <fo:table table-layout="fixed" font-size="9pt" space-before="8pt" >

         <xsl:for-each select="/reportData/columnDef/*">
           <xsl:variable name="colWidth" select="./width"/>
           <fo:table-column column-width="{$colWidth}%"/>
         </xsl:for-each>


        <fo:table-header font-weight="bold" text-align="center" background-color="#eeeeee" border-style="solid" border-width="0.2mm" border-color="#000000">
            <fo:table-row>
              <xsl:for-each select="/reportData/columnDef/*">
                    <fo:table-cell padding-top="2mm" padding-bottom="2mm" padding-left="1mm" padding-right="1mm">

                        <xsl:if test="./dataType = 'NUMBER'">
                          <fo:block text-align="end"><xsl:value-of select="./label"/></fo:block>
                        </xsl:if>
                        <xsl:if test="./dataType != 'NUMBER'">
                          <fo:block text-align="start"><xsl:value-of select="./label"/></fo:block>
                        </xsl:if>
                    <fo:block>

                    </fo:block>
                   </fo:table-cell>
                </xsl:for-each>
          </fo:table-row>
          </fo:table-header>



        <fo:table-body>
         <xsl:for-each select="/reportData/records/record">
            <fo:table-row border-width=".1mm" border-bottom-style="solid" border-bottom-color="#999999">
                 <xsl:for-each select="./*">
                 <xsl:variable name="currentColumn" select="name()"/>
                 <xsl:variable name="columnDef" select="$columnDefPath/*[local-name() = $currentColumn]/dataType"/>


                        <fo:table-cell padding="1mm" >

                            <xsl:if test="$columnDef = 'NUMBER'">
                              <fo:block text-align="end"><xsl:value-of select="format-number(., '###,###,###,###,##0.####')"/></fo:block>
                            </xsl:if>

                            <xsl:if test="$columnDef != 'NUMBER'">
                              <fo:block><xsl:value-of select="."/> </fo:block>
                            </xsl:if>


                         </fo:table-cell>
                 </xsl:for-each>
                </fo:table-row>
         </xsl:for-each>
        </fo:table-body>
       </fo:table>
      <fo:block id="last-page"/>
      </fo:flow>

   </fo:page-sequence>
  </fo:root>
 </xsl:template>
</xsl:stylesheet>