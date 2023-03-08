// Javascript for header
const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobileMenu = document.querySelector('.header .nav-bar .nav-list ul');
const menuItem = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');

  mobileMenu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  if (scrollPosition > 250) {
    header.style.backgroundColor = '#29323c';
  } else {
    header.style.backgroundColor = 'transparent';
  }
});

menuItem.forEach((item) => {
  item.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
  });
});

// Javascript for Slides
const slideIndex = [1, 1];
const slideId = ['mySlides1', 'mySlides2'];
showSlides(1, 0);
showSlides(1, 1);

function plusSlides(n, no) {
  showSlides((slideIndex[no] += n), no);
}

function showSlides(n, no) {
  let i;
  let x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {
    slideIndex[no] = 1;
  }
  if (n < 1) {
    slideIndex[no] = x.length;
  }

  for (i = 0; i < x.length; i++) {
    x[i].style.display = 'none';
  }
  x[slideIndex[no] - 1].style.display = 'block';
}

// set the dimensions and margins of the graph
const width = 450;
const height = 450;
const margin = 40;

// The radius of the pieplot is half the width or half the height (smallest one). I subtract a bit of margin.
const radius = Math.min(width, height) / 2 - margin

// append the svg object to the div called 'my_dataviz'
const svg = d3.select('#my_dataviz')
  .append("svg")
    .attr("width", width)
    .attr("height", height)
  .append("g")
    .attr("transform", `translate(${width / 2},${height / 2})`);

// Create dummy data
const data = { Argentine: 139, Australian: 56, Austrian: 243, Belgian: 89, Brazillian: 155,
  British: 835, Canadian:196, Chilean: 61, Chinese: 81, Colombian: 42, Croatian: 25,
  Cuban: 58, Czech:83, Danish: 119, Dutch: 265, Finnish:60, French: 839, German: 930, Hungarian:52, 
  Indian: 28, Irish:19, Israeli: 75, Italian:531, Japanese: 598, Korean: 35, Mexican:128, Norwegian:49, 
  Peruvian:34, Polish: 125, Russian: 188, Scottish: 28, SAfrican: 69, Spanish: 153, Swedish: 130, Swiss: 280,
  Turkish: 26, Venezuelan:41,Yugoslav: 41}

// set the color scale
const color = d3.scaleOrdinal()
  .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"])

// Compute the position of each group on the pie:
const pie = d3.pie()
  .value(d=>d[1])

const data_ready = pie(Object.entries(data))

// Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
svg
  .selectAll('whatever')
  .data(data_ready)
  .join('path')
  .attr('d', d3.arc()
    .innerRadius(100)         // This is the size of the donut hole
    .outerRadius(radius))
  .attr('fill', d => color(d.data[0]))
  .attr('stroke', 'black')
  .style('stroke-width', '2px')
  .style('opacity', 0.7);

var labels = svg.selectAll('path').insert("text").data(pie(data))
       .text( function (d) { return d.value; })
       .attr("font-family", "sans-serif")
       .attr('x', 0)           
       .attr('y', 0)
       .attr("font-size", "12px")
       .attr("fill", "red")


       const barMargin = {top: 30, right: 30, bottom: 70, left: 60},
       barWidth = 460 - margin.left - margin.right,
       barHeight = 400 - margin.top - margin.bottom;