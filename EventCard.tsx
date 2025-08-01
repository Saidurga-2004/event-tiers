import Image from 'next/image';
const tierColors = {
  free: 'bg-gray-200 text-gray-800',
  silver: 'bg-gray-400 text-white',
  gold: 'bg-yellow-400 text-white',
  platinum: 'bg-blue-400 text-white',
};
export default function EventCard({ event, userTier }) {
  const tiers = ['free', 'silver', 'gold', 'platinum'];
  const isLocked = tiers.indexOf(event.tier) > tiers.indexOf(userTier);
  return (
    <div className="rounded-xl border shadow-md p-4 bg-white">
      <Image
        src={event.image_url || 'https://images.unsplash.com/photo-1524985069026-dd778a71c7b4'}
        alt="event image"
        width={400}
        height={200}
        className="w-full h-48 object-cover rounded-lg"
      />
      <h2 className="text-xl font-semibold mt-3">{event.title}</h2>
      <p className="text-sm text-gray-600">{new Date(event.event_date).toLocaleDateString()}</p>
      <p className="my-2 text-gray-800">{event.description}</p>
      <span className={`inline-block px-3 py-1 text-sm rounded-full ${tierColors[event.tier]}`}>
        {event.tier.toUpperCase()}
      </span>
      {isLocked && (
        <div className="mt-4 p-2 border border-red-400 text-red-600 text-center rounded-md">
          Upgrade to {event.tier.toUpperCase()} to access this event.
        </div>
      )}
    </div>
  );
}