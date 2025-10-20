export const seedServices = [
{
id: 1,
title: 'هندسة معمارية',
desc: 'نعمل على تصميم المخططات المعمارية والإنشائية التي تلبي جميع متطلبات المنشآت.'
},
{
id: 2,
title: 'تصميم وديكور',
desc: 'نقدم لعملائنا التصميم العصري الذي يحقق رغباتهم من خلال أفكار مبتكرة.'
},
{
id: 3,
title: 'تخطيط عمراني',
desc: 'تصميم المساحات الخارجية والحدائق والمناطق العامة.'
},
{
id: 4,
title: 'تشيد وبناء',
desc: 'تنفيذ الأعمال الإنشائية والتشطيبات الداخلية والخارجية.'
}
]


export const seedProjects = Array.from({ length: 6 }).map((_, i) => ({
id: i + 1,
title: `مشروع نموذج ${i + 1}`,
image: `/images/project-${i + 1}.jpg`
}))


export const seedClients = [
{ id: 1, name: 'YPC', logo: '/images/client-1.png' },
{ id: 2, name: 'HMEC', logo: '/images/client-2.png' },
{ id: 3, name: 'Jindal', logo: '/images/client-3.png' },
{ id: 4, name: 'شركة الأسمنت', logo: '/images/client-4.png' },
]