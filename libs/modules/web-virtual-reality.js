import variables from './variables';

const webVirtualReality = document.querySelector('#web-virtual-reality');

const webVirtualRealityStructure = `
  <div class="container">
    <div class="row">
      <div class="page-title">
        <h1 class="title">Web Virtual Reality</h1>
      </div>
      <div class="content">
        <div class="page-description">
          <p class="description">In your phone, tilt or tap and drag to see around the pictures. In your computer, click and drag on any picture to move around.</p>
        </div>
        <div class="web-virtual-reality"></div>
      </div>
    </div>
  </div>
`;

if (webVirtualReality) {
  webVirtualReality.innerHTML = webVirtualRealityStructure;

  const webVirtualRealityClass =  document.querySelector('.web-virtual-reality');

  const webVirtualRealityItems =  variables.webVirtualReality;

  let webVirtualRealityItem = '';

  for (let i in webVirtualRealityItems) {
    webVirtualRealityItem += `
      <div class="web-virtual-reality-item">
        <div class="item-image">
          <iframe width="100%" height="100%" allowfullscreen="yes" scrolling="no" allowvr="yes" src="./web-virtual-reality/${webVirtualRealityItems[i].url}.html" frameborder="0"></iframe>
        </div>
        <div class="item-title">
          <h2 class="title">${webVirtualRealityItems[i].name}</h2>
        </div>
      </div>
    `;
  }
  webVirtualRealityClass.innerHTML = webVirtualRealityItem;
}