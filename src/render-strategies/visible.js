export const RenderStrategyVisible = {
    init: function() { },

    onElAvailable: function(el) {
        const scene = document.querySelector('a-scene');
        if (!scene.contains(el)) {
            scene.appendChild(el);
        }

        el.setAttribute('visible', false);
    },

    onEnter: function(el) {
        el.setAttribute('visible', true);
        return el;
    },

    onExit: function(el) {
        el.setAttribute('visible', false);
    }
}