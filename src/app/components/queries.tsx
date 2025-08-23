import Qna from "./qna";

export default function Queries() {

    const queries = [
        {
            question: "What is Web Mantra Solutions?",
            answer: `It is a web startup that help you build your digital presence with a professional website. We specialize in creating custom websites tailored to your business needs, ensuring a seamless user experience and modern design.`
        },
        {
            question: "Why do I need a website?",
            answer: `A website is essential for establishing your online presence, showcasing your products or services, and reaching a wider audience. It acts as a digital storefront that is accessible 24/7, helping you attract and retain customers effectively.`
        },
        {
            question: "How long does it take to build a website?",
            answer: `The timeline for building a website varies based on complexity and requirements. Generally, we aim to deliver a basic website within 2-4 weeks, while more complex projects may take longer. We will provide a detailed timeline during the initial consultation.`
        },
        {
            question: "Will my website be unique?",
            answer: `Yes, we create custom websites tailored to your specific needs and preferences. Each website we build is unique, reflecting your brand identity and business goals. We do not use templates, ensuring that your website stands out from the competition.`
        }
    ]
    return(
  <>
        <div className="flex flex-col gap-14 px-16 md:px-52 py-36 w-full">

            <div className="font-primary text-5xl text-dark dark:text-light ">
                Queries
                <div className="font-secondary text-sm text-zinc-700">You got questions? We got you.</div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-12 justify-between">
                {queries.map((query, index) => (
                    <Qna key={index} question={query.question} answer={query.answer} />
                ))}
            </div>

            </div>

        </>
    )}