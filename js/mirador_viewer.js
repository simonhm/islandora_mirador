/*jslint browser: true, esversion: 6 */
/*global Mirador, Drupal, once*/
/**
 * @file
 * Displays Mirador viewer.
 */
(function (Drupal, once) {
    'use strict';

    /**
     * Initialize the Mirador Viewer.
     */
    Drupal.behaviors.Mirador = {
        attach: function (context, settings) {
            Drupal.IslandoraMirador.instances = Drupal.IslandoraMirador.instances  || {}
            Object.entries(settings.mirador.viewers).forEach(entry => {
              const [viewerId, settings] = entry;
              once('mirador-viewer', viewerId, context).forEach(() =>
                // save the mirador instance so other modules can interact
                // with the store/actions at e.g. drupalSettings.mirador.instances["#mirador-xyz"].store
                settings.mirador.instances[viewerId] = Mirador.viewer(settings, window.miradorPlugins || {})
              );
            });
        },
        detach: function (context, settings) {
            Object.entries(settings.mirador.viewers).forEach(entry => {
              const [base, ] = entry;
              once.remove('mirador-viewer', base, context);
            });
        }
    };

})(Drupal, once);
