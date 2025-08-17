# AI Meeting Summarizer & Analyzer

![AI Summarizer Screenshot](https://raw.githubusercontent.com/Raihaan004/AI-Summarizer/refs/heads/main/Screenshot.png)
 <!-- Replace with a URL to your screenshot -->

An intelligent web application that transforms raw meeting transcripts into concise, structured summaries and provides actionable insights using the Groq AI API. This full-stack project was built to demonstrate proficiency in modern web development, API integration, and creating value-added features.

**Live Demo:** [View the live project here!](https://ai-summarizer-and-analyzer.netlify.app/) <!-- Replace with your deployed Netlify URL -->

---

## Features

- **📄 .txt File Upload:** Easily upload meeting transcripts via a modern drag-and-drop interface.
- **✨ Custom AI Prompts:** Guide the AI with custom instructions to tailor the summary to your needs.
- **📝 AI-Generated Summaries:** Receive clean, plain-text summaries formatted in bullet points.
- **🧠 AI-Powered Analysis:**
    - **Sentiment Analysis:** Instantly gauge the overall tone of the meeting.
    - **Key Topic Extraction:** Identify the most important topics discussed.
    - **Contributor Spotlight:** Find the top contributor in the meeting.
- **📧 Share via Gmail:** Opens the Gmail compose window in a new tab with the recipient, subject, and summary pre-filled.
- ** Dynamic UI:** Includes a live-updating clock, loading states, error handling, and a polished, responsive design.

---

## Tech Stack

**Frontend:**
- **HTML5**
- **Tailwind CSS (via CDN):** For rapid, utility-first styling.
- **JavaScript (ES6+):** For all client-side logic and API communication.
- **Lucide Icons:** For clean and modern iconography.

**Backend:**
- **Node.js & Express.js:** For creating a robust and efficient API.
- **Groq API:** For high-speed AI text generation and analysis.
- **`dotenv`:** To securely manage environment variables.

---

## Getting Started

### Prerequisites

- **Node.js** installed (v18.x or higher recommended).
- A free **Groq API Key** from the [Groq Console](https://console.groq.com/keys).

### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/Raihaan004/AI-Summarizer.git](https://github.com/Raihaan004/AI-Summarizer.git)
    cd AI-Summarizer
    ```

2.  **Set up the Backend:**
    - Navigate to the `backend` directory: `cd backend`
    - Install NPM packages: `npm install`
    - Create a `.env` file and add your Groq API key:
      ```
      GROQ_API_KEY=gsk_YourSecretKeyGoesHere
      ```

### Running the Application

1.  **Start the Backend Server:**
    - In a terminal, from the `backend` directory, run:
      ```bash
      node server.js
      ```
    - The server will be running at `http://localhost:3000`.

2.  **Launch the Frontend:**
    - In your file explorer, navigate to the root project folder.
    - Right-click on `index.html` and open it with your web browser.
