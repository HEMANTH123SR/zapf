// "use client";

// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion";

// export function Faq() {
//   return (
//     <div className="w-full flex flex-col justify-center items-center p-14">
//       <div className="w-full flex flex-col justify-start items-start">
//         <h2 className="text-base font-bold mb-2 text-slate-400">FAQs</h2>
//         <h1 className="text-7xl font-bold mb-8">Questions → Answers</h1>
//       </div>

//       <Accordion type="single" collapsible className="w-full">
//         <AccordionItem value="item-1">
//           <AccordionTrigger className="text-left">
//             How does the money-back guarantee work?
//           </AccordionTrigger>
//           <AccordionContent>
//             Our money-back guarantee ensures your satisfaction. If youre not
//             happy with our service within 30 days of purchase, well provide a
//             full refund, no questions asked.
//           </AccordionContent>
//         </AccordionItem>
//         <AccordionItem value="item-2">
//           <AccordionTrigger className="text-left">
//             Do you provide on-going support?
//           </AccordionTrigger>
//           <AccordionContent>
//             Yes, we offer continuous support for all our clients. Our dedicated
//             support team is available via email and live chat during business
//             hours to address any questions or concerns you may have.
//           </AccordionContent>
//         </AccordionItem>
//         <AccordionItem value="item-3">
//           <AccordionTrigger className="text-left">
//             I already have the designs, can you develop them?
//           </AccordionTrigger>
//           <AccordionContent>
//             Were happy to work with your existing designs. Our development team
//             can take your designs and turn them into fully functional websites
//             or applications, ensuring they match your vision perfectly.
//           </AccordionContent>
//         </AccordionItem>
//         <AccordionItem value="item-4">
//           <AccordionTrigger className="text-left">
//             What if I dont like the designs?
//           </AccordionTrigger>
//           <AccordionContent>
//             We value your satisfaction and offer revision options. If youre not
//             happy with the initial designs, well work closely with you to
//             understand your preferences and make necessary adjustments until
//             youre completely satisfied with the result.
//           </AccordionContent>
//         </AccordionItem>
//         <AccordionItem value="item-5">
//           <AccordionTrigger className="text-left">
//             What if I want to work with someone else after the website is built?
//           </AccordionTrigger>
//           <AccordionContent>
//             While we hope youll continue to work with us, we understand that
//             circumstances may change. We provide all necessary documentation and
//             access to your websites codebase, making it easy for you or another
//             developer to take over the project if needed.
//           </AccordionContent>
//         </AccordionItem>
//       </Accordion>
//     </div>
//   );
// }

"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function Faq() {
  return (
    <div className="w-full flex flex-col justify-center items-center p-14 lowercase">
      <div className="w-full flex flex-col justify-start items-start px-2.5">
        {/* <h2 className="text-sm ml-3 mb-2 text-slate-400">FAQs</h2> */}
        <h3 className="text-[3.2rem] sm:text-[3.8rem] md:text-[4.5rem] lg:text-[5.4rem] xl:text-8xl text-center  ">
          Questions → Answers
        </h3>
      </div>

      <Accordion type="single" collapsible className="w-full ">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-left">
            What is Zapfolio?
          </AccordionTrigger>
          <AccordionContent>
            Zapfolio is a no-code platform that transforms LinkedIn profiles
            into personalized portfolio websites and resumes in minutes.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-left">
            What features does Zapfolio offer?
          </AccordionTrigger>
          <AccordionContent>
            Zapfolio provides custom templates, resume-building tools, ATS
            (Applicant Tracking System) support, and a Zappy AI chatbot to
            enhance user experience and productivity.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-left">
            Is there a free trial?
          </AccordionTrigger>
          <AccordionContent>
            {`Yes, we plan to offer a free trial for new users to explore
            Zapfolio's features. Stay tuned for details!`}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="text-left">
            How do I get started?
          </AccordionTrigger>
          <AccordionContent>
            Visit https://zapfolio.in and sign up for an account. Our easy
            onboarding process will help you set up quickly.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger className="text-left">
            When is the beta version launching?
          </AccordionTrigger>
          <AccordionContent>
            We’re working hard to launch the beta soon! Follow us for updates on
            the release date.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6">
          <AccordionTrigger className="text-left">
            How can I provide feedback?
          </AccordionTrigger>
          <AccordionContent>
            We’d love to hear from you! Reach out via our contact form on the
            website or email us at support@zapfolio.in.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
