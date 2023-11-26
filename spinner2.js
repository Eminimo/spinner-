const spinnerAnimation = (char, delay) => {
  setTimeout(() => {
    process.stdout.write(`\r${char}   `);
  }, delay);
};

spinnerAnimation('|', 100);
spinnerAnimation('/', 300);
spinnerAnimation('-', 500);
spinnerAnimation('\\', 700);
// Add more characters and delays as needed...

