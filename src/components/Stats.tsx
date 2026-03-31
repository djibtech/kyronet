import { TrendingUp, Users, Award, Zap } from 'lucide-react';

const stats = [
  {
    icon: TrendingUp,
    value: '99.98%',
    label: 'Disponibilité',
    color: 'text-blue-600'
  },
  {
    icon: Users,
    value: '120+',
    label: 'Clients',
    color: 'text-emerald-600'
  },
  {
    icon: Award,
    value: '15+',
    label: 'Ans expérience',
    color: 'text-amber-600'
  },
  {
    icon: Zap,
    value: '24/7',
    label: 'Support',
    color: 'text-rose-600'
  }
];

export default function Stats() {

  return (

    <section className="py-20 bg-white">

      <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-10">

        {stats.map((stat, index) => (

          <div key={index} className="text-center">

            {/* Icon */}
            <div className="flex justify-center mb-3">

              <stat.icon
                className={`w-10 h-10 ${stat.color}`}
                strokeWidth={1.5}
              />

            </div>

            {/* Value */}
            <div className="text-3xl font-bold text-slate-900">

              {stat.value}

            </div>

            {/* Label */}
            <div className="text-sm text-slate-500">

              {stat.label}

            </div>

          </div>

        ))}

      </div>

    </section>

  );

}
