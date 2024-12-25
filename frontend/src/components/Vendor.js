import React, { useState, useEffect } from 'react';
import { getVendors, addVendor, deleteVendor } from '../services/VendorService';

const Vendor = () => {
    const [vendors, setVendors] = useState([]);
    const [newVendor, setNewVendor] = useState({ name: '', serviceType: '', contactInfo: '', scheduledDate: '' });

    useEffect(() => {
        getVendors().then((res) => setVendors(res.data));
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        addVendor(newVendor).then(() => {
            getVendors().then((res) => setVendors(res.data));
        });
    };

    return (
        <div>
            <h1>Vendor Management</h1>
            <ul>
                {vendors.map((vendor) => (
                    <li key={vendor.id}>
                        {vendor.name} ({vendor.serviceType}) - {vendor.contactInfo} (Scheduled: {vendor.scheduledDate})
                        <button onClick={() => deleteVendor(vendor.id).then(() => {
                            getVendors().then((res) => setVendors(res.data));
                        })}>
                            Remove
                        </button>
                    </li>
                ))}
            </ul>

            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Vendor Name" 
                    value={newVendor.name}
                    onChange={(e) => setNewVendor({ ...newVendor, name: e.target.value })}
                />
                <input 
                    type="text" 
                    placeholder="Service Type" 
                    value={newVendor.serviceType}
                    onChange={(e) => setNewVendor({ ...newVendor, serviceType: e.target.value })}
                />
                <input 
                    type="text" 
                    placeholder="Contact Info" 
                    value={newVendor.contactInfo}
                    onChange={(e) => setNewVendor({ ...newVendor, contactInfo: e.target.value })}
                />
                <input 
                    type="date" 
                    value={newVendor.scheduledDate}
                    onChange={(e) => setNewVendor({ ...newVendor, scheduledDate: e.target.value })}
                />
                <button type="submit">Add Vendor</button>
            </form>
        </div>
    );
};

export default Vendor;
