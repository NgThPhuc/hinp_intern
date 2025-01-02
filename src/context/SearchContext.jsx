import { createContext, useState, useContext } from 'react';

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState('installation'); // 'installation', 'invoice', 'salesorder'

  const filterInstallationData = (data) => {
    return data.filter((item) =>
      item.saleOrder.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.ticketNo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.numberPlate.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const filterInvoiceData = (data) => {
    return data.filter((item) =>
      item.invoice_no.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.item_desc.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const filterSalesOrderData = (data) => {
    return data.filter((item) =>
      item.SONo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.SOStatus.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.CustCode.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  return (
    <SearchContext.Provider 
      value={{ 
        searchTerm, 
        setSearchTerm, 
        currentPage, 
        setCurrentPage,
        filterInstallationData,
        filterInvoiceData,
        filterSalesOrderData
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => useContext(SearchContext);