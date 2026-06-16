import React, { useState, useEffect } from 'react';
import { 
  Users, Calendar, MessageSquare, LayoutDashboard, 
  Settings, LogOut, Search, Bell, Menu, X, ArrowUpRight, CheckCircle2, Clock
} from 'lucide-react';
import { socket } from '../../lib/socket';

type Appointment = {
  id: string;
  patientName: string;
  time: string;
  type: string;
  status: string;
  phone?: string;
};

export default function AdminDashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  useEffect(() => {
    // Listen for initial appointments on connect
    socket.on('initial_appointments', (data: Appointment[]) => {
      setAppointments(data);
    });

    // Listen for new booking events
    socket.on('new_appointment', (newApt: Appointment) => {
      setAppointments((prev) => [newApt, ...prev]);
      
      // Optionally notify via web Audio or alert
      console.log('New real-time appointment received:', newApt);
    });

    // Cleanup listeners
    return () => {
      socket.off('initial_appointments');
      socket.off('new_appointment');
    };
  }, []);

  // Mock data for the dashboard stats
  const stats = [
    { title: 'Total Appointments', value: appointments.length.toString(), change: '+12%', icon: <Calendar size={24} /> },
    { title: 'Active Patients', value: '840', change: '+5%', icon: <Users size={24} /> },
    { title: 'New Messages', value: '32', change: '+18%', icon: <MessageSquare size={24} /> },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Mobile Sidebar Overlay */}
      {!isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/50 z-20 xl:hidden"
          onClick={() => setIsSidebarOpen(true)}
        />
      )}

      {/* Sidebar */}
      <aside className={`fixed xl:static inset-y-0 left-0 z-30 w-64 bg-slate-900 text-slate-300 transition-transform duration-300 ease-in-out ${isSidebarOpen ? '-translate-x-full xl:translate-x-0' : 'translate-x-0'}`}>
        <div className="h-full flex flex-col">
          <div className="p-6 flex items-center justify-between">
            <h2 className="text-xl font-bold text-white tracking-tight" style={{ fontFamily: "Poppins, sans-serif" }}>Clinic Admin</h2>
            <button className="xl:hidden text-slate-400 hover:text-white" onClick={() => setIsSidebarOpen(true)}>
              <X size={20} />
            </button>
          </div>

          <nav className="flex-1 px-4 py-4 space-y-1">
            <a href="/admin" className="flex items-center gap-3 px-3 py-2.5 bg-[#22D3EE]/10 text-[#22D3EE] rounded-lg font-medium transition-colors">
              <LayoutDashboard size={20} />
              Dashboard
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2.5 text-slate-400 hover:text-slate-100 hover:bg-slate-800 rounded-lg transition-colors font-medium">
              <Calendar size={20} />
              Appointments
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2.5 text-slate-400 hover:text-slate-100 hover:bg-slate-800 rounded-lg transition-colors font-medium">
              <Users size={20} />
              Patients
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2.5 text-slate-400 hover:text-slate-100 hover:bg-slate-800 rounded-lg transition-colors font-medium">
              <MessageSquare size={20} />
             Messages
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2.5 text-slate-400 hover:text-slate-100 hover:bg-slate-800 rounded-lg transition-colors font-medium">
              <Settings size={20} />
              Settings
            </a>
          </nav>

          <div className="p-4 mt-auto">
            <a href="/" className="flex items-center gap-3 px-3 py-2.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors font-medium">
              <LogOut size={20} />
              Return to Website
            </a>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 h-screen overflow-y-auto">
        {/* Top Header */}
        <header className="bg-white border-b border-slate-200 sticky top-0 z-10">
          <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setIsSidebarOpen(false)}
                className="text-slate-500 hover:text-slate-700 xl:hidden focus:outline-none"
              >
                <Menu size={24} />
              </button>
              
              <div className="relative hidden sm:block w-64 md:w-80">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input 
                  type="text" 
                  placeholder="Search patients, appointments..." 
                  className="w-full bg-slate-100 border-none rounded-full pl-10 pr-4 py-2 text-sm focus:ring-2 focus:ring-[#22D3EE]/50 outline-none"
                />
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button className="relative text-slate-400 hover:text-slate-600">
                <Bell size={20} />
                <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
              </button>
              <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-[#22D3EE] to-blue-500 text-white flex items-center justify-center font-semibold shadow-sm text-sm">
                DK
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="flex-1 p-4 sm:p-6 lg:p-8">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-slate-900 tracking-tight" style={{ fontFamily: "Poppins, sans-serif" }}>Overview</h1>
            <p className="text-sm text-slate-500 mt-1">Good morning! Here's what's happening at the clinic today.</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm flex items-start justify-between group hover:shadow-md transition-shadow">
                <div>
                  <p className="text-sm font-medium text-slate-500 mb-1">{stat.title}</p>
                  <div className="flex items-end gap-3">
                    <h3 className="text-3xl font-semibold text-slate-900" style={{ fontFamily: "Poppins, sans-serif" }}>{stat.value}</h3>
                    <span className="flex items-center text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full mb-1">
                      <ArrowUpRight size={12} className="mr-0.5" /> {stat.change}
                    </span>
                  </div>
                </div>
                <div className="p-3 bg-blue-50 text-blue-600 rounded-xl group-hover:scale-110 group-hover:bg-[#22D3EE]/10 group-hover:text-[#22D3EE] transition-transform">
                  {stat.icon}
                </div>
              </div>
            ))}
          </div>

          {/* Recent Appointments */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
            <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-slate-900" style={{ fontFamily: "Poppins, sans-serif" }}>Today's Appointments</h2>
              <button className="text-sm font-medium text-[#22D3EE] hover:text-blue-700 transition-colors">View All</button>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 text-xs uppercase tracking-wider text-slate-500 font-semibold border-b border-slate-100">
                    <th className="px-6 py-4">Patient Name</th>
                    <th className="px-6 py-4">Time</th>
                    <th className="px-6 py-4">Treatment</th>
                    <th className="px-6 py-4">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {appointments.map((apt) => (
                    <tr key={apt.id} className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="font-medium text-slate-900 text-sm">{apt.patientName}</div>
                        {apt.phone && <div className="text-xs text-slate-500 mt-0.5">{apt.phone}</div>}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-1.5 text-sm text-slate-600">
                          <Clock size={14} className="text-slate-400" />
                          {apt.time}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm text-slate-700 font-medium bg-slate-100 px-2.5 py-1 rounded-md">{apt.type}</span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-1.5">
                          {apt.status === 'Completed' && <CheckCircle2 size={16} className="text-emerald-500" />}
                          {apt.status === 'Waiting' && <Clock size={16} className="text-amber-500" />}
                          {apt.status === 'Scheduled' && <div className="w-2 h-2 rounded-full bg-blue-500 ml-1"></div>}
                          <span className={`text-sm font-medium
                            ${apt.status === 'Completed' ? 'text-emerald-700' : ''}
                            ${apt.status === 'Waiting' ? 'text-amber-700' : ''}
                            ${apt.status === 'Scheduled' ? 'text-blue-700 pl-1' : ''}
                          `}>
                            {apt.status}
                          </span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            {appointments.length === 0 && (
              <div className="py-12 text-center">
                <p className="text-slate-500 text-sm">No more appointments today.</p>
              </div>
            )}
          </div>

        </div>
      </main>
    </div>
  );
}
