/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{html,js,svelte,ts}', // Include Svelte files
    './node_modules/@skeletonlabs/skeleton/**/*.{html,js,svelte,ts}' // Include Skeleton components
  ],
  theme: {
    extend: {}, // Extend if needed
  },
  plugins: [require('@skeletonlabs/skeleton/tailwindcss')], // Add Skeleton plugin
};
