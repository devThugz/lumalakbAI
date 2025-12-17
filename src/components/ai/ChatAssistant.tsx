import React, { useState } from 'react';
import { XIcon, SendIcon, MicIcon, ImageIcon } from 'lucide-react';
interface ChatAssistantProps {
  isOpen: boolean;
  onClose: () => void;
}
interface Message {
  id: number;
  sender: 'user' | 'ai';
  text: string;
  timestamp: Date;
}
const ChatAssistant: React.FC<ChatAssistantProps> = ({
  isOpen,
  onClose
}) => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([{
    id: 1,
    sender: 'ai',
    text: "Hi there! I'm your AI Travel Assistant. How can I help with your journey today?",
    timestamp: new Date()
  }]);
  const handleSendMessage = () => {
    if (!input.trim()) return;
    const userMessage: Message = {
      id: messages.length + 1,
      sender: 'user',
      text: input,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setTimeout(() => {
      const aiResponses = ['Based on your preferences, I recommend visiting Kyoto in spring when the cherry blossoms are in bloom.', "I've analyzed the weather patterns and October would be the ideal time to visit the Amalfi Coast.", 'For your budget of $2000, I can create a 7-day itinerary in Thailand including accommodations and local experiences.', "There's a 70% chance of rain tomorrow in Barcelona. Would you like me to suggest indoor activities instead?", "I've found 3 highly-rated restaurants near your hotel that serve authentic local cuisine within your budget range."];
      const aiMessage: Message = {
        id: messages.length + 2,
        sender: 'ai',
        text: aiResponses[Math.floor(Math.random() * aiResponses.length)],
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiMessage]);
    }, 1000);
  };
  if (!isOpen) return null;
  return <>
      {/* Backdrop for mobile */}
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 sm:hidden" onClick={onClose} />

      {/* Chat Panel */}
      <div className="fixed z-50 bg-gray-900 border-gray-700 shadow-xl flex flex-col
        inset-x-0 bottom-0 h-[85vh] rounded-t-2xl border-t sm:border-l
        sm:inset-y-0 sm:right-0 sm:left-auto sm:h-full sm:w-80 md:w-96 sm:rounded-none
        transform transition-transform duration-300 ease-out
      ">
        {/* Header */}
        <div className="p-3 sm:p-4 border-b border-gray-700 flex justify-between items-center bg-gray-800 rounded-t-2xl sm:rounded-none">
          <div>
            <h3 className="text-base sm:text-lg font-semibold text-white">
              AI Travel Assistant
            </h3>
            <p className="text-xs text-gray-400">
              Powered by advanced tourism AI
            </p>
          </div>
          <button onClick={onClose} className="w-10 h-10 rounded-xl hover:bg-gray-700 text-gray-400 hover:text-white transition-colors flex items-center justify-center">
            <XIcon className="h-5 w-5" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3 sm:space-y-4">
          {messages.map(message => <div key={message.id} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[85%] sm:max-w-[80%] rounded-2xl p-3 ${message.sender === 'user' ? 'bg-blue-600 text-white' : 'bg-gray-800 text-gray-200'}`}>
                <p className="text-sm">{message.text}</p>
                <p className="text-xs text-right mt-1 opacity-70">
                  {message.timestamp.toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit'
              })}
                </p>
              </div>
            </div>)}
        </div>

        {/* Input Area */}
        <div className="p-3 sm:p-4 border-t border-gray-700 bg-gray-800 safe-area-bottom">
          <div className="flex items-center space-x-2 mb-2">
            <button className="w-9 h-9 rounded-full bg-gray-700 text-gray-300 hover:bg-gray-600 flex items-center justify-center transition-colors">
              <MicIcon className="h-4 w-4" />
            </button>
            <button className="w-9 h-9 rounded-full bg-gray-700 text-gray-300 hover:bg-gray-600 flex items-center justify-center transition-colors">
              <ImageIcon className="h-4 w-4" />
            </button>
            <div className="text-xs text-gray-400 truncate">
              Ask about weather, attractions, or itineraries
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <input type="text" value={input} onChange={e => setInput(e.target.value)} onKeyPress={e => e.key === 'Enter' && handleSendMessage()} placeholder="Type your travel question..." className="flex-1 bg-gray-700 text-gray-200 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" />
            <button onClick={handleSendMessage} disabled={!input.trim()} className={`w-11 h-11 rounded-xl flex items-center justify-center transition-colors ${input.trim() ? 'bg-blue-500 hover:bg-blue-600' : 'bg-gray-700'} text-white`}>
              <SendIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </>;
};
export default ChatAssistant;