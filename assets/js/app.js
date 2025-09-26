gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', function() {
    gsap.fromTo('.nav-container > *', {
        y: -20,
        opacity: 0
    }, {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        delay: 0.2
    });

    const heroTl = gsap.timeline({ delay: 0.8 });
    
    heroTl.fromTo('.hero-tag', {
        y: 30,
        opacity: 0
    }, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out"
    })
    .fromTo('.hero-title', {
        y: 50,
        opacity: 0
    }, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out"
    }, "-=0.4")
    .fromTo('.hero-description', {
        y: 30,
        opacity: 0
    }, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out"
    }, "-=0.3")
    .fromTo('.delivery-circle', {
        scale: 0.8,
        opacity: 0
    }, {
        scale: 1,
        opacity: 1,
        duration: 1.2,
        ease: "power2.out"
    }, "-=0.5");

    gsap.fromTo('.floating-card', {
        y: 50,
        opacity: 0,
        scale: 0.9
    }, {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "back.out(1.7)",
        delay: 1.5
    });

    gsap.to('.floating-card', {
        y: "+=15",
        duration: 3,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 0.5
    });

    gsap.fromTo('.stat-item', {
        y: 50,
        opacity: 0
    }, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
            trigger: '.stats',
            start: 'top 80%',
            end: 'bottom 20%',
        }
    });

	const statItems = document.querySelectorAll('.stat-item');
	statItems.forEach(item => {
		const numberElement = item.querySelector('.stat-number');
		const target = parseFloat(numberElement.getAttribute('data-target'));
		const obj = { number: 0 };
		gsap.to(obj, {
			number: target,
			duration: 2,
			ease: "power2.out",
			onUpdate: function() {
				const current = Math.round(obj.number * 10) / 10;
				let originalContent = numberElement.innerHTML;
				let numberPart = originalContent.replace(/[^0-9.]/g, '');
				numberElement.innerHTML = originalContent.replace(numberPart, current);
			},
			scrollTrigger: {
				trigger: '.stats',
				start: 'top 80%',
			}
		});
	});

    const sections = document.querySelectorAll('.about, .mission, .journey, .partners, .press');

    sections.forEach(section => {
        const image = section.querySelector('.section-image');
        const text = section.querySelector('.section-text, .mission-text, .journey-header, .partners-header, .press-header');

        if (section.classList.contains('about')) {
            gsap.fromTo(image, { x: -100, opacity: 0 }, { x: 0, opacity: 1, duration: 1, ease: "power2.out", scrollTrigger: { trigger: section, start: 'top 80%' } });
            gsap.fromTo(text, { x: 100, opacity: 0 }, { x: 0, opacity: 1, duration: 1, ease: "power2.out", scrollTrigger: { trigger: section, start: 'top 80%' } });
        } else if (section.classList.contains('mission')) {
            gsap.fromTo(text, { x: -100, opacity: 0 }, { x: 0, opacity: 1, duration: 1, ease: "power2.out", scrollTrigger: { trigger: section, start: 'top 80%' } });
            gsap.fromTo(image, { x: 100, opacity: 0 }, { x: 0, opacity: 1, duration: 1, ease: "power2.out", scrollTrigger: { trigger: section, start: 'top 80%' } });
        } else if (section.classList.contains('journey')) {
            gsap.fromTo('.journey-header', { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: "power2.out", scrollTrigger: { trigger: '.journey', start: 'top 80%' } });
            gsap.fromTo('.timeline-item', { y: 80, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "power2.out", scrollTrigger: { trigger: '.journey-timeline', start: 'top 80%' } });
        } else if (section.classList.contains('partners')) {
            gsap.fromTo('.partners-header', { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: "power2.out", scrollTrigger: { trigger: '.partners', start: 'top 80%' } });
            gsap.fromTo('.partner-card', { y: 80, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "power2.out", scrollTrigger: { trigger: '.partners-grid', start: 'top 80%' } });
        } else if (section.classList.contains('press')) {
            gsap.fromTo('.press-header', { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: "power2.out", scrollTrigger: { trigger: '.press', start: 'top 80%' } });
            gsap.fromTo('.press-card', { y: 80, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power2.out", scrollTrigger: { trigger: '.press-grid', start: 'top 80%' } });
        }
    });

    gsap.fromTo('.footer-content', { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: "power2.out", scrollTrigger: { trigger: '.footer', start: 'top 90%' } });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    const interactiveElements = document.querySelectorAll('.partner-card, .press-card, .cta-btn, .register-btn, .app-btn');
    
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            gsap.to(this, { scale: 1.05, duration: 0.3, ease: "power2.out" });
        });
        element.addEventListener('mouseleave', function() {
            gsap.to(this, { scale: 1, duration: 0.3, ease: "power2.out" });
        });
    });

    gsap.to('.delivery-circle', { y: -50, scrollTrigger: { trigger: '.hero', start: 'top bottom', end: 'bottom top', scrub: 1 } });

    gsap.fromTo('body', { opacity: 0 }, { opacity: 1, duration: 0.5, ease: "power2.out" });
});

let lastScrollY = window.scrollY;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (lastScrollY < window.scrollY) {
        navbar.classList.add('hidden');
    } else {
        navbar.classList.remove('hidden');
    }
    lastScrollY = window.scrollY;

    if (window.scrollY > 100) {
        navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.boxShadow = 'none';
        navbar.style.backdropFilter = 'none';
    }
});

function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('mobile-active');
}

if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    gsap.globalTimeline.timeScale(0);
}
