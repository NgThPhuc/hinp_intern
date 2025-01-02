const vehicles = [
    {
        id: 1,
        saleOrder: 'SOBU-TESLA',
        ticketNo: 'TN8927',
        image: 'https://media.ed.edmunds-media.com/tesla/model-s/2024/oem/2024_tesla_model-s_sedan_plaid_fq_oem_1_1600.jpg',
        numberPlate: '70-1220',
        date: '3/22/2023 2:16:00 PM',
        description: 'ติดตั้ง Demo , ซ่อมแซม/แกไข , ถอนกลับ Onelink'
    },
    {
        id: 2,
        saleOrder: 'SOBU5-21080015',
        ticketNo: 'TN34234',
        image: 'https://i1-vnexpress.vnecdn.net/2021/09/19/VolvoXC4016811568884851jpg-1632041284.jpg?w=500&h=300&q=100&dpr=1&fit=crop&s=LL_PP09-d2qEQbB0lNfIDQ&t=image',
        numberPlate: '70-1220',
        date: '3/29/2023 2:29:41 PM',
        description:
            'ติดตั้งใหม่ , ติดตั้ง Demo , ถอนกลับ Onelink , ซ่อมแซม/แกไข'
    },
    {
        id: 3,
        saleOrder: 'SOBU-TESLA',
        ticketNo: 'TN8927',
        image: 'https://media.ed.edmunds-media.com/tesla/model-s/2024/oem/2024_tesla_model-s_sedan_plaid_fq_oem_1_1600.jpg',
        numberPlate: '70-1220',
        date: '3/22/2023 2:16:00 PM',
        description: 'ดตั้ง Demo , ซ่อมแซม/แกไข , ถอนกลับ Onelink'
    },
    {
        id: 4,
        saleOrder: 'SOBU5-21080015',
        ticketNo: 'TN34234',
        image: 'https://i1-vnexpress.vnecdn.net/2021/09/19/VolvoXC4016811568884851jpg-1632041284.jpg?w=500&h=300&q=100&dpr=1&fit=crop&s=LL_PP09-d2qEQbB0lNfIDQ&t=image',
        numberPlate: '70-1220',
        date: '3/29/2023 2:29:41 PM',
        description:
            'ติดตั้งใหม่ , ติดตั้ง Demo , ถอนกลับ Onelink , ซ่อมแซม/แกไข'
    },
    {
        id: 5,
        saleOrder: 'SOBU-TESLA',
        ticketNo: 'TN8927',
        image: 'https://media.ed.edmunds-media.com/tesla/model-s/2024/oem/2024_tesla_model-s_sedan_plaid_fq_oem_1_1600.jpg',
        numberPlate: '70-1220',
        date: '3/22/2023 2:16:00 PM',
        description: 'ติดตั้ง Demo , ซ่อมแซม/แกไข , ถอนกลับ Onelink'
    },
    {
        id: 6,
        saleOrder: 'SOBU5-21080015',
        ticketNo: 'TN34234',
        image: 'https://i1-vnexpress.vnecdn.net/2021/09/19/VolvoXC4016811568884851jpg-1632041284.jpg?w=500&h=300&q=100&dpr=1&fit=crop&s=LL_PP09-d2qEQbB0lNfIDQ&t=image',
        numberPlate: '70-1220',
        date: '3/29/2023 2:29:41 PM',
        description:
            'ติดตั้งใหม่ , ติดตั้ง Demo , ถอนกลับ Onelink , ซ่อมแซม/แกไข'
    },
    {
        id: 7,
        saleOrder: 'SOBU-TESLA',
        ticketNo: 'TN8927',
        image: 'https://media.ed.edmunds-media.com/tesla/model-s/2024/oem/2024_tesla_model-s_sedan_plaid_fq_oem_1_1600.jpg',
        numberPlate: '70-1220',
        date: '3/22/2023 2:16:00 PM',
        description: 'ติดตั้ง Demo , ซ่อมแซม/แกไข , ถอนกลับ Onelink'
    },
    {
        id: 8,
        saleOrder: 'SOBU5-21080015',
        ticketNo: 'TN34234',
        image: 'https://i1-vnexpress.vnecdn.net/2021/09/19/VolvoXC4016811568884851jpg-1632041284.jpg?w=500&h=300&q=100&dpr=1&fit=crop&s=LL_PP09-d2qEQbB0lNfIDQ&t=image',
        numberPlate: '70-1220',
        date: '3/29/2023 2:29:41 PM',
        description:
            'ติดตั้งใหม่ , ติดตั้ง Demo , ถอนกลับ Onelink , ซ่อมแซม/แกไข'
    }
];

const InstallationPage = () => {
    return (
        <div className="flex flex-col h-screen">
            {/* Header */}
            <div className="p-4 border-b">
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-semibold">Installation</h1>
                    <button className="px-4 py-2 bg-green-500 text-white rounded-lg flex items-center">
                        <span className="mr-1">+</span>
                        Add
                    </button>
                </div>
            </div>

            {/* Vehicle Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
                {vehicles.map((vehicle) => (
                    <div key={vehicle.id} className="border rounded-lg overflow-hidden">
                        <div className="p-3 border-b">
                            <div className="flex items-center gap-3">
                                <img src={vehicle.image} alt="" className="w-12 h-12 rounded-full object-cover" />
                                <div>
                                    <div className="font-semibold">Sale Order: {vehicle.saleOrder}</div>
                                    <div className="text-gray-500">Ticket No.: {vehicle.ticketNo}</div>
                                </div>
                            </div>
                        </div>
                        <img src={vehicle.image} alt="" className="w-full h-48 object-cover" />
                        <div className="p-3">
                            <div className="text-xl font-bold">{vehicle.numberPlate}</div>
                            <div className="text-gray-500">{vehicle.date}</div>
                            <p className="mt-2">{vehicle.description}</p>
                            <div className="mt-4 flex items-center justify-between">
                                <button className="text-green-600 hover:underline">
                                    VIEW MAP (สถานที่นัดหมาย)
                                </button>
                                <div className="flex gap-2">
                                    <button className="p-2 hover:bg-gray-100 rounded-full">
                                        <span>→</span>
                                    </button>
                                    <button className="p-2 hover:bg-gray-100 rounded-full">
                                        <span>🗑</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default InstallationPage