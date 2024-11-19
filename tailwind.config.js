/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
		colors: {
			default_border: "rgb(44,44,44)",
			highlight_border: "rgb(85,85,85)"
		}
	}
  },
  plugins: [],
}

