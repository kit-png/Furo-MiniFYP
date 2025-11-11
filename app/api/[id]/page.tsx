'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import { Button } from '@/components/ui/button';

const Header = dynamic(() => import('@/components/header').then(mod => ({ default: mod.Header })), {
  ssr: false
});
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Star, Activity, Code, DollarSign, Shield } from 'lucide-react';
import { mockAPIs } from '@/lib/mock-data';
import { useParams } from 'next/navigation';

export default function APIDetailsPage() {
  const params = useParams();
  const api = mockAPIs.find(a => a.id === params.id);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  if (!api) {
    return <div>API not found</div>;
  }

  const handlePayAndCall = () => {
    setIsPaymentModalOpen(true);
    // This will trigger the x402 payment flow in Phase 3
    console.log('Initiating x402 payment flow...');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-2xl mb-2">{api.name}</CardTitle>
                    <div className="flex items-center gap-4 mb-4">
                      <Badge variant="secondary">{api.category}</Badge>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-medium">{api.rating}</span>
                      </div>
                      <div className="flex items-center gap-1 text-gray-500">
                        <Activity className="h-4 w-4" />
                        {api.totalCalls.toLocaleString()} calls
                      </div>
                    </div>
                  </div>
                  <Badge variant={api.status === 'active' ? 'default' : 'secondary'}>
                    {api.status}
                  </Badge>
                </div>
                <p className="text-gray-600">{api.description}</p>
              </CardHeader>
            </Card>

            <Tabs defaultValue="overview" className="mt-6">
              <TabsList>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="documentation">Documentation</TabsTrigger>
                <TabsTrigger value="pricing">Pricing</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview" className="mt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>API Overview</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium mb-2">Endpoint</h4>
                        <code className="bg-gray-100 px-3 py-2 rounded text-sm block">
                          {api.endpoint}
                        </code>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Provider</h4>
                        <p className="text-sm text-gray-600">{api.provider}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="documentation" className="mt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>API Documentation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium mb-2">Request Format</h4>
                        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
{`GET ${api.endpoint}
Headers:
  X-PAYMENT: <base64-encoded-payment-proof>
  Content-Type: application/json`}
                        </pre>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Response Format</h4>
                        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
{`{
  "status": "success",
  "data": { ... },
  "timestamp": "2024-01-01T00:00:00Z"
}`}
                        </pre>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="pricing" className="mt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Pricing Details</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-4 bg-blue-50 rounded">
                        <div>
                          <h4 className="font-medium">Per Call</h4>
                          <p className="text-sm text-gray-600">Pay only for what you use</p>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold">{api.price} {api.currency}</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          <div>
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="h-5 w-5" />
                  Try This API
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center p-4 bg-gray-50 rounded">
                  <div className="text-2xl font-bold">{api.price} {api.currency}</div>
                  <div className="text-sm text-gray-600">per API call</div>
                </div>
                
                <Button 
                  className="w-full" 
                  size="lg"
                  onClick={handlePayAndCall}
                >
                  <Shield className="h-4 w-4 mr-2" />
                  Pay & Call API
                </Button>
                
                <div className="text-xs text-gray-500 text-center">
                  Powered by x402 protocol. Payment required before each API call.
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}