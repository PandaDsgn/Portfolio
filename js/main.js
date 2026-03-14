if (typeof ScrollTrigger !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}
window.addEventListener('pageshow', (event) => {
    if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);
});
document.addEventListener('DOMContentLoaded', () => {
    window.scrollTo(0, 0);
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_X";
    const enterBtn = document.getElementById('enter-btn');
    const shutdownBtn = document.getElementById('shutdown-btn');
    const backLink = document.querySelector('.back-link');
    const transmitBtn = document.getElementById('transmit-btn'); 
    const uplinkForm = document.getElementById('uplink-form');
    document.querySelectorAll('.split-me').forEach(item => {
        const text = item.innerText; item.innerHTML = "";
        text.split("").forEach(l => {
            const span = document.createElement("span");
            span.textContent = l === " " ? "\u00A0" : l;
            span.classList.add("char");
            item.appendChild(span);
        });
    });
    if (document.querySelector('.hero-pin-wrapper')) {
        const introTl = gsap.timeline();
        introTl.fromTo("#text-imagine .char", 
            { yPercent: 110, opacity: 0 }, 
            { yPercent: 0, opacity: 1, stagger: 0.05, duration: 1, ease: "power4.out" }
        );
        introTl.to(".deco-lines.from-right", {
            scaleX: 1,
            duration: 1.5,
            ease: "expo.out"
        }, "-=0.8");
        const scrollTl = gsap.timeline({
            scrollTrigger: { 
                trigger: ".hero-pin-wrapper", 
                start: "top top", 
                end: "bottom bottom", 
                scrub: 1.5
            }
        });
        scrollTl.fromTo("#text-execute .char", 
            { yPercent: 110, opacity: 0 }, 
            { yPercent: 0, opacity: 1, stagger: 0.05, duration: 1 }, 
            0.1 
        );
        scrollTl.to(".deco-lines.from-left", {
            scaleX: 1,
            duration: 1,
            ease: "power2.out"
        }, 0.1);
        scrollTl.to("#enter-btn", { y: 0, opacity: 1, duration: 0.5 }, 0.9);
    } 
    else {
        const opTl = gsap.timeline();
        gsap.set(".char", { opacity: 0 });

        opTl.to("h1 .char, .card h2 .char, .profile-intel h2 .char", { 
            opacity: 1, 
            stagger: 0.03, 
            duration: 0.8, 
            ease: "power2.out" 
        });

        opTl.to(".card p .char, .intel-section h3 .char", { 
            opacity: 1, 
            stagger: 0.01, 
            duration: 0.4, 
            ease: "power2.out" 
        }, "-=0.4");
    }
    const glitchText = (element, originalText) => {
        let iteration = 0;
        const interval = setInterval(() => {
            element.innerText = originalText.split("")
                .map((l, i) => i < iteration ? originalText[i] : letters[Math.floor(Math.random() * 38)])
                .join("");
            if(iteration >= originalText.length) clearInterval(interval);
            iteration += 1 / 2; 
        }, 30);
    };
    if(enterBtn) {
        enterBtn.onmouseover = e => glitchText(e.target, e.target.dataset.value);
        enterBtn.addEventListener('click', (e) => {
            e.preventDefault();
            enterBtn.classList.add('access-granted');
            if (typeof ScrollTrigger !== "undefined") ScrollTrigger.getAll().forEach(st => st.kill());

            const exitTl = gsap.timeline({ delay: 0.1, onComplete: () => window.location.href = 'operations.html' });
            exitTl.to(["main", "nav", ".bg-vignette", ".hud-crosshair"], { opacity: 0, duration: 0.3, ease: "power2.inOut" });
        });
    }
    if(transmitBtn) {
        transmitBtn.onmouseover = e => glitchText(e.target, e.target.dataset.value);
    }
    if(shutdownBtn) {
        shutdownBtn.addEventListener('click', (e) => {
            e.preventDefault();
            shutdownBtn.classList.add('shutdown-mode'); 
            const originalText = "SHUTDOWN";
            glitchText(shutdownBtn, originalText);
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 800); 
        });
    }
    if(backLink) {
        backLink.addEventListener('click', (e) => {
            e.preventDefault();
            const originalText = backLink.innerText;
            backLink.style.color = "var(--blue)"; 
            glitchText(backLink, originalText);
            setTimeout(() => {
                window.location.href = backLink.getAttribute('href');
            }, 600);
        });
    }
    if (uplinkForm) {
        uplinkForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const btn = document.getElementById('transmit-btn');
            const originalText = "SEND_PACKET"; 
            btn.innerText = "TRANSMITTING...";
            btn.style.opacity = "0.7";
            const formData = new FormData(uplinkForm);
            try {
                const response = await fetch(uplinkForm.action, {
                    method: 'POST',
                    body: formData,
                    headers: { 'Accept': 'application/json' }
                });
                
                if (response.ok) {
                    btn.innerText = "PACKET_SENT";
                    btn.style.opacity = "1";
                    uplinkForm.reset();
                    setTimeout(() => { btn.innerText = originalText; }, 3000);
                } else {
                    const data = await response.json();
                    throw new Error(data.error || 'Form submission failed');
                }
            } catch (error) {
                btn.innerText = "TRANSMISSION FAILED";
                btn.style.color = "var(--alert)";
                btn.style.borderColor = "var(--alert)";
                btn.style.opacity = "1";
                console.error("Form Error:", error);
            }
        });
    }
});