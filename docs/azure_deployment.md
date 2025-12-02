
# Azure deployment guide
- **Prereqs:** Azure subscription, Resource Group `tp-rg`, ACR, AKS permissions, GitHub Actions secrets.
- **Deploy infra:**
  1. az login
  2. az group create -n tp-rg -l eastus
  3. az deployment group create -g tp-rg -f infra/azure/main.bicep -p env=prod location=eastus
- **Configure secrets:** KEYVAULT_URL, COSMOS_CONNECTION_STRING, APPINSIGHTS_KEY, GOALSERVE_KEY, POLYGON_RPC, PAYOUT_SIGNER_KEY, PRIZE_CONTRACT.
- **CI/CD:** Push to `main` triggers Build/Test and Azure Deploy workflows.
