
  const heading = document.getElementById("rotating-text");
  const dots = document.querySelectorAll(".dot");

  const textOptions = [
    {
      bold: "Personalized One-to-One",
      span: "Tutoring at Our Center"
    },
    {
      bold: "Individual Tution,",
      span: "For all students till 12th grade!"
    },
    {
      bold: "Master IELTS, TOEFL, and",
      span: "Beyond with Expert Guidance!"
    }
  ];

  heading.style.transition = 'transform 0.5s ease-in-out';

  

  let index = 0;

  setInterval(() => {
    index = (index + 1) % textOptions.length;
    heading.innerHTML = `
      <b class="fw-800">${textOptions[index].bold}</b><br />
      <span class="text-highlight fw-normal">${textOptions[index].span}</span>
    `;
    dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === index);
      });
  }, 3000);


  const track = document.getElementById('sliderTrack');
  const totalImages = track.children.length;
  const visibleCount = 3;
  let curriculumindex = 0;

  setInterval(() => {
    curriculumindex++;

    if (curriculumindex > totalImages - visibleCount) {
      track.style.transition = 'none';
      track.style.transform = 'translateX(0)';
      curriculumindex = 1;
      void track.offsetWidth;

      track.style.transition = 'transform 0.5s ease-in-out';
      track.style.transform = `translateX(-${curriculumindex * 150}px)`;
    } else {
      track.style.transition = 'transform 0.5s ease-in-out';
      track.style.transform = `translateX(-${curriculumindex * 150}px)`;
    }
  }, 2000);
