import { BiPackage, BiCheckShield, BiTimeFive } from 'react-icons/bi';
import { BsCashCoin } from 'react-icons/bs';

const DashboardHome = () => {
    // Hardcoded data (replace with dynamic values later)
    const stats = [
        {
            label: 'Total Parcels',
            value: 12,
            icon: <BiPackage className="text-3xl text-blue-600" />,
            color: 'bg-blue-100',
        },
        {
            label: 'Payment Due',
            value: 4,
            icon: <BsCashCoin className="text-3xl text-yellow-600" />,
            color: 'bg-yellow-100',
        },
        {
            label: 'Payment Succeeded',
            value: 7,
            icon: <BiCheckShield className="text-3xl text-green-600" />,
            color: 'bg-green-100',
        },
        {
            label: 'Delivered Items',
            value: 6,
            icon: <BiTimeFive className="text-3xl text-purple-600" />,
            color: 'bg-purple-100',
        },
    ];

    return (
        <div className="p-6">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">📦 Dashboard Summary</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {stats.map((item, index) => (
                    <div
                        key={index}
                        className={`rounded-xl shadow-md p-5 flex items-center gap-4 ${item.color}`}
                    >
                        <div className="p-3 rounded-full bg-white shadow">{item.icon}</div>
                        <div>
                            <p className="text-gray-600 text-sm">{item.label}</p>
                            <h3 className="text-2xl font-bold text-gray-800">{item.value}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DashboardHome;
