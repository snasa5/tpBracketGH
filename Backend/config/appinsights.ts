
import appInsights from 'applicationinsights';
export function initInsights() {
  const key = process.env.APPINSIGHTS_KEY;
  if (!key) return;
  appInsights.setup(key).setAutoCollectDependencies(true).setAutoCollectRequests(true).start();
}
