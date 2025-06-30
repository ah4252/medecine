// تبديل الوضع بين النهاري والليلي
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    themeToggle.textContent = body.classList.contains('dark-mode')
        ? '☀️ وضع نهاري'
        : '🌙 وضع ليلي';

    // إعادة تفعيل البحث لتحديث الألوان
    const searchInput = document.getElementById('search-input');
    if (searchInput.value.trim()) {
        searchInput.dispatchEvent(new Event('input'));
    }
});

// بيانات الدروس
const coursesData = {
    1: [
        {
            title: "Anatomie",
            subLinks: [
                {
                    title: "S01",
                    url: "https://drive.google.com/drive/folders/1r0S71KRz98dfuXZwKRYsjik0vESoKRDm?usp=drive_link"
                },
                {
                    title: "S02",
                    url: "https://drive.google.com/drive/folders/1__qqv213wgSSVoAqOUYDbUCwt60zZj_K?usp=drive_link"
                }
            ]
        },
        {
            title: "Chimie",
            subLinks: [
                {
                    title: "S01",
                    url: "https://drive.google.com/drive/folders/1CJrY7fV5kHD1BGXVrRTopu7LmctcMCLp?usp=drive_link"
                },
                {
                    title: "Unite 02",
                    url: "https://drive.google.com/drive/folders/1_avkkgO-ES5SaunDZ9086ip4AhyPZpuP?usp=drive_link"
                }
            ]
        },
        {
            title: "cytologie",
            subLinks: [
                { 
                    title: "S01",
                    url: "https://drive.google.com/file/d/1wyYmcuDRMGrSp2ifLj0Tygcdo5JxJZ7_/view?usp=drive_link"
                },
                {      
                    title: "S02",
                    url: "https://drive.google.com/file/d/1f6F4SIaZskAECxDMVgz_HRNJSBJ3UAsG/view?usp=drive_link"
                }  
             ]    
        },
        {
            title: "physiologie",
            subLinks: [
                { 
                    title: "Interaction Ligand- Récepteur",
                    url: "https://drive.google.com/file/d/1dMeOmgRSFLdFRy8RcATCBPE4ZseusBKR/view?usp=drive_link"
                },
                {
                    title: "Les transports membranaires",
                    url: "https://drive.google.com/file/d/1dYK58Gbi2spK97ky94zD-_Jmsc_oXfQ8/view?usp=drive_link"
                },
                {
                    title: "Milieu Intérieur",
                    url: "https://drive.google.com/file/d/1kYU2nGZlXzJiBYzfm-6h50q5VTqK7Jz1/view?usp=drive_link"
                },
                {
                    title: "Bioénergétique",
                    url: "https://docs.google.com/presentation/d/1XTdv2_aGRQ1768KnUlyj6kolpW6iqvyj/edit?usp=drive_link&ouid=106233026404999643178&rtpof=true&sd=true"
                },
                {
                    title: "Physiologie de la membrane plasmique",
                    url: "https://drive.google.com/file/d/1_thP6_hgvvGQ_gayF6v7OuA16rTMFkME/view?usp=drive_link"
                },
                {
                    title: "Système Nerveux Autonome",
                    url: "https://docs.google.com/presentation/d/17-0msQ0idISNjAqwrn9d6nZzxKEe9a4Y/edit?usp=drive_link&ouid=106233026404999643178&rtpof=true&sd=true"
                },
                {
                    title: "Organisation du système nerveux et Transmission synaptique",
                    url: "https://drive.google.com/file/d/1jvqV9W7dt74HPmEQIGDhjdyJoULaapZe/view?usp=drive_link"
                },
                {
                    title: "Physiologie musculaire",
                    url: "https://drive.google.com/file/d/1prj5tiK4P0rXB1w3IMO9st4MfynJAW1G/view?usp=drivesdk"
                },
                {
                    title: "Ration alimentaire",
                    url: "https://drive.google.com/file/d/1N5r_vUPS9PvwFktQiBAHUO-ncV8E0ETo/view?usp=drivesdk"
                }
            ]
        },
        {
            title: "Histologie",
            subLinks: [
                { 
                    title: "Les épithéliums",
                    url: "https://drive.google.com/file/d/18rOfh9u-jAam4DmzNeLI79t6eUOP42-g/view?usp=drive_link"
                },
                {      
                    title: "Les tissus conjonctifs",
                    url: "https://drive.google.com/file/d/15SuC496z0VhsktYVTgKS0KqGGnNhDYsq/view?usp=drive_link"
                },
                {
                    title: "Tissu Nerveux",
                    url: "https://docs.google.com/presentation/d/1Mns72Nlh6pwCMeSo5GCzjrsTl3Vt723S/edit?usp=drive_link&ouid=106233026404999643178&rtpof=true&sd=true"
                }             
            ]
        },
        {
            title: "Biochimie",
            subLinks: [
                { 
                    title: "S01",
                    url: "https://drive.google.com/drive/folders/1C4Y5CKvhk0e6JRieW6tpLdlM_UCepgnE?usp=drive_link"
                },
                {      
                    title: "S02",
                    url: "https://drive.google.com/drive/folders/1_iemCqiWvlBICk4qmx7xun4avsu88-We?usp=drive_link"
                }
            ]
        },
        {
            title: "Sciences Humaines et Sociales (SSH)",
            subLinks: [
                { 
                    title: "Juste S01",
                    url: "https://drive.google.com/drive/folders/1CSSN_5C27yTZjznP9w7g1yVEWtA4jLd1?usp=drive_link"            
                } 
            ]
        },
        {
            title: "Embryologie",
            subLinks: [
                { 
                    title: "Juste S01",
                    url: "https://drive.google.com/drive/folders/1CR7rYcjoJ_BWVZHST3RSoA5GhNSoOMFi?usp=drive_link"
                }
            ]
        },
        {
            title: "Biophysique",
            subLinks: [
                { 
                    title: "S01",
                    url: "https://drive.google.com/drive/folders/1CACmLUtv2k1SAW9BSnuuhQ0Vvqa3UUNl?usp=drive_link"
                },
                {
                    title: "S02",
                    url: "https://drive.google.com/drive/folders/1_qRmAeoEG0IojG7Xe8X8DcLgx76NOkds?usp=drive_link"
                }
            ]
        },
        {
            title: "Biostatistiques",
            subLinks: [
                { 
                    title: "S01",
                    url: "https://drive.google.com/drive/folders/1C9X0D03QuRhBlOZ8nfswhHm5nw8mAMSj?usp=drive_link"
                },
                {
                    title: "S02",
                    url: "https://drive.google.com/drive/folders/1_q7eLd3-2OMKALRFhROGanTHVPNlCGNm?usp=drive_link"
                }
             ] 
        },                  
    ],
    2: [
        "Immunologie Fondamentale", "Génétique", "Appareil Cardio-Respiratoire",
        "Appareil Urinaire", "Appareil Digestif", "Appareil Endocrinien", "Appareil Nerveux"
    ]
};

// إظهار الدروس حسب السنة
const yearButtons = document.querySelectorAll('.year-btn');
const selectedYearTitle = document.getElementById('selected-year-title');
const coursesList = document.getElementById('courses-list');
const noContentMessage = document.getElementById('no-content-message');

yearButtons.forEach(button => {
    button.addEventListener('click', () => {
        const year = button.dataset.year;
        selectedYearTitle.textContent = `Les cours de la ${year}ème année`;

        coursesList.innerHTML = '';
        noContentMessage.textContent = '';

        if (coursesData[year]) {
            coursesData[year].forEach(course => {
                const listItem = document.createElement('li');

                if (typeof course === 'string') {
                    listItem.textContent = course;
                } else {
                    listItem.textContent = course.title;
                    listItem.classList.add('has-sublinks');

                    const subList = document.createElement('ul');
                    subList.classList.add('sublinks-list');
                    subList.style.display = 'none';

                    course.subLinks.forEach(link => {
                        const subItem = document.createElement('li');
                        const linkElement = document.createElement('a');
                        linkElement.href = link.url;
                        linkElement.target = "_blank";
                        linkElement.textContent = link.title;
                        subItem.appendChild(linkElement);
                        subList.appendChild(subItem);
                    });

                    listItem.appendChild(subList);

                    listItem.addEventListener('click', (e) => {
                        e.stopPropagation();
                        const currentlyVisible = subList.style.display === 'block';
                        document.querySelectorAll('.sublinks-list').forEach(ul => ul.style.display = 'none');
                        subList.style.display = currentlyVisible ? 'none' : 'block';
                    });

                    document.addEventListener('click', () => {
                        subList.style.display = 'none';
                    });

                    subList.addEventListener('click', (e) => {
                        e.stopPropagation();
                    });
                }

                coursesList.appendChild(listItem);
            });
        } else {
            noContentMessage.textContent = 'لا يوجد محتوى بعد 😁👍';
        }
    });
});

// البحث
const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');

const allCourses = Object.values(coursesData).flat().flatMap(course => {
    if (typeof course === 'string') return [course];
    return [course.title, ...course.subLinks.map(sub => sub.title)];
});

searchInput.addEventListener('input', () => {
    const query = searchInput.value.trim().toLowerCase();
    searchResults.innerHTML = '';
    if (!query) return;

    const filtered = allCourses.filter(title => title.toLowerCase().includes(query));
    if (filtered.length > 0) {
        filtered.forEach(title => {
            const item = document.createElement('div');
            item.textContent = title;
            item.classList.add('search-result-item');
            item.addEventListener('click', () => {
                searchInput.value = title;
                searchResults.innerHTML = '';
            });
            searchResults.appendChild(item);
        });
    } else {
        const noResult = document.createElement('div');
        noResult.textContent = 'لم يتم العثور على نتائج.';
        noResult.classList.add('search-result-item');
        searchResults.appendChild(noResult);
    }
});

document.addEventListener('click', e => {
    if (!searchInput.contains(e.target)) {
        searchResults.innerHTML = '';
    }
});
