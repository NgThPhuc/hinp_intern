import { useState } from 'react';

const CreateJob = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    saleOrder: '',
    ticketNo: '',
    boxNo: '',
    description: '',
    appointmentDate: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    onClose();
  };

  return (
    <div className={`fixed inset-y-0 right-0 w-full md:w-[600px] bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
      isOpen ? 'translate-x-0' : 'translate-x-full'
    }`}>
      <div className="h-full flex flex-col">
        <div className="border-b px-6 py-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold">Inspections Form</h2>
          <div className="flex gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 text-gray-500 hover:text-gray-700"
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
            >
              Save
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Sale Order
              </label>
              <input
                type="text"
                name="saleOrder"
                value={formData.saleOrder}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Ticket No.
              </label>
              <input
                type="text"
                name="ticketNo"
                value={formData.ticketNo}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Box No.
              </label>
              <input
                type="text"
                name="boxNo"
                value={formData.boxNo}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                ประเภทการติดตั้ง
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={3}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                วันที่นัดหมาย
              </label>
              <input
                type="datetime-local"
                name="appointmentDate"
                value={formData.appointmentDate}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateJob;