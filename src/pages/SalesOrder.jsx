import { useSearch } from '../context/SearchContext';
import { useEffect } from 'react';

const datafake = {
    content: [
        {
            id: 1,
            CreatedBy: "ODOO_SYSTEM",
            CreatedDate: "2021-08-03 10:30",
            UpdatedBy: "ODOO_SYSTEM",
            UpdatedDate: "2021-08-03 10:30",
            SONo: "SOBU4-21080002",
            SOStatus: "sale",
            SODate: "2021-08-02 17:00",
            CustCode: "400,002,325.00"
        },
        {
            id: 2,
            CreatedBy: "ODOO_SYSTEM",
            CreatedDate: "2021-08-02 16:00",
            UpdatedBy: "CONSUMER_STS",
            UpdatedDate: "2021-08-03 11:09",
            SONo: "SOBU2-21080010",
            SOStatus: "validate",
            SODate: "2021-08-01 17:00",
            CustCode: "270,000,002.00"
        },
        {
            id: 3,
            CreatedBy: "ODOO_SYSTEM",
            CreatedDate: "2021-08-03 11:09",
            UpdatedBy: "ODOO_SYSTEM",
            UpdatedDate: "2021-08-03 11:09",
            SONo: "SOBU2-21080010",
            SOStatus: "validate",
            SODate: "2021-08-01 17:00",
            CustCode: "270,000,002.00"
        },
        {
            id: 4,
            CreatedBy: "ODOO_SYSTEM",
            CreatedDate: "2021-08-04 12:00",
            UpdatedBy: "ODOO_SYSTEM",
            UpdatedDate: "2021-08-04 12:00",
            SONo: "SOBU4-21080005",
            SOStatus: "sale",
            SODate: "2021-08-03 17:00",
            CustCode: "430,000,079.00"
        },
        {
            id: 5,
            CreatedBy: "ODOO_SYSTEM",
            CreatedDate: "2021-08-04 12:00",
            UpdatedBy: "ODOO_SYSTEM",
            UpdatedDate: "2021-08-04 12:00",
            SONo: "SOBU4-21080005",
            SOStatus: "sale",
            SODate: "2021-08-03 17:00",
            CustCode: "430,000,079.00"
        },
        {
            id: 6,
            CreatedBy: "ODOO_SYSTEM",
            CreatedDate: "2021-08-06 15:30",
            UpdatedBy: "ODOO_SYSTEM",
            UpdatedDate: "2021-08-06 15:30",
            SONo: "SOBU7-21080001",
            SOStatus: "draft",
            SODate: "2021-08-05 17:00",
            CustCode: "430,000,289.00"
        },
        {
            id: 7,
            CreatedBy: "MANUAL_SYSTEM",
            CreatedDate: "2021-08-07 15:10",
            UpdatedBy: "MANUAL_SYSTEM",
            UpdatedDate: "2021-08-07 15:10",
            SONo: "SOBU4-21080004",
            SOStatus: "sale",
            SODate: "2021-08-03 00:00",
            CustCode: "80,000,568.00"
        },
        {
            id: 8,
            CreatedBy: "MANUAL_SYSTEM",
            CreatedDate: "2021-08-07 21:45",
            UpdatedBy: "MANUAL_SYSTEM",
            UpdatedDate: "2021-08-07 21:45",
            SONo: "SOBU5-21080002",
            SOStatus: "sale",
            SODate: "2021-08-03 00:00",
            CustCode: "4,010,200,008.00"
        },
        {
            id: 9,
            CreatedBy: "ODOO_SYSTEM",
            CreatedDate: "2021-08-09 16:30",
            UpdatedBy: "ODOO_SYSTEM",
            UpdatedDate: "2021-08-09 16:30",
            SONo: "SOBU5-21080015",
            SOStatus: "sale",
            SODate: "2021-08-08 17:00",
            CustCode: "400,001,562.00"
        },
        {
            id: 10,
            CreatedBy: "ODOO_SYSTEM",
            CreatedDate: "2021-08-09 16:30",
            UpdatedBy: "ODOO_SYSTEM",
            UpdatedDate: "2021-08-09 16:30",
            SONo: "SOBU5-21080015",
            SOStatus: "sale",
            SODate: "2021-08-08 17:00",
            CustCode: "400,001,562.00"
        }
    ],
    totalElements: 10,
    size: 25,
};

const SalesOrder = () => {
  const { setCurrentPage, filterSalesOrderData } = useSearch();
  
  useEffect(() => {
    setCurrentPage('salesorder');
  }, []);

  const filteredOrders = filterSalesOrderData(datafake.content);

  return (
    <div className="h-[calc(100vh-64px)] flex flex-col">
      {/* Header với chiều cao cố định */}
      <div className="h-16 min-h-[64px] p-4 border-b">
        <h1 className="text-2xl font-semibold">Sale Order</h1>
      </div>

      {/* Container chính với chiều cao cố định */}
      <div className="flex-1 min-h-0 overflow-auto">
        <div className="relative">
          <table className="w-full">
            <thead className="bg-gray-50 sticky top-0">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">CreatedBy</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">CreatedDate</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">UpdatedBy</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">UpdatedDate</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">SONo</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">SOStatus</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">SODate</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">CustCode</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredOrders.length > 0 ? (
                filteredOrders.map((order) => (
                  <tr key={order.id}>
                    <td className="px-6 py-4 whitespace-nowrap">{order.CreatedBy}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{order.CreatedDate}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{order.UpdatedBy}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{order.UpdatedDate}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{order.SONo}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium
                        ${order.SOStatus === 'sale' ? 'bg-green-100 text-green-800' : 
                          order.SOStatus === 'validate' ? 'bg-blue-100 text-blue-800' : 
                          'bg-gray-100 text-gray-800'}`}>
                        {order.SOStatus}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">{order.SODate}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{order.CustCode}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="8" className="h-[400px]">
                    <div className="flex items-center justify-center h-full text-gray-500">
                      No results found
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SalesOrder;