import React, { useState, useEffect } from 'react';
import Submitions from '../adminPortal/pages/submitions';
import Nav from '../adminPortal/pages/nav';
import Clarifications from '../adminPortal/pages/clarifications';
// import Notification from '../adminPortal/components/notification';

export default function AdminPate() {
  const [page, setPage] = useState('competitionPortal');
  const [showNotification, setShowNotifications] = useState(true);
  const [newNotification, setNewNotification] = useState(null);

  // Remove the dot when on the "clarifications" page
  useEffect(() => {
    if (page === 'clarifications') {
      setShowNotifications(false);
    }
  }, [page]);


  function showNotificationWithTimeout(notification) {
    setNewNotification(notification);
    if (page !== 'clarifications'){
      setShowNotifications(true);
    }
    setTimeout(() => {
      setNewNotification(null);
    }, 10000); 
  } 

  //constantly get notification stuff
  useEffect(() => {
    showNotificationWithTimeout({ title: 'test', content: 'test' });
  }, []);

  return (
    <div style={{ backgroundColor: 'black', minHeight: '100vh' }}>
      <Nav setPage={setPage} showNotification={showNotification} />
      {/* {newNotification && <Notification notification={newNotification} setPage={setPage} />} */}
      {page === 'submitions' && <Submitions />}
      {page === 'clarifications' && <Clarifications setShowNotifications />}
    </div>
  );
}
