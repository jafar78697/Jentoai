
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
                        'Protocol initialized. Jento AI Core is online.',
                        'How can I assist you with your automation architecture today?'
                    ],
                    i18n: {
                        en: {
                            title: 'Jento AI Architect',
                            subtitle: 'Sync Active',
                            placeholder: 'Message the architect...',
                            getStarted: 'Start Protocol',
                            inputPlaceholder: 'Message the architect...',
                        }
                    },
                    theme: {
                        '--chat--header--background': '#2563eb',
                        '--chat--header--color': '#ffffff',
                        '--chat--button--background': '#2563eb',
                        '--chat--message--user--background': '#2563eb',
                        '--chat--message--user--color': '#ffffff',
                        '--chat--message--bot--background': '#f8fafc',
                        '--chat--message--bot--color': '#0f172a',
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
