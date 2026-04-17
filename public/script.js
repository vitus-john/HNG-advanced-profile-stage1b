const PROFILE_TICK_MS = 1000;

const els = {
	themeToggle: document.querySelector('[data-testid="theme-toggle-button"]'),
	profileTime: document.querySelector('[data-testid="test-user-time"]')
};

let profileTickId = null;

function applyTheme(theme) {
	document.body.classList.toggle("theme-dark", theme === "dark");
	if (els.themeToggle) {
		els.themeToggle.textContent = theme === "dark" ? "Light mode" : "Dark mode";
		els.themeToggle.setAttribute("aria-pressed", String(theme === "dark"));
	}
}

function initTheme() {
	const savedTheme = localStorage.getItem("fw-theme");
	const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
	const initial = savedTheme || (prefersDark ? "dark" : "light");
	applyTheme(initial);

	if (els.themeToggle) {
		els.themeToggle.addEventListener("click", () => {
			const next = document.body.classList.contains("theme-dark") ? "light" : "dark";
			localStorage.setItem("fw-theme", next);
			applyTheme(next);
		});
	}
}

function renderProfileTime() {
	if (!els.profileTime) {
		return;
	}
	els.profileTime.textContent = String(Date.now());
}

function boot() {
	initTheme();
	renderProfileTime();
	profileTickId = setInterval(renderProfileTime, PROFILE_TICK_MS);
}

boot();
