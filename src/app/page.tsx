import SnakeGame from "@/components/SnakeGame";
import { MadeWithDyad } from "@/components/made-with-dyad";
import { Toaster } from "@/components/ui/sonner";

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4 sm:p-8">
      <main className="w-full max-w-4xl flex flex-col items-center gap-8">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
            Retro Snake
          </h1>
          <p className="text-muted-foreground">
            A classic arcade experience built with Next.js
          </p>
        </div>
        
        <SnakeGame />
      </main>
      
      <footer className="mt-auto">
        <MadeWithDyad />
      </footer>
      <Toaster position="top-center" />
    </div>
  );
}