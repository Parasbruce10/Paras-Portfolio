// Banner Component
// Updated Header Component
// Ultra-Premium Glassmorphic Header Component

const Header = () => (
    <header className="custom-header">
        <div className="header-container">
            {/* Left Side: Avatar + Name & Status */}
            <div className="header-left">
                <div className="avatar-wrapper">
                    <img 
                        src="hero.jpeg" 
                        alt="Paras Profile" 
                        className="header-avatar" 
                    />
                    <span className="status-dot" title="Available for work"></span>
                </div>
                <div className="header-brand">
                    <span className="brand-title">PARAS</span>
                    <span className="brand-subtitle">Software Engineer</span>
                </div>
            </div>

            {/* Right Side: Glassmorphic Contact Buttons */}
            <div className="header-right">
                {/* WhatsApp Direct Link */}
                <a 
                    href="https://wa.me/923421287734" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="header-contact-pill"
                >
                    <span className="pill-icon">📞</span>
                    <span className="pill-text">0342-1287734</span>
                </a>

                {/* Email Link */}
                <a 
                    href="mailto:Parashamza955@gmail.com" 
                    className="header-contact-pill email-pill"
                >
                    <span className="pill-icon">✉️</span>
                    <span className="pill-text">Parashamza955@gmail.com</span>
                </a>
            </div>
        </div>
    </header>
);

// Four-pointed Star Icon Component
const StarIcon = () => (
    <svg className="star-icon" viewBox="0 0 24 24">
        <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
    </svg>
);

// Typewriter Component for Dynamic Heading
const TypewriterText = () => {
    const texts = [
        "Hi My Name Is Paras",
        "I Am A Full-Stack Developer",
        "And I Am A Vibe Coder"
    ];
    
    const [textIndex, setTextIndex] = React.useState(0);
    const [charIndex, setCharIndex] = React.useState(0);
    const [isDeleting, setIsDeleting] = React.useState(false);

    React.useEffect(() => {
        const currentText = texts[textIndex];
        let typingSpeed = isDeleting ? 40 : 110;

        if (!isDeleting && charIndex === currentText.length) {
            // Poora sentence type hone par 1.8 seconds ka pause lein
            typingSpeed = 1800;
            setIsDeleting(true);
        } else if (isDeleting && charIndex === 0) {
            // Delete hone ke baad agla text switch karein
            setIsDeleting(false);
            setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
            typingSpeed = 400;
        }

        const timer = setTimeout(() => {
            setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
        }, typingSpeed);

        return () => clearTimeout(timer);
    }, [charIndex, isDeleting, textIndex]);

    return (
        <span className="typewriter-text">
            {texts[textIndex].substring(0, charIndex)}
            <span className="typewriter-cursor">|</span>
        </span>
    );
};

// Infinite Running Ticker / Marquee Component
const TechTicker = () => {
    const skills = [
        { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "WordPress", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg" },
        { name: "MS Office", logo: "https://img.icons8.com/color/48/microsoft-office-2019.png" }
    ];

    // 4 Sets repeat karain taake screen hamesha full rahey
    const multiSkills = [...skills, ...skills, ...skills, ...skills];

    return (
        <div className="ticker-wrapper">
            <div className="ticker-track">
                {multiSkills.map((skill, index) => (
                    <div className="ticker-item" key={`ticker-${index}`}>
                        <img src={skill.logo} alt={skill.name} className="ticker-logo" />
                        <span>{skill.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

// Main Content Component
// Main Content Component
const Content = () => (
    <main className="main-content">
        <div className="profile-section">
       <main className="premium-hero-container">
    {/* Ambient Glowing Background Orbs */}
    <div className="ambient-glow orb-1"></div>
    <div className="ambient-glow orb-2"></div>

    <div className="glass-hero-card">
        {/* Shimmer Border Light */}
        <div className="shimmer-border"></div>

        {/* 3D Flick / Flip Avatar Section */}
        <div className="profile-avatar-wrapper">
            <div className="avatar-glow-ring"></div>
            <div className="avatar-flip-card">
                <div className="avatar-front">
                    <img 
                        src="hero.jpeg" 
                        alt="Paras Profile" 
                        className="profile-avatar" 
                    />
                </div>
                <div className="avatar-back">
                    <span>Open To Work</span>
                </div>
            </div>
        </div>
        
        {/* Main Title */}
        <h1 className="profile-title">
            <TypewriterText />
        </h1>
        
        {/* Premium Status Badge */}
        <div className="profile-subtitle-badge">
            <span className="live-pulse-dot"></span>
            <span className="subtitle-text">
                Software Engineer | Full-Stack Developer & Vibe Coder
            </span>
        </div>
        
        {/* Bio Text */}
        <p className="profile-bio">
            Passionate about building seamless web experiences, solving complex technical problems, and turning creative ideas into functional digital solutions with clean, modern code.
        </p>
        
        {/* Interactive Glassmorphic Skill Chips */}
        <div className="skills-container">
            <span className="skill-chip"><i className="chip-icon">⚡</i> HTML5</span>
            <span className="skill-chip"><i className="chip-icon">🎨</i> CSS3</span>
            <span className="skill-chip"><i className="chip-icon">🌊</i> Tailwind CSS</span>
            <span className="skill-chip"><i className="chip-icon">📜</i> JavaScript</span>
            <span className="skill-chip"><i className="chip-icon">⚛️</i> React</span>
            <span className="skill-chip"><i className="chip-icon">🐍</i> Python</span>
            <span className="skill-chip"><i className="chip-icon">🌐</i> WordPress</span>
            <span className="skill-chip"><i className="chip-icon">🛍️</i> Shopify</span>
            <span className="skill-chip"><i className="chip-icon">💼</i> MS Office</span>
        </div>
    </div>
</main>

            {/* Glowing Running Ticker/Patti */}
            <TechTicker />

            {/* Education Section */}
            <section className="education-section">
                <h2 className="section-title">Education</h2>
                
                <div className="education-cards-list">
                    {/* Card 1 */}
                    <div className="education-card">
                        <div className="edu-logo-wrapper">
                            <img src="ilma.jpg" alt="Ilma University Logo" className="edu-logo" />
                        </div>
                        <div className="edu-details">
                            <h3 className="edu-university">Ilma University</h3>
                            <p className="edu-degree">Bachelor of Science in Computer Science (BSCS)</p>
                            <span className="edu-badge">2023 - Present</span>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="education-card">
                        <div className="edu-logo-wrapper">
                            <img src="college.jpg" alt="College Logo" className="edu-logo" onError={(e) => { e.target.src = "ziauddin.jpeg"; }} />
                        </div>
                        <div className="edu-details">
                            <h3 className="edu-university">Ziauddin Board</h3>
                            <p className="edu-degree">Intermediate in Pre-Engineering</p>
                            <span className="edu-badge">2021 - 2023</span>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="education-card">
                        <div className="edu-logo-wrapper">
                            <img src="school.jpg" alt="School Logo" className="edu-logo" onError={(e) => { e.target.src = "matha.jpeg"; }} />
                        </div>
                        <div className="edu-details">
                            <h3 className="edu-university">Mathamatics City Grammer School</h3>
                            <p className="edu-degree">Matriculation in Science</p>
                            <span className="edu-badge">2017 - 2019</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Experience Section (2 Cards) */}
            <section className="education-section">
                <h2 className="section-title">Experience</h2>

                <div className="education-cards-list">
                    {/* Experience Card 1 */}
                    <div className="education-card">
                        <div className="edu-logo-wrapper">
                            <img
                                src="company1.jpg"
                                alt="Company Logo"
                                className="edu-logo"
                                onError={(e) => { e.target.src = "header.jpeg"; }}
                            />
                        </div>
                        <div className="edu-details">
                            <h3 className="edu-university">Apex Code</h3>
                            <p className="edu-degree">Full-Stack Developer / Founder & CEO</p>
                            <span className="edu-badge">2025 - Present</span>
                        </div>
                    </div>

                    {/* Experience Card 2 */}
                    <div className="education-card">
                        <div className="edu-logo-wrapper">
                            <img
                                src="company2.jpg"
                                alt="Company Logo"
                                className="edu-logo"
                                onError={(e) => { e.target.src = "codex.jpeg"; }}
                            />
                        </div>
                        <div className="edu-details">
                            <h3 className="edu-university">Codex Venture</h3>
                            <p className="edu-degree">Work as a Full-Stack Developer</p>
                            <span className="edu-badge">2024 - 2025</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Section (5 Cards with Visit Buttons) */}
            <section className="education-section">
                <h2 className="section-title">Projects</h2>

                <div className="education-cards-list">
                    {/* Project Card 1 */}
                    <div className="education-card">
                        <div className="edu-logo-wrapper">
                            <img
                                src="project1.jpeg"
                                alt="Resume Pro Logo"
                                className="edu-logo"
                                onError={(e) => { e.target.src = "resume.jpeg"; }}
                            />
                        </div>
                        <div className="edu-details">
                            <h3 className="edu-university">Resume Pro – All-in-One Productivity Suite</h3>
                            <a
                                href="https://www.resumepro.it.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="edu-degree project-link"
                            >
                                https://www.resumepro.it.com/
                            </a>
                            <div className="card-bottom-row">
                                <span className="edu-badge">JavaScript & React</span>
                                <a
                                    href="https://www.resumepro.it.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="visit-btn"
                                >
                                    Visit Website ↗
                                </a>
                            </div>
                        </div>
                    </div>

{/* Project Card 1.2 */}
                    <div className="education-card">
                        <div className="edu-logo-wrapper">
                            <img
                                src="project1.jpeg"
                                alt="Resume Pro Logo"
                                className="edu-logo"
                                onError={(e) => { e.target.src = "electro.png"; }}
                            />
                        </div>
                        <div className="edu-details">
                            <h3 className="edu-university">Electro Mark – E-commerce</h3>
                            <a
                                href="https://electromark.bookapexcode.store/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="edu-degree project-link"
                            >
                                https://electromark.bookapexcode.store/
                            </a>
                            <div className="card-bottom-row">
                                <span className="edu-badge">JavaScript & React</span>
                                <a
                                    href="https://electromark.bookapexcode.store/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="visit-btn"
                                >
                                    Visit Website ↗
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Project Card 2 */}
                    <div className="education-card">
                        <div className="edu-logo-wrapper">
                            <img
                                src="project2.jpeg"
                                alt="GlyphHuman Logo"
                                className="edu-logo"
                                onError={(e) => { e.target.src = "humanizer.jpeg"; }}
                            />
                        </div>
                        <div className="edu-details">
                            <h3 className="edu-university">GlyphHuman – AI Text Humanizer & Detector</h3>
                            <a
                                href="https://glyphhuman.resumepro.it.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="edu-degree project-link"
                            >
                                https://glyphhuman.resumepro.it.com/
                            </a>
                            <div className="card-bottom-row">
                                <span className="edu-badge">JavaScript / React & Python</span>
                                <a
                                    href="https://glyphhuman.resumepro.it.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="visit-btn"
                                >
                                    Visit Website ↗
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Project Card 3 */}
                    <div className="education-card">
                        <div className="edu-logo-wrapper">
                            <img
                                src="project3.jpeg"
                                alt="Quickkit Logo"
                                className="edu-logo"
                                onError={(e) => { e.target.src = "quickkit.jpeg"; }}
                            />
                        </div>
                        <div className="edu-details">
                            <h3 className="edu-university">Quickkit – Gamified Assessment & Trivia Platform</h3>
                            <a
                                href="https://quickkit.resumepro.it.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="edu-degree project-link"
                            >
                                https://quickkit.resumepro.it.com/
                            </a>
                            <div className="card-bottom-row">
                                <span className="edu-badge">JavaScript & React</span>
                                <a
                                    href="https://quickkit.resumepro.it.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="visit-btn"
                                >
                                    Visit Website ↗
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Project Card 4 */}
                    <div className="education-card">
                        <div className="edu-logo-wrapper">
                            <img
                                src="project4.jpeg"
                                alt="Lets Detect Logo"
                                className="edu-logo"
                                onError={(e) => { e.target.src = "letsdetect.jpeg"; }}
                            />
                        </div>
                        <div className="edu-details">
                            <h3 className="edu-university">Lets Detect – Fake News Detector Portal</h3>
                            <a
                                href="https://letsdetect.resumepro.it.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="edu-degree project-link"
                            >
                                https://letsdetect.resumepro.it.com/
                            </a>
                            <div className="card-bottom-row">
                                <span className="edu-badge">JavaScript / React & Python</span>
                                <a
                                    href="https://letsdetect.resumepro.it.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="visit-btn"
                                >
                                    Visit Website ↗
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Project Card 5 */}
                    <div className="education-card">
                        <div className="edu-logo-wrapper">
                            <img
                                src="project5.jpeg"
                                alt="Apex Code Logo"
                                className="edu-logo"
                                onError={(e) => { e.target.src = "aa.jpeg"; }}
                            />
                        </div>
                        <div className="edu-details">
                            <h3 className="edu-university">Apex Code Software Agency</h3>
                            <a
                                href="https://www.bookapexcode.store/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="edu-degree project-link"
                            >
                                https://www.bookapexcode.store/
                            </a>
                            <div className="card-bottom-row">
                                <span className="edu-badge">JavaScript / React & Python</span>
                                <a
                                    href="https://www.bookapexcode.store/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="visit-btn"
                                >
                                    Visit Website ↗
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Full-Width Grid Skills Section */}
<section className="education-section full-width-skills-section">
    <h2 className="section-title">Technical Skills</h2>
    
    <div className="skills-grid-container">
        <div className="animated-skill-card">
            <div className="skill-icon-box">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" />
            </div>
            <span>HTML5</span>
        </div>

        <div className="animated-skill-card">
            <div className="skill-icon-box">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" />
            </div>
            <span>CSS3</span>
        </div>

        <div className="animated-skill-card">
            <div className="skill-icon-box">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind CSS" />
            </div>
            <span>Tailwind CSS</span>
        </div>

        <div className="animated-skill-card">
            <div className="skill-icon-box">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" />
            </div>
            <span>JavaScript</span>
        </div>

        <div className="animated-skill-card">
            <div className="skill-icon-box">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />
            </div>
            <span>React</span>
        </div>

        <div className="animated-skill-card">
            <div className="skill-icon-box">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" />
            </div>
            <span>Python</span>
        </div>

        <div className="animated-skill-card">
            <div className="skill-icon-box">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg" alt="WordPress" />
            </div>
            <span>WordPress</span>
        </div>

        <div className="animated-skill-card">
            <div className="skill-icon-box">
                <img src="https://img.icons8.com/color/48/shopify.png" alt="Shopify" />
            </div>
            <span>Shopify</span>
        </div>

        <div className="animated-skill-card">
            <div className="skill-icon-box">
                <img src="https://img.icons8.com/color/48/microsoft-office-2019.png" alt="MS Office" />
            </div>
            <span>MS Office</span>
        </div>
    </div>
</section>
{/* Premium Glassmorphic Social Media Section */}
<section className="education-section social-section">
    <h2 className="section-title">Connect With Me</h2>
    
    <div className="social-grid-container">
        {/* LinkedIn Card */}
        <a 
            href="https://www.linkedin.com/in/paras-bruce-062610343?utm_source=share_via&utm_content=profile&utm_medium=member_android" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-card linkedin"
        >
            <div className="social-icon-box">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" />
            </div>
            <div className="social-info">
                <span className="social-name">LinkedIn</span>
                <span className="social-sub">Let's Connect Professionally</span>
            </div>
            <span className="social-arrow">↗</span>
        </a>

        {/* Instagram Card */}
        <a 
            href="https://www.instagram.com/paras_in_10?igsi=Nm03bXFueW4zbjZk" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-card instagram"
        >
            <div className="social-icon-box">
                <img src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg" alt="Instagram" />
            </div>
            <div className="social-info">
                <span className="social-name">Instagram</span>
                <span className="social-sub">Follow My Journey</span>
            </div>
            <span className="social-arrow">↗</span>
        </a>

        {/* Facebook Card */}
        <a 
            href="https://www.facebook.com/share/1FghvqBe4H/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-card facebook"
        >
            <div className="social-icon-box">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg" alt="Facebook" />
            </div>
            <div className="social-info">
                <span className="social-name">Facebook</span>
                <span className="social-sub">Stay in Touch</span>
            </div>
            <span className="social-arrow">↗</span>
        </a>
    </div>
</section>
        </div>
    </main>
);

// Footer Component
const Footer = () => (
    <footer className="footer">
        <div className="footer-content">
            {/* Paras Name */}
            <h3 className="footer-name">Paras</h3>
            
            {/* Short English Bio */}
            <p className="footer-bio">
                Passionate Full-Stack Developer & Software Engineer dedicated to crafting modern, scalable, and high-performance digital web experiences.
            </p>
            
            {/* Copyright Line */}
            <p className="footer-text">Copyright © 2026. All rights reserved.</p>
            
            {/* Created with heart & Apex Code */}
            <p className="footer-credit">
                Created with ❤️ by <span className="brand-name">Apex Code Software Agency</span>
            </p>

            
        </div>
    </footer>
);

// Main App Dashboard Component
const App = () => {
    return (
        <div className="dashboard-container">
            <Header />
            <Content />
            <Footer />
        </div>
    );
};

// Render React App to DOM
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);