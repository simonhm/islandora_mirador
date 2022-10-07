<?php

namespace Drupal\islandora_mirador;

/**
 * Interface for islandora_mirador plugins.
 */
interface IslandoraMiradorPluginInterface {

  /**
   * Returns the translated plugin label.
   *
   * @return string
   *   The translated title.
   */
  public function label();

}
