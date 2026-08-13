export default function AchievementCard({ achievement }) {
  return (
    <div className="min-w-[320px] max-w-[320px] flex-shrink-0 bg-navy rounded-2xl shadow-lg p-4 snap-start">
      <img
        src={achievement.image}
        alt={achievement.alt}
        className="w-full h-52 object-contain rounded-md shadow-md bg-white"
      />
      <h3 className="font-semibold text-lg text-white mt-4 text-center">
        {achievement.title}
      </h3>
      <p className="text-sm text-gray-200 mt-2 text-justify">
        {achievement.description}
      </p>
    </div>
  );
}
