import { Button } from 'antd';
import React from 'react';

export default function SamplePage() {
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-semibold text-default">Sample page</h1>
      <div className="bg-default p-6 rounded-xl shadow-sm">
        <p className="text-default/90">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
      <div className="bg-default p-6 rounded-xl shadow-sm">
        <p className="text-default/90 space-x-2">
          <button>bottone</button>
          <button className="bg-primary text-reverse rounded-md px-4 py-1 hover:bg-primary/80 ">bottone</button>
          <Button type="primary">bottone</Button>
        </p>
      </div>
    </div>
  );
}