# n8n Trust-Building AI Agent Setup Guide

## Build Customer Trust Through Intelligent Problem Discovery

This documentation provides a complete guide to set up an AI agent in n8n that **builds trust** with visitors, **discovers their problems**, and guides them to contact your team at **info@jentoai.com** for personalized assistance.

---

## Table of Contents

1. [Overview](#overview)
2. [Prerequisites](#prerequisites)
3. [Database Setup](#database-setup)
4. [The Trust-Building AI Workflow](#the-trust-building-ai-workflow)
5. [System Prompt (The Core of Trust-Building)](#system-prompt-the-core-of-trust-building)
6. [Chat Widget Setup](#chat-widget-setup)
7. [Testing Your AI Agent](#testing-your-ai-agent)
8. [Best Practices](#best-practices)

---

## Overview

### The Goal: Build Trust → Discover Problems → Direct to Email

Your AI agent's purpose is NOT to replace human interaction, but to:

```
┌─────────────────────────────────────────────────────────────────┐
│                    CUSTOMER JOURNEY                              │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  1. GREET & BUILD TRUST                                         │
│     └── Warm welcome, professional tone                         │
│                                                                  │
│  2. LISTEN & UNDERSTAND                                         │
│     └── Ask thoughtful questions to understand their problem    │
│                                                                  │
│  3. ACKNOWLEDGE & RELATE                                         │
│     └── Show you understand their challenges                    │
│                                                                  │
│  4. PROVIDE VALUE                                                │
│     └── Share relevant company info and solutions               │
│                                                                  │
│  5. DIRECT TO HUMAN SUPPORT                                      │
│     └── Guide them to email: info@jentoai.com                     │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

> [!IMPORTANT]
> **Contact Email for All Users**: info@jentoai.com

---

## Prerequisites

Before starting, ensure you have:

- [ ] **n8n instance** - Self-hosted or n8n Cloud account
- [ ] **OpenAI API Key** - For the AI model
- [ ] **Company data** - Information about your services and solutions
- [ ] **Database** (optional) - Google Sheets, Supabase, or PostgreSQL

---

## Database Setup

### Option 1: Google Sheets (Recommended for Simplicity)

Create a Google Sheet with your company information:

**Sheet Name: `CompanyKnowledge`**

| Category | Topic | Information | Keywords |
|----------|-------|-------------|----------|
| about | company | We are Jento AI, an autonomous workflow automation company helping businesses automate their processes with AI agents. | jento, about, who, company |
| services | ai-automation | We provide AI-powered workflow automation, custom AI agents, and n8n integrations. | services, automation, ai, workflow |
| services | support | We offer comprehensive support for all our solutions. For personalized assistance, email us at info@jentoai.com | support, help, assistance |
| problems | manual-tasks | Many businesses struggle with repetitive manual tasks. Our AI agents can automate these processes. | manual, repetitive, boring, time |
| problems | efficiency | Lack of efficiency costs businesses time and money. We help optimize workflows for maximum productivity. | slow, inefficient, productivity |
| problems | data | Businesses often struggle with data management. Our solutions help organize and process data intelligently. | data, information, organize |
| contact | email | For any questions or personalized assistance, please email us at info@jentoai.com | contact, email, reach, help |

---

### Option 2: Supabase/PostgreSQL

```sql
CREATE TABLE company_knowledge (
    id SERIAL PRIMARY KEY,
    category VARCHAR(100),
    topic VARCHAR(200),
    information TEXT,
    keywords TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert trust-building data
INSERT INTO company_knowledge (category, topic, information, keywords) VALUES
('about', 'company', 'We are Jento AI, specializing in autonomous workflow automation. Our mission is to help businesses work smarter, not harder.', 'about, company, who, jento'),
('problems', 'pain-points', 'We understand businesses face challenges like: repetitive manual tasks, inefficient processes, data overload, and lack of automation.', 'problems, challenges, pain, struggle'),
('solutions', 'what-we-do', 'We help solve these problems with custom AI agents, workflow automation, and intelligent data processing.', 'solution, help, solve, fix'),
('contact', 'email', 'For personalized assistance with your specific needs, please reach out to us at info@jentoai.com', 'contact, email, help, reach');
```

---

## The Trust-Building AI Workflow

### Step 1: Create New Workflow in n8n

1. Open n8n
2. Click **"Create Workflow"**
3. Name it: `Trust-Building AI Chat Agent`

---

### Step 2: Add the Chat Trigger Node

**Configuration:**
```json
{
  "node": "Chat Trigger",
  "settings": {
    "path": "trust-ai-chat",
    "responseMode": "responseNode",
    "options": {
      "allowedOrigins": "https://yourdomain.com"
    }
  }
}
```

---

### Step 3: Add AI Agent Node

This is the heart of your trust-building system.

---

## System Prompt (The Core of Trust-Building)

> [!IMPORTANT]
> This system prompt is specifically designed to build trust, discover user problems, and guide them to your email.

### The Trust-Building System Prompt

Copy this exactly into your AI Agent's **System Message**:

```
You are a friendly and helpful AI assistant for Jento AI, a company specializing in AI-powered workflow automation.

═══════════════════════════════════════════════════════════════
YOUR PRIMARY MISSION: BUILD TRUST & UNDERSTAND USER PROBLEMS
═══════════════════════════════════════════════════════════════

STEP 1 - WARM WELCOME:
Always start with a warm, genuine greeting. Make the user feel heard and valued.

STEP 2 - DISCOVER THEIR PROBLEM:
Your most important job is to understand what challenges the user is facing. Ask thoughtful, caring questions like:
- "What brings you here today?"
- "Can you tell me more about the challenges you're experiencing?"
- "How is this problem affecting your business/workflow?"
- "How long have you been dealing with this issue?"

STEP 3 - SHOW UNDERSTANDING:
Once you understand their problem, acknowledge it sincerely:
- "I completely understand how frustrating that must be."
- "That's a common challenge, and I can see why it's causing difficulties."
- "Thank you for sharing that with me. It sounds like this has been really impacting your work."

STEP 4 - PROVIDE RELEVANT INFORMATION:
Based on their problem, share how Jento AI might be able to help. Use the company knowledge available to you. Keep it brief and focused on their specific needs.

STEP 5 - GUIDE TO EMAIL:
After understanding their problem and providing some value, ALWAYS guide them to reach out via email for personalized assistance:

"Thank you for sharing your situation with me! Based on what you've described, I believe our team can definitely help you. 

For personalized assistance tailored to your specific needs, please reach out to us at:

📧 **info@jentoai.com**

Our team will review your case and get back to you with customized solutions. We'd love to help you solve this!"

═══════════════════════════════════════════════════════════════
IMPORTANT GUIDELINES:
═══════════════════════════════════════════════════════════════

1. BE GENUINELY CURIOUS about their problems - ask follow-up questions
2. NEVER rush to push solutions - first understand, then suggest
3. SHOW EMPATHY in every response
4. KEEP RESPONSES CONVERSATIONAL and warm, not robotic
5. ALWAYS END conversations by recommending they email: info@jentoai.com
6. NEVER give pricing or make commitments - only the human team can do that
7. COLLECT their key pain points to summarize when directing to email

═══════════════════════════════════════════════════════════════
🔋 TOKEN OPTIMIZATION (KEEP RESPONSES SHORT):
═══════════════════════════════════════════════════════════════

TO MINIMIZE COSTS, FOLLOW THESE RULES:

1. Keep responses SHORT and CONCISE - 2-4 sentences max per message
2. Ask ONE question at a time, not multiple
3. Avoid repeating information the user already knows
4. Use bullet points instead of long paragraphs
5. Don't over-explain - be direct and helpful
6. Skip unnecessary greetings in follow-up messages
7. Get to the point quickly while staying friendly

EXAMPLES OF SHORT RESPONSES:

✅ GOOD (Short): "Thanks for sharing! What specific tasks take most of your time?"

❌ BAD (Too Long): "Thank you so much for taking the time to share that with me! I really appreciate you explaining your situation in such detail. I can definitely understand how frustrating that must be for you and your team. Now, I'd love to learn more - could you tell me what specific tasks are taking up most of your time on a daily basis?"

═══════════════════════════════════════════════════════════════
CONTACT INFORMATION:
═══════════════════════════════════════════════════════════════

For all inquiries, direct users to:
📧 Email: info@jentoai.com

This is the ONLY contact method you should provide.

═══════════════════════════════════════════════════════════════
SAMPLE CONVERSATION FLOW:
═══════════════════════════════════════════════════════════════

User: "Hi, I need help with automation"

You: "Hi there! 👋 Welcome to Jento AI! I'm so glad you reached out. 

I'd love to help you explore how automation could benefit you. Before I do, could you tell me a bit more about your current situation? 

- What kind of tasks or processes are you looking to automate?
- What challenges are you currently facing that made you think about automation?"

[After they explain their problem]

You: "Thank you so much for sharing that with me! I really appreciate you taking the time to explain your situation.

It sounds like [summarize their problem]. I can definitely see how that would be frustrating and time-consuming.

The great news is that this is exactly the type of challenge our team at Jento AI specializes in solving! We've helped many businesses automate similar processes.

Since every business is unique, I'd recommend reaching out to our team directly so they can understand your specific needs and provide a customized solution:

📧 **info@jentoai.com**

Just send them a brief message about what you shared with me, and they'll get back to you with personalized recommendations. Is there anything else I can help clarify before you reach out?"
```

---

### Step 4: Add OpenAI Chat Model (Token-Optimized)

```json
{
  "node": "OpenAI Chat Model",
  "settings": {
    "model": "gpt-4o-mini",
    "temperature": 0.7,
    "maxTokens": 150
  }
}
```

> [!IMPORTANT]
> **Token Optimization Settings:**
> - `maxTokens: 150` - Limits response length to save costs
> - `gpt-4o-mini` - Most cost-effective model
> - Lower temperature (0.7) - More focused, less verbose responses

---

### Step 5: Add Memory Node

```json
{
  "node": "Window Buffer Memory",
  "settings": {
    "sessionKey": "={{ $json.sessionId }}",
    "contextWindowLength": 15
  }
}
```

---

### Step 6: Add Database Tool (Optional)

If using a database, add a tool to retrieve company knowledge:

```json
{
  "tool": "Database Query",
  "description": "Search company knowledge base for information about services, solutions, and how we help with common business problems",
  "operation": "select",
  "table": "company_knowledge"
}
```

---

### Step 7: Respond to Webhook

```json
{
  "node": "Respond to Webhook",
  "settings": {
    "respondWith": "text",
    "responseBody": "={{ $json.output }}"
  }
}
```

---

## Chat Widget Setup

### Embed on Your Website

```html
<!-- Trust-Building AI Chat Widget -->
<link href="https://cdn.jsdelivr.net/npm/@n8n/chat/dist/style.css" rel="stylesheet" />
<script type="module">
  import { createChat } from 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js';
  
  createChat({
    webhookUrl: 'https://your-n8n-instance.com/webhook/trust-ai-chat',
    mode: 'window',
    showWelcomeScreen: true,
    initialMessages: [
      'Hi there! 👋 Welcome to Jento AI!',
      'I\'m here to help understand your needs. What brings you here today? Feel free to share what challenges you\'re facing, and I\'ll do my best to help!'
    ],
    i18n: {
      en: {
        title: 'Jento AI Assistant',
        subtitle: 'Let\'s solve your challenges together',
        footer: '',
        getStarted: 'Start Conversation',
        inputPlaceholder: 'Share what\'s on your mind...',
      },
    },
    theme: {
      primaryColor: '#6366f1',
      secondaryColor: '#4f46e5'
    }
  });
</script>
```

---

## Testing Your AI Agent

### Test Scenario 1: General Inquiry

**User**: "Hi, I'm interested in your services"

**Expected AI Response**:
- Warm greeting ✅
- Asks about their specific challenges ✅
- Shows genuine curiosity ✅

### Test Scenario 2: Problem Sharing

**User**: "We spend too much time on manual data entry"

**Expected AI Response**:
- Acknowledges their frustration ✅
- Asks follow-up questions to understand better ✅
- Eventually recommends emailing info@jentoai.com ✅

### Test Scenario 3: Direct Question

**User**: "How much do you charge?"

**Expected AI Response**:
- Explains pricing is customized to each client ✅
- Asks about their needs first ✅
- Directs to info@jentoai.com for a personalized quote ✅

---

## Best Practices

### 1. Trust-Building Principles

| Do This ✅ | Don't Do This ❌ |
|-----------|------------------|
| Ask caring questions | Rush to give solutions |
| Listen and acknowledge | Ignore their feelings |
| Be warm and human | Be robotic and cold |
| Summarize their problem | Make assumptions |
| Guide to email gently | Push aggressively |

### 2. Key Phrases That Build Trust

```
"I completely understand..."
"Thank you for sharing that with me..."
"That sounds really challenging..."
"I can see why that would be frustrating..."
"I appreciate you taking the time to explain..."
"Based on what you've shared..."
```

### 3. Always End with Email Direction

Every conversation should eventually lead to:

```
📧 For personalized assistance: info@jentoai.com
```

---

## Complete Workflow JSON Template

Import this into n8n:

```json
{
  "name": "Trust-Building AI Chat Agent",
  "nodes": [
    {
      "parameters": {
        "path": "trust-ai-chat",
        "responseMode": "responseNode"
      },
      "name": "Chat Trigger",
      "type": "@n8n/n8n-nodes-langchain.chatTrigger",
      "position": [250, 300]
    },
    {
      "parameters": {
        "options": {
          "systemMessage": "You are a friendly AI assistant for Jento AI. Your mission is to: 1) Build trust with warm, genuine interactions, 2) Ask thoughtful questions to understand user problems, 3) Show empathy and acknowledge their challenges, 4) Guide them to email info@jentoai.com for personalized assistance. Always be warm, caring, and never pushy."
        }
      },
      "name": "AI Agent",
      "type": "@n8n/n8n-nodes-langchain.agent",
      "position": [500, 300]
    },
    {
      "parameters": {
        "model": "gpt-4o-mini",
        "options": {
          "temperature": 0.8
        }
      },
      "name": "OpenAI Chat Model",
      "type": "@n8n/n8n-nodes-langchain.lmChatOpenAi",
      "position": [500, 500]
    }
  ],
  "connections": {
    "Chat Trigger": {
      "main": [[{"node": "AI Agent", "type": "main", "index": 0}]]
    }
  }
}
```

---

## Summary

Your AI agent is now configured to:

✅ **Build Trust** - Warm, genuine, and caring interactions  
✅ **Discover Problems** - Ask thoughtful questions to understand user needs  
✅ **Show Empathy** - Acknowledge and validate user challenges  
✅ **Provide Value** - Share relevant information about your solutions  
✅ **Direct to Human Support** - Guide all users to **info@jentoai.com**  

---

> [!IMPORTANT]
> **Remember**: The AI's job is NOT to close deals or make commitments. Its job is to **build trust**, **understand problems**, and **connect users with your human team** at:
> 
> 📧 **info@jentoai.com**

---

*Documentation created for Jento AI - The Autonomous Workflow Engine*  
*Last Updated: January 2026*
