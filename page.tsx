'use client';
import { useUser } from '@clerk/nextjs';
import { useEffect, useState } from 'react';
import { supabase } from './supabase';
import EventCard from './EventCard';
import UpgradeTier from './UpgradeTier';

export default function EventsPage() {
  const { user } = useUser();
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const userTier = user?.publicMetadata?.tier || 'free';

  useEffect(() => {
    const fetchEvents = async () => {
      const tiers = ['free', 'silver', 'gold', 'platinum'];
      const index = tiers.indexOf(userTier);
      const allowedTiers = tiers.slice(0, index + 1);
      const { data, error } = await supabase
        .from('events')
        .select('*')
        .in('tier', allowedTiers);
      if (!error) setEvents(data || []);
      setLoading(false);
    };
    if (user) fetchEvents();
  }, [user]);

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Events for {userTier.toUpperCase()} Tier</h1>
      <UpgradeTier />
      {loading ? (
        <p className="text-gray-500">Loading events...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map(event => (
            <EventCard key={event.id} event={event} userTier={userTier} />
          ))}
        </div>
      )}
    </div>
  );
}