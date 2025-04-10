"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { MessageCircle, Send, X, Sparkles, ThumbsUp, ThumbsDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Avatar } from "@/components/ui/avatar"

export function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState("")
  const [conversation, setConversation] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hello! I'm Kuri, your virtual assistant. How can I help you with your stay at Kuriftu Resort & Spa?",
      timestamp: new Date(),
    },
  ])
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Suggested questions
  const suggestedQuestions = [
    "Tell me about the Ethiopian room",
    "What dining options are available?",
    "Where can I find local art?",
    "What activities are available for kids?",
    "How do I book a spa treatment?",
    "Tell me about the cultural artifacts",
  ]

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [conversation])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!message.trim()) return

    // Add user message to conversation
    const userMessage: Message = {
      role: "user",
      content: message,
      timestamp: new Date(),
    }
    setConversation([...conversation, userMessage])
    setMessage("")
    setIsTyping(true)

    // Simulate AI response after a delay
    setTimeout(() => {
      const aiResponse = generateResponse(message)
      setConversation((prev) => [
        ...prev,
        {
          role: "assistant",
          content: aiResponse,
          timestamp: new Date(),
        },
      ])
      setIsTyping(false)
    }, 1500)
  }

  const handleSuggestedQuestion = (question: string) => {
    // Add user message to conversation
    const userMessage: Message = {
      role: "user",
      content: question,
      timestamp: new Date(),
    }
    setConversation([...conversation, userMessage])
    setIsTyping(true)

    // Simulate AI response after a delay
    setTimeout(() => {
      const aiResponse = generateResponse(question)
      setConversation((prev) => [
        ...prev,
        {
          role: "assistant",
          content: aiResponse,
          timestamp: new Date(),
        },
      ])
      setIsTyping(false)
    }, 1500)
  }

  // Simple response generation based on keywords
  const generateResponse = (query: string): string => {
    const lowerQuery = query.toLowerCase()

    if (lowerQuery.includes("ethiopian room") || lowerQuery.includes("cultural room")) {
      return "Our Ethiopian-themed rooms showcase authentic cultural elements from different regions of Ethiopia. Each room features traditional décor, handcrafted furniture, and artwork by local artisans. You'll find information about the cultural artifacts in your room, and you can scan them using our app to learn more about their history and significance."
    } else if (lowerQuery.includes("dining") || lowerQuery.includes("restaurant") || lowerQuery.includes("food")) {
      return "We have several dining options at Kuriftu Resort & Spa. Our main restaurant, Lakeside Restaurant, offers both Ethiopian and international cuisine with beautiful lake views. For an authentic African experience, try our African Terrace restaurant. We also have the Sunset Lounge & Bar for cocktails and light bites. Would you like me to help you make a reservation?"
    } else if (
      lowerQuery.includes("local art") ||
      lowerQuery.includes("artifacts") ||
      lowerQuery.includes("souvenirs")
    ) {
      return "You can find local art and cultural artifacts throughout the resort. We have a gift shop near the lobby that sells handcrafted souvenirs, jewelry, and artwork by local artisans. Additionally, we organize weekly art exhibitions featuring Ethiopian artists. The cultural artifacts in your room can also be purchased - just ask our front desk for details."
    } else if (lowerQuery.includes("kids") || lowerQuery.includes("children") || lowerQuery.includes("family")) {
      return "We offer various activities for children including supervised kids' club, swimming lessons, nature walks, and cultural craft sessions. Our restaurants have special kids' menus, and we can arrange babysitting services with advance notice. The African Village area has interactive cultural experiences that children particularly enjoy."
    } else if (lowerQuery.includes("spa") || lowerQuery.includes("massage") || lowerQuery.includes("treatment")) {
      return "Our spa offers a range of treatments inspired by traditional Ethiopian healing practices combined with modern techniques. Popular options include the Ethiopian coffee scrub, honey & herb facial, and hot stone massage. You can book treatments at the spa reception or through the front desk. I recommend booking at least a day in advance, especially during peak season."
    } else if (lowerQuery.includes("hello") || lowerQuery.includes("hi") || lowerQuery.includes("hey")) {
      return "Hello! Welcome to Kuriftu Resort & Spa. How can I assist you with your stay today?"
    } else if (lowerQuery.includes("thank")) {
      return "You're very welcome! If you have any other questions during your stay, feel free to ask. Enjoy your time at Kuriftu Resort & Spa!"
    } else if (
      lowerQuery.includes("weather") ||
      lowerQuery.includes("temperature") ||
      lowerQuery.includes("forecast")
    ) {
      return "The current weather at our resort is sunny with a temperature of 24°C (75°F). The forecast for the next few days shows similar conditions with slight cooling in the evenings. Perfect weather for enjoying our outdoor activities and lake views!"
    } else {
      return "Thank you for your question. I'd be happy to help with that. Could you provide a bit more detail so I can give you the most accurate information? Alternatively, you can speak with our front desk staff who can assist you personally."
    }
  }

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-16 h-16 rounded-full bg-[#8B4513] hover:bg-[#6D4C41] text-white shadow-lg z-50 flex items-center justify-center"
        size="icon"
      >
        <MessageCircle className="h-8 w-8" />
        <span className="sr-only">Open AI Assistant</span>
      </Button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md flex flex-col h-[600px] max-h-[90vh]">
            {/* Header */}
            <div className="bg-[#8B4513] text-white p-4 rounded-t-lg flex items-center justify-between">
              <div className="flex items-center">
                <Avatar className="h-10 w-10 bg-[#E8C9A0] text-[#8B4513] mr-3">
                  <Sparkles className="h-6 w-6" />
                </Avatar>
                <div>
                  <h3 className="font-semibold">Kuri AI Assistant</h3>
                  <p className="text-xs opacity-80">Here to help with your stay</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-[#6D4C41] rounded-full h-8 w-8"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 bg-[#f8f8f8]">
              {conversation.map((msg, index) => (
                <div key={index} className={`mb-4 flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[80%] rounded-lg p-3 ${
                      msg.role === "user"
                        ? "bg-[#E8C9A0] text-[#5D4037] rounded-tr-none"
                        : "bg-white border border-gray-200 text-[#5D4037] rounded-tl-none shadow-sm"
                    }`}
                  >
                    <p className="text-sm">{msg.content}</p>
                    <div className={`text-xs mt-1 opacity-60 ${msg.role === "user" ? "text-right" : "text-left"}`}>
                      {msg.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                    </div>
                    {msg.role === "assistant" && (
                      <div className="flex items-center justify-end mt-1 space-x-1">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-6 w-6 rounded-full hover:bg-gray-100"
                          title="Helpful"
                        >
                          <ThumbsUp className="h-3 w-3 text-gray-500" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-6 w-6 rounded-full hover:bg-gray-100"
                          title="Not helpful"
                        >
                          <ThumbsDown className="h-3 w-3 text-gray-500" />
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="mb-4 flex justify-start">
                  <div className="max-w-[80%] rounded-lg p-3 bg-white border border-gray-200 text-[#5D4037] rounded-tl-none shadow-sm">
                    <div className="flex space-x-1">
                      <div className="h-2 w-2 bg-gray-300 rounded-full animate-bounce"></div>
                      <div className="h-2 w-2 bg-gray-300 rounded-full animate-bounce delay-100"></div>
                      <div className="h-2 w-2 bg-gray-300 rounded-full animate-bounce delay-200"></div>
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Suggested Questions */}
            {conversation.length < 3 && (
              <div className="p-3 bg-[#f8f8f8] border-t border-gray-200">
                <p className="text-xs text-[#5D4037] mb-2 font-medium">Suggested questions:</p>
                <div className="flex flex-wrap gap-2">
                  {suggestedQuestions.map((question, index) => (
                    <button
                      key={index}
                      onClick={() => handleSuggestedQuestion(question)}
                      className="text-xs bg-white border border-gray-200 rounded-full px-3 py-1 text-[#8B4513] hover:bg-[#E8C9A0] transition-colors"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <form onSubmit={handleSubmit} className="p-3 border-t border-gray-200 bg-white rounded-b-lg">
              <div className="flex items-end gap-2">
                <Textarea
                  placeholder="Type your message..."
                  className="min-h-[60px] resize-none border-[#D7CCC8] focus-visible:ring-[#8B4513]"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault()
                      handleSubmit(e)
                    }
                  }}
                />
                <Button
                  type="submit"
                  className="bg-[#8B4513] hover:bg-[#6D4C41] text-white h-10 w-10 rounded-full p-0 flex items-center justify-center"
                  disabled={!message.trim()}
                >
                  <Send className="h-5 w-5" />
                </Button>
              </div>
              <p className="text-xs text-gray-500 mt-2 text-center">
                Powered by Kuriftu AI • Responses are AI-generated
              </p>
            </form>
          </div>
        </div>
      )}
    </>
  )
}

interface Message {
  role: "user" | "assistant"
  content: string
  timestamp: Date
}

