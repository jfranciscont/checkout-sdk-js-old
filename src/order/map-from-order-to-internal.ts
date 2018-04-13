import { mapToInternalLineItems } from '../cart';
import { mapToInternalCoupon } from '../coupon';

import InternalOrder from './internal-order';
import Order from './order';

export default function mapFromOrderToInternal(order: Order, fallbackOrder: InternalOrder): InternalOrder {
    return {
        id: order.orderId,
        orderId: order.orderId,
        items: mapToInternalLineItems(order.lineItems, fallbackOrder.items, 'productId'),
        currency: order.currency.code,
        customerCanBeCreated: fallbackOrder.customerCanBeCreated,
        token: fallbackOrder.token,
        payment: fallbackOrder.payment,
        socialData: fallbackOrder.socialData,
        customerCreated: order.customerCreated,
        hasDigitalItems: order.hasDigitalItems,
        isDownloadable: order.isDownloadable,
        isComplete: order.isComplete,
        callbackUrl: fallbackOrder.callbackUrl,
        status: fallbackOrder.status,
        subtotal: {
            amount: fallbackOrder.subtotal.amount,
            integerAmount: fallbackOrder.subtotal.integerAmount,
        },
        coupon: {
            discountedAmount: fallbackOrder.coupon.discountedAmount,
            coupons: order.coupons.map(mapToInternalCoupon),
        },
        discount: {
            amount: order.discountAmount,
            integerAmount: fallbackOrder.discount.integerAmount,
        },
        discountNotifications: fallbackOrder.discountNotifications,
        giftCertificate: {
            totalDiscountedAmount: fallbackOrder.giftCertificate.totalDiscountedAmount,
            appliedGiftCertificates: fallbackOrder.giftCertificate.appliedGiftCertificates,
        },
        shipping: {
            amount: fallbackOrder.shipping.amount,
            integerAmount: fallbackOrder.shipping.integerAmount,
            amountBeforeDiscount: fallbackOrder.shipping.amountBeforeDiscount,
            integerAmountBeforeDiscount: fallbackOrder.shipping.integerAmountBeforeDiscount,
            required: fallbackOrder.shipping.required,
        },
        storeCredit: {
            amount: fallbackOrder.storeCredit.amount,
        },
        taxSubtotal: fallbackOrder.taxSubtotal,
        taxes: fallbackOrder.taxes,
        taxTotal: {
            amount: fallbackOrder.taxTotal.amount,
            integerAmount: fallbackOrder.taxTotal.integerAmount,
        },
        handling: {
            amount: fallbackOrder.handling.amount,
            integerAmount: fallbackOrder.handling.integerAmount,
        },
        grandTotal: {
            amount: order.orderAmount,
            integerAmount: fallbackOrder.grandTotal.integerAmount,
        },
    };
}