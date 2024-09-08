"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function Faq() {
  return (
    <div className="w-full flex flex-col justify-center items-center p-14">
      <div className="w-full flex flex-col justify-start items-start">
        <h2 className="text-base font-bold mb-2 text-slate-400">FAQs</h2>
        <h1 className="text-7xl font-bold mb-8">Questions → Answers</h1>
      </div>

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-left">
            How does the money-back guarantee work?
          </AccordionTrigger>
          <AccordionContent>
            Our money-back guarantee ensures your satisfaction. If youre not
            happy with our service within 30 days of purchase, well provide a
            full refund, no questions asked.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-left">
            Do you provide on-going support?
          </AccordionTrigger>
          <AccordionContent>
            Yes, we offer continuous support for all our clients. Our dedicated
            support team is available via email and live chat during business
            hours to address any questions or concerns you may have.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-left">
            I already have the designs, can you develop them?
          </AccordionTrigger>
          <AccordionContent>
            Were happy to work with your existing designs. Our development team
            can take your designs and turn them into fully functional websites
            or applications, ensuring they match your vision perfectly.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="text-left">
            What if I dont like the designs?
          </AccordionTrigger>
          <AccordionContent>
            We value your satisfaction and offer revision options. If youre not
            happy with the initial designs, well work closely with you to
            understand your preferences and make necessary adjustments until
            youre completely satisfied with the result.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger className="text-left">
            What if I want to work with someone else after the website is built?
          </AccordionTrigger>
          <AccordionContent>
            While we hope youll continue to work with us, we understand that
            circumstances may change. We provide all necessary documentation and
            access to your websites codebase, making it easy for you or another
            developer to take over the project if needed.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
