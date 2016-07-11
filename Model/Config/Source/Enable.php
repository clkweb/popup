<?php
/**
 * @author     Clkweb
 * @package    Ckweb_Popup
 * @copyright Copyright (c) 2015 Clkweb (https://www.clkweb.dk)
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
namespace Clkweb\Popup\Model\Config\Source;

class Enable implements \Magento\Framework\Option\ArrayInterface
{
    /**
     * Prepares custom values.
     *
     * @return array
     */
    public function toOptionArray()
    {
        return [
            ['value' => 1, 'label' => __('Enable')],
            ['value' => 0, 'label' => __('Disable')],
        ];
    }
}
