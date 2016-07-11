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

class Position implements \Magento\Framework\Option\ArrayInterface
{
    /**
     * Prepares custom values.
     *
     * @return array
     */
    public function toOptionArray()
    {
        return [
            ['value' => 'left', 'label' => __('Left')],
            ['value' => 'right', 'label' => __('Right')],
        ];
    }
}
