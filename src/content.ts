export type Language = 'en' | 'ar'
export type ProjectKind = 'home' | 'vest' | 'car'

interface Project {
  id: ProjectKind
  title: string
  category: string
  description: string
  detail: string
  tags: string[]
}

interface Award {
  file: string
  title: string
  issuer: string
  year: string
}

interface Content {
  name: string
  role: string
  portraitAlt: string
  readMore: string
  readLess: string
  nav: { home: string; work: string; about: string; awards: string; journey: string }
  skip: string
  menu: string
  closeMenu: string
  language: string
  eyebrow: string
  greeting: string
  nameParts: [string, string]
  nickname: string
  intro: string
  explore: string
  storyLink: string
  location: string
  scroll: string
  disciplines: string[]
  heroArt: { label: string; top: string; bottom: string; note: string }
  work: { eyebrow: string; title: string; intro: string; concept: string; open: string; close: string; visual: string }
  projects: Project[]
  about: { eyebrow: string; title: string; summary: string; paragraphs: string[]; quote: string; education: string; degree: string; location: string; interestsLabel: string; interests: string[] }
  journey: { eyebrow: string; title: string; intro: string; entries: { year: string; title: string; text: string }[] }
  awards: { eyebrow: string; title: string; intro: string; view: string; newTab: string; entries: Award[] }
  next: { eyebrow: string; title: string; text: string; link: string }
  footer: string
  backToTop: string
  description: string
}

export const content: Record<Language, Content> = {
  en: {
    name: 'Amir Ashraf',
    role: 'Mechatronics Engineering Student',
    portraitAlt: 'Amir Ashraf smiling, wearing glasses and a white shirt', readMore: 'Read more', readLess: 'Read less',
    nav: { home: 'Home', work: 'Projects', about: 'About', awards: 'Awards', journey: 'Achievements' },
    skip: 'Skip to content', menu: 'Open navigation', closeMenu: 'Close navigation', language: 'Switch to Arabic',
    eyebrow: 'A CURIOUS MIND. A HANDS-ON APPROACH.',
    greeting: 'Hello, I’m', nameParts: ['Amir', 'Ashraf'], nickname: 'The Little Inventor',
    intro: 'I’m Amir, an engineering student and inventor from Cairo. I explore how electronics and thoughtful design can turn everyday challenges into something better.',
    explore: 'Explore my work', storyLink: 'The story so far', location: 'Cairo, Egypt', scroll: 'SCROLL TO EXPLORE',
    disciplines: ['Electronics', 'Mechatronics', 'Smart systems', 'Invention'],
    heroArt: { label: 'An illustrated circuit board with Amir’s initials at its center', top: 'POWERED BY CURIOSITY', bottom: 'IDEA → EXPERIMENT → POSSIBILITY', note: 'Always asking “what if?”' },
    work: { eyebrow: 'IDEAS INTO POSSIBILITIES', title: 'Projects & inventions', intro: 'Exploring the space where everyday needs meet engineering. A selection of my inventions and concepts.', concept: 'Invention concept', open: 'Explore the idea', close: 'Close details', visual: 'Concept illustration' },
    projects: [
      { id: 'vest', title: 'Zieko Vest', category: 'WEARABLE TECHNOLOGY', description: 'Personal comfort, reimagined. A wearable concept for managing body temperature in changing conditions.', detail: 'The idea is a temperature-regulating garment worn over an undershirt, with settings controlled through a mobile app. It explores both warming and cooling to help people stay comfortable without bulky layers. Its performance and commercial feasibility remain areas for development.', tags: ['Thermal comfort', 'Wearables', 'Mobile control'] },
      { id: 'home', title: 'Zieko Smart Home', category: 'SMART LIVING', description: 'An early smart-home invention that helped turn a childhood fascination with how things work into a lifelong pursuit.', detail: 'Zieko Smart Home is named in my biography as the invention associated with my early Young Inventor competition success. It represents the start of my interest in bringing electronics into everyday environments; specific implementation details are not documented in the supplied material.', tags: ['Electronics', 'Connected living', 'Early invention'] },
      { id: 'car', title: 'Independent Vehicle Cooling', category: 'AUTOMOTIVE INNOVATION', description: 'What if keeping a car comfortable didn’t depend on keeping its engine running? An alternative cooling concept.', detail: 'This concept explores vehicle cooling without running the combustion engine or using conventional refrigerant. The goal is to reduce the dependence on engine power for cabin comfort. Energy consumption, cooling capacity, and environmental performance require testing before making efficiency claims.', tags: ['Vehicle systems', 'Cooling', 'Energy exploration'] },
    ],
    about: { eyebrow: 'THE PERSON BEHIND THE IDEAS', title: 'About me', summary: 'I’m a mechatronics engineering student and inventor from Cairo. My curiosity started with repairing toys and grew into a passion for electronics, smart systems, and practical inventions.', paragraphs: ['At three years old, I noticed my toy car was missing something: windscreen wipers. So I made a set using the hands of a broken wall clock. That small moment became a habit of looking closer, taking things apart, and imagining what could be different.', 'From repairing toys for friends and neighbors to entering invention competitions, curiosity has always been my starting point. Today, I’m studying mechatronics engineering and exploring ideas across electronics, smart systems, and thermal technology.'], quote: 'There’s always another way to look at a problem.', education: 'CURRENTLY STUDYING', degree: 'Mechatronics Engineering', location: 'Egypt', interestsLabel: 'AREAS I’M EXPLORING', interests: ['Electronic systems', 'Smart-home technology', 'Wearable cooling', 'Automotive innovation'] },
    journey: { eyebrow: 'MY JOURNEY', title: 'Achievements', intro: 'From taking apart toys to sharing inventions on a national stage.', entries: [
      { year: 'EARLY YEARS', title: 'Learning by taking things apart', text: 'Repairing toys, experimenting with everyday objects, and earning the nickname “the little engineer” among my neighbors.' },
      { year: '2018', title: 'Young Inventor gold medal', text: 'First place and a gold medal in the Young Inventor competition, awarded by the National Center for Child Culture, as recorded in my biography.' },
      { year: '2019–2020', title: 'Science beyond the classroom', text: 'Participated in Cairo science and engineering fairs, exchanging ideas and presenting work alongside other young innovators.' },
      { year: '2021', title: 'Recognition at multiple levels', text: 'First-place recognition at district and educational-directorate levels, followed by third place nationally in the Young Inventor competition.' },
      { year: 'TODAY', title: 'Building an engineering foundation', text: 'Studying mechatronics engineering, with a continuing interest in turning inventions into practical products.' },
    ] },
    awards: { eyebrow: 'RECOGNITION', title: 'Awards & recognition', intro: 'A selection of original certificates from invention competitions and science fairs.', view: 'View certificate', newTab: 'Opens the original PDF in a new tab', entries: [
      { file: 'young-inventor-national', title: 'Young Inventor · National third place', issuer: 'New Cairo Educational Administration', year: '2021' },
      { file: 'young-inventor-governorate', title: 'Young Inventor · Directorate first place', issuer: 'New Cairo Educational Administration', year: '2021' },
      { file: 'young-inventor-district', title: 'Young Inventor · District first place', issuer: 'New Cairo Educational Administration', year: '2021' },
      { file: 'science-fair-2020', title: 'Cairo Science & Engineering Fair', issuer: 'Certificate of participation', year: '2020' },
      { file: 'science-fair-2019', title: 'New Cairo Science & Engineering Fair', issuer: 'Certificate of participation', year: '2019' },
      { file: 'egypt-innovates', title: 'Scientific & Innovation Excellence', issuer: 'Egypt Innovates Foundation', year: 'RECOGNITION' },
    ] },
    next: { eyebrow: 'WHAT COMES NEXT', title: 'Good ideas grow through collaboration.', text: 'I’m interested in learning from engineering teams and collaborating with people who can help develop thoughtful inventions into practical products.', link: 'Take another look at my work' },
    footer: 'Built on curiosity. Made for possibility.', backToTop: 'Back to top', description: 'Meet Amir Ashraf, a mechatronics engineering student and inventor from Cairo. Explore his electronics, wearable technology, automotive concepts, and scientific achievements.',
  },
  ar: {
    name: 'أمير أشرف', role: 'طالب هندسة الميكاترونكس',
    portraitAlt: 'أمير أشرف مبتسمًا، يرتدي نظارة وقميصًا أبيض', readMore: 'اقرأ المزيد', readLess: 'عرض أقل',
    nav: { home: 'الرئيسية', work: 'المشاريع', about: 'من أنا', awards: 'الجوائز', journey: 'الإنجازات' },
    skip: 'انتقل إلى المحتوى', menu: 'افتح قائمة التنقل', closeMenu: 'أغلق قائمة التنقل', language: 'Switch to English',
    eyebrow: 'عقل فضولي. وشغف بالتجربة.', greeting: 'مرحبًا، أنا', nameParts: ['أمير', 'أشرف'], nickname: 'المخترع الصغير',
    intro: 'أنا أمير، طالب هندسة ومخترع من القاهرة. أستكشف كيف يمكن للإلكترونيات والتصميم المدروس أن يقدّما حلولًا أفضل للتحديات اليومية.',
    explore: 'استكشف مشاريعي', storyLink: 'تعرّف على قصتي', location: 'القاهرة، مصر', scroll: 'اكتشف المزيد',
    disciplines: ['الإلكترونيات', 'الميكاترونكس', 'الأنظمة الذكية', 'الابتكار'],
    heroArt: { label: 'رسم توضيحي للوحة إلكترونية تتوسطها الأحرف الأولى من اسم أمير', top: 'الفضول هو البداية', bottom: 'فكرة ← تجربة ← إمكانية جديدة', note: 'دائمًا أسأل: ماذا لو؟' },
    work: { eyebrow: 'أفكار تصنع إمكانيات جديدة', title: 'المشاريع والابتكارات', intro: 'أستكشف المساحة التي تلتقي فيها الاحتياجات اليومية بالهندسة. هذه مجموعة من اختراعاتي وأفكاري.', concept: 'فكرة اختراع', open: 'استكشف الفكرة', close: 'أغلق التفاصيل', visual: 'رسم توضيحي للفكرة' },
    projects: [
      { id: 'vest', title: 'زيكو ڤست', category: 'التكنولوجيا القابلة للارتداء', description: 'رؤية جديدة للراحة الشخصية. فكرة لملابس تساعد على تنظيم حرارة الجسم في ظروف الطقس المتغيرة.', detail: 'الفكرة هي قطعة ملابس تُرتدى فوق الملابس الداخلية وتساعد على تنظيم الحرارة، مع التحكم في الإعدادات من خلال تطبيق على الهاتف. تستكشف الفكرة التدفئة والتبريد لتوفير الراحة دون طبقات ملابس كثيرة. لا يزال الأداء وإمكانات التصنيع التجاري بحاجة إلى تطوير وتقييم.', tags: ['الراحة الحرارية', 'تقنيات قابلة للارتداء', 'التحكم بالهاتف'] },
      { id: 'home', title: 'زيكو سمارت هوم', category: 'الحياة الذكية', description: 'اختراع مبكر للمنزل الذكي، ساعد على تحويل شغف الطفولة بفهم الأشياء إلى رحلة مستمرة من الابتكار.', detail: 'ورد مشروع زيكو سمارت هوم في سيرتي بوصفه الاختراع المرتبط بنجاحي المبكر في مسابقة المخترع الصغير. يمثّل بداية اهتمامي بتوظيف الإلكترونيات في الحياة اليومية، ولا تتضمن المواد المتاحة تفاصيل موثقة عن طريقة تنفيذه.', tags: ['الإلكترونيات', 'الحياة المتصلة', 'اختراع مبكر'] },
      { id: 'car', title: 'تبريد السيارة المستقل', category: 'ابتكار في تكنولوجيا السيارات', description: 'ماذا لو لم تتطلب راحة ركاب السيارة تشغيل المحرك؟ فكرة لاستكشاف طريقة بديلة للتبريد.', detail: 'تستكشف هذه الفكرة تبريد السيارة دون تشغيل محرك الاحتراق أو استخدام وسيط التبريد التقليدي. الهدف هو تقليل اعتماد راحة المقصورة على طاقة المحرك. يحتاج استهلاك الطاقة وقدرة التبريد والأثر البيئي إلى اختبارات قبل تقديم أي ادعاءات تتعلق بالكفاءة.', tags: ['أنظمة السيارات', 'التبريد', 'استكشاف الطاقة'] },
    ],
    about: { eyebrow: 'الشخص وراء الأفكار', title: 'من أنا', summary: 'أنا طالب هندسة ميكاترونكس ومخترع من القاهرة. بدأ فضولي بإصلاح الألعاب، ثم تحوّل إلى شغف بالإلكترونيات والأنظمة الذكية والاختراعات التي تخدم الحياة اليومية.', paragraphs: ['في سن الثالثة، لاحظت أن سيارتي اللعبة ينقصها شيء: مسّاحات الزجاج. فصنعت لها مسّاحات من عقارب ساعة حائط مكسورة. تحوّلت تلك اللحظة الصغيرة إلى عادة: أتأمل الأشياء، أفككها، وأتخيل كيف يمكن أن تصبح مختلفة.', 'من إصلاح ألعاب الأصدقاء والجيران إلى المشاركة في مسابقات الاختراع، كان الفضول دائمًا نقطة البداية. واليوم أدرس هندسة الميكاترونكس، وأستكشف أفكارًا في الإلكترونيات والأنظمة الذكية وتقنيات تنظيم الحرارة.'], quote: 'دائمًا هناك طريقة أخرى للنظر إلى المشكلة.', education: 'أدرس حاليًا', degree: 'هندسة الميكاترونكس', location: 'مصر', interestsLabel: 'مجالات أستكشفها', interests: ['الأنظمة الإلكترونية', 'تقنيات المنزل الذكي', 'التبريد القابل للارتداء', 'ابتكارات السيارات'] },
    journey: { eyebrow: 'رحلتي', title: 'الإنجازات', intro: 'من تفكيك الألعاب إلى عرض الاختراعات في مسابقات على مستوى الجمهورية.', entries: [
      { year: 'الطفولة', title: 'التعلم من خلال التجربة', text: 'إصلاح الألعاب والتجربة بأشياء من الحياة اليومية، حتى عرفني الجيران بلقب «المهندس الصغير».' },
      { year: '٢٠١٨', title: 'ذهبية المخترع الصغير', text: 'المركز الأول والميدالية الذهبية في مسابقة المخترع الصغير من المركز القومي لثقافة الطفل، وفقًا لما ورد في سيرتي.' },
      { year: '٢٠١٩–٢٠٢٠', title: 'العلم خارج الفصل الدراسي', text: 'المشاركة في معارض القاهرة للعلوم والهندسة، وعرض الأفكار وتبادل المعرفة مع مبتكرين صغار آخرين.' },
      { year: '٢٠٢١', title: 'إنجازات على مستويات متعددة', text: 'المركز الأول على مستوى الإدارة والمديرية التعليمية، ثم المركز الثالث على مستوى الجمهورية في مسابقة المخترع الصغير.' },
      { year: 'اليوم', title: 'بناء أساس هندسي', text: 'دراسة هندسة الميكاترونكس، مع استمرار اهتمامي بتحويل الاختراعات إلى منتجات عملية.' },
    ] },
    awards: { eyebrow: 'تكريم أعتز به', title: 'الجوائز والتكريم', intro: 'مجموعة مختارة من الشهادات الأصلية لمسابقات الاختراع ومعارض العلوم والهندسة.', view: 'عرض الشهادة', newTab: 'يفتح ملف الشهادة الأصلي في علامة تبويب جديدة', entries: [
      { file: 'young-inventor-national', title: 'المخترع الصغير · الثالث على الجمهورية', issuer: 'إدارة القاهرة الجديدة التعليمية', year: '٢٠٢١' },
      { file: 'young-inventor-governorate', title: 'المخترع الصغير · الأول على المديرية', issuer: 'إدارة القاهرة الجديدة التعليمية', year: '٢٠٢١' },
      { file: 'young-inventor-district', title: 'المخترع الصغير · الأول على الإدارة', issuer: 'إدارة القاهرة الجديدة التعليمية', year: '٢٠٢١' },
      { file: 'science-fair-2020', title: 'معرض القاهرة للعلوم والهندسة', issuer: 'شهادة مشاركة', year: '٢٠٢٠' },
      { file: 'science-fair-2019', title: 'معرض القاهرة الجديدة للعلوم والهندسة', issuer: 'شهادة مشاركة', year: '٢٠١٩' },
      { file: 'egypt-innovates', title: 'التميز العلمي والابتكاري', issuer: 'مؤسسة مصر تبتكر', year: 'تكريم' },
    ] },
    next: { eyebrow: 'الخطوة القادمة', title: 'الأفكار الجيدة تنمو بالتعاون.', text: 'أتطلع للتعلم من الفرق الهندسية والتعاون مع أشخاص يساعدون على تطوير الاختراعات المدروسة وتحويلها إلى منتجات عملية.', link: 'ألقِ نظرة أخرى على مشاريعي' },
    footer: 'البداية فضول. والهدف إمكانيات جديدة.', backToTop: 'عد إلى الأعلى', description: 'تعرّف على أمير أشرف، طالب هندسة الميكاترونكس ومخترع من القاهرة. استكشف أفكاره في الإلكترونيات والتقنيات القابلة للارتداء والسيارات وإنجازاته العلمية.',
  },
}
