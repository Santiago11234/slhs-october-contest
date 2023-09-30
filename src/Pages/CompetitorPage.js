import React, { useState, useEffect } from 'react';
import CompetitionPortal from '../competitorPortal/pages/competitionPortal';
import Nav from '../competitorPortal/pages/nav';
import Clarifications from '../competitorPortal/pages/clarifications';
import Leaderboard from '../competitorPortal/pages/leaderboard';
import Notification from '../competitorPortal/components/notification';

export default function CompetitorPage() {
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
      {newNotification && <Notification notification={newNotification} setPage={setPage} />}
      {page === 'competitionPortal' && <CompetitionPortal />}
      {page === 'clarifications' && <Clarifications setShowNotifications />}
      {page === 'leaderboard' && <Leaderboard />}
    </div>
  );
}
