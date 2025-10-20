// Main JavaScript for Portfolio Website - Dark Theme
document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize all components
    initMobileMenu();
    initTypedText();
    initScrollAnimations();
    initSkillBars();
    initSkillsChart();
    initTimelineAnimations();
    initProjectCards();
    initArtsyTypography();
    
    // Mobile Menu Toggle
    function initMobileMenu() {
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        
        if (mobileMenuBtn && mobileMenu) {
            mobileMenuBtn.addEventListener('click', function() {
                mobileMenu.classList.toggle('hidden');
            });
        }
    }
    
    // Typed Text Animation
    function initTypedText() {
        const typedElement = document.getElementById('typed-text');
        if (typedElement) {
            new Typed('#typed-text', {
                strings: [
                    'Data Science Professional',
                    'Finance & Analytics Expert', 
                    'Machine Learning Engineer',
                    'Quantitative Problem Solver',
                    'AI & FinTech Enthusiast'
                ],
                typeSpeed: 50,
                backSpeed: 30,
                backDelay: 2000,
                loop: true,
                showCursor: true,
                cursorChar: '|'
            });
        }
    }
    
    // Artsy Typography Effects
    function initArtsyTypography() {
        // Split text for artistic animations
        const artisticHeadings = document.querySelectorAll('.artistic-text');
        
        artisticHeadings.forEach(heading => {
            // Split text into characters
            const text = heading.textContent;
            heading.innerHTML = '';
            
            [...text].forEach((char, index) => {
                const span = document.createElement('span');
                span.textContent = char === ' ' ? '\u00A0' : char;
                span.style.display = 'inline-block';
                span.style.opacity = '0';
                span.style.transform = 'translateY(20px)';
                heading.appendChild(span);
            });
            
            // Animate characters on scroll
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const chars = entry.target.querySelectorAll('span');
                        anime({
                            targets: chars,
                            opacity: [0, 1],
                            translateY: [20, 0],
                            duration: 600,
                            easing: 'easeOutCubic',
                            delay: anime.stagger(50)
                        });
                    }
                });
            }, { threshold: 0.5 });
            
            observer.observe(heading);
        });
        
        // Name animation with special treatment
        const nameElement = document.querySelector('.name-artistic');
        if (nameElement) {
            nameElement.addEventListener('mouseenter', function() {
                const chars = this.querySelectorAll('span');
                anime({
                    targets: chars,
                    scale: [1, 1.1, 1],
                    color: ['#ffffff', '#0066ff', '#ffffff'],
                    duration: 400,
                    easing: 'easeOutCubic',
                    delay: anime.stagger(30)
                });
            });
        }
    }
    
    // Scroll Animations
    function initScrollAnimations() {
        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
        
        // Intersection Observer for scroll animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);
        
        // Observe elements for animation
        document.querySelectorAll('.skill-item, .project-card, .timeline-item, .contact-card, .form-group').forEach(el => {
            observer.observe(el);
        });
    }
    
    // Skill Bars Animation
    function initSkillBars() {
        const skillBars = document.querySelectorAll('.skill-bar');
        
        const skillObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const bar = entry.target;
                    const width = bar.getAttribute('data-width');
                    
                    anime({
                        targets: bar,
                        width: width + '%',
                        duration: 1500,
                        easing: 'easeOutCubic',
                        delay: 200
                    });
                }
            });
        }, { threshold: 0.5 });
        
        skillBars.forEach(bar => {
            skillObserver.observe(bar);
        });
    }
    
    // Skills Radar Chart
    function initSkillsChart() {
        const chartElement = document.getElementById('skills-chart');
        if (!chartElement) return;
        
        const chart = echarts.init(chartElement);
        
        const option = {
            backgroundColor: 'transparent',
            radar: {
                indicator: [
                    { name: 'Python', max: 100 },
                    { name: 'Machine Learning', max: 100 },
                    { name: 'Financial Analysis', max: 100 },
                    { name: 'SQL', max: 100 },
                    { name: 'Excel/VBA', max: 100 },
                    { name: 'Data Visualization', max: 100 },
                    { name: 'Statistics', max: 100 },
                    { name: 'R Programming', max: 100 }
                ],
                shape: 'polygon',
                splitNumber: 5,
                axisName: {
                    color: '#ffffff',
                    fontSize: 12,
                    fontWeight: 'bold'
                },
                splitLine: {
                    lineStyle: {
                        color: '#333333'
                    }
                },
                splitArea: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: '#333333'
                    }
                }
            },
            series: [{
                name: 'Skills',
                type: 'radar',
                data: [{
                    value: [95, 90, 88, 85, 92, 80, 85, 75],
                    name: 'Technical Skills',
                    areaStyle: {
                        color: 'rgba(0, 102, 255, 0.2)'
                    },
                    lineStyle: {
                        color: '#0066ff',
                        width: 2
                    },
                    itemStyle: {
                        color: '#0066ff'
                    }
                }],
                animationDuration: 2000,
                animationEasing: 'cubicOut'
            }]
        };
        
        chart.setOption(option);
        
        // Responsive chart
        window.addEventListener('resize', function() {
            chart.resize();
        });
    }
    
    // Timeline Animations
    function initTimelineAnimations() {
        const timelineItems = document.querySelectorAll('.timeline-item');
        
        const timelineObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    anime({
                        targets: entry.target,
                        opacity: [0, 1],
                        translateX: [index % 2 === 0 ? -30 : 30, 0],
                        duration: 800,
                        easing: 'easeOutCubic',
                        delay: index * 200
                    });
                }
            });
        }, { threshold: 0.3 });
        
        timelineItems.forEach(item => {
            timelineObserver.observe(item);
        });
    }
    
    // Project Cards Animation
    function initProjectCards() {
        const projectCards = document.querySelectorAll('.project-card');
        
        const projectObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    anime({
                        targets: entry.target,
                        opacity: [0, 1],
                        translateY: [30, 0],
                        scale: [0.9, 1],
                        duration: 600,
                        easing: 'easeOutCubic',
                        delay: index * 150
                    });
                }
            });
        }, { threshold: 0.2 });
        
        projectCards.forEach(card => {
            projectObserver.observe(card);
        });
        
        // Add hover effects
        projectCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                anime({
                    targets: this,
                    scale: 1.02,
                    rotateX: 2,
                    duration: 300,
                    easing: 'easeOutCubic'
                });
            });
            
            card.addEventListener('mouseleave', function() {
                anime({
                    targets: this,
                    scale: 1,
                    rotateX: 0,
                    duration: 300,
                    easing: 'easeOutCubic'
                });
            });
        });
    }
    
    // Parallax Effect for Hero Background
    function initParallax() {
        const hero = document.querySelector('.hero-bg');
        if (!hero) return;
        
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            
            hero.style.transform = `translateY(${rate}px)`;
        });
    }
    
    // Initialize parallax
    initParallax();
    
    // Counter Animation for Statistics
    function animateCounters() {
        const counters = document.querySelectorAll('.counter');
        
        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const counter = entry.target;
                    const target = parseInt(counter.getAttribute('data-target'));
                    const duration = 2000;
                    
                    anime({
                        targets: { count: 0 },
                        count: target,
                        duration: duration,
                        easing: 'easeOutCubic',
                        update: function(anim) {
                            counter.textContent = Math.floor(anim.animatables[0].target.count);
                        }
                    });
                }
            });
        }, { threshold: 0.5 });
        
        counters.forEach(counter => {
            counterObserver.observe(counter);
        });
    }
    
    // Initialize counter animations
    animateCounters();
    
    // Button Hover Effects
    function initButtonEffects() {
        const buttons = document.querySelectorAll('.glow');
        
        buttons.forEach(button => {
            button.addEventListener('mouseenter', function() {
                anime({
                    targets: this,
                    boxShadow: '0 0 30px rgba(0, 102, 255, 0.5)',
                    duration: 300,
                    easing: 'easeOutCubic'
                });
            });
            
            button.addEventListener('mouseleave', function() {
                anime({
                    targets: this,
                    boxShadow: '0 0 20px rgba(0, 102, 255, 0.3)',
                    duration: 300,
                    easing: 'easeOutCubic'
                });
            });
        });
    }
    
    // Initialize button effects
    initButtonEffects();
    
    // Loading Animation
    function initLoadingAnimation() {
        // Hide loading screen if it exists
        const loader = document.querySelector('.loader');
        if (loader) {
            anime({
                targets: loader,
                opacity: [1, 0],
                duration: 500,
                easing: 'easeOutCubic',
                complete: function() {
                    loader.style.display = 'none';
                }
            });
        }
        
        // Animate page elements on load
        anime({
            targets: 'nav',
            translateY: [-50, 0],
            opacity: [0, 1],
            duration: 800,
            easing: 'easeOutCubic'
        });
    }
    
    // Initialize loading animation
    initLoadingAnimation();
    
    // Smooth scroll reveal for sections
    function initScrollReveal() {
        const sections = document.querySelectorAll('section');
        
        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const elements = entry.target.querySelectorAll('h2, p, .card');
                    
                    anime({
                        targets: elements,
                        opacity: [0, 1],
                        translateY: [20, 0],
                        duration: 800,
                        easing: 'easeOutCubic',
                        delay: anime.stagger(100)
                    });
                }
            });
        }, { threshold: 0.1 });
        
        sections.forEach(section => {
            sectionObserver.observe(section);
        });
    }
    
    // Initialize scroll reveal
    initScrollReveal();
    
    // Performance optimization: Debounce scroll events
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
    
    // Apply debouncing to scroll events
    const debouncedScrollHandler = debounce(function() {
        // Any scroll-based animations can go here
    }, 10);
    
    window.addEventListener('scroll', debouncedScrollHandler);
    
    console.log('Dark theme portfolio website initialized successfully!');
});