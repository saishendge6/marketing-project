VITALROOT: DTC Performance Marketing Analytics Dashboard
================================================================

PROJECT OVERVIEW
----------------
This project delivers a professional DTC (Direct-to-Consumer) Performance Marketing Analytics
Dashboard for VITALROOT, a fictional Indian plant-based nutrition and wellness brand. The dashboard
enables analysis of simulated advertising campaign data from Meta Ads and Google Ads, evaluation
of campaign performance, identification of winning creatives, and recommendations for budget
optimization strategies.

DATASET DESCRIPTION
-------------------
The simulated dataset contains 90 campaign-day observations (January 1, 2024 to March 30, 2024)
across two advertising platforms with the following attributes:

- Date: Daily campaign performance dates across 90 days
- Advertising platform: Meta Ads or Google Ads (55% Meta, 45% Google distribution)
- Campaign name: Structured as "VITALROOT {Platform} {Campaign Type} {MonthDay}"
- Ad set / Ad Group: Granular grouping identifier "{Brand}_{Platform}_{Type}_{MMDD}"
- Creative format: Static Image, Video, Carousel, Stories, UGC
- Audience segment: Cold, Warm, Retargeting, Lookalike, Interest-Based
- Advertising spend: ₹3,010 - ₹11,558 per campaign-day (total: ₹677,564)
- Impressions: Ad impressions served
- Clicks: User clicks on ads
- Conversions: Desired actions (purchases, sign-ups)
- Revenue: Revenue generated in Indian Rupees (total: ₹1,814,100)

All data is explicitly labeled as SIMULATED for educational and portfolio purposes.

KEY PERFORMANCE INDICATORS (KPIs)
----------------------------------
All KPIs are calculated using spreadsheet formulas (not manually entered values):

1. CTR (Click-Through Rate) = Clicks / Impressions × 100
   - Formula: =AVERAGEIFS('Raw Data'!M:M,'Raw Data'!B:B,Platform,'Raw Data'!L:L>0)
   - Handles zero denominators safely with IFERROR logic

2. CPC (Cost Per Click) = Spend / Clicks
   - Formula: =AVERAGE('Raw Data'!N:N) for platform averages

3. CPM (Cost Per Thousand Impressions) = Spend / Impressions × 1000
   - Formula: =CPC/AVERAGE(CTR)*1000 maintaining the mathematical relationship

4. CPA (Cost Per Acquisition) = Spend / Conversions
   - Formula: =AVERAGEIFS('Raw Data'!O:O,'Raw Data'!B:B,Platform)

5. Conversion Rate (CVR) = Conversions / Clicks × 100
   - Formula: =AVERAGEIFS('Raw Data'!Q:Q,'Raw Data'!B:B,Platform,'Raw Data'!H:H>0)
   - Zero-division safe: IFERROR(conversions/clicks*100, 0)

6. ROAS (Return on Ad Spend) = Revenue / Spend
   - Formula: =SUMIF(Revenue)/SUMIF(Spend) for platform totals

DASHBOARD STRUCTURE
-------------------
The Excel workbook contains three worksheets:

SHEET 1: Raw Data
  - Complete simulated dataset with 90 rows and 18 columns
  - All raw performance metrics at the campaign-day level
  - Frozen header row for easy scrolling
  - Full data borders and formatting

SHEET 2: Dashboard (Interactive Analytics Interface)
  KPI Cards (Rows 2-8, Column B):
    • Total Advertising Spend: =SUM('Raw Data'!G2:G91)
    • Total Revenue: =SUM('Raw Data'!K2:K91)
    • Total Conversions: =SUM('Raw Data'!J2:J91)
    • Average CTR: =AVERAGE('Raw Data'!L2:L91) [0.00% format]
    • Average CPC: =AVERAGE('Raw Data'!M2:M91) [₹ format]
    • Average CPA: =AVERAGE('Raw Data'!O2:O91) [₹ format]
    • Overall ROAS: =AVERAGE('Raw Data'!P2:P91) [0.00"x" format]

  Platform Comparison (Rows 10-18):
    • Meta Ads vs Google Ads side-by-side with SUMIF/AVERAGEIF formulas
    • Difference column (Google - Meta) with automatic winner designation
    • 7 metrics: Spend, Revenue, Conversions, CTR, CPC, CPA, ROAS

  Creative Format Performance (Rows 20-24):
    • Average CTR/CPC/CPA/ROAS by creative format (Static Image, Video, Carousel, Stories, UGC)
    • Rank column using RANK() function for format ordering
    • AVERAGEIFS formulas with creative format filtering

  Daily Trends (Rows 26-55):
    • 30-day reference table pulling data from Raw Data sheet
    • Columns: Date, Spend, Revenue, Conversions, ROAS, CTR
    • Direct cell references enabling dynamic filtering

  Campaign Ranking (Rows 57-66):
    • Top 10 campaigns ranked by ROAS
    • References campaign names, platforms, ROAS, spend, and revenue from raw data

SHEET 3: Analysis (Marketing Insights Report)
  • Six strategic questions with data-supported answers:
    1. Which platform generates better returns?
    2. Which campaign performs best?
    3. Which creative format performs best?
    4. Which campaigns are underperforming?
    5. Where should the advertising budget be increased or reduced?
    6. What optimization actions would you recommend?
  • Each answer includes specific calculations from the dataset
  • ROI impact estimates and reallocation recommendations

CHARTS (Embedded in Dashboard sheet)
------------------------------------
1. Platform ROAS Comparison Bar Chart (H2):
   - Visual comparison of Meta Ads vs Google Ads ROAS
   - Bar chart showing 2.80x vs 2.36x respectively

2. Creative Format ROAS Distribution Pie Chart (H17):
   - Portfolio composition by creative format
   - Video dominant at 2.99x ROAS

3. Daily ROAS & Spending Trend Line Chart (A35):
   - 30-day trend of ROAS and ad spend
   - Enables fatigue detection and optimization timing

ZERO DIVISION SAFETY
--------------------
All spreadsheet formulas incorporate IFERROR or conditional logic to handle edge cases:

• CTR formula: =IFERROR(Clicks/Impressions*100, 0)
• CPC formula: =IFERROR(Spend/Clicks, 0)
• CPM formula maintains CPC/CTR relationship with safe division
• CPA formula: =IFERROR(Spend/Conversions, 0)
• ROAS formula: =IFERROR(Revenue/Spend, 1.0) (defaults to 1x if no spend)
• AVERAGE functions implicitly handle empty ranges

FORMULA PHILOSOPHY
-------------------
• All calculated KPIs use spreadsheet formulas — no hardcoded values
• Weighted averages appropriate when sample sizes vary (used SUMIF/AVERAGEIF)
• Mathematical relationships maintained (CPM = CPC/CTR × 1000)
• Cross-sheet references enable dynamic updates when raw data changes
• Conditional formatting visualizes performance thresholds (green ≥ 2.5x ROAS, yellow 1.5-2.5x, <1.5x red)

INTERACTIVE FILTERS & CONDITIONAL FORMATTING
----------------------------------------------
The dashboard includes:

• Platform filters (Meta Ads / Google Ads) via SUMIF/AVERAGEIF criteria
• Creative format filtering via AVERAGEIFS
• ROAS threshold conditional formatting:
  - Green: ROAS ≥ 2.5x (high performance)
  - Yellow: ROAS 1.5x - 2.5x (moderate performance)
  - Red: ROAS < 1.5x (underperforming)
• Spend difference highlighting (green = positive, red = negative)
• Rank coloring for top/bottom creative formats
• Data bars in KPI comparison tables

INITIALIZING THE GOOGLE SHEETS DASHBOARD
-----------------------------------------

Option 1: Direct Excel Import
1. Download VITALROOT_Performance_Dashboard.xlsx
2. Open in Google Sheets (File → Open → Upload)
3. All formulas remain functional via Sheets' formula engine
4. Charts auto-render in Sheets environment

Option 2: CSV + Manual Formulas
1. Download VITALROOT_Simulated_Dataset.csv for raw data
2. Copy Raw Data tab into a new Google Sheets file
3. Replicate KPI formulas in a Dashboard tab:
   • Total Spend: =SUM(G2:G91)
   • Total Revenue: =SUM(J2:J91)
   • etc.
4. Build comparison tables with SUMIF/S AVERAGEIF

RECRUITER WALKTHROUGH
----------------------
1. OPENING (30 seconds): "This is the VITALROOT Performance Marketing Dashboard — a
   simulated DTC analytics project for a plant-based nutrition brand. The dataset spans 90
   days of Meta Ads and Google Ads campaign performance."

2. KPI CARDS (1 minute): "These seven cards at the top are fully formula-driven. Total Spend
   of ₹677,564, Total Revenue of ₹1,814,100, Overall ROAS of 2.68x. Every number updates
   automatically if you change the raw data — that's the power of formula-driven dashboards."

3. PLATFORM COMPARISON (1 minute): "Here's theMeta Ads vs Google Ads comparison. Meta delivers
   2.80x ROAS versus Google's 2.36x — that's 18% better returns. The difference column and
   automatic winner formula make this immediately comparable."

4. CREATIVE ANALYSIS (1 minute): "Video creatives lead at 2.99x ROAS, Carousel has the highest
   CVR at 5.2%, and Static Images are the most common format at 34 of 90 observations. The
   ranking formula shows us exactly which formats to prioritize."

5. UNDERPERFORMING ANALYSIS (1 minute): "8 of 90 campaigns (8.9%) fall below 1.5x ROAS.
   These average ₹1,560 CPA with 4.5% CVR. The budget reduction recommendation shifts 15-20%
   from underperforming Google Shopping to Meta Retargeting at 3.42x ROAS."

6. OPTIMIZATION RECOMMENDATIONS (1 minute): "Six actionable recommendations: reallocate 25% of
   budget to Meta Video Retargeting, prioritize Video creative production, exclude cold
   audiences with CPA >₹1,500, manage frequency at ≥3.0, optimize landing pages for +0.5pp CVR
   improvement, and implement negative keyword lists for Google Search."

7. CLOSING (30 seconds): "The workbook has three tabs: Raw Data (the dataset), Dashboard (the
   interactive analysis interface), and Analysis (the insights report). All KPIs are formula-driven,
   zero-division safe, and instantly updatable. The project demonstrates practical analytical
   understanding without claiming actual advertising campaign experience."

KEY METRICS SUMMARY (for recruiter reference)
---------------------------------------------
• Total Spend: ₹677,564 | Total Revenue: ₹1,814,100 | Overall ROAS: 2.68x
• Meta ROAS: 2.80x | Google ROAS: 2.36x | Meta Advantage: 18%
• Top Campaign: VITALROOT Meta Ads Retargeting Jan31 at 5.63x ROAS
• Best Creative: Video at 2.99x ROAS | Highest CVR: Carousel
• Underperforming Campaigns: 8 of 90 (8.9%) — ROAS < 1.5x
• Blended CTR: 1.41% | Blended CPC: ₹33.46 | Blended CPA: ₹1,036.87
• Creative Distribution: Static Image 38% | Carousel 30% | Video 11% | Stories 17% | UGC 4%

DELIVERABLES
-------------
1. VITALROOT_Performance_Dashboard.xlsx — Three-tab Excel workbook with:
   - Raw Data tab (90 rows, 18 columns)
   - Dashboard tab (KPI cards, comparisons, 3 charts, conditional formatting)
   - Analysis tab (6 strategic questions with data-supported answers)
2. VITALROOT_Simulated_Dataset.csv — Raw data export
3. Marketing_Insights_Report.txt — Comprehensive 6-question insights document
4. README.md — This project documentation file

CONTACT & LICENSING
-------------------
This project is for portfolio and recruitment purposes. The dataset is entirely simulated.
No actual advertising campaign data or brand information is used.

For questions or feedback, please reference the associated code and documentation.
