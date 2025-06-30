function loadViz(id, width, height) {
    const divElement = document.getElementById(id);
    const vizElement = divElement.getElementsByTagName('object')[0];
    vizElement.style.width = width;
    vizElement.style.height = height;
    const scriptElement = document.createElement('script');
    scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
    vizElement.parentNode.insertBefore(scriptElement, vizElement);
}

window.onload = function () {
    loadViz('vizDashboard', '100%', '900px');
    loadViz('vizStory', '100%', '900px');
};
