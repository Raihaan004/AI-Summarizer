# AI Meeting Summarizer & Analyzer

![AI Summarizer Screenshot](https://i.imgur.com/your-screenshot-url.png) <!-- Replace with a URL to your screenshot -->

An intelligent web application that transforms raw meeting transcripts into concise, structured summaries and provides actionable insights using the Groq AI API. This full-stack project was built to demonstrate proficiency in modern web development, API integration, and creating value-added features.

**Live Demo:** [View the live project here!](https://your-live-demo-url.com) <!-- Replace with your deployed Netlify URL -->

---

## Features

This application goes beyond simple summarization to provide a comprehensive analysis tool:

- **📄 .txt File Upload:** Easily upload meeting transcripts via a modern drag-and-drop interface or a standard file selector.
- **✨ Custom AI Prompts:** Guide the AI by providing custom instructions (e.g., "Extract action items," "Summarize for an executive," "List all key decisions").
- **📝 AI-Generated Summaries:** Receive clean, plain-text summaries formatted in bullet points, without any unwanted Markdown.
- **🧠 AI-Powered Analysis (Value-Add Feature):**
    - **Sentiment Analysis:** Instantly gauge the overall tone of the meeting (Positive, Neutral, Negative).
    - **Key Topic Extraction:** Identify the most important topics that were discussed.
    - **Contributor Spotlight:** Automatically find the top contributor in the meeting.
- **✏️ Editable Output:** The generated summary can be edited directly in the text area before sharing.
- **📧 Share via Email:** Seamlessly open the user's default email client with the summary pre-filled and ready to send.
- ** Dynamic UI:** Includes a live-updating clock, loading states, error handling, and a polished, responsive design that fits all screen sizes.

---

## Tech Stack

This project is built with a modern, efficient, and scalable technology stack.

**Frontend:**
- **HTML5**
- **Tailwind CSS (via CDN):** For rapid, utility-first styling and a professional design.
- **JavaScript (ES6+):** For all client-side logic, DOM manipulation, and API communication.
- **Lucide Icons:** For clean and modern iconography.

**Backend:**
- **Node.js:** A powerful JavaScript runtime for building the server.
- **Express.js:** A fast and minimalist web framework for creating the API.
- **Groq API:** For high-speed, real-time AI text generation and analysis.
- **`dotenv`:** To securely manage environment variables and API keys.
- **`cors`:** To enable secure communication between the frontend and backend.

---

## Getting Started

Follow these instructions to get a local copy of the project up and running on your machine.

### Prerequisites

- **Node.js** installed on your machine (v18.x or higher recommended).
- A free **Groq API Key**. You can get one from the [Groq Console](https://console.groq.com/keys).

### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/your-username/your-repository-name.git](https://github.com/your-username/your-repository-name.git)
    cd your-repository-name
    ```

2.  **Set up the Backend:**
    - Navigate to the `backend` directory:
      ```bash
      cd backend
      ```
    - Install the necessary NPM packages:
      ```bash
      npm install
      ```
    - Create a new file named `.env` in the `backend` directory.
    - Add your Groq API key to the `.env` file:
      ```
      GROQ_API_KEY=gsk_YourSecretKeyGoesHere
      ```

3.  **You're done!** There is no installation required for the frontend.

### Running the Application

You will need two terminals running simultaneously.

1.  **Start the Backend Server:**
    - In your first terminal, make sure you are in the `backend` directory.
    - Run the following command:
      ```bash
      node server.js
      ```
    - You should see the message: `Backend server is running successfully on http://localhost:3000`

2.  **Launch the Frontend:**
    - Navigate to the root directory of the project (`ai-summarizer`).
    - Find the `index.html` file.
    - Right-click on it and select "Open with" your favorite web browser (e.g., Google Chrome).

The application should now be running locally in your browser and fully connected to your backend.
