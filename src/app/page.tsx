import Navbar from "../../components/navbar";
import Head from "next/head";
import Footer from "../../components/fotter";
import PopupWidget from "../../components/popupWidget";
import SectionTitle from "../../components/sectionTitle";
import Benefits from "../../components/benefits";
import { benefitOne, benefitTwo } from "../../components/data";
import Testimonials from "../../components/testimonials";
import Cta from "../../components/cta";
import Faq from "../../components/faq";
import Hero from "../../components/hero";
import Video from "../../components/video";


export default function Page() {

    return (
     <>
       <Head>
        <title>Berternak Yuk - Free Nextjs & TailwindCSS Landing Page Template</title>
        <meta
          name="description"
          content="Berternak.com is a free landing page template built with next.js & Tailwind CSS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <Navbar/>
      <Hero />
      <SectionTitle
        pretitle="Berternak Yuk"
        title=" Why should you use Berternak Yuk">
        Berternak.com is a free landing page & marketing website template for startups
        and indie projects. Its built with Next.js & TailwindCSS. And its
        completely open-source.
      </SectionTitle>
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      <SectionTitle
        pretitle="Watch a video"
        title="Learn how to fullfil your needs">
        This section is to highlight a promo or demo video of your product.
        Analysts says a landing page with video has 3% more conversion rate. So,
        don&apos;t forget to add one. Just like this.
      </SectionTitle>
      <Video />
      <SectionTitle
        pretitle="Testimonials"
        title="Here's what our customers said">
        Testimonails is a great way to increase the brand trust and awareness.
        Use this section to highlight your popular customers.
      </SectionTitle>
      <Testimonials />
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle>
      <Faq />
      <Cta />
      <Footer />
      <PopupWidget />
     </>
    )
  
}