export default function ContactInfoCard({ icon: Icon, title, value }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm">
      <div className="p-4 flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center flex-shrink-0">
          <Icon className="h-5 w-5 text-orange-500" />
        </div>
        <div className="flex-1">
          <p className="text-xs text-gray-500 mb-1">{title}</p>
          <p className="font-semibold text-gray-800">{value}</p>
        </div>
      </div>
    </div>
  );
}