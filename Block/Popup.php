<?php
/**
 * @author     Clkweb
 * @package    Ckweb_Popup
 * @copyright Copyright (c) 2015 Clkweb (https://www.clkweb.dk)
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
namespace Clkweb\Popup\Block;

class Popup extends \Magento\Framework\View\Element\Template
{
    /**
     * Get store configuration value
     *
     * @param string $configPath
     * @return mixed
     */
    public function getConfigValue($configPath)
    {
        return $this->_scopeConfig->getValue($configPath, 'store');
    }

    /**
     * Get media URL
     *
     * @return mixed
     */
    public function getMediaUrl() {
        return $this->_storeManager->getStore()->getBaseUrl(\Magento\Framework\UrlInterface::URL_TYPE_MEDIA);
    }
}
