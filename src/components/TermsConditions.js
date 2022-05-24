import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

const TermsConditions = () => {
    return (
        <>
            <div className="mt-[60px] px-[16px] py-[30px] md:py-[56px] text-center">
                <h1 className="text-[30px] md:text-[36px]">Terms & Conditions</h1>
                <div className="flex items-center justify-center">
                    <Link to="/" className="px-[16px] py-[8px] text-[.9rem]">Home</Link>
                    <FontAwesomeIcon icon={faAngleRight} className="text-[10px]" />
                    <span className="p-[16px] text-[.9rem]">Terms & Conditions</span>
                </div>
            </div>
            <div className="w-full md:max-w-[1200px] mx-auto px-[20px] pb-[64px] align-start">
                <p className="my-[0.75rem] text-[1rem] leading-[1.75rem] font-[900]">Returns</p>
                <p className="my-[0.75rem] text-[1rem] leading-[1.75rem]">We do not accept refunds/exchanges on products that are considered undergarments/swimwear for hygiene reasons.</p>
                <p className="my-[0.75rem] text-[1rem] leading-[1.75rem]">For non-swimwear items, our policy lasts 10 days. If 10 days have gone by since receiving your purchase, unfortunately we can’t offer you a refund or exchange.</p>
                <p className="my-[0.75rem] text-[1rem] leading-[1.75rem]">To be eligible for a return, your item must be unused and in the same condition that you received it. It must also be in the original packaging.</p>
                <p className="my-[0.75rem] text-[1rem] leading-[1.75rem]">To complete your return, we require a receipt or proof of purchase and items to be in its original packaging and condition.</p>
                <p className="my-[0.75rem] text-[1rem] leading-[1.75rem] font-[900]">Refunds</p>
                <p className="my-[0.75rem] text-[1rem] leading-[1.75rem]">Once your return is received and inspected, we will send you an email to notify you that we have received your returned item. We will also notify you of the approval or rejection of your refund.</p>
                <p className="my-[0.75rem] text-[1rem] leading-[1.75rem]">If you are approved, then your refund will be processed, and a credit will automatically be applied to your credit card or original method of payment, within a certain amount of days.</p>
                <p className="my-[0.75rem] text-[1rem] leading-[1.75rem] font-[900]">Late or missing refunds</p>
                <p className="my-[0.75rem] text-[1rem] leading-[1.75rem]">If you haven’t received a refund yet, first check your bank account again.</p>
                <p className="my-[0.75rem] text-[1rem] leading-[1.75rem]">Then contact your credit card company, it may take some time before your refund is officially posted.</p>
                <p className="my-[0.75rem] text-[1rem] leading-[1.75rem]">If you still have not received your refund yet, please email or contact us through live chat.</p>
                <p className="my-[0.75rem] text-[1rem] leading-[1.75rem] font-[900]">Sale items</p>
                <p className="my-[0.75rem] text-[1rem] leading-[1.75rem]">Only regular priced items may be refunded, unfortunately sale items cannot be refunded.</p>
                <p className="my-[0.75rem] text-[1rem] leading-[1.75rem] font-[900]">Gifts</p>
                <p className="my-[0.75rem] text-[1rem] leading-[1.75rem]">If the item was marked as a gift when purchased and shipped directly to you, you’ll receive a gift credit for the value of your return. Once the returned item is received, a gift certificate will be mailed to you.</p>
                <p className="my-[0.75rem] text-[1rem] leading-[1.75rem]">If the item wasn’t marked as a gift when purchased, or the gift giver had the order shipped to themselves to give to you later, we will send a refund to the gift giver and he will find out about your return.</p>
                <p className="my-[0.75rem] text-[1rem] leading-[1.75rem] font-[900]">Shipping</p>
                <p className="my-[0.75rem] text-[1rem] leading-[1.75rem]">To arrange the return shipment your product, please contact us and we will email you with the instructions.</p>
                <p className="my-[0.75rem] text-[1rem] leading-[1.75rem]">You will be responsible for paying for your own shipping costs for returning your item. Shipping costs are non-refundable. If you receive a refund, the cost of return shipping will be deducted from your refund.</p>
                <p className="my-[0.75rem] text-[1rem] leading-[1.75rem]">Depending on where you live, the time it may take for your exchanged product to reach you, may vary.</p>
                <p className="my-[0.75rem] text-[1rem] leading-[1.75rem]">If you are shipping an item over $100, you should consider using a trackable shipping service or purchasing shipping insurance. We don’t guarantee that we will receive your returned item.</p>
                <p className="my-[0.75rem] text-[1rem] leading-[1.75rem]">&nbsp;</p>
                <p className="my-[0.75rem] text-[1rem] leading-[1.75rem]">If you are having difficulty viewing, navigating, or browsing content on our website or mobile app; or notice any content, feature, or function that you believe is not fully accessible to people who are differently abled, please email us through the contact page below. </p>
                <p className="my-[0.75rem] text-[1rem] leading-[1.75rem]">Please write “Accessibility barriers” as the subject line so that we could address the issue as soon as possible. A description of the specific feature you feel is an accessibility barrier and/or a suggestion for improvement would be greatly appreciated. We are committed to creating an accessible and user-friendly experience. Your feedback is invaluable to us and will also be used to improve our efforts to accommodate the full scope of abilities.</p>
            </div>
        </>
    )
}

export default TermsConditions