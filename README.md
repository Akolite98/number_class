# Number Classification API

## Overview
The **Number Classification API** is a simple Node.js and Express-based API that classifies numbers based on various mathematical properties. It determines whether a number is prime, perfect, Armstrong, even, or odd, and calculates the sum of its digits. Additionally, it fetches an interesting mathematical fact about the given number from the Numbers API.

## Features
- Classifies numbers based on:
  - Prime status
  - Perfect number status
  - Armstrong number status
  - Even or odd
- Calculates the sum of digits of the number
- Retrieves a fun mathematical fact from the [Numbers API](http://numbersapi.com/)
- Handles CORS and JSON responses

## Technologies Used
- Node.js
- Express.js
- Axios
- CORS

## Installation
### Prerequisites
Ensure you have **Node.js** installed on your system.

### Steps
1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/number-classification-api.git
   cd number-classification-api
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the server:
   ```sh
   npm start
   ```
   The API will run at `http://localhost:3000` (or the port specified in `process.env.PORT`).

## API Usage
### Endpoint: `/api/classify-number`
#### Request
**Method:** `GET`

**Query Parameter:**
| Parameter | Type | Description |
|-----------|------|-------------|
| `number` | Integer | The number to classify |

#### Example Request
```
GET http://localhost:3000/api/classify-number?number=28
```

#### Response
```json
{
  "number": 28,
  "is_prime": false,
  "is_perfect": true,
  "properties": ["even"],
  "digit_sum": 10,
  "fun_fact": "28 is the second perfect number."
}
```

## Project Structure
```
number-classification-api/
│── node_modules/
│── utils.js
│── server.js
│── package.json
│── README.md
```
- `server.js`: Main server file handling routes and API logic.
- `utils.js`: Utility functions for number classification and fetching fun facts.
- `package.json`: Project dependencies and scripts.
- `README.md`: Documentation.

## Deployment
You can deploy this API on cloud platforms like **Heroku, Vercel, or Render**.

To deploy manually on a server:
1. Install **Node.js** on the server.
2. Clone the repository.
3. Run `npm install`.
4. Use a process manager like **PM2**:
   ```sh
   npm install -g pm2
   pm2 start server.js --name number-api
   ```

## License
This project is licensed under the **MIT License**.

## Author
**Precious Akachukwu Nnorom**

## Contributions
Contributions are welcome! Feel free to fork the repository and submit a pull request.

---
Happy coding! 🚀

