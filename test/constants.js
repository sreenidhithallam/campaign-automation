const selectors = {
    'acceptButton': 'button=Accept',
    'electric': '//*[@id="site-nav-cars-menu-section-tab-0"]',
    'electricDiv': '//*[@id="site-nav-cars-menu-section-panel-0"]/div',
    'hybrids': '//*[@id="site-nav-cars-menu-section-tab-1"]',
    'hybridsDiv': '//*[@id="site-nav-cars-menu-section-panel-1"]/div',
    'mildHybrids': '//*[@id="site-nav-cars-menu-section-tab-2"]',
    'mildHybridsDiv': '//*[@id="site-nav-cars-menu-section-panel-2"]/div',
    'carsMenu': '//*[@id="nav:topNavCarMenu"]/em',
};
const url = 'https://www.volvocars.com/intl/v/car-safety/a-million-more';
const expectedOutput = {
    'menuButton': 'Our Cars',
    'electric': 'CROSSOVER\nC40 Recharge\nSUVS\nXC40 Recharge',
    url,
    'hybrids': 'SUVS\nXC90 Recharge\nXC60 Recharge\nXC40 Recharge\nESTATES\nV90 Recharge\nV60 Recharge\nSEDANS\nS90 Recharge\nS60 Recharge',
    'mildHybrids': 'SUVS\nXC90\nXC60\nXC40\nESTATES\nV90\nV60\nSEDANS\nS90\nS60',
    'title': 'A million more | Volvo Cars - International',
};

module.exports = {
    expectedOutput,
    selectors,
    url,
};