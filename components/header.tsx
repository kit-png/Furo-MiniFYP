'use client';

import { ConnectButton } from '@rainbow-me/rainbowkit';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Plus } from 'lucide-react';
import Link from 'next/link';

export function Header() {
  return (
    <header className="border-b bg-white">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          Furo
        </Link>
        
        <div className="flex-1 max-w-md mx-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input 
              placeholder="Search APIs..." 
              className="pl-10"
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Link href="/list-api">
            <Button variant="outline" size="sm">
              <Plus className="h-4 w-4 mr-2" />
              List API
            </Button>
          </Link>
          <ConnectButton />
        </div>
      </div>
    </header>
  );
}