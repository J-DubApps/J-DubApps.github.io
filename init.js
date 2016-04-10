(function() {
    var handlers = {
        load: function() {
            // Remove "loading" class once the page has fully loaded.
            document.body.className = '';
        },
        touchmove: function() {
            // Prevent scrolling on touch.
            return false;
        },
        orientationchange: function() {
            // Fix scroll position on orientation change.
            document.body.scrollTop = 0;
        }
    };

    for (var type in handlers)
        window.addEventListener(type, handlers[type], false);
})();

