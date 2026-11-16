import ChatInterface from "@/components/ChatInterface";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-gray-50">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">Young AI</h1>
        <p className="text-gray-600 mt-2">Next-generation AI Assistant</p>
      </div>
      <ChatInterface />
    </main>
  );
}
