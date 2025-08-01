'use client';
import { useUser } from '@clerk/nextjs';
const tiers = ['free', 'silver', 'gold', 'platinum'];
export default function UpgradeTier() {
  const { user } = useUser();
  const userTier = user?.publicMetadata?.tier || 'free';
  const currentIndex = tiers.indexOf(userTier);
  const nextTier = tiers[currentIndex + 1];

  const handleUpgrade = async () => {
    if (user && nextTier) {
      await user.update({ publicMetadata: { tier: nextTier } });
      window.location.reload();
    }
  };

  return nextTier ? (
    <button
      onClick={handleUpgrade}
      className="px-4 py-2 bg-green-600 text-white rounded-md mt-4"
    >
      Upgrade to {nextTier.toUpperCase()}
    </button>
  ) : null;
}