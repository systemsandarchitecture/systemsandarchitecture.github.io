const portfolioPage = document.querySelector('#portfolio');

// portfolio structure
const portfolioStructure = `
  <div class="top-right gray"></div>
  <div class="container">
    <div class="row">
      <div class="page-title">
        <h1 class="portfolio-title"></h1>
      </div>
      <div class="content">
        <div class="portfolio"></div>
      </div>
    </div>
  </div>
`;

// insert portfolio structure in page
if (portfolioPage) {
  portfolioPage.innerHTML = portfolioStructure;
}

// porfolio title
export const portfolioTitle =  document.querySelector('.portfolio-title');

// portfolio class
export const portfolioClass = document.querySelector('.portfolio');
