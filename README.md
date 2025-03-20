# EasyBilling

EasyBilling is a cloud-based subscription billing and recurring invoices management platform for businesses and freelancers.

## 🚀 Quick Start

### Prerequisites

- Node.js 18.x or later
- PostgreSQL 14.x or later
- npm or yarn
- Git

### Installation

1. Clone the repository
```
git clone https://github.com/yourusername/easybilling.git
cd easybilling
```

2. Install dependencies for both client and server

#### Install client dependencies
```
cd client
npm install
```

#### Install server dependencies
```
cd ../server
npm install
```

3. Configure environment variables
Create `.env` files in both client and server directories.

Client (.env):
```
REACT_APP_API_URL=http://localhost:3001
```

Server (.env):
```
DATABASE_URL="postgresql://username:password@localhost:5432/easybilling"
JWT_SECRET=your-jwt-secret
PORT=3001
```

4. Set up database
```
cd server
npx sequelize-cli db:migrate
```

5. Start the development servers
-   Start the client (in client directory)
```
cd client
npm start
```

-   Start the server (in server directory)
```
cd server
npm run dev
```

## Project Structure

### Client (React.js)
```
client/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── App.js
│   │   ├── Dashboard.js
│   │   ├── InvoiceForm.js
│   │   ├── InvoiceList.js
│   │   ├── Login.js
│   │   └── Register.js
│   ├── context/
│   │   └── AuthContext.js
│   ├── services/
│   │   └── api.js
│   ├── styles/
│   │   └── App.css
│   ├── index.js
│   └── setupTests.js
```

### Server (Express.js)
```
server/
├── app.js
├── config/
│   └── default.json
├── controllers/
│   ├── authController.js
│   ├── invoiceController.js
│   ├── paymentController.js
│   └── userController.js
├── models/
│   ├── Invoice.js
│   ├── Payment.js
│   └── User.js
├── routes/
│   ├── auth.js
│   ├── invoices.js
│   ├── payments.js
│   └── users.js
├── middleware/
│   └── authMiddleware.js
└── utils/
    ├── emailService.js
    └── paymentGateway.js
```

## 🛠️ Tech Stack

### Frontend
- React.js 18.x
- JavaScript
- CSS
- Axios for API requests
- React Router for routing
- React Context for state management
- Jest and React Testing Library for testing

### Backend
- Express.js
- Node.js 18.x
- PostgreSQL 14.x
- Sequelize/Knex.js for ORM
- JWT Authentication
- Nodemailer for emails

### Development Tools
- Git for version control
- ESLint for code linting
- Prettier for code formatting
- Postman for API testing
- Docker for containerization (optional)

## 📚 API Documentation

API documentation is available at `/api-docs` when running the server locally.

## 🧪 Testing
### Run client tests
```
cd client
npm test
```

### Run server tests
```
cd server
npm test
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Support

For support, email support@easybilling.in or join our Slack channel.

