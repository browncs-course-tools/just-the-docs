window.onload = function () {
    tocbot.init({
	// Where to render the table of contents.
	tocSelector: '.onpage-toc',
	// Where to grab the headings to build the table of contents.
	contentSelector: '.main-content',
	// listClass: '.nav-list',
	// listItemClass: '.nav-list-item',
	// linkClass: '.nav-list-link',
	// Which headings to grab inside of the contentSelector element.
	// activeListItemClass: 'active',
	headingSelector: 'h2, h3, h4, h5, h6',
	// For headings inside relative or absolute positioned containers within content.
	hasInnerContainers: true,
    });
}
