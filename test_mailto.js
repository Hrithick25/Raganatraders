// Test mailto builder for contact form
const name = 'hrithick';
const email = 'hrithick@example.com';
const phone = '0000';
const product = 'Coco Peat Blocks';
const message = `Hello Ragana Traders,

I am interested in your products and would like to request a quote. Please provide pricing and minimum order quantities. We are looking for high-quality coco peat blocks for commercial agriculture use. Please also advise on international shipping options and lead times.

Thank you,
Hrithick`;

const subject = encodeURIComponent(`New Inquiry from ${name || email || 'Website Visitor'}`);
const bodyLines = [
  `Name: ${name}`,
  `Email: ${email}`,
  `Phone: ${phone}`,
  `Product Interest: ${product}`,
  '',
  `Message:`,
  `${message}`
];
const body = encodeURIComponent(bodyLines.join('\n'));
const mailto = `mailto:sales.team@raganatraders.in?subject=${subject}&body=${body}`;

console.log('--- Mailto URL (encoded) ---');
console.log(mailto);
console.log('\n--- Decoded subject ---');
console.log(decodeURIComponent(subject));
console.log('\n--- Decoded body ---');
console.log(decodeURIComponent(body));
