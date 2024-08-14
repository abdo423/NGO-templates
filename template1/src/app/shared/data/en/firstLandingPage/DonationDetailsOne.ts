export const donationOptions = [
  { type: 'header', label: 'Support Our Cause' },
  { type: 'header', label: 'Choose an Amount:' },
  { type: 'paragraph', value: 'Your contribution helps us make a difference. Please select an amount or enter a custom amount to donate.' },
  { type: 'button', value: '$20' },
  { type: 'button', value: '$50' },
  { type: 'button', value: '$100' },
  { type: 'header', label: 'Or Enter Custom Amount:' },
  { type: 'input', placeholder: '$ Amount', inputType: 'number' },
  { type: 'button', value: 'Donate Now' },
  { type: 'paragraph', value: 'Need help or have questions? Contact us.', href: 'mailto:support@example.com' }
];
