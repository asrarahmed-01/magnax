import { useEffect, useState } from 'react';
import './WhatsAppButton.scss';

interface WhatsAppButtonProps {
  phoneNumber?: string;  // Make optional with ?
  message?: string;
}

export function WhatsAppButton({ 
  phoneNumber = "+918123660270",  // Add default value
  message = "Hi, I'm interested in learning more about your services." 
}: WhatsAppButtonProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const handleClick = () => {
    const cleanNumber = phoneNumber.replace(/\D/g, '');
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${cleanNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className={`whatsapp-button ${isVisible ? 'whatsapp-button--visible' : ''}`}
      aria-label="Chat on WhatsApp"
      title="Chat on WhatsApp"
    >
     <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="white"
        viewBox="0 0 24 24"
      >
        <path d="M20.52 3.48A11.94 11.94 0 0012.05 0C5.45 0 .16 5.29.16 11.89c0 2.1.55 4.14 1.6 5.96L0 24l6.33-1.66a11.86 11.86 0 005.72 1.46h.01c6.6 0 11.89-5.29 11.89-11.89 0-3.17-1.23-6.15-3.43-8.43zM12.05 21.3c-1.85 0-3.66-.5-5.24-1.44l-.38-.23-3.75.98 1-3.65-.25-.38a9.29 9.29 0 01-1.45-5c0-5.13 4.17-9.3 9.3-9.3a9.23 9.23 0 016.58 2.72 9.24 9.24 0 012.72 6.58c0 5.13-4.17 9.3-9.3 9.3zm5.09-6.99c-.28-.14-1.64-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.21-.6.07-.28-.14-1.17-.43-2.23-1.38-.82-.73-1.38-1.64-1.54-1.92-.16-.28-.02-.43.12-.57.12-.12.28-.32.42-.48.14-.16.18-.28.28-.46.09-.18.05-.34-.02-.48-.07-.14-.61-1.48-.84-2.03-.22-.53-.45-.46-.61-.47h-.52c-.18 0-.48.07-.73.34-.25.28-.96.94-.96 2.3 0 1.35.98 2.66 1.12 2.84.14.18 1.93 2.95 4.68 4.14.65.28 1.16.45 1.55.58.65.21 1.25.18 1.72.11.52-.08 1.64-.67 1.87-1.32.23-.65.23-1.21.16-1.32-.07-.12-.25-.18-.53-.32z" />
      </svg>
    </button>
  );
}