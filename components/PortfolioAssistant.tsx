import React, { useState, useRef, useEffect } from 'react';
import type { Message } from '../types';
import ChatIcon from './icons/ChatIcon';
import CloseIcon from './icons/CloseIcon';
import SendIcon from './icons/SendIcon';
import UserIcon from './icons/UserIcon';
import SparklesIcon from './icons/SparklesIcon';
import { getChatResponse } from '../services/geminiService';
import Magnetic from './Magnetic';
import { PROFILE_INFO } from '../constants';

const PortfolioAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        { id: 'initial-ai-message', text: `Hello! I'm ${PROFILE_INFO.name}'s AI assistant. Feel free to ask me anything about his skills, projects, or experience.`, sender: 'ai' }
      ]);
    }
  }, [isOpen, messages.length]);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = { id: Date.now().toString(), text: input, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const aiResponseStream = await getChatResponse(input);
      let aiResponseText = '';
      const aiMessageId = `ai-${Date.now()}`;
      
      setMessages(prev => [...prev, { id: aiMessageId, text: '', sender: 'ai' }]);
      
      for await (const chunk of aiResponseStream) {
        aiResponseText += chunk.text;
        setMessages(prev => prev.map(msg => msg.id === aiMessageId ? { ...msg, text: aiResponseText } : msg));
      }

    } catch (error) {
      console.error('Error getting AI response:', error);
      const errorMessage: Message = { id: `err-${Date.now()}`, text: 'Sorry, I encountered an error. Please try again.', sender: 'ai' };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <Magnetic>
          <button
            onClick={toggleChat}
            className="bg-accent text-text-primary w-16 h-16 rounded-full shadow-lg flex items-center justify-center hover:bg-accent-hover transition-transform transform hover:scale-110"
            aria-label="Toggle Portfolio Assistant"
          >
            {isOpen ? <CloseIcon className="w-8 h-8" /> : <ChatIcon className="w-8 h-8" />}
          </button>
        </Magnetic>
      </div>

      {isOpen && (
        <>
          <div 
            className="fixed inset-0 bg-primary/50 backdrop-blur-sm z-40 animate-fade-in"
            onClick={toggleChat}
            aria-hidden="true"
          />
          <div className="fixed bottom-24 right-6 left-6 sm:left-auto sm:w-full sm:max-w-md bg-secondary rounded-lg shadow-2xl flex flex-col h-[60vh] sm:h-[70vh] z-50 animate-slide-in-up">
            <header className="bg-primary p-4 flex items-center justify-between rounded-t-lg">
              <h3 className="text-lg font-bold">Portfolio Assistant</h3>
              <button onClick={toggleChat} className="text-text-secondary hover:text-text-primary">
                <CloseIcon className="w-6 h-6" />
              </button>
            </header>

            <div ref={chatContainerRef} className="flex-1 p-4 overflow-y-auto space-y-4">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex items-start gap-3 ${msg.sender === 'user' ? 'justify-end' : ''}`}>
                  {msg.sender === 'ai' && (
                    <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                      <SparklesIcon className="w-5 h-5 text-text-primary" />
                    </div>
                  )}
                  <div className={`max-w-xs md:max-w-sm px-4 py-2 rounded-lg ${msg.sender === 'user' ? 'bg-accent text-text-primary rounded-br-none' : 'bg-primary text-text-primary rounded-bl-none'}`}>
                    <p className="text-sm whitespace-pre-wrap">{msg.text}</p>
                  </div>
                  {msg.sender === 'user' && (
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <UserIcon className="w-5 h-5 text-text-primary" />
                    </div>
                  )}
                </div>
              ))}
              {isLoading && (
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                      <SparklesIcon className="w-5 h-5 text-text-primary animate-pulse" />
                    </div>
                  <div className="max-w-xs md:max-w-sm px-4 py-2 rounded-lg bg-primary text-text-primary rounded-bl-none">
                    <div className="flex items-center space-x-1">
                        <span className="w-2 h-2 bg-text-secondary rounded-full animate-pulse delay-75"></span>
                        <span className="w-2 h-2 bg-text-secondary rounded-full animate-pulse delay-150"></span>
                        <span className="w-2 h-2 bg-text-secondary rounded-full animate-pulse delay-300"></span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="p-4 border-t border-primary">
              <div className="flex items-center bg-primary rounded-lg">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask about my projects..."
                  className="w-0 flex-1 bg-transparent px-4 py-2 text-text-primary focus:outline-none"
                  disabled={isLoading}
                />
                <button
                  onClick={handleSend}
                  disabled={isLoading || !input.trim()}
                  className="p-3 flex-shrink-0 text-accent hover:text-accent-hover disabled:text-text-secondary disabled:cursor-not-allowed"
                >
                  <SendIcon className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default PortfolioAssistant;