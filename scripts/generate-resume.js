const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');

const outputDir = path.join(__dirname, '..', 'public', 'resume');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const outputPath = path.join(outputDir, 'Neeraj-Kumar-Resume.pdf');
const doc = new PDFDocument({
  size: 'A4',
  margins: { top: 40, bottom: 40, left: 45, right: 45 },
});

const writeStream = fs.createWriteStream(outputPath);
doc.pipe(writeStream);

// Colors
const primary = '#965239'; // Deep terracotta
const dark = '#29251F';
const secondary = '#6E675F';
const lineCol = '#EAD8C8';

// Header
doc.fillColor(primary).font('Helvetica-Bold').fontSize(22).text('NEERAJ KUMAR', { characterSpacing: 1.5 });
doc.moveDown(0.2);
doc.fillColor(dark).font('Helvetica-Bold').fontSize(12).text('FULL STACK DEVELOPER');
doc.moveDown(0.2);
doc.fillColor(secondary).font('Helvetica').fontSize(9)
  .text('New Delhi, India  |  neerajkmr.dev@gmail.com  |  linkedin.com/in/neerajkumar1810  |  github.com/N1810');

doc.moveDown(0.6);
doc.strokeColor(lineCol).lineWidth(1).moveTo(45, doc.y).lineTo(550, doc.y).stroke();
doc.moveDown(0.8);

function sectionTitle(title) {
  doc.fillColor(primary).font('Helvetica-Bold').fontSize(11).text(title.toUpperCase(), { characterSpacing: 1 });
  doc.strokeColor(lineCol).lineWidth(0.5).moveTo(45, doc.y + 2).lineTo(550, doc.y + 2).stroke();
  doc.moveDown(0.5);
}

// Summary
sectionTitle('Professional Summary');
doc.fillColor(dark).font('Helvetica').fontSize(9.5).lineGap(2)
  .text('Full Stack Developer with 2+ years of experience building scalable, high-performance web applications with clean architecture and modern UX. Skilled in React, Next.js, Node.js, TypeScript, and Java Spring Boot. Proven track record of improving web performance by 30% and leading release QA checks.');
doc.moveDown(0.8);

// Experience
sectionTitle('Professional Experience');

// Eleva8e Digital
doc.fillColor(dark).font('Helvetica-Bold').fontSize(10).text('MERN Stack Developer', { continued: true });
doc.fillColor(secondary).font('Helvetica').fontSize(9).text('  —  Eleva8e Digital (formerly Digilink Ads)', { continued: true });
doc.fillColor(primary).font('Helvetica-Bold').fontSize(9).text('   |   Feb 2024 – Present', { align: 'right' });

doc.moveDown(0.2);
doc.fillColor(dark).font('Helvetica').fontSize(9).lineGap(2);
const eleva8eBullets = [
  'Develop and maintain responsive web applications using React, Node.js, Express.js, and MongoDB.',
  'Improved website speed by 30% through frontend optimization, bundle trimming, and caching.',
  'Implemented 10 new user-centric features in React projects, improving UX satisfaction scores by 15%.',
  'Performed 15+ comprehensive quality checks across production releases, reducing bugs by 40%.',
  'Mentored five junior developers on clean code best practices and Git workflows, improving productivity by 20%.'
];
eleva8eBullets.forEach(b => {
  doc.fillColor(dark).text(`•  ${b}`, { indent: 10 });
});
doc.moveDown(0.6);

// Ravionics
doc.fillColor(dark).font('Helvetica-Bold').fontSize(10).text('Java Developer Intern', { continued: true });
doc.fillColor(secondary).font('Helvetica').fontSize(9).text('  —  Ravionics', { continued: true });
doc.fillColor(primary).font('Helvetica-Bold').fontSize(9).text('   |   May 2023 – Jul 2023', { align: 'right' });

doc.moveDown(0.2);
doc.fillColor(dark).font('Helvetica').fontSize(9).lineGap(2);
const ravionicsBullets = [
  'Developed enterprise Java applications using Spring Boot and Hibernate with secure REST APIs.',
  'Provided technical problem-solving and diagnostic support to operations teams for internal tooling.'
];
ravionicsBullets.forEach(b => {
  doc.fillColor(dark).text(`•  ${b}`, { indent: 10 });
});
doc.moveDown(0.8);

// Technical Skills
sectionTitle('Technical Skills');
const skills = [
  { label: 'Frontend', items: 'React.js, Next.js (App Router), TypeScript, JavaScript (ES6+), Tailwind CSS, HTML5, CSS3, Bootstrap' },
  { label: 'Backend', items: 'Node.js, Express.js, Java, Spring Boot, Hibernate, RESTful APIs, Microservices, WebSockets' },
  { label: 'Databases', items: 'MongoDB, PostgreSQL, MySQL, SQL' },
  { label: 'CMS & Commerce', items: 'Payload CMS, Shopify (Liquid), WordPress, Storyblok' },
  { label: 'Tools & DevOps', items: 'Git, GitHub, Docker, pnpm, npm, Vitest, Playwright, Python, CI/CD basics' },
];
skills.forEach(s => {
  doc.fillColor(primary).font('Helvetica-Bold').fontSize(9).text(`${s.label}: `, { continued: true });
  doc.fillColor(dark).font('Helvetica').fontSize(9).text(s.items);
});
doc.moveDown(0.8);

// Selected Projects
sectionTitle('Selected Projects');
const projects = [
  { name: 'RedirectKit', tech: 'Next.js, TypeScript, Node.js, npm', desc: 'Redirect management package with validation, chain/loop detection, and developer CLI tools.' },
  { name: 'AI Blog Studio', tech: 'Next.js, Payload CMS, PostgreSQL, Tailwind, Docker', desc: 'AI-assisted blogging platform with editorial workflows, live preview, and draft governance.' },
  { name: 'Kuberakshi', tech: 'Shopify, Liquid, JavaScript', desc: 'Luxury ethnic fashion storefront with responsive catalog, custom cart, and optimized mobile UX.' },
  { name: 'Exampler Point', tech: 'React, Node.js, Express, MongoDB', desc: 'Online learning platform offering course modules, practice tests, and study material distribution.' }
];
projects.forEach(p => {
  doc.fillColor(dark).font('Helvetica-Bold').fontSize(9.5).text(p.name, { continued: true });
  doc.fillColor(secondary).font('Helvetica-Oblique').fontSize(8.5).text(` (${p.tech})`);
  doc.fillColor(dark).font('Helvetica').fontSize(8.5).text(p.desc, { indent: 10 });
  doc.moveDown(0.3);
});
doc.moveDown(0.5);

// Education
sectionTitle('Education');
doc.fillColor(dark).font('Helvetica-Bold').fontSize(9.5).text('Master of Computer Applications (MCA) — Pursuing', { continued: true });
doc.fillColor(primary).font('Helvetica-Bold').fontSize(8.5).text('   |   July 2026 – July 2028', { align: 'right' });
doc.fillColor(secondary).font('Helvetica').fontSize(8.5).text('Indira Gandhi National Open University (IGNOU)');
doc.moveDown(0.4);

doc.fillColor(dark).font('Helvetica-Bold').fontSize(9.5).text('Bachelor of Computer Applications (BCA), Software Engineering', { continued: true });
doc.fillColor(primary).font('Helvetica-Bold').fontSize(8.5).text('   |   Jan 2021 – Dec 2024', { align: 'right' });
doc.fillColor(secondary).font('Helvetica').fontSize(8.5).text('Indira Gandhi National Open University (IGNOU)');

doc.end();

writeStream.on('finish', () => {
  console.log('Successfully generated public/resume/Neeraj-Kumar-Resume.pdf');
});
