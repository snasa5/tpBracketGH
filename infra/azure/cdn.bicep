
param location string
param env string

resource fd 'Microsoft.Cdn/profiles@2023-05-01' = {
  name: 'tp-cdn-${env}'
  location: location
  sku: { name: 'Standard_Microsoft' }
}

resource endpoint 'Microsoft.Cdn/profiles/endpoints@2023-05-01' = {
  name: '${fd.name}/tp-web-${env}'
  location: location
  properties: {
    origins: [
      {
        name: 'web-origin'
        hostName: 'tp-web-svc' // Behind LB/DNS; update to public IP/DNS after AKS exposure
        httpPort: 80
        httpsPort: 443
      }
    ]
    isHttpAllowed: true
    isHttpsAllowed: true
  }
}
