import React, { useState } from 'react';

import '../App.css';
import WarehouseInventory from './WarehouseInventory';
import DeliveryStatus from './DeliveryStatus';

const LogisticsDashboard: React.FC = () => {
  const [warehouseItems, setWarehouseItems] = useState<number>(100);
  const [isTruckLeft, setIsTruckLeft] = useState<boolean>(false);
  const [truckCount, setTruckCount] = useState<number>(0);
  const [dispatchQuantity, setDispatchQuantity] = useState<number>(0);

  const handleTruckDeparture = () => {
    
    if (dispatchQuantity > 0 && dispatchQuantity <= 20 && warehouseItems >= dispatchQuantity && warehouseItems - dispatchQuantity >= 20) {
      setWarehouseItems(warehouseItems - dispatchQuantity);
      // setIsTruckLeft(true);
      setTruckCount(truckCount + 1);
      setDispatchQuantity(0);
    }
  };

  return (
    <div className="dashboard">
      <h1>Logistics Dashboard</h1>
      <div className="dashboard-content">
        <WarehouseInventory itemCount={warehouseItems} />
        <DeliveryStatus 
          isTruckLeft={isTruckLeft} 
          onTruckDeparture={handleTruckDeparture} 
          dispatchQuantity={dispatchQuantity}
          setDispatchQuantity={setDispatchQuantity}
          count={truckCount}
          warehouseItems={warehouseItems}
        />
      </div>
    </div>
  );
};

export default LogisticsDashboard;
