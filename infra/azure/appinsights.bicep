
param location string
param env string

resource ai 'Microsoft.Insights/components@2020-02-02' = {
  name: 'tp-ai-${env}'
  location: location
  kind: 'web'
  properties: {
    Application_Type: 'web'
  }
}

output instrumentationKey string = ai.properties.InstrumentationKey
