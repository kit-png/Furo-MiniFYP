## Abstract
Build a Data and API Marketplace DApp that allows developers and data providers to monetize their APIs and data streams using crypto micropayments (x402). The platform enables providers to publish endpoints and set pricing, enforce pay-per-call access through x402 paywalls, verify on-chain payments, and manage settlements and payouts. It also provides a marketplace for discovery, ratings, and analytics. The MVP will be a centrally hosted app (Next.js and Node) with blockchain-native payments, with a roadmap toward optional decentralized compute for AI-based endpoints.

---

### A Note on Showcasing Skills
To better demonstrate core software engineering skills and reduce reliance on external SDKs, this project will focus on building key components from scratch. This includes creating a custom backend API to handle all business logic instead of using a BaaS, and implementing the core x402 payment protocol manually. This approach allows for a deeper understanding and a more robust showcase of backend development and protocol-level integration abilities.

---

## Modules

1.  **Marketplace Core (Custom Backend API)** – A custom-built backend using **Node.js, Express.js, and Prisma** to manage the PostgreSQL database (e.g., hosted on Supabase). It will handle all business logic for provider registry, API listings, pricing, search, ratings, and the payment ledger. This approach avoids reliance on a BaaS SDK for core logic.

2.  **Custom x402 Payment Gateway** – A **from-scratch implementation of the L402 protocol**. This involves creating the server-side middleware to issue `402 Payment Required` challenges (with macaroons and payment invoices) and the client-side logic to handle these challenges, enabling a deep showcase of protocol-level skills.

3.  **Provider Sandbox and SDK** – Offers plug-and-play middleware and SDK tools for providers to protect their APIs and test x402 flow locally.

4.  **Frontend (Marketplace UI)** – Enables API discovery, payments, onboarding, and dashboards using Next.js, React, and wallet connectors.

5.  **Billing and Settlement Engine** – Records payments, applies marketplace fees, and manages on-chain or off-chain payout flows.

6.  **Reputation, Dispute, and Governance** – Manages ratings, reviews, disputes, and blacklisting, with future DAO-based arbitration.

7.  **Search, Indexing, and Analytics** – Provides fast API discovery, usage analytics using search indexing and data aggregation.

8.  **Storage and Docs** – All API documentation, schemas, and metadata will be stored in the database to simplify the architecture.

9.  **Security and Rate Limiting** – Protects APIs from abuse, ensures replay protection, and manages authentication and rate limiting.

10. **RAG AI pipeline** connects to the app's database to help users find the API they need (semantic search using AI).

---

## Development Roadmap

### Phase 1: Frontend Foundation (Module 4)

## Abstract
Build a Data and API Marketplace DApp that allows developers and data providers to monetize their APIs and data streams using crypto micropayments (x402). The platform enables providers to publish endpoints and set pricing, enforce pay-per-call access through x402 paywalls, verify on-chain payments, and manage settlements and payouts. It also provides a marketplace for discovery, ratings, and analytics. The MVP will be a centrally hosted app (Next.js and Node) with blockchain-native payments, with a roadmap toward optional decentralized compute for AI-based endpoints.

---

### A Note on Showcasing Skills
To better demonstrate core software engineering skills and reduce reliance on external SDKs, this project will focus on building key components from scratch. This includes creating a custom backend API to handle all business logic instead of using a BaaS, and implementing the core x402 payment protocol manually. This approach allows for a deeper understanding and a more robust showcase of backend development and protocol-level integration abilities.

---

## Modules

1.  **Marketplace Core (Custom Backend API)** – A custom-built backend using **Node.js, Express.js, and Prisma** to manage the PostgreSQL database (e.g., hosted on Supabase). It will handle all business logic for provider registry, API listings, pricing, search, ratings, and the payment ledger. This approach avoids reliance on a BaaS SDK for core logic.

2.  **Custom x402 Payment Gateway** – A **from-scratch implementation of the L402 protocol**. This involves creating the server-side middleware to issue `402 Payment Required` challenges (with macaroons and payment invoices) and the client-side logic to handle these challenges, enabling a deep showcase of protocol-level skills.

3.  **Provider Sandbox and SDK** – Offers plug-and-play middleware and SDK tools for providers to protect their APIs and test x402 flow locally.

4.  **Frontend (Marketplace UI)** – Enables API discovery, payments, onboarding, and dashboards using Next.js, React, and wallet connectors.

5.  **Billing and Settlement Engine** – Records payments, applies marketplace fees, and manages on-chain or off-chain payout flows.

6.  **Reputation, Dispute, and Governance** – Manages ratings, reviews, disputes, and blacklisting, with future DAO-based arbitration.

7.  **Search, Indexing, and Analytics** – Provides fast API discovery, usage analytics using search indexing and data aggregation.

8.  **Storage and Docs** – All API documentation, schemas, and metadata will be stored in the database to simplify the architecture.

9.  **Security and Rate Limiting** – Protects APIs from abuse, ensures replay protection, and manages authentication and rate limiting.

10. **RAG AI pipeline** connects to the app's database to help users find the API they need (semantic search using AI).

---

## Development Roadmap

### Phase 1: Frontend Foundation (Module 4)

- [ ] **Project Setup:** Initialize Next.js project with TypeScript, Tailwind CSS, and ESLint.
- [x] **Shadcn/ui Components Implemented:**
    - **UI Components:** `button`, `separator`, `sheet`, `tooltip`, `input`, `skeleton`, `breadcrumb`, `label`, `card`, `select`, `tabs`, `table`, `toggle`, `badge`, `checkbox`, `dropdown-menu`, `drawer`, `avatar`, `sonner`, `toggle-group`.
    - **Application Components/Blocks:** `app-sidebar`, `chart-area-interactive`, `data-table`, `nav-documents`, `nav-main`, `nav-secondary`, `nav-user`, `section-cards`, `site-header`.
    - **Pages/Data:** `app/dashboard/page.tsx`, `app/dashboard/data.json`.
    - **Hooks:** `hooks/use-mobile.ts`.
- [ ] **UI/UX Wireframing:** Design basic wireframes for the main pages (Homepage, API Details, Dashboard).
- [ ] **Core Components:** Build reusable UI components (e.g., Header, Footer, Buttons, Cards).
- [ ] **Main Layout:** Implement the main application shell with navigation.
- [ ] **Homepage:** Create the API marketplace discovery page with a search bar and a grid/list of available APIs.
- [ ] **API Details Page:** Develop the page that displays detailed information for a single API.
- [ ] **Wallet Integration:** Integrate a wallet connector library (e.g., RainbowKit, Wagmi) for user authentication.
- [ ] **Provider Dashboard:** Create a basic dashboard for authenticated users to view their listed APIs.
- [ ] **"List an API" Form:** Build the initial form for providers to submit new APIs (UI only).

### Phase 2: Custom Backend and Database (Module 1)

- [ ] **Database Schema:** Design and implement the required tables in Supabase using Prisma Schema (e.g., `providers`, `apis`, `verified_payments`).
- [ ] **Project Setup:** Set up a new Node.js/Express.js project for the backend API.
- [ ] **Backend API Core:** Develop the core API endpoints (e.g., using a REST or GraphQL approach) for CRUD operations on APIs.
- [ ] **Authentication:** Implement endpoint protection and user management logic.
- [ ] **Connect Frontend to Backend:** Wire up the frontend forms and data displays to the new custom backend.

### Phase 3: From-Scratch x402 Payments (Module 2)

- [ ] **Server: Paywall Middleware:** Create Express middleware to protect routes. If no `X-PAYMENT` header, respond with `402` and a JSON challenge detailing the payment required.
- [ ] **Client: HTTP Interceptor:** Create a wrapper for `fetch` or `axios` that intercepts `402` responses.
- [ ] **Client: Payment UI:** On `402`, trigger a UI modal that asks the user to approve the transaction.
- [ ] **Client: Transaction Handling:** On user approval, use `ethers.js`/`viem` to send the transaction to the network.
- [ ] **Client: Retry with Proof:** Once the transaction is confirmed, construct the `Payment Payload` (with the `txHash`), Base64-encode it, and re-send the original request with the `X-PAYMENT` header.
- [ ] **Server: Payment Verification:** In the paywall middleware, if an `X-PAYMENT` header exists, decode it. Use `ethers.js`/`viem` to look up the `txHash` on-chain.
- [ ] **Server: Verify & Prevent Replay:** Confirm the on-chain transaction details (amount, recipient) are correct and check the `txHash` against the `verified_payments` table to prevent reuse. If valid, grant access.
- [ ] **Developer Testing:** Create mock API requests and a testing environment for developers to easily test the x402 payment flow.
- [ ] **Testnet Integration:** Configure the system to use a blockchain testnet (e.g., Sepolia) for all payment operations, requiring real (testnet) funds for testing.

### Phase 4: Core Features and Deployment

- [ ] **Reputation System:** Implement the ability for users to rate and review APIs.
- [ ] **Security:** Implement basic rate limiting and security measures on the backend API.
- [ ] **UI Polish:** Refine the user interface and improve user experience.
- [ ] **Deployment:** Deploy the Next.js frontend (e.g., to Vercel) and the custom backend API (e.g., to Fly.io, Railway).
- [ ] **Testing:** Conduct end-to-end testing in a production-like environment.
- [ ] **Monitoring:** Set up basic logging and monitoring for the application.
- [ ] **UI/UX Wireframing:** Design basic wireframes for the main pages (Homepage, API Details, Dashboard).
- [ ] **Core Components:** Build reusable UI components (e.g., Header, Footer, Buttons, Cards).
- [ ] **Main Layout:** Implement the main application shell with navigation.
- [ ] **Homepage:** Create the API marketplace discovery page with a search bar and a grid/list of available APIs.
- [ ] **API Details Page:** Develop the page that displays detailed information for a single API.
- [ ] **Wallet Integration:** Integrate a wallet connector library (e.g., RainbowKit, Wagmi) for user authentication.
- [ ] **Provider Dashboard:** Create a basic dashboard for authenticated users to view their listed APIs.
- [ ] **"List an API" Form:** Build the initial form for providers to submit new APIs (UI only).

### Phase 2: Custom Backend and Database (Module 1)

- [ ] **Database Schema:** Design and implement the required tables in Supabase using Prisma Schema (e.g., `providers`, `apis`, `verified_payments`).
- [ ] **Project Setup:** Set up a new Node.js/Express.js project for the backend API.
- [ ] **Backend API Core:** Develop the core API endpoints (e.g., using a REST or GraphQL approach) for CRUD operations on APIs.
- [ ] **Authentication:** Implement endpoint protection and user management logic.
- [ ] **Connect Frontend to Backend:** Wire up the frontend forms and data displays to the new custom backend.

### Phase 3: From-Scratch x402 Payments (Module 2)

- [ ] **Server: Paywall Middleware:** Create Express middleware to protect routes. If no `X-PAYMENT` header, respond with `402` and a JSON challenge detailing the payment required.
- [ ] **Client: HTTP Interceptor:** Create a wrapper for `fetch` or `axios` that intercepts `402` responses.
- [ ] **Client: Payment UI:** On `402`, trigger a UI modal that asks the user to approve the transaction.
- [ ] **Client: Transaction Handling:** On user approval, use `ethers.js`/`viem` to send the transaction to the network.
- [ ] **Client: Retry with Proof:** Once the transaction is confirmed, construct the `Payment Payload` (with the `txHash`), Base64-encode it, and re-send the original request with the `X-PAYMENT` header.
- [ ] **Server: Payment Verification:** In the paywall middleware, if an `X-PAYMENT` header exists, decode it. Use `ethers.js`/`viem` to look up the `txHash` on-chain.
- [ ] **Server: Verify & Prevent Replay:** Confirm the on-chain transaction details (amount, recipient) are correct and check the `txHash` against the `verified_payments` table to prevent reuse. If valid, grant access.
- [ ] **Developer Testing:** Create mock API requests and a testing environment for developers to easily test the x402 payment flow.
- [ ] **Testnet Integration:** Configure the system to use a blockchain testnet (e.g., Sepolia) for all payment operations, requiring real (testnet) funds for testing.

### Phase 4: Core Features and Deployment

- [ ] **Reputation System:** Implement the ability for users to rate and review APIs.
- [ ] **Security:** Implement basic rate limiting and security measures on the backend API.
- [ ] **UI Polish:** Refine the user interface and improve user experience.
- [ ] **Deployment:** Deploy the Next.js frontend (e.g., to Vercel) and the custom backend API (e.g., to Fly.io, Railway).
- [ ] **Testing:** Conduct end-to-end testing in a production-like environment.
- [ ] **Monitoring:** Set up basic logging and monitoring for the application.