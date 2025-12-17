import React, { useState } from 'react';
import { XIcon, SendIcon, SparklesIcon } from 'lucide-react';
interface AIAssistantProps {
  onClose: () => void;
}
const AIAssistant: React.FC<AIAssistantProps> = ({
  onClose
}) => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([{
    id: 1,
    sender: 'ai' as const,
    text: "Hi! I'm your AI travel assistant. How can I help plan your perfect day in Cagwait?",
    timestamp: new Date()
  }]);
  const handleSend = () => {
    if (!input.trim()) return;
    const userMessage = {
      id: messages.length + 1,
      sender: 'user' as const,
      text: input,
      timestamp: new Date()
    };
    setMessages([...messages, userMessage]);
    setInput('');
    setTimeout(() => {
      const aiMessage = {
        id: messages.length + 2,
        sender: 'ai' as const,
        text: "Based on today's weather and your preferences, I recommend visiting Tinuy-an Falls in the morning, followed by lunch at the beachside café, and ending with a sunset walk at Cagwait Beach. Would you like me to create a detailed itinerary?",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiMessage]);
    }, 1000);
  };
  return <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="w-full max-w-2xl h-[600px] rounded-2xl bg-gradient-to-br from-gray-800/95 to-gray-900/95 backdrop-blur-xl border border-white/10 shadow-2xl flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg">
              <SparklesIcon className="w-5 h-5 text-white animate-pulse" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">
                AI Travel Assistant
              </h3>
              <p className="text-xs text-gray-400">
                Powered by advanced tourism AI
              </p>
            </div>
          </div>
          <button onClick={onClose} className="w-10 h-10 rounded-xl bg-gray-700/50 hover:bg-gray-700 flex items-center justify-center transition-all">
            <XIcon className="w-5 h-5 text-gray-300" />
          </button>
        </div>
        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {messages.map(message => <div key={message.id} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[80%] rounded-2xl p-4 ${message.sender === 'user' ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white' : 'bg-gray-800/50 border border-white/10 text-gray-200'}`}>
                <p className="text-sm">{message.text}</p>
                <p className="text-xs opacity-70 mt-2">
                  {message.timestamp.toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit'
              })}
                </p>
              </div>
            </div>)}
        </div>
        {/* Input */}
        <div className="p-6 border-t border-white/10">
          <div className="flex items-center space-x-3">
            <input type="text" value={input} onChange={e => setInput(e.target.value)} onKeyPress={e => e.key === 'Enter' && handleSend()} placeholder="Ask me anything about your trip..." className="flex-1 px-4 py-3 rounded-xl bg-gray-800/50 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 transition-all" />
            <button onClick={handleSend} disabled={!input.trim()} className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${input.trim() ? 'bg-gradient-to-r from-blue-500 to-purple-600 hover:shadow-lg hover:shadow-blue-500/50' : 'bg-gray-700/50'}`}>
              <SendIcon className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>;
};
export default AIAssistant;