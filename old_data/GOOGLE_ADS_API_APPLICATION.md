# Google Ads API Component Description - Jento AI

**Note:** This document is prepared for the "API Center" application process in Google Cloud Console.

## Company Name
**Jento AI** (jentoai.com)

## Business Model
Jento AI operates as a **B2B technology consultancy** specializing in Autonomous AI Agents and n8n workflow automation. We provide high-value, custom enterprise engineering services and technical retainers directly to businesses via our website (https://jentoai.com).

**Advertising Scope:**
We are applying for API access solely to manage and optimize **our own internal advertising accounts**. We do not manage Google Ads accounts for external clients or third parties via this tool. All ads are focused on **lead generation for our enterprise sales pipeline** (getting clients to book consultations for custom development).

## Tool Access/Use
**User Base:**
The tool is strictly for **internal use** by Jento AI's marketing and development team (approx. 3-5 users). It is not accessible to the public or external customers.

**Functionality:**
The tool ("Jento Growth Engine") is a custom-built internal dashboard that bridges our Google Ads data with our CRM (n8n/HubSpot). It allows our internal media buyers to:
1.  View aggregated performance reports (Cost per Lead, ROAS) alongside offline conversion data.
2.  Automate the uploading of "Offline Conversion" events from our backend to Google Ads to improve bidding signals.
3.  Pause campaigns automatically if our internal lead capacity (sales team availability) is reached.

## Tool Design
**Architecture:**
1.  **Data Ingestion:** A nightly scheduled job (Python/Node.js) pulls performance metrics via the `GoogleAdsService` stream.
2.  **Database:** Metrics are stored in our secure internal PostgreSQL database, linked with our CRM data.
3.  **UI:** A React-based internal dashboard (see styling in `Solutions.tsx` / `App.tsx`) displays the merged data. Users can toggle views between "Raw Leads" (Google Data) and "Qualified Opportunities" (Internal Data).
4.  **Automation:** An n8n workflow triggers the `ConversionUploadService` when a lead status changes to "Closed-Won".

## API Services Called
We will primarily utilize the following services:
*   **`GoogleAdsService`**: To retrieve account-level and campaign-level performance metrics (`search`, `searchStream`).
*   **`CampaignService`**: To programmatically pause/enable campaigns based on internal capacity logic.
*   **`ConversionUploadService`**: To upload Click Conversions (GCLID) for offline conversion tracking.
*   **`CustomerService`**: To list accessible accounts within our Manager Account hierarchy.

## Tool Mockups
*(See attached screenshot referencing the internal dashboard UI)*
![Jento Ads Dashboard](./public/jento_ads_dashboard_mockup.png)

## Data Security
All Google Ads data is encrypted at rest using AES-256 and in transit via TLS 1.2+. Access is restricted via OAuth2 with multi-factor authentication (MFA) enabled for all internal team members. We do not store or process PII (Personally Identifiable Information) from Google Ads beyond what is required for attribution within our secure PostgreSQL environment.
