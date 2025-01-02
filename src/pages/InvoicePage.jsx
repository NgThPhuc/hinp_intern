import { useSearch } from '../context/SearchContext';
import { useEffect } from 'react';

const datafake = {
    content: [
        {
            id: 1,
            invoice_no: "IV2102036",
            item_no: 1.00,
            item_quantity: 2.00,
            item_price: 6300.00,
            item_discount_pe: 0,
            item_desc: "Onetrack Hero M DT700 ID9533284 ทะเบียน 1กญู-7547 2.ID9533295 ทะเบียน 1ษษ-3829"
        },
        {
            id: 2,
            invoice_no: "IV2102068",
            item_no: 2.00,
            item_quantity: 1.00,
            item_price: 6750.00,
            item_discount_pe: 0,
            item_desc: "SmartMini4"
        },
        {
            id: 3,
            invoice_no: "IV2102068",
            item_no: 3.00,
            item_quantity: 1.00,
            item_price: 6000.00,
            item_discount_pe: 0,
            item_desc: "BUZZER DT-700 ID9533908 ทะเบียน อูค-3589"
        },
        {
            id: 4,
            invoice_no: "IV2102090",
            item_no: 4.00,
            item_quantity: 1.00,
            item_price: 1401.87,
            item_discount_pe: 0,
            item_desc: "SMALL METAL SQUARE CAMERA ID9513300 ทะเบียน สชช-9853"
        },
        {
            id: 5,
            invoice_no: "IV2102112",
            item_no: 5.00,
            item_quantity: 12.00,
            item_price: 7100.00,
            item_discount_pe: 0,
            item_desc: "DT HINO CONNECT FOR XZU"
        },
        {
            id: 6,
            invoice_no: "IV2102112",
            item_no: 6.00,
            item_quantity: 20.00,
            item_price: 7100.00,
            item_discount_pe: 0,
            item_desc: "DT HINO CONNECT FOR FG8J, FL8J, FM8J"
        },
        {
            id: 7,
            invoice_no: "IV2102134",
            item_no: 7.00,
            item_quantity: 1.00,
            item_price: 4044.86,
            item_discount_pe: 0,
            item_desc: "อุปกรณ์ GPS ให้เช่า"
        },
        {
            id: 8,
            invoice_no: "IV2102135",
            item_no: 8.00,
            item_quantity: 5.00,
            item_price: 9813.00,
            item_discount_pe: 0,
            item_desc: "DT SmartMini4-ZC590"
        },
        {
            id: 9,
            invoice_no: "IV2102135",
            item_no: 9.00,
            item_quantity: 5.00,
            item_price: 0.00,
            item_discount_pe: 0,
            item_desc: "SMALL METAL SQUARE CAMERA ID9534219 2.ID9534105 3.ID9534134 4.ID95353970 5.ID9534..."
        },
        {
            id: 10,
            invoice_no: "AI2103001",
            item_no: 10.00,
            item_quantity: 1.00,
            item_price: 108750.00,
            item_discount_pe: 0,
            item_desc: "เงินมัดจำลำลิขิต"
        }
    ],
    totalElements: 10,
    size: 25,
};

const InvoicePage = () => {
  const { setCurrentPage, filterInvoiceData } = useSearch();
  
  useEffect(() => {
    setCurrentPage('invoice');
  }, []);

  const filteredInvoices = filterInvoiceData(datafake.content);

  return (
    <div className="h-[calc(100vh-64px)] flex flex-col">
      {/* Header với chiều cao cố định */}
      <div className="h-16 min-h-[64px] p-4 border-b">
        <h1 className="text-2xl font-semibold">Invoice</h1>
      </div>

      {/* Container chính với chiều cao cố định */}
      <div className="flex-1 min-h-0 overflow-auto">
        <div className="relative">
          <table className="w-full">
            <thead className="bg-gray-50 sticky top-0">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">invoice_no</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">item_no</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">item_quantity</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">item_price</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">item_discount_pe</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">item_desc</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredInvoices.length > 0 ? (
                filteredInvoices.map((item) => (
                  <tr key={item.id}>
                    <td className="px-6 py-4 whitespace-nowrap">{item.invoice_no}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{item.item_no}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{item.item_quantity}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{item.item_price.toFixed(2)}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{item.item_discount_pe}</td>
                    <td className="px-6 py-4">{item.item_desc}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="h-[400px]">
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

export default InvoicePage