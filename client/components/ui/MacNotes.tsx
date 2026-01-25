import { useState, useRef, useEffect } from "react";

interface MacNotesProps {
  title: string;
  onClose: () => void;
  defaultPosition?: { x: number; y: number };
}

export default function MacNotes({
  title,
  onClose,
  defaultPosition = { x: 300, y: 200 },
}: MacNotesProps) {
  const [position, setPosition] = useState(defaultPosition);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [isMinimized, setIsMinimized] = useState(false);
  const [noteContent, setNoteContent] = useState(
    "skills..."
  );
  const windowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;

      setPosition({
        x: e.clientX - dragOffset.x,
        y: e.clientY - dragOffset.y,
      });
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);

      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
      };
    }
  }, [isDragging, dragOffset]);

  const handleTitleBarMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    const titleBar = windowRef.current?.querySelector(".title-bar");
    if (e.target !== titleBar && !titleBar?.contains(e.target as Node)) return;

    const rect = windowRef.current?.getBoundingClientRect();
    if (!rect) return;

    setIsDragging(true);
    setDragOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <>
      {/* Backdrop overlay */}
      <div
        className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30"
        onClick={onClose}
      />

      {/* Notes Window */}
      <div
        ref={windowRef}
        className="fixed bg-white rounded-lg shadow-2xl overflow-hidden z-40 transition-all duration-300 ease-out flex flex-col"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: isMinimized ? "320px" : "500px",
          height: isMinimized ? "auto" : "600px",
          transform: isMinimized ? "scale(0.95)" : "scale(1)",
          opacity: isMinimized ? 0.5 : 1,
        }}
      >
        {/* Title Bar */}
        <div
          className="title-bar flex items-center justify-between bg-gradient-to-b from-gray-50 to-gray-100 px-4 py-3 border-b border-gray-200 cursor-move select-none flex-shrink-0"
          onMouseDown={handleTitleBarMouseDown}
        >
          {/* Traffic Light Buttons */}
          <div className="flex gap-2">
            <button
              onClick={onClose}
              className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors"
              title="Close"
            />
            <button
              onClick={() => setIsMinimized(!isMinimized)}
              className="w-3 h-3 rounded-full bg-yellow-400 hover:bg-yellow-500 transition-colors"
              title="Minimize"
            />
            <button
              className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors"
              title="Maximize"
            />
          </div>

          {/* Title */}
          <h2 className="text-sm font-semibold text-gray-700 flex-1 text-center">
            {title}
          </h2>

          {/* Spacer */}
          <div className="w-12" />
        </div>

        {/* Content */}
        {!isMinimized && (
          <div className="flex-1 overflow-hidden flex flex-col bg-white">
            {/* Note editing area */}
            <textarea
              value={noteContent}
              onChange={(e) => setNoteContent(e.target.value)}
              className="flex-1 w-full p-4 font-system text-base text-gray-800 resize-none focus:outline-none bg-white placeholder-gray-400"
              placeholder="Type your notes here..."
              style={{
                fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
              }}
            />
          </div>
        )}
      </div>
    </>
  );
}
