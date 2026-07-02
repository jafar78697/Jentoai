
import React, { useEffect } from 'react';
import { CONFIG } from './constants';

const N8nChatWidget: React.FC = () => {
    useEffect(() => {
        // Only initialize if not already present
        if (document.querySelector('n8n-chat')) return;

        const initChat = async () => {
            try {
                // @ts-ignore
                const { createChat } = await import('https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js');

                createChat({
                    webhookUrl: CONFIG.chatWebhookUrl,
                    showWelcomeMessage: true,
                    initialMessages: [
                        '👋 **Protocol initialized.** Jento AI Core is online.',
                        'I can build custom automation agents for you. How can I help? 🚀'
                    ],
                    i18n: {
                        en: {
                            title: 'Jento Architect 🧠',
                            subtitle: '🟢 Value Stream Online',
                            placeholder: 'Type your challenge...',
                            getStarted: 'Start Protocol ⚡',
                            inputPlaceholder: 'Type your challenge...',
                        }
                    },
                    theme: {
                        '--chat--header--background': '#0f172a',
                        '--chat--header--color': '#ffffff',
                        '--chat--window--background': '#020617',
                        '--chat--button--background': '#2563eb',
                        '--chat--button--color': '#ffffff',
                        '--chat--message--user--background': '#3b82f6', // Brighter Blue
                        '--chat--message--user--color': '#ffffff',
                        '--chat--message--bot--background': '#1e293b',
                        '--chat--message--bot--color': '#f1f5f9',
                        '--chat--input--background': '#1e293b',
                        '--chat--input--color': '#ffffff',
                    }
                });
            } catch (err) {
                console.error('Failed to initialize n8n chat:', err);
            }
        };

        initChat();
    }, []);

    return null; // This component doesn't render visual UI, it injects the widget
};

export default N8nChatWidget;
