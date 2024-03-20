# MedicoAId - Medical Images Classification and Real Time Patient Monitoring System
### Abstract

Many people worldwide succumb to medical conditions due to negligence or lack of access to proper treatment, especially in rural areas. This project aims to bridge that gap by employing IoT, Artificial Intelligence, Machine Learning, and cloud-based data storage to monitor patients in real-time and assist doctors in diagnosing diseases promptly.

#### Key Features:
- Real-time patient monitoring using IoT devices.
- Disease detection using machine learning techniques.
- Cloud-based data storage for historical patient data.
- User-friendly interface accessible across digital platforms.
- Ensures data security for personal sensitive medical information.
- Facilitates speedy treatment by providing quick access to medical data.
- Enables remote monitoring and diagnosis, reducing the burden on doctors and improving patient care.


## Overview

This MERN (MongoDB, Express.js, React.js, Node.js) stack project comprises two main modules aimed at medical assistance and patient monitoring. The project structure consists of a backend folder containing the API built with Express.js, and a frontend folder housing the React.js code. The backend API serves as the backend logic for the project, handling requests and interacting with the database, while the frontend contains the user interface for interacting with the system.

### Modules

1. **Medical Images Classification**
   - This module is focused on classifying medical images such as chest X-rays, retina scans, lung cancer images, and skin images for eczema. 
   - Models for image classification are trained using PyTorch.
   - TensorFlow.js is utilized to integrate these trained models into the frontend, enabling real-time image classification.

2. **Patient Monitoring**
   - The second module is dedicated to monitoring patients' pulse rate and blood oxygen levels.
   - It leverages Google Firebase Pub/Sub for real-time data streaming and communication.
   - A paper related to this module is available [here](https://www.taylorfrancis.com/chapters/edit/10.1201/9781003203926-15/blood-oxygen-level-pulse-rate-monitoring-using-iot-cloud-based-data-storage-latesh-malik-ameya-shahu-sohan-rathod-pranay-kuthe-prachi-patil).

## Installation

1. Clone this repository to your local machine.
2. Navigate to the root folder and run `npm install` to install backend dependencies.
3. Navigate to the frontend folder and run `npm install` to install frontend dependencies.
4. Set up MongoDB and Firebase according to project requirements.
5. Configure environment variables for MongoDB connection and Firebase credentials.
6. Start the development server for frontend and backend by running `npm run dev` in the root folder.

## Usage

- Access the frontend interface via the ```localhost:3000```.
- Navigate through the modules to classify medical images or monitor patients.
- Ensure proper connectivity to IoT devices and Firebase for real-time monitoring.

## License

This project is licensed under the [MIT License](LICENSE).


