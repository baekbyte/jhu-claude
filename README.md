# Claude Builder Club @ Johns Hopkins University

A modern, responsive React website for the Johns Hopkins University Claude Builder Club, inspired by the successful UF and NEU Claude Builder Club websites.

## 🚀 Features

- **React Components**: Modular, reusable components for easy maintenance
- **Modern Design**: Clean, professional layout with Johns Hopkins University branding
- **Responsive**: Fully responsive design that works on all devices
- **Interactive**: Smooth animations, hover effects, and mobile navigation
- **Accessible**: Built with accessibility best practices
- **Fast Loading**: Optimized for performance with React best practices

## 🎨 Design Elements

### Johns Hopkins University Branding
- **Primary Colors**: JHU Blue (#002d72) and Light Blue (#68ace5)
- **Accent Colors**: JHU Gold (#ffd700) and Dark Gold (#b8860b)
- **Typography**: Inter font family for modern, clean readability
- **Visual Elements**: Custom gradients, shadows, and animations

### Sections Included
1. **Hero Section**: Compelling introduction with animated elements
2. **Benefits**: Claude Pro access, API credits, and community benefits
3. **About**: Club mission, values, and statistics
4. **Leadership**: Student leaders and faculty advisors
5. **Events**: Upcoming workshops and activities
6. **Join**: Clear call-to-action for new members
7. **Footer**: Links, social media, and university information

## 🛠️ Technical Stack

- **React 18**: Modern React with hooks and functional components
- **Create React App**: Standard React development setup
- **CSS3**: Modern styling with CSS Grid, Flexbox, and custom properties
- **JavaScript ES6+**: Modern JavaScript features
- **Font Awesome**: Icons for visual elements
- **Google Fonts**: Inter font family

## 📱 Responsive Design

The website is fully responsive with breakpoints for:
- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: 320px - 767px

## 🎯 Key Features

### Navigation
- Fixed header with smooth scrolling
- Mobile hamburger menu
- Active link highlighting

### Animations
- Fade-in animations on scroll
- Floating elements in hero section
- Counter animations for statistics
- Hover effects on cards and buttons

### Performance
- Debounced scroll events
- Lazy loading for images
- Optimized CSS and JavaScript
- Smooth scrolling behavior

## 🚀 Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start the development server**:
   ```bash
   npm start
   ```

3. **Open** [http://localhost:3000](http://localhost:3000) in your browser

4. **Build for production**:
   ```bash
   npm run build
   ```

5. **Deploy** the `build` folder to your preferred hosting service

## 📝 Customization

### Colors
Update the CSS custom properties in `src/App.css`:
```css
:root {
    --jhu-blue: #002d72;
    --jhu-light-blue: #68ace5;
    --jhu-gold: #ffd700;
    --jhu-dark-gold: #b8860b;
}
```

### Content
- Update leadership team information in `src/components/Leadership.js`
- Modify event dates and descriptions in `src/components/Events.js`
- Change contact information and social links in `src/components/Footer.js`
- Update statistics and club information in `src/components/About.js`

### Images
Replace placeholder images with actual photos:
- Leadership headshots
- Club event photos
- University campus images

## 🌐 Deployment

The website can be deployed to any static hosting service:
- **GitHub Pages**: Free hosting for public repositories
- **Netlify**: Drag and drop deployment
- **Vercel**: Fast deployment with custom domains
- **AWS S3**: Scalable cloud hosting

## 📧 Contact

For questions about this website or the Claude Builder Club at Johns Hopkins University, please contact the club leadership team.

## 📄 License

This project is open source and available under the MIT License.

---

**Built with ❤️ for the Johns Hopkins University Claude Builder Club**