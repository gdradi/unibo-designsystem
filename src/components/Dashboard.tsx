import { Link } from 'lucide-react';
import { Users, Calendar, Clock, Package, CreditCard, BarChart2, MessageSquare, Sparkles, LucideProps } from 'lucide-react';
import React from 'react';
import { ForwardRefExoticComponent } from 'react';


function DashboardCard({ icon: Icon, title, value, trend, color }: { icon: ForwardRefExoticComponent<LucideProps>, title: string, value: string, trend?: string, color: string }) {
  return (
    <div className="bg-default p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <div className={`p-2 rounded-lg ${color}`}>
          <Icon className="h-6 w-6 text-reverse" />
        </div>
        {trend && (
          <span className="text-primary text-sm font-medium">+{trend}%</span>
        )}
      </div>
      <h3 className="text-default/50 text-sm font-medium mb-1">{title}</h3>
      <p className="text-2xl font-semibold text-default">{value}</p>
    </div>
  );
}

// Attenzione - qui intellisense tailwind non funziona
const dashboardCards = [
  { icon: Users, title: 'Clienti Totali', value: '1,234', trend: '12', color: 'bg-purple-600' },
  { icon: Calendar, title: 'Appuntamenti Oggi', value: '28', trend: '5', color: 'bg-blue-600' },
  { icon: Clock, title: 'Ore Prenotate', value: '156', trend: '8', color: 'bg-green-600' },
  { icon: Package, title: 'Prodotti Venduti', value: '89', trend: '15', color: 'bg-orange-600' },
  { icon: CreditCard, title: 'Incasso Mensile', value: '€12,450', trend: '10', color: 'bg-pink-600' },
  { icon: BarChart2, title: 'Tasso di Ritorno', value: '75%', trend: '3', color: 'bg-indigo-600' },
  { icon: MessageSquare, title: 'Messaggi', value: '48', color: 'bg-teal-600' },
  { icon: Sparkles, title: 'Soddisfazione', value: '4.8/5', trend: '2', color: 'bg-yellow-600' },
];

export default function Dashboard() {
  return <>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {dashboardCards.map((card, index) => (
        <DashboardCard
          key={index}
          icon={card.icon}
          title={card.title}
          value={card.value}
          trend={card.trend}
          color={card.color}
        />
      ))}
    </div>


    <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8">

      <div className="bg-default p-6 rounded-xl shadow-sm">
        <div className="mb-4">
          <h2 className="text-lg font-semibold text-default">Tailwind</h2>
          <div className="text-default/80 text-sm">Risorse utili per Tailwind CSS</div>
        </div>
        <div className="space-y-4 text-default">
          <a href="https://tailwindcss.com/docs/utility-first" target='_blank' rel="noreferrer" className='flex items-center space-x-2 text-primary hover:text-primary/80'><Link className='h-4 w-4 mr-2' />Tailwind css utility first</a>
          <a href="https://tailblocks.cc/" target='_blank' rel="noreferrer" className='flex items-center space-x-2 text-primary hover:text-primary/80'><Link className='h-4 w-4 mr-2' />TailBlocks</a>
          <a href="https://merakiui.com/components" target='_blank' rel="noreferrer" className='flex items-center space-x-2 text-primary hover:text-primary/80'><Link className='h-4 w-4 mr-2' />Meraki UI</a>
          <a href="https://boxmodel.dev" target='_blank' rel="noreferrer" className='flex items-center space-x-2 text-primary hover:text-primary/80'><Link className='h-4 w-4 mr-2' />Boxmodel.dev</a>
        </div>
      </div>

      <div className="bg-default p-6 rounded-xl shadow-sm">
        <div className="mb-4">
          <h2 className="text-lg font-semibold text-default">Antd</h2>
          <div className="text-default/80 text-sm">Risorse utili per Ant design</div>
        </div>
        <div className="space-y-4 text-default">
          <a href="https://ant.design/components/overview/" target='_blank' rel="noreferrer" className='flex items-center space-x-2 text-primary hover:text-primary/80'><Link className='h-4 w-4 mr-2' />Components</a>
          <a href="https://ant.design/docs/react/use-with-vite" target='_blank' rel="noreferrer" className='flex items-center space-x-2 text-primary hover:text-primary/80'><Link className='h-4 w-4 mr-2' />Usage with vite</a>
          <a href="https://ant.design/docs/react/customize-theme" target='_blank' rel="noreferrer" className='flex items-center space-x-2 text-primary hover:text-primary/80'><Link className='h-4 w-4 mr-2' />Customize theme</a>
          <a href="https://ant.design/docs/react/compatible-style" target='_blank' rel="noreferrer" className='flex items-center space-x-2 text-primary hover:text-primary/80'><Link className='h-4 w-4 mr-2' />CSS compatible</a>
        </div>
      </div>

    </div>
  </>
}