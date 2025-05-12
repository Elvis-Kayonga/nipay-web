
/// <reference types="vite/client" />

interface Window {
  gtag?: (command: string, targetId: string, config?: object) => void;
}
