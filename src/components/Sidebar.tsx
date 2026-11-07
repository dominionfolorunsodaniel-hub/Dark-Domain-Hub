export function Sidebar() {
  return (
    <aside className="w-64 bg-gray-800 border-r border-gray-700 p-4 hidden md:block">
      <h2 className="text-white font-bold mb-4">History</h2>
      <div className="space-y-2">
        <div className="p-2 bg-gray-700 rounded text-sm text-gray-300">Chat 1</div>
      </div>
    </aside>
  );
}