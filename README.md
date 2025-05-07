
# NiPay: SME Credit Platform

A modern, responsive website for NiPay, a fintech platform providing credit facilities to SMEs in Rwanda based on their mobile money transaction history.

## Getting Started

### Prerequisites

- Node.js v16+ and npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/nipay-website.git
cd nipay-website
```

2. Install dependencies:
```bash
npm install
```

3. Run development server:
```bash
npm run dev
```

Open your browser and visit `http://localhost:8080` to view the application.

## Project Structure

```
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── forms/          # Form components
│   │   ├── layout/         # Layout components (Header, Footer)
│   │   ├── modals/         # Modal components
│   │   ├── sections/       # Page section components
│   │   ├── shared/         # Shared utility components
│   │   └── ui/             # UI components from shadcn/ui
│   ├── data/               # JSON data files
│   ├── pages/              # Page components
│   ├── services/           # API and other services
│   ├── App.tsx             # Main App component
│   ├── index.css           # Global styles
│   └── main.tsx            # Application entry point
└── tailwind.config.ts      # Tailwind CSS configuration
```

## Features

- **Responsive Design**: Mobile-first approach ensuring usability across all devices
- **Dark/Light Mode**: Toggle between themes with persistent preference
- **Interactive Forms**: Waitlist and investor forms with client and server validation
- **Dynamic Data**: Stats fetched from API endpoints
- **Accessibility**: ARIA attributes, keyboard navigation, and proper focus management
- **SEO Optimization**: Meta tags, structured data, and optimized content

## Updating Content

### Modifying Stats

Update the statistics displayed on the site by editing `src/data/stats.json`. This file contains key metrics used throughout the website.

### Updating FAQs

Manage frequently asked questions in `src/data/faq.json`. Each FAQ item should have a question and answer field.

### Changing Testimonials

Edit customer testimonials in `src/data/testimonials.json`. Each testimonial should include the customer's name, title, quote, and image path.

### Adding Partners

Update partner organizations in `src/data/partners.json`. Partners are divided into banks and organizations, each with a name and logo path.

## API Endpoints

The application currently uses simulated API endpoints in `src/services/api.ts`. In a production environment, these would be replaced with actual API calls to your backend.

### Available Endpoints

- `/api/waitlist` - For SMEs to join the waitlist
- `/api/investor` - For capital providers to express interest
- `/api/stats` - Fetches latest statistics for display

## Deployment

This project can be deployed to Vercel with zero configuration using the following steps:

1. Push your code to a GitHub repository
2. Connect the repository to Vercel
3. Deploy

## Built With

- [React](https://reactjs.org/) - Frontend framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - UI component system
- [React Hook Form](https://react-hook-form.com/) - Form handling
- [Zod](https://github.com/colinhacks/zod) - Schema validation
- [Recharts](https://recharts.org/) - Charting library

## License

This project is proprietary and confidential.

## Support

For support or inquiries, please email [support@nipay.rw](mailto:support@nipay.rw).
