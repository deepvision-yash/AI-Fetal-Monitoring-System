# AI Fetal Monitoring System (CTG-Assist)

AI Fetal Monitoring System is an advanced web application designed for the analysis and monitoring of Cardiotocography (CTG) data. It allows healthcare professionals to upload historical telemetry data or connect to live streams, providing AI-assisted retrospective and real-time guideline analysis based on standards like FIGO 2015, NICE 2017, and ACOG 2009.

## Features

- **Offline Analysis**: Upload `.DAT` and `.HEA` (WFDB format) files to perform detailed retrospective guideline analysis.
- **Live Monitoring**: Real-time integration and analysis of fetal heart rate and uterine contractions.
- **Guideline Standards**: Supports widely recognized standards (FIGO 2015, NICE 2017, ACOG 2009).
- **Patient Management**: Configurable patient metadata with options for anonymization.
- **Modern Interface**: Built with Next.js and Tailwind CSS, featuring a responsive, user-friendly UI.

## Tech Stack

- **Frontend**: Next.js 15+, React 19, Tailwind CSS 4
- **Backend**: (To be implemented - Python/FastAPI expected for AI processing)

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd CTG-Assist
   ```

2. Install frontend dependencies:
   ```bash
   cd frontend
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## Project Structure

- `/frontend` - Next.js web application
- `/backend` - Backend services and AI analysis modules (WIP)
- `/docs` - Project documentation

## Author

**Yash Gharunge**
- Email: deepvision.yash@gmail.com

## License

This project is licensed under the MIT License.
